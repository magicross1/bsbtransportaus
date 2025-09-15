// VIC 优化后的价格表数据
// 只存储变化的数据，其他费用通过计算得出

export interface VICCartageData {
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

// VIC 运输费用数据（只有 Cartage 费用变化）
export const vicCartageData: Record<string, VICCartageData> = {
  'VZ1': {
    zone: 'VZ1',
    description: 'Zone 1 (0-4KM)',
    cartageFees: {
      '20STD': 280.00,
      '40STD': 300.00,
      '20SDL': 310.00,
      '40SDL': 330.00,
      '20DROP': 310.00,
      '40DROP': 330.00
    }
  },
  'VZ1.5': {
    zone: 'VZ1.5',
    description: 'Zone 1.5 (5-9KM)',
    cartageFees: {
      '20STD': 290.00,
      '40STD': 310.00,
      '20SDL': 320.00,
      '40SDL': 340.00,
      '20DROP': 320.00,
      '40DROP': 340.00
    }
  },
  'VZ2': {
    zone: 'VZ2',
    description: 'Zone 2 (10-14KM)',
    cartageFees: {
      '20STD': 300.00,
      '40STD': 320.00,
      '20SDL': 330.00,
      '40SDL': 350.00,
      '20DROP': 330.00,
      '40DROP': 350.00
    }
  },
  'VZ2.5': {
    zone: 'VZ2.5',
    description: 'Zone 2.5 (15-19KM)',
    cartageFees: {
      '20STD': 310.00,
      '40STD': 330.00,
      '20SDL': 340.00,
      '40SDL': 360.00,
      '20DROP': 340.00,
      '40DROP': 360.00
    }
  },
  'VZ3': {
    zone: 'VZ3',
    description: 'Zone 3 (20-24KM)',
    cartageFees: {
      '20STD': 320.00,
      '40STD': 340.00,
      '20SDL': 350.00,
      '40SDL': 370.00,
      '20DROP': 350.00,
      '40DROP': 370.00
    }
  },
  'VZ3.5': {
    zone: 'VZ3.5',
    description: 'Zone 3.5 (25-29KM)',
    cartageFees: {
      '20STD': 330.00,
      '40STD': 350.00,
      '20SDL': 360.00,
      '40SDL': 380.00,
      '20DROP': 360.00,
      '40DROP': 380.00
    }
  },
  'VZ4': {
    zone: 'VZ4',
    description: 'Zone 4 (30-34KM)',
    cartageFees: {
      '20STD': 340.00,
      '40STD': 360.00,
      '20SDL': 380.00,
      '40SDL': 400.00,
      '20DROP': 380.00,
      '40DROP': 400.00
    }
  },
  'VZ4.5': {
    zone: 'VZ4.5',
    description: 'Zone 4.5 (35-39KM)',
    cartageFees: {
      '20STD': 350.00,
      '40STD': 370.00,
      '20SDL': 390.00,
      '40SDL': 410.00,
      '20DROP': 390.00,
      '40DROP': 410.00
    }
  },
  'VZ5': {
    zone: 'VZ5',
    description: 'Zone 5 (40-44KM)',
    cartageFees: {
      '20STD': 360.00,
      '40STD': 380.00,
      '20SDL': 410.00,
      '40SDL': 430.00,
      '20DROP': 410.00,
      '40DROP': 430.00
    }
  },
  'VZ5.5': {
    zone: 'VZ5.5',
    description: 'Zone 5.5 (45-49KM)',
    cartageFees: {
      '20STD': 370.00,
      '40STD': 390.00,
      '20SDL': 420.00,
      '40SDL': 440.00,
      '20DROP': 420.00,
      '40DROP': 440.00
    }
  },
  'VZ6': {
    zone: 'VZ6',
    description: 'Zone 6 (50-54KM)',
    cartageFees: {
      '20STD': 400.00,
      '40STD': 420.00,
      '20SDL': 460.00,
      '40SDL': 480.00,
      '20DROP': 460.00,
      '40DROP': 480.00
    }
  },
  'VZ6.5': {
    zone: 'VZ6.5',
    description: 'Zone 6.5 (55-59KM)',
    cartageFees: {
      '20STD': 420.00,
      '40STD': 440.00,
      '20SDL': 480.00,
      '40SDL': 500.00,
      '20DROP': 480.00,
      '40DROP': 500.00
    }
  },
  'VZ7': {
    zone: 'VZ7',
    description: 'Zone 7 (60-64KM)',
    cartageFees: {
      '20STD': 440.00,
      '40STD': 460.00,
      '20SDL': 500.00,
      '40SDL': 520.00,
      '20DROP': 500.00,
      '40DROP': 520.00
    }
  },
  'VZ7.5': {
    zone: 'VZ7.5',
    description: 'Zone 7.5 (65-69KM)',
    cartageFees: {
      '20STD': 460.00,
      '40STD': 480.00,
      '20SDL': 520.00,
      '40SDL': 540.00,
      '20DROP': 520.00,
      '40DROP': 540.00
    }
  },
  'VZSP': {
    zone: 'VZSP',
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

// VIC 固定费用（不随区域、货柜大小、运输方式变化）
export const vicFixedFees = {
  timeslotFee: 120.00,
  infrastructureFee: 235.00,
  emptyDehireFee: 190.00,
  liftingFee: 80.00,
  viaYardFee: 125.00,
  failureTrip: 250.00,
  waitingFee: 100.00,
  waitingTerminal: 100.00,
  referSurcharge: 80.00
}

// VIC 特殊费用（按需添加的费用）
export const vicSpecialFees: Record<string, { description: string, fee: number }> = {
  // 超重费用
  'OVERWEIGHT22': { description: 'Sideloader Overweight Surcharge(21.5-24.0tones)', fee: 150.00 },
  'OVERWEIGHT24': { description: 'Sideloader Overweight Surcharge(24.0-26.0tones)', fee: 150.00 },
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
  'WAITING_TERMINAL': { description: 'Waiting In Terminal(Per hour, 1.0h free)', fee: 100.00 },
  
  // 拖车费用
  'DROPTRAILER': { description: 'Drop Trailer Fee(Per day)', fee: 120.00 },
  
  // 失败行程费用
  'FAILURETRIP': { description: 'Failuretrip (within 20kms)', fee: 250.00 },
  
  // 取消费用
  'CANCEL': { description: 'Timeslot Cancel Fee', fee: 220.00 },
  
  // 冷藏费用
  'REFER_SURCHARGE': { description: 'Refer Surcharge', fee: 80.00 }
}

// VIC 过路费代码映射
export const vicTollFees: Record<string, number> = {
  'TOLL-T': 80.00,
  'TOLL-W': 50.00,
  'TOLL-M': 100.00,
  'TOLL-N/A': 0.00
}

// 燃油附加费计算比例
export const fuelSurchargeRate = 0.25

// 获取 VIC Cartage 费用
export const getVICCartageFee = (zone: string, serviceKey: string): number => {
  const zoneData = vicCartageData[zone]
  if (!zoneData) return 0
  return zoneData.cartageFees[serviceKey as keyof typeof zoneData.cartageFees] || 0
}

// 获取 VIC 可用区域
export const getVICAvailableZones = (): string[] => {
  return Object.keys(vicCartageData)
}
