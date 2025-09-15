// NSW 优化后的价格表数据
// 只存储变化的数据，其他费用通过计算得出

export interface NSWCartageData {
  zone: string
  description: string
  cartageFees: {
    '20STD': number
    '40STD': number
    '20SDL': number
    '40SDL': number
    '20DROP': number
    '40DROP': number
  }
}

// NSW 运输费用数据（只有 Cartage 费用变化）
export const nswCartageData: Record<string, NSWCartageData> = {
  'Z1': {
    zone: 'Z1',
    description: 'Zone 1 (0-9KM)',
    cartageFees: {
      '20STD': 315.00,
      '40STD': 330.00,
      '20SDL': 340.00,
      '40SDL': 360.00,
      '20DROP': 340.00,
      '40DROP': 360.00
    }
  },
  'Z2': {
    zone: 'Z2',
    description: 'Zone 2 (10-19KM)',
    cartageFees: {
      '20STD': 340.00,
      '40STD': 360.00,
      '20SDL': 380.00,
      '40SDL': 400.00,
      '20DROP': 380.00,
      '40DROP': 400.00
    }
  },
  'Z3': {
    zone: 'Z3',
    description: 'Zone 3 (20-29KM)',
    cartageFees: {
      '20STD': 360.00,
      '40STD': 380.00,
      '20SDL': 400.00,
      '40SDL': 430.00,
      '20DROP': 400.00,
      '40DROP': 430.00
    }
  },
  'Z4': {
    zone: 'Z4',
    description: 'Zone 4 (30-39KM)',
    cartageFees: {
      '20STD': 380.00,
      '40STD': 400.00,
      '20SDL': 425.00,
      '40SDL': 460.00,
      '20DROP': 425.00,
      '40DROP': 460.00
    }
  },
  'Z5': {
    zone: 'Z5',
    description: 'Zone 5 (40-49KM)',
    cartageFees: {
      '20STD': 420.00,
      '40STD': 435.00,
      '20SDL': 470.00,
      '40SDL': 495.00,
      '20DROP': 470.00,
      '40DROP': 495.00
    }
  },
  'Z6': {
    zone: 'Z6',
    description: 'Zone 6 (50-59KM)',
    cartageFees: {
      '20STD': 475.00,
      '40STD': 495.00,
      '20SDL': 515.00,
      '40SDL': 550.00,
      '20DROP': 515.00,
      '40DROP': 550.00
    }
  },
  'Z7': {
    zone: 'Z7',
    description: 'Zone 7 (60-69KM)',
    cartageFees: {
      '20STD': 510.00,
      '40STD': 530.00,
      '20SDL': 590.00,
      '40SDL': 610.00,
      '20DROP': 590.00,
      '40DROP': 610.00
    }
  },
  'ZSP': {
    zone: 'ZSP',
    description: 'Zone Special (TBC)',
    cartageFees: {
      '20STD': 0, // TBC
      '40STD': 0, // TBC
      '20SDL': 0, // TBC
      '40SDL': 0, // TBC
      '20DROP': 0, // TBC
      '40DROP': 0  // TBC
    }
  }
}

// NSW 固定费用（不随区域、货柜大小、运输方式变化）
export const nswFixedFees = {
  timeslotFee: 120.00,
  infrastructureFee: 235.00,
  emptyDehireFee: 190.00,
  liftingFee: 80.00,
  viaYardFee: 125.00,
  failureTrip: 250.00,
  waitingFee: 100.00,
  waitingTerminal: 0.00,
  referSurcharge: 0.00
}

// NSW 特殊费用（按需添加的费用）
export const nswSpecialFees: Record<string, { description: string, fee: number }> = {
  // 超重费用
  'OVERWEIGHT22': { description: 'Sideloader Overweight Surcharge(21.5-24.0tones)', fee: 100.00 },
  'OVERWEIGHT24': { description: 'Sideloader Overweight Surcharge(24.0-26.0tones)', fee: 200.00 },
  'OVERWEIGHT27': { description: 'Sideloader Overweight Surcharge(26.0-28.0tones)', fee: 300.00 },
  'OVERWEIGHT28': { description: 'Standard Overweight Surcharge(27.5-28.0tones)', fee: 300.00 },
  
  // 超高费用
  'OVERHEIGHT': { description: 'Overheight Surcharge(Not Over 3m)', fee: 150.00 },
  
  // 尾门/熏蒸费用
  'VIATAILGATE': { description: 'Via Tailgate / Fumigation ETC', fee: 150.00 },
  
  // 堆场相关费用
  'VIAYARD': { description: 'Via Yard Fee', fee: 125.00 },
  'LIFTING': { description: 'Lifting Fee(Lift down & up)', fee: 80.00 },
  '20STORAGE': { description: '20ft Storage Fee (Per day)', fee: 20.00 },
  '40STORAGE': { description: '40ft Storage Fee (Per day)', fee: 40.00 },
  
  // 称重费用
  'WEIGHTBRIDGE': { description: 'Weight Fee(Via Weight Bridge)', fee: 150.00 },
  'WEIGHTSIDELOADER': { description: 'Weight Fee(Sideloader Declaration)', fee: 75.00 },
  
  // 等待费用
  'WAITING_SIDELOADER': { description: 'Sideloader Waiting Fee(Per hour, 0.5h free)', fee: 125.00 },
  'WAITING_TRAILER': { description: 'Standard Trailer Waiting Fee(Per hour, 1.5h free)', fee: 100.00 },
  'WAITING_TERMINAL': { description: 'Waiting In Terminal(Per hour, 1.0h free)', fee: 0.00 },
  
  // 拖车费用
  'DROPTRAILER': { description: 'Drop Trailer Fee(Per day)', fee: 120.00 },
  
  // 失败行程费用
  'FAILURETRIP': { description: 'Failuretrip (within 20kms)', fee: 250.00 },
  
  // 取消费用
  'CANCEL': { description: 'Timeslot Cancel Fee', fee: 220.00 }
}

// NSW 过路费代码映射
export const nswTollFees: Record<string, number> = {
  'TOLL-N': 120.00,
  'TOLL-N/A': 0.00
}

// 燃油附加费计算比例
export const fuelSurchargeRate = 0.25

// 获取 NSW Cartage 费用
export const getNSWCartageFee = (zone: string, serviceKey: string): number => {
  const zoneData = nswCartageData[zone]
  if (!zoneData) return 0
  return zoneData.cartageFees[serviceKey as keyof typeof zoneData.cartageFees] || 0
}

// 获取 NSW 可用区域
export const getNSWAvailableZones = (): string[] => {
  return Object.keys(nswCartageData)
}
