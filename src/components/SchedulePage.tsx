
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Music, Camera, Mic, Award, Users } from 'lucide-react';

const SchedulePage = () => {
  const scheduleItems = [
    { time: '07.30 – 08.00', activity: 'Live Performance Tim Rebana', icon: Music },
    { time: '08.00 – 08.10', activity: 'Live Performance Tari Sembah', icon: Users },
    { time: '08.10 – 08.20', activity: 'Pembukaan', icon: Mic },
    { time: '08.20 – 08.25', activity: 'Tilawah Al-Qur\'an', icon: Music },
    { time: '08.25 – 08.35', activity: 'Menyanyikan Lagu Indonesia Raya, Mars Fitrah Insani, Mars JSIT', icon: Music },
    { time: '08.35 – 08.45', activity: 'Sambutan Kepala SDIT Fitrah Insani Langkapura', icon: Mic },
    { time: '08.45 – 08.55', activity: 'Sambutan Pengawas Pembina Kec. Langkapura', icon: Mic },
    { time: '08.55 – 09.05', activity: 'Sambutan Ketua Yayasan Fitrah Insani', icon: Mic },
    { time: '09.05 – 09.20', activity: 'Uji Publik Siswa-Siswi Mutqin', icon: Award },
    { time: '09.20 – 09.30', activity: 'Sambutan Perwakilan Orang Tua', icon: Mic },
    { time: '09.30 – 09.35', activity: 'Doa dan Penutup', icon: Users },
    { time: '09.35 – 09.50', activity: 'Sesi Foto Bersama', icon: Camera },
    { time: '09.50 – 10.30', activity: 'Prosesi Pelepasan', icon: Award },
    { time: '10.30 – 10.40', activity: 'Pengumuman Prestasi Peserta Didik', icon: Award },
    { time: '10.40 – 10.50', activity: 'Penampilan Parade Sambung Ayat', icon: Music },
    { time: '10.50 – 11.05', activity: 'Menyanyikan Lagu Impian Sahabat Qur\'an dan Pemberian Mahkota', icon: Award },
    { time: '11.05 – 11.15', activity: 'Menyaksikan Video Dari Guru Untuk Siswa', icon: Camera },
    { time: '11.15 – 11.25', activity: 'Pidato Perpisahan dari Perwakilan Siswa Kelas 6', icon: Mic },
    { time: '11.25 – 11.35', activity: 'Menyanyikan Lagu "Doaku Untukmu Guru"', icon: Music },
    { time: '11.35 – 11.40', activity: 'Penutupan', icon: Users },
    { time: '11.40 – 12.00', activity: 'Sesi Foto Panitia', icon: Camera }
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-6" style={{
      backgroundImage: `url('/lovable-uploads/1c61c674-ea36-440b-9a5e-9ca749ba7725.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm border-rosewood-dark/20 shadow-2xl animate-fade-in">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rosewood-dark to-rosewood-light rounded-full flex items-center justify-center mb-4 animate-float">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-cormorant text-3xl font-bold text-rosewood-dark mb-2 animate-slide-in-left">
              Rundown Acara
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rosewood-dark to-rosewood-light mx-auto rounded-full"></div>
          </div>

          {/* Schedule */}
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2 animate-scale-in">
            {scheduleItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gradient-to-r from-rosewood-light/20 to-rosewood-cream/50 rounded-lg border border-rosewood-dark/10 hover:shadow-md transition-all duration-300 hover:scale-102"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-rosewood-dark/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-4 w-4 text-rosewood-dark" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-cormorant font-semibold text-rosewood-dark text-sm mb-1 sm:mb-0">
                        {item.time}
                      </span>
                      <span className="font-raleway text-rosewood-dark text-sm leading-relaxed">
                        {item.activity}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location Note */}
          <div className="mt-6 text-center p-4 bg-rosewood-dark/10 rounded-lg">
            <p className="font-raleway text-sm text-rosewood-dark">
              <strong>Lokasi:</strong> Gedung Aula Lt. 3 Universitas Saburai, Bandar Lampung
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchedulePage;
