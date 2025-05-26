
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Book } from 'lucide-react';

const WelcomePage = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-6" style={{
      backgroundImage: `url('/lovable-uploads/1c61c674-ea36-440b-9a5e-9ca749ba7725.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm border-rosewood-dark/20 shadow-2xl animate-fade-in">
        <CardContent className="p-8 text-center">
          {/* Islamic Ornament */}
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rosewood-dark to-rosewood-light rounded-full flex items-center justify-center animate-float">
              <Book className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-4xl font-bold text-rosewood-dark mb-2 animate-slide-in-left">
            UNDANGAN
          </h1>
          <h2 className="font-cormorant text-3xl font-semibold text-rosewood-dark mb-4 animate-slide-in-right">
            Pelepasan & Wisuda
          </h2>
          <h3 className="font-aref text-2xl text-rosewood-dark mb-6 animate-scale-in">
            Al-Qur'an Angkatan VII
          </h3>

          {/* Theme */}
          <div className="bg-gradient-to-r from-rosewood-light to-rosewood-cream p-4 rounded-lg mb-6 animate-fade-in">
            <p className="font-cormorant text-lg font-semibold text-rosewood-dark mb-2">
              DENGAN TEMA
            </p>
            <h4 className="font-cormorant text-xl font-bold text-rosewood-dark mb-2">
              A JOURNEY TO REMEMBER
            </h4>
            <p className="font-aref text-lg text-rosewood-dark">
              AL-QUR'AN DI HATI LEJITKAN PRESTASI
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-rosewood-dark">
              <Calendar className="h-5 w-5" />
              <span className="font-raleway">Sabtu, 31 Mei 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-rosewood-dark">
              <MapPin className="h-5 w-5" />
              <span className="font-raleway">Gedung Aula Lt. 3 Universitas Saburai</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-rosewood-dark">
              <Users className="h-5 w-5" />
              <span className="font-raleway">SDIT Fitrah Insani Langkapura</span>
            </div>
          </div>

          {/* Note */}
          <div className="bg-rosewood-dark/10 p-4 rounded-lg animate-scale-in">
            <p className="font-raleway text-sm text-rosewood-dark mb-2">
              <strong>Note:</strong>
            </p>
            <p className="font-raleway text-sm text-rosewood-dark mb-1">
              Undangan untuk 2 orang.
            </p>
            <p className="font-raleway text-sm text-rosewood-dark">
              Tamu undangan tidak diperkenankan membawa anak kecil diatas usia 1 tahun.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePage;
