import React from 'react';
import { Plane, Hotel, Phone, Clock, ShieldAlert } from 'lucide-react';

const InfoView: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      {/* Flights */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
        <h2 className="text-lg font-display font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Plane className="text-blue-400" /> 航班資訊
        </h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="text-xs text-blue-500 font-bold mb-1">去程 | 12/03 (三)</div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-blue-900">HKG</div>
                <div className="text-sm text-blue-700">08:45</div>
              </div>
              <div className="text-blue-300">✈</div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-900">CTS</div>
                <div className="text-sm text-blue-700">14:20</div>
              </div>
            </div>
            <div className="text-xs text-center mt-2 text-blue-600">Hong Kong Airlines HX690</div>
          </div>
          
          <div className="bg-stone-50 p-4 rounded-xl">
            <div className="text-xs text-stone-500 font-bold mb-1">回程 | 12/10 (三)</div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-stone-700">CTS</div>
                <div className="text-sm text-stone-600">16:30</div>
              </div>
              <div className="text-stone-300">✈</div>
              <div className="text-right">
                <div className="text-2xl font-bold text-stone-700">HKG</div>
                <div className="text-sm text-stone-600">21:50</div>
              </div>
            </div>
            <div className="text-xs text-center mt-2 text-stone-500">Hong Kong Airlines HX693</div>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
        <h2 className="text-lg font-display font-bold text-stone-800 mb-4 flex items-center gap-2">
          <Hotel className="text-emerald-400" /> 住宿資訊
        </h2>
        <div className="space-y-4">
          {[
            { name: 'JR Inn Hakodate', city: '函館', note: '就在JR站旁，枕頭可自選，頂樓有大浴場' },
            { name: 'Toya Nonokaze Resort', city: '洞爺湖', note: '全室湖景，頂樓無邊際溫泉，煙火景色' },
            { name: 'Dormy Inn Sapporo Annex', city: '札幌', note: '狸小路商店街內，提供免費夜鳴拉麵' }
          ].map((h, i) => (
            <div key={i} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-stone-800">{h.name}</h3>
                <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">{h.city}</span>
              </div>
              <p className="text-sm text-stone-500 mt-1 leading-relaxed">{h.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-red-50 rounded-2xl p-5 shadow-sm border border-red-100">
        <h2 className="text-lg font-display font-bold text-red-800 mb-4 flex items-center gap-2">
          <ShieldAlert className="text-red-500" /> 緊急聯絡
        </h2>
        <div className="space-y-3">
          <a href="tel:110" className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">110</div>
            <div>
              <div className="font-bold text-stone-800">日本警察局</div>
              <div className="text-xs text-stone-500">緊急事故、報案</div>
            </div>
          </a>
           <a href="tel:119" className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">119</div>
            <div>
              <div className="font-bold text-stone-800">日本救護/火警</div>
              <div className="text-xs text-stone-500">醫療急救</div>
            </div>
          </a>
          <div className="mt-4 pt-4 border-t border-red-100">
             <div className="flex items-center gap-2 mb-2">
                <Phone size={16} className="text-red-400"/>
                <span className="font-bold text-red-900 text-sm">香港入境處求助熱線</span>
             </div>
             <p className="text-xs text-red-700 mb-1">全球免付費電話: +852 1868</p>
             <div className="flex items-center gap-1 text-xs text-red-500">
               <Clock size={12} />
               <span>24小時運作</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoView;