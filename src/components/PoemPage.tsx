
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BookOpen } from 'lucide-react';

const PoemPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-6" style={{
      backgroundImage: `url('/lovable-uploads/1c61c674-ea36-440b-9a5e-9ca749ba7725.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm border-rosewood-dark/20 shadow-2xl animate-fade-in">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rosewood-dark to-rosewood-light rounded-full flex items-center justify-center mb-4 animate-float">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-cormorant text-3xl font-bold text-rosewood-dark mb-2 animate-slide-in-left">
              "Sekolahku"
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rosewood-dark to-rosewood-light mx-auto rounded-full"></div>
          </div>

          {/* Poem Content */}
          <div className="prose prose-lg max-w-none text-center animate-scale-in">
            <div className="font-raleway text-rosewood-dark leading-relaxed space-y-4">
              <p className="text-lg">
                Kubuat sebuah puisi sederhana untukmu<br />
                Tempatku mengarungi samudra ilmu<br />
                Kupersembahkan khusus padamu<br />
                Wahai sekolahku tercinta
              </p>

              <p className="text-lg">
                Di sini aku mengenal banyak teman<br />
                Hingga menemukan sahabat tersayang<br />
                Menimba ilmu pengetahuan untuk masa depan<br />
                Semuanya menjadi satu di sini<br />
                Di sekolahku ini
              </p>

              <p className="text-lg">
                Sekolah di mana aku menemukan jati diri<br />
                Agar berguna bagi bangsa dan negara<br />
                Di sekolah kutemukan ketulusan dari seorang guru<br />
                Di sekolah pula aku belajar tentang ilmu<br />
                Kubelajar indahnya kebersamaan<br />
                Diskusi dalam menyelesaikan perbedaan
              </p>

              <p className="text-lg">
                Sekolahku, semoga engkau jaya selalu<br />
                Menjadi tempat mendidik putra puteri bangsa
              </p>

              <p className="text-lg font-semibold">
                Selamat tinggal aku ucapkan<br />
                Wahai sekolahku tersayang<br />
                Kau tak pernah aku lupakan<br />
                Meski seiring perkembangan zaman
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mt-8">
            <Heart className="h-6 w-6 text-rosewood-dark animate-pulse" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PoemPage;
