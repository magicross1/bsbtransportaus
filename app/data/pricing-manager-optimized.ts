// 优化后的统一价格管理
// 整合 NSW 和 VIC 的价格数据，提供高效的查询接口

import { 
  nswCartageData, 
  nswFixedFees, 
  nswSpecialFees,
  nswTollFees, 
  getNSWCartageFee, 
  getNSWAvailableZones 
} from './pricing-nsw-optimized'

import { 
  vicCartageData, 
  vicFixedFees, 
  vicSpecialFees,
  vicTollFees, 
  getVICCartageFee, 
  getVICAvailableZones 
} from './pricing-vic-optimized'

import { 
  isValidCityForDepot as validateCityForDepot,
  getTransportDetails
} from './transport-zones'

// 类型定义
export type ServiceType = 'STD' | 'SDL' | 'DROP'
export type ContainerSize = '20' | '40'
export type DepotType = 'NSW' | 'VIC'

// 燃油附加费计算比例
export const fuelSurchargeRate = 0.25

// 根据 Depot 获取固定费用
const getFixedFees = (depot: DepotType) => {
  return depot === 'NSW' ? nswFixedFees : vicFixedFees
}

// 根据 Depot 获取过路费映射
const getTollFees = (depot: DepotType) => {
  return depot === 'NSW' ? nswTollFees : vicTollFees
}

// 根据 Depot 获取特殊费用映射
const getSpecialFees = (depot: DepotType) => {
  return depot === 'NSW' ? nswSpecialFees : vicSpecialFees
}

// 构建服务键名
const buildServiceKey = (containerSize: ContainerSize, serviceType: ServiceType): string => {
  return `${containerSize}${serviceType}`
}

// 计算基础费用明细（不包含特殊费用）
export const calculateBaseFees = (
  depot: DepotType,
  zone: string,
  containerSize: ContainerSize,
  serviceType: ServiceType,
  tollCode: string,
  tailgateRequest: 'Y' | 'N'
) => {
  // 1. 获取 Cartage 费用
  const serviceKey = buildServiceKey(containerSize, serviceType)
  let cartageFee: number
  
  if (depot === 'NSW') {
    cartageFee = getNSWCartageFee(zone, serviceKey)
  } else {
    cartageFee = getVICCartageFee(zone, serviceKey)
  }
  
  // 2. 计算燃油附加费
  const fuelSurcharge = cartageFee * fuelSurchargeRate
  
  // 3. 获取过路费
  const tollFees = getTollFees(depot)
  const tollSurcharge = tollFees[tollCode] || 0
  
  // 4. 获取固定费用
  const fixedFees = getFixedFees(depot)
  
  // 5. 计算 Sideloader 费用（只有选择 Sideloader 时才显示）
  const sideloaderFee = serviceType === 'SDL' ? 135.00 : 0
  
  // 6. 计算 VIATAILGATE 费用（只有 tailgateRequest 为 'Y' 时才显示）
  const viaTailgateFee = tailgateRequest === 'Y' ? 150.00 : 0
  
  return {
    cartageFee,
    fuelSurcharge,
    timeslotFee: fixedFees.timeslotFee,
    infrastructureFee: fixedFees.infrastructureFee,
    sideloaderFee,
    emptyDehireFee: fixedFees.emptyDehireFee,
    tollSurcharge,
    viaTailgateFee,
    liftingFee: fixedFees.liftingFee,
    viaYardFee: fixedFees.viaYardFee,
    failureTrip: fixedFees.failureTrip,
    waitingFee: fixedFees.waitingFee,
    waitingTerminal: fixedFees.waitingTerminal,
    referSurcharge: fixedFees.referSurcharge,
    total: cartageFee + fuelSurcharge + fixedFees.timeslotFee + fixedFees.infrastructureFee + 
           sideloaderFee + fixedFees.emptyDehireFee + tollSurcharge + viaTailgateFee
  }
}

// 计算总价格（保持向后兼容）
export const calculateTotalPrice = (
  depot: DepotType,
  zone: string,
  containerSize: ContainerSize,
  serviceType: ServiceType,
  tollCode: string,
  tailgateRequest: 'Y' | 'N' = 'N'
): number => {
  const baseFees = calculateBaseFees(depot, zone, containerSize, serviceType, tollCode, tailgateRequest)
  return baseFees.total
}

// 获取详细的价格明细
export const getPriceBreakdown = (
  depot: DepotType,
  zone: string,
  containerSize: ContainerSize,
  serviceType: ServiceType,
  tollCode: string,
  tailgateRequest: 'Y' | 'N' = 'N'
) => {
  return calculateBaseFees(depot, zone, containerSize, serviceType, tollCode, tailgateRequest)
}

// 获取可用的区域列表
export const getAvailableZones = (depot: DepotType): string[] => {
  return depot === 'NSW' ? getNSWAvailableZones() : getVICAvailableZones()
}

// 检查区域是否支持特殊价格（TBC）
export const isZoneTBC = (depot: DepotType, zone: string): boolean => {
  const serviceKey = buildServiceKey('20', 'STD')
  let cartageFee: number
  
  if (depot === 'NSW') {
    cartageFee = getNSWCartageFee(zone, serviceKey)
  } else {
    cartageFee = getVICCartageFee(zone, serviceKey)
  }
  
  return cartageFee === 0
}

// 获取区域描述
export const getZoneDescription = (depot: DepotType, zone: string): string => {
  if (depot === 'NSW') {
    return nswCartageData[zone]?.description || ''
  } else {
    return vicCartageData[zone]?.description || ''
  }
}

// 验证 Depot 是否有效
export const isValidDepot = (depot: string): depot is DepotType => {
  return depot === 'NSW' || depot === 'VIC'
}

// 验证城市是否在指定 Depot 中
export const isValidCityForDepot = (city: string, depot: DepotType): boolean => {
  return validateCityForDepot(city, depot)
}

// 检查是否需要联系客服
export const shouldContactSupport = (
  depot: string,
  city: string,
  zone?: string
): { shouldContact: boolean, reason?: string } => {
  // 1. 检查 Depot 是否有效
  if (!isValidDepot(depot)) {
    return { shouldContact: true, reason: 'Invalid depot. Please contact support for assistance.' }
  }
  
  // 2. 检查城市是否有效
  if (!isValidCityForDepot(city, depot)) {
    return { shouldContact: true, reason: 'City not found in our service area. Please contact support for assistance.' }
  }
  
  // 3. 检查区域是否为 TBC
  if (zone && isZoneTBC(depot, zone)) {
    return { shouldContact: true, reason: 'This area requires special pricing. Please contact support for a custom quote.' }
  }
  
  return { shouldContact: false }
}

// 获取所有可用的服务类型选项
export const getServiceTypeOptions = (): Array<{value: ServiceType, label: string}> => {
  return [
    { value: 'STD', label: 'Standard' },
    { value: 'SDL', label: 'Sideloader' },
    { value: 'DROP', label: 'Drop Trailer' }
  ]
}

// 获取所有可用的集装箱尺寸选项
export const getContainerSizeOptions = (): Array<{value: ContainerSize, label: string}> => {
  return [
    { value: '20', label: '20ft Container' },
    { value: '40', label: '40ft Container' }
  ]
}

// 获取特殊费用信息
export const getSpecialFeeInfo = (depot: DepotType, feeCode: string): { description: string, fee: number } | null => {
  const specialFees = getSpecialFees(depot)
  return specialFees[feeCode] || null
}

// 获取所有特殊费用列表
export const getAllSpecialFees = (depot: DepotType): Array<{code: string, description: string, fee: number}> => {
  const specialFees = getSpecialFees(depot)
  return Object.entries(specialFees).map(([code, info]) => ({
    code,
    description: info.description,
    fee: info.fee
  }))
}

// 计算包含特殊费用的总价格
export const calculateTotalPriceWithSpecialFees = (
  depot: DepotType,
  zone: string,
  containerSize: ContainerSize,
  serviceType: ServiceType,
  tollCode: string,
  specialFeeCodes: string[] = []
): number => {
  // 基础价格
  let total = calculateTotalPrice(depot, zone, containerSize, serviceType, tollCode)
  
  // 添加特殊费用
  const specialFees = getSpecialFees(depot)
  specialFeeCodes.forEach(feeCode => {
    const feeInfo = specialFees[feeCode]
    if (feeInfo) {
      total += feeInfo.fee
    }
  })
  
  return total
}

// 获取完整的价格明细（包含特殊费用）
export const getCompletePriceBreakdown = (
  depot: DepotType,
  zone: string,
  containerSize: ContainerSize,
  serviceType: ServiceType,
  tollCode: string,
  specialFeeCodes: string[] = [],
  tailgateRequest: 'Y' | 'N' = 'N'
) => {
  const baseBreakdown = calculateBaseFees(depot, zone, containerSize, serviceType, tollCode, tailgateRequest)
  const specialFees = getSpecialFees(depot)
  
  const specialFeesBreakdown = specialFeeCodes.map(feeCode => {
    const feeInfo = specialFees[feeCode]
    return {
      code: feeCode,
      description: feeInfo?.description || '',
      fee: feeInfo?.fee || 0
    }
  })
  
  const specialFeesTotal = specialFeesBreakdown.reduce((sum, fee) => sum + fee.fee, 0)
  
  return {
    ...baseBreakdown,
    specialFees: specialFeesBreakdown,
    specialFeesTotal,
    grandTotal: baseBreakdown.total + specialFeesTotal
  }
}

// 完整的报价计算流程
export const calculateQuote = (
  depot: string,
  city: string,
  containerSize: ContainerSize,
  serviceType: ServiceType,
  specialFeeCodes: string[] = []
): {
  success: boolean
  data?: {
    depot: DepotType
    city: string
    zone: string
    tailgateRequest: 'Y' | 'N'
    tollCode: string
    baseFees: ReturnType<typeof calculateBaseFees>
    specialFees: Array<{code: string, description: string, fee: number}>
    total: number
  }
  error?: {
    shouldContact: boolean
    reason: string
  }
} => {
  // 1. 验证 Depot
  if (!isValidDepot(depot)) {
    return {
      success: false,
      error: {
        shouldContact: true,
        reason: 'Invalid depot. Please contact support for assistance.'
      }
    }
  }
  
  // 2. 验证城市
  if (!isValidCityForDepot(city, depot)) {
    return {
      success: false,
      error: {
        shouldContact: true,
        reason: 'City not found in our service area. Please contact support for assistance.'
      }
    }
  }
  
  // 3. 获取运输详情
  const transportDetails = getTransportDetails(city, depot)
  if (!transportDetails) {
    return {
      success: false,
      error: {
        shouldContact: true,
        reason: 'Unable to retrieve transport details. Please contact support for assistance.'
      }
    }
  }
  
  // 4. 检查是否为 TBC 区域
  if (isZoneTBC(depot, transportDetails.zone)) {
    return {
      success: false,
      error: {
        shouldContact: true,
        reason: 'This area requires special pricing. Please contact support for a custom quote.'
      }
    }
  }
  
  // 5. 计算基础费用
  const baseFees = calculateBaseFees(
    depot,
    transportDetails.zone,
    containerSize,
    serviceType,
    transportDetails.tollCode,
    transportDetails.tailgateRequest
  )
  
  // 6. 计算特殊费用
  const specialFees = getSpecialFees(depot)
  const specialFeesBreakdown = specialFeeCodes.map(feeCode => {
    const feeInfo = specialFees[feeCode]
    return {
      code: feeCode,
      description: feeInfo?.description || '',
      fee: feeInfo?.fee || 0
    }
  })
  
  const specialFeesTotal = specialFeesBreakdown.reduce((sum, fee) => sum + fee.fee, 0)
  const total = baseFees.total + specialFeesTotal
  
  return {
    success: true,
    data: {
      depot,
      city,
      zone: transportDetails.zone,
      tailgateRequest: transportDetails.tailgateRequest,
      tollCode: transportDetails.tollCode,
      baseFees,
      specialFees: specialFeesBreakdown,
      total
    }
  }
}

// 根据运输方式获取相关的附加费用
export const getAdditionalFeesByServiceType = (serviceType: ServiceType, depot: DepotType): Array<{code: string, description: string, fee: number, unit?: string}> => {
  const specialFees = getSpecialFees(depot)
  const additionalFees: Array<{code: string, description: string, fee: number, unit?: string}> = []

  switch (serviceType) {
    case 'SDL': // Sideloader
      additionalFees.push(
        { code: 'OVERWEIGHT22', description: 'Sideloader Overweight(22-23.9t)', fee: specialFees['OVERWEIGHT22']?.fee || 100 },
        { code: 'OVERWEIGHT24', description: 'Sideloader Overweight(24-27.9t)', fee: specialFees['OVERWEIGHT24']?.fee || 200 },
        { code: 'OVERWEIGHT27', description: 'Sideloader Overweight(28-29t)', fee: specialFees['OVERWEIGHT27']?.fee || 300 },
        { code: 'LIFTING', description: 'Lifting Fee', fee: specialFees['LIFTING']?.fee || 80 },
        { code: 'VIAYARD', description: 'Via Yard Fee', fee: specialFees['VIAYARD']?.fee || 125 },
        { code: '20STORAGE', description: 'Storage Fee (20ft)', fee: specialFees['20STORAGE']?.fee || 20, unit: 'DAY' },
        { code: '40STORAGE', description: 'Storage Fee (40ft)', fee: specialFees['40STORAGE']?.fee || 40, unit: 'DAY' },
        { code: 'FAILURETRIP', description: 'Failure Trip', fee: specialFees['FAILURETRIP']?.fee || 250 },
        { code: 'WAITING_SIDELOADER', description: 'Waiting Fee(per hour)', fee: specialFees['WAITING_SIDELOADER']?.fee || 100, unit: 'per hour' }
      )
      break

    case 'STD': // Standard Trailer
      additionalFees.push(
        { code: 'OVERWEIGHT28', description: 'Standard Overweight(28-29t)', fee: specialFees['OVERWEIGHT28']?.fee || 300 },
        { code: 'LIFTING', description: 'Lifting Fee', fee: specialFees['LIFTING']?.fee || 80 },
        { code: 'VIAYARD', description: 'Via Yard Fee', fee: specialFees['VIAYARD']?.fee || 125 },
        { code: '20STORAGE', description: 'Storage Fee (20ft)', fee: specialFees['20STORAGE']?.fee || 20, unit: 'DAY' },
        { code: '40STORAGE', description: 'Storage Fee (40ft)', fee: specialFees['40STORAGE']?.fee || 40, unit: 'DAY' },
        { code: 'FAILURETRIP', description: 'Failure Trip', fee: specialFees['FAILURETRIP']?.fee || 250 },
        { code: 'WAITING_TRAILER', description: 'Waiting Fee(per hour)', fee: specialFees['WAITING_TRAILER']?.fee || 100, unit: 'per hour' }
      )
      break

    case 'DROP': // Drop Trailer
      additionalFees.push(
        { code: 'OVERWEIGHT28', description: 'Standard Overweight(28-29t)', fee: specialFees['OVERWEIGHT28']?.fee || 300 },
        { code: 'DROPTRAILER', description: 'Drop Trailer Fee', fee: specialFees['DROPTRAILER']?.fee || 120, unit: 'per day' },
        { code: 'LIFTING', description: 'Lifting Fee', fee: specialFees['LIFTING']?.fee || 80 },
        { code: 'VIAYARD', description: 'Via Yard Fee', fee: specialFees['VIAYARD']?.fee || 125 },
        { code: '20STORAGE', description: 'Storage Fee (20ft)', fee: specialFees['20STORAGE']?.fee || 20, unit: 'DAY' },
        { code: '40STORAGE', description: 'Storage Fee (40ft)', fee: specialFees['40STORAGE']?.fee || 40, unit: 'DAY' },
        { code: 'FAILURETRIP', description: 'Failure Trip', fee: specialFees['FAILURETRIP']?.fee || 250 },
        { code: 'WAITING_TRAILER', description: 'Waiting Fee(per hour)', fee: specialFees['WAITING_TRAILER']?.fee || 100, unit: 'per hour' }
      )
      break
  }

  return additionalFees
}
