import React, { useState } from 'react';
import { 
  Mountain, 
  Train, 
  Bus, 
  MapPin, 
  CalendarDays, 
  DollarSign,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 'wulanbutong',
    title: '乌兰布统草原',
    subtitle: '塞罕坝草原之旅，宛如梦境般的旅程！',
    duration: '2日游',
    transport: '大巴往返',
    price: '1900元/人',
    image: 'https://s.coze.cn/t/cfIEJ4sHwfw/',
    highlights: [
      '穿越万亩林海，观赏木兰围场壮丽日落',
      '璀璨星空下感受自然之美',
      '深度体验乌兰布统大草原',
      '欣赏打树花与篝火晚会'
    ]
  },
  {
    id: 'wulanchabu',
    title: '乌兰察布草原',
    subtitle: '辽阔草原、壮丽自然风光和丰富文化历史',
    duration: '2日游',
    transport: '高铁往返',
    price: '2000元/人',
    image: 'https://s.coze.cn/t/KCcJFc7YucU/',
    highlights: [
      '游览乌兰哈达火山群',
      '辉腾锡勒草原黄花沟景区',
      '体验窝阔台鲜花草原',
      '参与玻璃漂流'
    ]
  },
  {
    id: 'zhengzhou',
    title: '郑州开封',
    subtitle: '遍历历史与现代的文化之旅',
    duration: '2日游',
    transport: '高铁往返',
    price: '2000元/人',
    image: 'https://s.coze.cn/t/5omQpkEzBwo/',
    highlights: [
      '参观开封府',
      '游览清明上河园',
      '探访少林寺',
      '观看大型打铁花演出'
    ]
  },
  {
    id: 'qingdao',
    title: '青岛+威海+烟台',
    subtitle: '黄海之滨的美丽城市之旅',
    duration: '2日游',
    transport: '高铁往返',
    price: '2300元/人',
    image: 'https://s.coze.cn/t/PQJ93fihI1g/',
    highlights: [
      '游览浙江路天主教堂',
      '参观信号山公园和八大关',
      '探访刘公岛',
      '蓬莱阁仙境之旅'
    ]
  }
];

const destinationDetails = {
  wulanbutong: {
    title: '乌兰布统草原（围场坝上）2日游',
    transport: '大巴往返',
    schedule: [
      {
        day: 'Day1（周五）',
        activities: [
          '北京 - 承德木兰围场（约6.5小时）',
          '晚上：住塞罕坝御道口',
          '（车观）塞罕坝国家森林公园',
          '（车观）木兰围场'
        ]
      },
      {
        day: 'Day2（周六）',
        activities: [
          '上午：乌兰布统大草原 - 草原越野深度穿越（含体验-越野穿越）',
          '下午：乌兰布统大草原深度游 - 乌兰布统影视基地 - 野鸭湖 - 五彩山 - 欧式风景区 - 杨树背 - 乌兰布统看草原日落',
          '晚上：草原之夜 - 打树花·篝火星空趴'
        ]
      },
      {
        day: 'Day3（周日）',
        activities: [
          '上午：皇家鹿苑（自由活动） - 游牧部落 - 大牧场 - 白桦林 - 神树祈福 - 原始村落',
          '下午：午餐后大巴返京'
        ]
      }
    ],
    cost: '1900元/人（包含北京往返大巴400元/人）',
    includes: [
      '住宿：2晚4钻酒店标间',
      '用车：2台45座大巴车',
      '用餐：2早餐+4正餐',
      '导游+门票+草原越野车'
    ],
    note: '暑期为旅游旺季住宿等价格波动较大，以上费用预计仅供参考，请以最终实际确认出游行程和报价为准。'
  },
  wulanchabu: {
    title: '乌兰察布草原2日游',
    transport: '高铁往返',
    schedule: [
      {
        day: 'Day1（周五）',
        activities: [
          '上午：北京 - 乌兰察布（高铁约2小时）',
          '中午：品尝当地美食',
          '下午：游览乌兰哈达火山群（4-8号火山，预计3-4小时）'
        ]
      },
      {
        day: 'Day2（周六）',
        activities: [
          '上午：辉腾锡勒草原黄花沟景区游览',
          '下午：辉腾锡勒草原黄花沟景区自由活动',
          '可体验窝阔台鲜花草原，漫步花海；也可参与玻璃漂流，在峡谷间穿梭'
        ]
      },
      {
        day: 'Day3（周日）',
        activities: [
          '上午：格根塔拉草原骑马 - 漫步大草原',
          '下午：高铁返京'
        ]
      }
    ],
    cost: '2000元/人（包含北京往返高铁350元/人）',
    includes: [
      '住宿：2晚4钻酒店标间',
      '用车：2台45座大巴车',
      '用餐：2早餐+5正餐',
      '导游+门票+草原越野车'
    ],
    note: '暑期为旅游旺季住宿等价格波动较大，以上费用预计仅供参考，请以最终实际确认出游行程和报价为准。'
  },
  zhengzhou: {
    title: '郑州开封2日游',
    transport: '高铁往返',
    schedule: [
      {
        day: 'Day1（周五）',
        activities: [
          '北京高铁 - 郑州接站 - 抵达后乘车赴开封(75公里，1h左右车程)- 住开封',
          '万岁山武侠城(晚上可观看大型打铁花演出)'
        ]
      },
      {
        day: 'Day2（周六）',
        activities: [
          '上午：开封府',
          '下午：清明上河园'
        ]
      },
      {
        day: 'Day3（周日）',
        activities: [
          '上午：大巴车郑州 - 少林寺',
          '下午：大巴车郑州 - 高铁返京'
        ]
      }
    ],
    cost: '2000元/人（包含北京往返高铁700元/人）',
    includes: [
      '住宿：1晚开封4钻酒店标间、1晚郑州4钻酒店标间',
      '用车：2台45座大巴车',
      '用餐：2顿早餐+4个正餐',
      '导游+景区门票+景交车'
    ],
    note: '暑期为旅游旺季住宿等价格波动较大，以上费用预计仅供参考，请以最终实际确认出游行程和报价为准。'
  },
  qingdao: {
    title: '青岛+威海+烟台2日游',
    transport: '高铁往返',
    schedule: [
      {
        day: 'Day1（周五）',
        activities: [
          '上午：北京高铁 - 青岛',
          '下午：景点观光 - 住青岛',
          '晚上：青岛西海岸新区金沙滩啤酒城节自由活动（啤酒节7.19-8.11）',
          '浙江路天主教堂',
          '信号山公园',
          '八大关',
          '青岛五四广场'
        ]
      },
      {
        day: 'Day2（周六）',
        activities: [
          '上午：青岛 - 威海（约3.5小时）',
          '下午：景点观光 - 住烟台',
          '刘公岛',
          '火炬八街',
          '养马岛风景区'
        ]
      },
      {
        day: 'Day3（周日）',
        activities: [
          '上午：蓬莱阁（或自由活动）',
          '下午：高铁返京'
        ]
      }
    ],
    cost: '2300元/人（包含北京往返高铁750元/人）',
    includes: [
      '住宿：2晚4钻酒店标间',
      '用车：2台45座大巴车',
      '用餐：2顿早餐+4个正餐',
      '导游+景区门票'
    ],
    note: '暑期为旅游旺季住宿等价格波动较大，以上费用预计仅供参考，请以最终实际确认出游行程和报价为准。'
  }
};

const SummerTeamBuilding = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (id) => {
    setSelectedDestination(id);
  };

  const handleBackClick = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <CalendarDays className="mr-2 text-blue-600" />
            2025暑期团建目的地推介
          </h1>
          <p className="mt-2 text-sm text-gray-600">北京格范科技有限公司 2025.4</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!selectedDestination ? (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">精选目的地</h2>
              <p className="text-gray-600">为您精心挑选四个特色团建目的地，点击查看详情</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handleDestinationClick(destination.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{destination.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {destination.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{destination.subtitle}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      {destination.transport.includes('高铁') ? (
                        <Train className="mr-1 h-4 w-4" />
                      ) : (
                        <Bus className="mr-1 h-4 w-4" />
                      )}
                      <span>{destination.transport}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-blue-600 font-medium">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {destination.price}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 flex items-center">
                        查看详情 <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleBackClick}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              <ArrowRight className="transform rotate-180 mr-1 h-5 w-5" />
              返回目的地列表
            </button>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={destinations.find(d => d.id === selectedDestination).image}
                  alt={destinationDetails[selectedDestination].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {destinationDetails[selectedDestination].title}
                  </h2>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {destinationDetails[selectedDestination].transport}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <MapPin className="mr-2 text-blue-600" />
                    行程安排
                  </h3>
                  <div className="space-y-4">
                    {destinationDetails[selectedDestination].schedule.map((day, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-medium text-blue-700">{day.day}</h4>
                        <ul className="mt-2 space-y-2">
                          {day.activities.map((activity, i) => (
                            <li key={i} className="text-gray-700 flex">
                              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <DollarSign className="mr-2 text-blue-600" />
                      费用说明
                    </h3>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-medium text-blue-800">
                        {destinationDetails[selectedDestination].cost}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {destinationDetails[selectedDestination].includes.map((item, index) => (
                          <li key={index} className="text-gray-700 flex">
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-sm text-gray-600">
                        {destinationDetails[selectedDestination].note}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Mountain className="mr-2 text-blue-600" />
                      行程亮点
                    </h3>
                    <ul className="space-y-2">
                      {destinations.find(d => d.id === selectedDestination).highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-2 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      <footer className="bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>created by <a href="https://space.coze.cn" className="text-blue-600 hover:text-blue-800">coze space</a></p>
          <p className="mt-1">页面内容均由 AI 生成，仅供参考</p>
        </div>
      </footer>
    </div>
  );
};

export default SummerTeamBuilding;