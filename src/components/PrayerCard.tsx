import React from 'react';
import { Clock } from 'lucide-react';
import { format } from 'date-fns';
import { PrayerTime } from '../types';

interface PrayerCardProps {
  prayerTimes: PrayerTime;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayerTimes }) => {
  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr },
    { name: 'Sunrise', time: prayerTimes.sunrise },
    { name: 'Dhuhr', time: prayerTimes.dhuhr },
    { name: 'Asr', time: prayerTimes.asr },
    { name: 'Maghrib', time: prayerTimes.maghrib },
    { name: 'Isha', time: prayerTimes.isha },
  ];

  const currentTime = new Date();
  const currentPrayer = prayers.find(prayer => {
    const [hours, minutes] = prayer.time.split(':');
    const prayerTime = new Date();
    prayerTime.setHours(parseInt(hours), parseInt(minutes));
    return currentTime < prayerTime;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-emerald-900">Prayer Times</h2>
        <div className="flex items-center text-emerald-600">
          <Clock className="w-5 h-5 mr-2" />
          <span>{format(new Date(), 'EEEE, MMMM d')}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {prayers.map(prayer => (
          <div
            key={prayer.name}
            className={`p-4 rounded-lg ${
              currentPrayer?.name === prayer.name
                ? 'bg-emerald-100 border-2 border-emerald-500'
                : 'bg-gray-50'
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-800">{prayer.name}</h3>
            <p className="text-2xl font-bold text-emerald-600">{prayer.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerCard;