export interface PrayerTime {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface Asset {
  id: string;
  name: string;
  category: string;
  quantity: number;
  condition: string;
  location: string;
  lastMaintenance?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: string;
  organizer: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'imam' | 'member';
  joinDate: string;
}

export interface Donation {
  id: string;
  donor: string;
  amount: number;
  type: string;
  date: string;
  purpose?: string;
}