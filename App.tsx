import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from './constants';
import { DayPlan, ItineraryItem, Category } from './types';
import WeatherWidget from './components/WeatherWidget';
import ExpenseTracker from './components/ExpenseTracker';
import InfoView from './components/InfoView';
import { 
  MapPin, Clock, Train, Utensils, Camera, Hotel, 
  X, Navigation, Wallet, Info, Calendar, ChevronRight
} from 'lucide-react';

// --- Utility Components ---

const CategoryIcon = ({ category }: { category: Category }) => {
  switch (category) {
    case Category.Transport: return <Train size={18} className="text-blue-500" />;
    case Category.Food: return <Utensils size={18} className="text-orange-500" />;
    case Category.Sightseeing: return <Camera size={18} className="text-emerald-500" />;
    case Category.Hotel: return <Hotel size={18} className="text-indigo-500" />;
    default: return <Info size={18} className="text-gray-500" />;
  }
};

const Tag = ({ text }: { text: string }) => {
  const isMust = text.includes('必') || text.includes('No.1') || text.includes('限定');
  const isBooked = text.includes('預約');
  
  let bgClass = "bg-stone-100 text-stone-600";
  if (isMust) bgClass = "bg-hokkaido-accent/10 text-hokkaido-accent border border-hokkaido-accent/20";
  if (isBooked) bgClass = "bg-indigo-50 text-indigo-600 border border-indigo-100";

  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${bgClass}`}>
      {text}
    </span>
  );
};

const Modal = ({ item, onClose }: { item: ItineraryItem, onClose: () => void }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in slide-in-from-bottom duration-300">
        
        {/* Header Image or Solid Color */}
        <div className="h-32 bg-gradient-to-r from-hokkaido-blue to-indigo-100 relative shrink-0">
          {item.imageUrl && (
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover opacity-80" />
          )}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <X size={20} className="text-stone-500" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-stone-700 shadow-sm flex items-center gap-1 w-fit">
              <CategoryIcon category={item.category} />
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-display font-bold text-stone-800 mb-1">{item.title}</h2>
          {item.jpTitle && <h3 className="text-lg text-stone-400 font-display mb-4">{item.jpTitle}</h3>}

          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-stone-50 p-3 rounded-xl flex items-center gap-2">
                <Clock size={16} className="text-stone-400" />
                <span className="font-medium text-stone-700">{item.time}</span>
              </div>
              {item.cost && (
                <div className="bg-stone-50 p-3 rounded-xl flex items-center gap-2">
                  <span className="text-stone-400 font-bold">¥</span>
                  <span className="font-medium text-stone-700">{item.cost.replace(/¥/g, '')}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">簡介</h4>
              <p className="text-stone-600 leading-relaxed">{item.description}</p>
            </div>

            {/* Details List */}
            {item.details && item.details.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">詳細資訊</h4>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => {
                     const isHighlight = detail.includes('必吃') || detail.includes('必買') || detail.includes('注意');
                     return (
                        <li key={idx} className={`flex items-start gap-3 p-3 rounded-xl ${isHighlight ? 'bg-orange-50' : 'bg-stone-50'}`}>
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isHighlight ? 'bg-orange-400' : 'bg-stone-300'}`} />
                          <span className={`text-sm ${isHighlight ? 'text-stone-800 font-medium' : 'text-stone-600'}`}>{detail}</span>
                        </li>
                     );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 shrink-0">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location + ' Hokkaido')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 bg-hokkaido-text text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-stone-700 active:scale-95 transition-all"
          >
            <Navigation size={18} />
            導航前往
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

enum Tab {
  Itinerary = 'itinerary',
  Expenses = 'expenses',
  Info = 'info'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Itinerary);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);

  const currentDayPlan = ITINERARY_DATA.find(d => d.day === selectedDay) || ITINERARY_DATA[0];

  useEffect(() => {
    // Scroll to top when day changes
    window.scrollTo(0,0);
  }, [selectedDay, activeTab]);

  return (
    <div className="min-h-screen font-sans text-hokkaido-text bg-[#f0f2f5] max-w-lg mx-auto shadow-2xl border-x border-white/50 relative">
      
      {/* Header Area */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-display font-bold text-stone-800">
             {activeTab === Tab.Itinerary && "北海道之旅"}
             {activeTab === Tab.Expenses && "旅費記帳"}
             {activeTab === Tab.Info && "旅行資訊"}
          </h1>
          <div className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-1 rounded-md">2025 Dec</div>
        </div>

        {/* Day Selector (Only for Itinerary) */}
        {activeTab === Tab.Itinerary && (
          <div className="flex overflow-x-auto hide-scrollbar px-4 pb-3 gap-3 snap-x">
            {ITINERARY_DATA.map((plan) => {
              const isActive = plan.day === selectedDay;
              return (
                <button
                  key={plan.day}
                  onClick={() => setSelectedDay(plan.day)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-2xl transition-all duration-200 snap-center border ${
                    isActive 
                      ? 'bg-hokkaido-text text-white shadow-md scale-105 border-transparent' 
                      : 'bg-white text-stone-400 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-[10px] font-bold opacity-80">Day {plan.day}</span>
                  <span className="text-lg font-bold font-display">{plan.date.split('/')[1]}</span>
                  <span className="text-[10px]">{plan.weekday}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="p-4 min-h-[80vh]">
        {activeTab === Tab.Itinerary && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 pb-20">
            {/* Daily Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-stone-800 leading-tight">
                {currentDayPlan.title}
              </h2>
              <div className="flex items-center gap-1 text-stone-500 text-sm mt-1">
                <MapPin size={14} />
                {currentDayPlan.city}
              </div>
            </div>

            {/* Weather Widget */}
            <WeatherWidget lat={currentDayPlan.lat} lng={currentDayPlan.lng} city={currentDayPlan.city} />

            {/* Timeline Items */}
            <div className="space-y-4 relative pl-4 border-l-2 border-stone-200 ml-2">
              {currentDayPlan.items.map((item, idx) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedItem(item)}
                  className="relative group cursor-pointer"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[25px] top-4 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 
                    ${item.category === Category.Transport ? 'bg-blue-400' : 
                      item.category === Category.Food ? 'bg-orange-400' :
                      item.category === Category.Sightseeing ? 'bg-emerald-400' : 'bg-indigo-400'}`} 
                  />

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 transition-all active:scale-[0.98] hover:shadow-md">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-md">
                         {item.time}
                       </span>
                       <div className="flex items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                         <ChevronRight size={16} />
                       </div>
                    </div>
                    
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-stone-800 text-lg leading-snug mb-1">{item.title}</h3>
                        <p className="text-stone-500 text-sm line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      </div>
                      {/* Category Icon */}
                      <div className="bg-stone-50 p-2 rounded-xl shrink-0">
                         <CategoryIcon category={item.category} />
                      </div>
                    </div>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {item.tags.map(tag => <Tag key={tag} text={tag} />)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* End of Day Marker */}
            <div className="mt-8 text-center">
              <span className="text-xs text-stone-300 font-display tracking-widest uppercase">End of Day {selectedDay}</span>
            </div>
          </div>
        )}

        {activeTab === Tab.Expenses && (
          <div className="animate-in fade-in duration-300">
            <ExpenseTracker />
          </div>
        )}

        {activeTab === Tab.Info && (
           <div className="animate-in fade-in duration-300">
             <InfoView />
           </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t border-stone-100 pb-safe pt-2 px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-40">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => setActiveTab(Tab.Itinerary)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.Itinerary ? 'text-stone-800' : 'text-stone-400'}`}
          >
            <Calendar size={24} strokeWidth={activeTab === Tab.Itinerary ? 2.5 : 2} />
            <span className="text-[10px] font-bold">行程</span>
          </button>
          
          <button 
            onClick={() => setActiveTab(Tab.Expenses)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.Expenses ? 'text-stone-800' : 'text-stone-400'}`}
          >
            <Wallet size={24} strokeWidth={activeTab === Tab.Expenses ? 2.5 : 2} />
            <span className="text-[10px] font-bold">記帳</span>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.Info)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === Tab.Info ? 'text-stone-800' : 'text-stone-400'}`}
          >
            <Info size={24} strokeWidth={activeTab === Tab.Info ? 2.5 : 2} />
            <span className="text-[10px] font-bold">資訊</span>
          </button>
        </div>
      </nav>

      {/* Item Detail Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

    </div>
  );
};

export default App;