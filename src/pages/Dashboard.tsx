import React, { useEffect, useState } from 'react';
import { Users, Calendar, Package, DollarSign } from 'lucide-react';
import PrayerCard from '../components/PrayerCard';
import StatsCard from '../components/StatsCard';
import { PrayerTime } from '../types';

const Dashboard = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime>({
    fajr: '05:30',
    sunrise: '06:45',
    dhuhr: '12:30',
    asr: '15:45',
    maghrib: '18:15',
    isha: '19:30'
  });

  useEffect(() => {
    // In a real app, we would fetch prayer times from the Aladhan API here
    // For demo purposes, we're using static times
  }, []);

  const stats = [
    { title: 'Total Members', value: '250', icon: Users, trend: { value: 12, isPositive: true } },
    { title: 'Monthly Events', value: '15', icon: Calendar },
    { title: 'Total Assets', value: '120', icon: Package },
    { title: 'Monthly Donations', value: '$5,240', icon: DollarSign, trend: { value: 8, isPositive: true } },
  ];

  return (
    <div className="p-6 ml-64">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="mb-8">
        <PrayerCard prayerTimes={prayerTimes} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          {/* Event list would go here */}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
          {/* Donations list would go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;