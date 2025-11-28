export enum Category {
  Transport = '交通',
  Food = '美食',
  Sightseeing = '景點',
  Hotel = '住宿',
  Flight = '航班'
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  jpTitle?: string;
  category: Category;
  description: string;
  location: string;
  cost?: string;
  tags?: string[]; // e.g. "必吃", "預約", "指定席"
  details?: string[]; // Detailed lines for the modal
  imageUrl?: string;
  lat?: number;
  lng?: number;
}

export interface DayPlan {
  day: number;
  date: string;
  weekday: string;
  city: string; // Used for weather
  title: string;
  items: ItineraryItem[];
  lat: number;
  lng: number;
}

export interface Expense {
  id: string;
  item: string;
  total: number;
  payer: string; // Who paid initially (optional tracking) or just split logic
  splits: {
    dad: number;
    mom: number;
    heng: number;
    yan: number;
  };
  paymentMethod: string;
}

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}
