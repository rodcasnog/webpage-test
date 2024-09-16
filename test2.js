import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Sample image data - replace with your own images
const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spanishalanobrindle4.jpg/1024px-Spanishalanobrindle4.jpg', alt: 'Image 1', width: 400, height: 300 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Champion_Charlie_Muscles_%282%29.jpg', alt: 'Image 2', width: 300, height: 400 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Bucovina_Sheepdog.jpg', alt: 'Image 3', width: 500, height: 500 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Bouvier.JPG', alt: 'Image 4', width: 600, height: 200 },
]

export default function Component() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            style={{
              paddingBottom: `${(image.height / image.width) * 100}%`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer"
              onClick={() => setLightboxImage(image.src)}
            />
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={lightboxImage}
              alt="Lightbox image"
              layout="intrinsic"
              width={800}
              height={600}
              objectFit="contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}