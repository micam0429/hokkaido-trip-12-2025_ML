import { Category, DayPlan } from './types';

export const ITINERARY_DATA: DayPlan[] = [
  {
    day: 1,
    date: '12/03',
    weekday: '三',
    city: 'Hakodate',
    lat: 41.7687,
    lng: 140.7291,
    title: '抵達北海道・函館',
    items: [
      {
        id: 'd1-flight',
        time: '08:45 - 14:20',
        title: '航班 HX690',
        category: Category.Flight,
        description: 'HKG → CTS (新千歲機場)',
        location: 'New Chitose Airport',
        details: ['起飛: 08:45 HKG', '降落: 14:20 CTS']
      },
      {
        id: 'd1-transport-hakodate',
        time: '15:50',
        title: 'JR 特急北斗 18 號',
        category: Category.Transport,
        description: '南千歲 → 函館',
        location: 'Minami-Chitose Station',
        cost: '¥9,460 (指定席)',
        tags: ['最佳班次', '需預約'],
        details: [
          '最佳班次: Hokuto 18',
          '時間: 南千歲 15:50 發 → 函館 19:30 抵',
          '車費: 約 ¥9,460 (指定席) / ¥8,930 (自由席)',
          '路徑: 機場搭「快速 Airport」至「南千歲」(3分鐘) 轉乘',
          '後備: 特急北斗 20 號 (17:26 發)'
        ]
      },
      {
        id: 'd1-hotel',
        time: 'Check-in',
        title: 'JR Inn 函館',
        category: Category.Hotel,
        description: '位於函館站旁，交通極便利',
        location: 'JR Inn Hakodate',
        tags: ['住宿']
      },
      {
        id: 'd1-dinner',
        time: '晚餐',
        title: '龍鳳 大門横丁店',
        jpTitle: 'Ryuho',
        category: Category.Food,
        description: '昭和氣氛老字號拉麵',
        location: 'Daimon Yokocho',
        tags: ['必吃美食', '黃金鹽味拉麵'],
        details: [
          '位於「大門橫丁」屋台村內',
          '必吃: 黃金鹽味拉麵 (湯頭透亮雞油提味)',
          '必吃: 煎餃 (皮薄餡多)'
        ],
        imageUrl: 'https://picsum.photos/400/300?random=1'
      }
    ]
  },
  {
    day: 2,
    date: '12/04',
    weekday: '四',
    city: 'Hakodate',
    lat: 41.7687,
    lng: 140.7291,
    title: '函館經典巡禮',
    items: [
      {
        id: 'd2-breakfast',
        time: '早餐',
        title: '函館朝市 - 海真',
        jpTitle: 'Kaishin',
        category: Category.Food,
        description: '市場內的隱藏好店',
        location: 'Hakodate Morning Market',
        tags: ['烤扇貝', '生蠔'],
        details: ['必吃: 烤扇貝/活扇貝 (肉質肥厚)', '必吃: 生蠔 (厚岸產，奶香味重)']
      },
      {
        id: 'd2-transport-goryokaku',
        time: '11:00',
        title: '移動至五稜郭',
        category: Category.Transport,
        description: '函館巴士 25/33 號',
        location: 'Hakodate Station Bus Terminal',
        cost: '¥240',
        details: ['車程約 20 分鐘', '後備: 市電往湯之川方向 (¥230)']
      },
      {
        id: 'd2-spot-tower',
        time: '11:30',
        title: '五稜郭塔',
        category: Category.Sightseeing,
        description: '俯瞰星形要塞',
        location: 'Goryokaku Tower',
        tags: ['必拍'],
        details: ['新選組土方歲三最後戰場', '必登塔俯瞰星形']
      },
      {
        id: 'd2-lunch',
        time: '12:30',
        title: '村上海膽 函館本店',
        jpTitle: 'Uni Murakami',
        category: Category.Food,
        description: '無添加明礬海膽',
        location: 'Uni Murakami Hakodate',
        tags: ['生海膽丼'],
        details: ['標榜不使用明礬', '必吃: 生海膽丼 (甘甜無苦味)']
      },
      {
        id: 'd2-spot-slope',
        time: '14:00',
        title: '八幡坂',
        category: Category.Sightseeing,
        description: '通往大海的坡道',
        location: 'Hachimanzaka',
        tags: ['打卡點'],
        details: ['路面延伸至港口與摩周丸號的景色']
      },
      {
        id: 'd2-nightview',
        time: '15:00',
        title: '函館山夜景',
        category: Category.Sightseeing,
        description: '世界三大夜景',
        location: 'Mt. Hakodate Ropeway',
        cost: '¥1,800 (來回)',
        tags: ['必去', '保暖'],
        details: ['日落前抵達', '冬季山頂極冷，務必戴帽圍巾', '纜車約3分鐘']
      },
      {
        id: 'd2-dinner',
        time: '晚餐',
        title: '幸運小丑漢堡',
        jpTitle: 'Lucky Pierrot',
        category: Category.Food,
        description: '函館限定',
        location: 'Lucky Pierrot Marina',
        tags: ['No.1人氣', '中華雞腿堡'],
        details: ['必吃: 中華雞腿漢堡 (酸甜醬汁)', '必吃: 幸運薯條 (淋上肉醬起司)']
      }
    ]
  },
  {
    day: 3,
    date: '12/05',
    weekday: '五',
    city: 'Toyako',
    lat: 42.5583,
    lng: 140.8244,
    title: '洞爺湖溫泉',
    items: [
      {
        id: 'd3-breakfast',
        time: '早餐',
        title: '函館朝市',
        category: Category.Food,
        description: '專攻螃蟹料理',
        location: 'Hakodate Morning Market',
        tags: ['帝王蟹', '毛蟹'],
        details: ['建議選擇現煮螃蟹或刺身']
      },
      {
        id: 'd3-transport',
        time: '10:40',
        title: 'JR 特急北斗 7 號',
        category: Category.Transport,
        description: '函館 → 洞爺',
        location: 'Hakodate Station',
        cost: '¥5,920',
        tags: ['指定席'],
        details: ['10:40 發 -> 12:34 抵', '後備: 北斗9號 (12:15發)']
      },
      {
        id: 'd3-lunch',
        time: '午餐',
        title: 'SoupCurry HLAHAL',
        jpTitle: '哈拉哈ル',
        category: Category.Food,
        description: '羊排湯咖哩',
        location: 'SoupCurry HLAHAL',
        tags: ['羊排', '牛蒡片'],
        details: ['必吃: 羊排湯咖哩 (軟嫩無騷味)', '必吃: 炸牛蒡片']
      },
      {
        id: 'd3-hotel',
        time: 'Check-in',
        title: '湖景 TOYA 乃之風',
        category: Category.Hotel,
        description: '頂樓露天風呂 Infinity Onsen',
        location: 'The Lake View Toya Nonokaze Resort',
        tags: ['溫泉', '自助晚餐'],
        details: ['晚餐: 19:00 酒店自助餐', '設施: 頂樓露天風呂 TENQOO']
      }
    ]
  },
  {
    day: 4,
    date: '12/06',
    weekday: '六',
    city: 'Sapporo',
    lat: 43.0618,
    lng: 141.3545,
    title: '札幌奢華購物',
    items: [
      {
        id: 'd4-transport',
        time: '10:00',
        title: '乃之風接駁巴士',
        category: Category.Transport,
        description: '飯店 → 札幌站北口',
        location: 'Toya Nonokaze',
        cost: '免費',
        tags: ['已預約'],
        details: ['10:00 大廳集合', '約 12:30 抵達札幌']
      },
      {
        id: 'd4-lunch',
        time: '午餐',
        title: '根室花丸',
        jpTitle: 'Nemuro Hanamaru',
        category: Category.Food,
        description: 'JR Stellar Place 6F',
        location: 'JR Tower Stellar Place',
        tags: ['需抽號碼牌', '二層帆立貝'],
        details: ['必吃: 二層帆立貝', '必吃: 醬漬鮭魚卵', '注意: 需先去抽號碼牌']
      },
      {
        id: 'd4-shop',
        time: '下午',
        title: '札幌站購物',
        category: Category.Sightseeing,
        description: '大丸、丸井今井',
        location: 'Daimaru Sapporo',
        details: ['大丸: 精品 (LV, Gucci)', '2nd Street: 二手精品', '丸井今井: 設計師品牌']
      },
      {
        id: 'd4-dinner',
        time: '19:00',
        title: '成吉思汗 大黑屋',
        category: Category.Food,
        description: '札幌 3 號店',
        location: 'Daikokuya Genghis Khan',
        tags: ['已預約', '生羊肉'],
        details: ['必吃: 生羊肉 (生ラム)', '帶骨羊排', '無羊騷味']
      },
      {
        id: 'd4-supper',
        time: '宵夜',
        title: '札幌拉麵 輝風',
        category: Category.Food,
        description: '濃厚味噌拉麵',
        location: 'Ramen Kifuu',
        details: ['湯頭金黃，螺旋麵條吸湯']
      }
    ]
  },
  {
    day: 5,
    date: '12/07',
    weekday: '日',
    city: 'Otaru',
    lat: 43.1907,
    lng: 140.9947,
    title: '小樽浪漫之旅',
    items: [
      {
        id: 'd5-transport',
        time: '08:30',
        title: 'JR 快速 Airport',
        category: Category.Transport,
        description: '札幌 → 小樽',
        location: 'Sapporo Station',
        cost: '¥750',
        details: ['車程約 35 分鐘']
      },
      {
        id: 'd5-brunch',
        time: '10:00',
        title: '海膽專門店 世壹屋',
        category: Category.Food,
        description: '已預約',
        location: 'Yoichi-ya Otaru',
        tags: ['已預約', '5種海膽丼'],
        details: ['必吃: 5種海膽評比丼']
      },
      {
        id: 'd5-spot-canal',
        time: '11:30',
        title: '小樽運河',
        category: Category.Sightseeing,
        description: '拍照打卡',
        location: 'Otaru Canal',
        details: ['昔日金融中心遺跡', '白天拍倒影']
      },
      {
        id: 'd5-shop-street',
        time: '12:30',
        title: '堺町通商店街',
        category: Category.Sightseeing,
        description: '甜點一級戰區',
        location: 'Sakaimachi Street',
        tags: ['LeTAO', '北菓樓', '六花亭'],
        details: [
          'LeTAO: 雙層起司蛋糕',
          '北菓樓: 妖精之森年輪蛋糕、夢不思議泡芙',
          '六花亭: 蘭姆葡萄奶油夾心餅'
        ]
      },
      {
        id: 'd5-music',
        time: '13:30',
        title: '小樽音樂盒堂',
        category: Category.Sightseeing,
        description: '門口蒸氣鐘',
        location: 'Otaru Music Box Museum',
        details: ['蒸氣鐘每15分鐘報時']
      },
      {
        id: 'd5-dinner',
        time: '17:00',
        title: '小樽おり鮨',
        jpTitle: 'Orisushi',
        category: Category.Food,
        description: '已預約',
        location: 'Otaru Orisushi',
        tags: ['已預約', '歷史建築'],
        details: ['氛圍復古']
      },
      {
        id: 'd5-market',
        time: '晚上',
        title: '大通公園 聖誕市集',
        category: Category.Sightseeing,
        description: '德國慕尼黑氣氛',
        location: 'Odori Park',
        tags: ['熱紅酒'],
        details: ['必吃: 熱紅酒, 烤杏仁', '甜點: Kinotoya 雪糕']
      }
    ]
  },
  {
    day: 6,
    date: '12/08',
    weekday: '一',
    city: 'Sapporo',
    lat: 43.0618,
    lng: 141.3545,
    title: '札幌買買買',
    items: [
      {
        id: 'd6-breakfast',
        time: '早餐',
        title: '場外市場 うめぇ堂',
        jpTitle: 'Ume-do',
        category: Category.Food,
        description: '螃蟹丼',
        location: 'Sapporo Central Wholesale Market',
        details: ['必吃: 螃蟹丼', '必吃: 花咲蟹鐵砲汁']
      },
      {
        id: 'd6-spot-beer',
        time: '09:30',
        title: '札幌啤酒博物館',
        category: Category.Sightseeing,
        description: '紅磚建築',
        location: 'Sapporo Beer Museum',
        details: ['交通: 中央巴士188/88號', '必喝: 1F試飲「三種啤酒評比組」', '限定: 開拓使麥酒']
      },
      {
        id: 'd6-lunch',
        time: '午餐',
        title: '奧芝商店',
        jpTitle: 'Okushiba Shoten',
        category: Category.Food,
        description: '鮮蝦湯咖哩',
        location: 'Okushiba Shoten Station',
        details: ['大量蝦頭熬煮湯底']
      },
      {
        id: 'd6-shop-anime',
        time: '下午',
        title: '動漫購物',
        category: Category.Sightseeing,
        description: 'Pokemon, Parco',
        location: 'Pokemon Center Sapporo',
        tags: ['雪季皮卡丘'],
        details: ['Pokemon Center: 大丸8F', 'Parco: Jump Shop', 'Animate: 丸大樓']
      },
      {
        id: 'd6-dinner',
        time: '19:00',
        title: '壽喜燒 三光舍',
        category: Category.Food,
        description: '已預約',
        location: 'Sankousha Sapporo',
        tags: ['已預約', '百年老店'],
        details: ['秘製味噌醬底', '黑毛和牛']
      }
    ]
  },
  {
    day: 7,
    date: '12/09',
    weekday: '二',
    city: 'Sapporo',
    lat: 43.0618,
    lng: 141.3545,
    title: '休閒漫步',
    items: [
      {
        id: 'd7-breakfast',
        time: '早餐',
        title: 'McDonald\'s',
        category: Category.Food,
        description: '日本限定',
        location: 'Sapporo',
        details: ['Gracoro 奶油可樂餅漢堡', 'McGriddles 鬆餅豬肉滿福堡']
      },
      {
        id: 'd7-spot-park',
        time: '上午',
        title: '中島公園',
        category: Category.Sightseeing,
        description: '雪景森林',
        location: 'Nakajima Park',
        details: ['豐平館 (重要文化財)', '藍白色洋式建築']
      },
      {
        id: 'd7-shop-final',
        time: '晚上',
        title: '業務超市',
        category: Category.Sightseeing,
        description: '最後補貨',
        location: 'Gyomu Super Sapporo',
        details: ['零食、調味料、柚子胡椒']
      }
    ]
  },
  {
    day: 8,
    date: '12/10',
    weekday: '三',
    city: 'Chitose',
    lat: 42.793,
    lng: 141.673,
    title: '機場最後拼搏',
    items: [
      {
        id: 'd8-transport',
        time: '08:30',
        title: 'JR 快速 Airport',
        category: Category.Transport,
        description: '札幌 → 新千歲機場',
        location: 'Sapporo Station',
        cost: '¥1,150 (自由席)',
        details: ['車程 37 分鐘', 'u-seat 指定席 ¥1,990']
      },
      {
        id: 'd8-shop',
        time: '機場',
        title: '國內線航廈 2F',
        category: Category.Sightseeing,
        description: '伴手禮攻略',
        location: 'New Chitose Airport Domestic Terminal',
        tags: ['SNAFFLE\'S', '美瑛選果'],
        details: [
          'SNAFFLE\'S 起司蛋糕',
          '北菓樓 開拓米果',
          '美瑛選果 玉米麵包 (每日限量)',
          'Kinotoya 蛋塔'
        ]
      },
      {
        id: 'd8-flight',
        time: '16:30',
        title: '航班 HX693',
        category: Category.Flight,
        description: 'CTS → HKG',
        location: 'New Chitose Airport',
        details: ['起飛: 16:30 CTS', '降落: 21:50 HKG']
      }
    ]
  }
];