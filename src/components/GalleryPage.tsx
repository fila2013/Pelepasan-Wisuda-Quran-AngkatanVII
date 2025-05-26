
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Camera, Heart } from 'lucide-react';
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GalleryPage = () => {
  // Predefined local images for the gallery
  const localImages = [
    '/lovable-uploads/1.JPG',
    '/lovable-uploads/2.JPG',
    '/lovable-uploads/3.JPG',
    '/lovable-uploads/4.JPG',
    '/lovable-uploads/5.JPG',
    '/lovable-uploads/6.JPG',
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div 
      className="flex-1 flex items-center justify-center p-6" 
      style={{
        backgroundImage: `url('/lovable-uploads/1c61c674-ea36-440b-9a5e-9ca749ba7725.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm border-rosewood-dark/20 shadow-2xl animate-fade-in">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rosewood-dark to-rosewood-light rounded-full flex items-center justify-center mb-4 animate-float">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-cormorant text-3xl font-bold text-rosewood-dark mb-2 animate-slide-in-left">
              Gallery Foto
            </h1>
            <p className="font-raleway text-rosewood-dark mb-4">
              Kenangan Indah Perjalanan Kami
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-rosewood-dark to-rosewood-light mx-auto rounded-full"></div>
          </div>

          {/* Gallery Section */}
          <div className="mb-8">
            <h2 className="font-cormorant text-xl font-semibold text-rosewood-dark mb-4 text-center">
              Momen Berharga Wisuda Al-Qur'an
            </h2>
            
            {/* Carousel display for mobile */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {localImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div 
                          className="aspect-square overflow-hidden rounded-lg border-2 border-rosewood-dark/10 cursor-pointer"
                          onClick={() => handleImageClick(image)}
                        >
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>

            {/* Grid display for desktop */}
            <div className="hidden md:grid grid-cols-3 gap-4 max-h-[450px] overflow-y-auto pr-2 animate-scale-in">
              {localImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group aspect-square overflow-hidden rounded-lg border-2 border-rosewood-dark/10 cursor-pointer hover:border-rosewood-dark/30 transition-all duration-300 hover:scale-105"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                        <Image className="h-4 w-4 text-rosewood-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center p-4 bg-rosewood-light/30 rounded-lg">
            <p className="font-raleway text-sm text-rosewood-dark">
              Bagikan momen-momen berharga dari acara Wisuda Al-Qur'an bersama kami
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[80vh] rounded-lg overflow-hidden animate-scale-in">
            <img 
              src={selectedImage} 
              alt="Expanded gallery image" 
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
              onClick={closeModal}
            >
              <span className="text-rosewood-dark text-xl">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
