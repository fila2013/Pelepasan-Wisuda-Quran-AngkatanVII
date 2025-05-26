
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Building, Users, ExternalLink } from 'lucide-react';

const InvitationPage = () => {
  const openMap = () => {
    window.open('https://maps.app.goo.gl/xvPED6QwuTk9eZTMA', '_blank');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm border-rosewood-dark/20 shadow-2xl animate-fade-in">
        <CardContent className="p-8">
          {/* Arabic Bismillah */}
          <div className="text-center mb-8 animate-scale-in">
            <h1 className="font-amiri text-2xl text-rosewood-dark mb-6 leading-relaxed">
              بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rosewood-dark to-rosewood-light mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="font-crimson text-lg text-rosewood-dark leading-relaxed">
              <strong>Assalamualaikum Warahmatullahi Wabarakatuh</strong>
            </p>

            <p className="font-crimson text-lg text-rosewood-dark leading-relaxed">
              Dengan memanjatkan puji syukur kehadirat Allah SWT. Kami segenap keluarga besar 
              <strong> SDIT Fitrah Insani Langkapura</strong>, akan menyelenggarakan Wisuda Al-Qur'an Angkatan VII 
              dan mengundang orang tua siswa/i untuk hadir pada:
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-rosewood-light/30 rounded-lg">
                  <Calendar className="h-6 w-6 text-rosewood-dark mt-1" />
                  <div>
                    <p className="font-semibold text-rosewood-dark">Hari</p>
                    <p className="font-crimson text-rosewood-dark">Sabtu, 31 Mei 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-rosewood-light/30 rounded-lg">
                  <Clock className="h-6 w-6 text-rosewood-dark mt-1" />
                  <div>
                    <p className="font-semibold text-rosewood-dark">Waktu</p>
                    <p className="font-crimson text-rosewood-dark">Pukul 07.00 WIB s/d 12.00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-rosewood-light/30 rounded-lg">
                  <Building className="h-6 w-6 text-rosewood-dark mt-1" />
                  <div>
                    <p className="font-semibold text-rosewood-dark">Tempat</p>
                    <p className="font-crimson text-rosewood-dark">
                      Gedung Aula Lt. 3 Universitas Saburai<br />
                      Bandar Lampung
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-rosewood-light/30 rounded-lg">
                  <Users className="h-6 w-6 text-rosewood-dark mt-1" />
                  <div>
                    <p className="font-semibold text-rosewood-dark">Acara</p>
                    <p className="font-crimson text-rosewood-dark">
                      Pelepasan dan Wisuda Al-Qur'an Angkatan VII
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme */}
            <div className="text-center bg-gradient-to-r from-rosewood-dark to-rosewood-light text-white p-6 rounded-lg">
              <p className="font-playfair text-xl font-semibold mb-2">Tema</p>
              <h3 className="font-playfair text-2xl font-bold mb-2">A Journey to Remember</h3>
              <p className="font-amiri text-lg">(Al-Qur'an di Hati Lejitkan Prestasi)</p>
            </div>

            {/* Map Button */}
            <div className="text-center">
              <Button 
                onClick={openMap}
                className="bg-rosewood-dark hover:bg-rosewood-dark/80 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Lihat Lokasi di Maps
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Closing */}
            <div className="space-y-4 text-center">
              <p className="font-crimson text-lg text-rosewood-dark leading-relaxed">
                Demikian undangan ini kami sampaikan, atas perhatiannya kami ucapkan terima kasih.
              </p>
              <p className="font-crimson text-lg text-rosewood-dark font-semibold">
                Wassalamualaikum Warahmatullahi Wabarakatuh
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvitationPage;
