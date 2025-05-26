import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Play, Pause, MapPin, Calendar, Clock, Users, Star, Heart, Image } from 'lucide-react';
import WelcomePage from '@/components/WelcomePage';
import PoemPage from '@/components/PoemPage';
import InvitationPage from '@/components/InvitationPage';
import SchedulePage from '@/components/SchedulePage';
import GalleryPage from '@/components/GalleryPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/music/saat-kau-telah-mengerti.mp3')); // Background music file

  const pages = [
    { component: WelcomePage, title: 'Undangan' },
    { component: PoemPage, title: 'Puisi' },
    { component: InvitationPage, title: 'Detail Acara' },
    { component: SchedulePage, title: 'Rundown' },
    { component: GalleryPage, title: 'Galeri' }
  ];

  useEffect(() => {
    audio.loop = true;
    // Auto-play audio when component mounts
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.log("Auto-play failed:", error);
        // Most browsers require user interaction before playing audio
        setIsPlaying(false);
      });
    
    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.log("Play failed:", error);
          setIsPlaying(false);
        });
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rosewood-cream via-rosewood-light to-rosewood-cream">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23591708' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Music Control */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMusic}
          variant="outline"
          size="sm"
          className="bg-white/80 backdrop-blur-sm border-rosewood-dark/20 hover:bg-rosewood-light/20 transition-all duration-300"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <Music className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="fixed left-1/2 bottom-8 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rosewood-dark/20">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-rosewood-dark scale-125' 
                  : 'bg-rosewood-dark/30 hover:bg-rosewood-dark/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <CurrentPageComponent />
        
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center p-6">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-rosewood-dark/20 hover:bg-rosewood-light/20 disabled:opacity-50 transition-all duration-300"
          >
            ← Sebelumnya
          </Button>
          
          <span className="text-rosewood-dark font-medium">
            {currentPage + 1} / {pages.length}
          </span>
          
          <Button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-rosewood-dark/20 hover:bg-rosewood-light/20 disabled:opacity-50 transition-all duration-300"
          >
            Selanjutnya →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
