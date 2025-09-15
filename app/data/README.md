# 运输区域数据管理

这个模块提供了 NSW 和 VIC 两个州的运输区域数据管理功能。

## 数据结构

### TransportZone 接口
```typescript
interface TransportZone {
  depot: string        // 'NSW' 或 'VIC'
  city: string         // 城市名称
  tailgateRequest: 'Y' | 'N'  // 是否需要尾门服务
  tollCode: string     // 过路费代码
  zone: string         // 运输区域代码
}
```

## 主要功能

### 1. Depot 选择
```typescript
import { availableDepots } from './transport-zones'

// 获取所有可用的 Depot
const depots = availableDepots // ['NSW', 'VIC']
```

### 2. 根据 Depot 获取城市列表
```typescript
import { getCitiesByDepot } from './transport-zones'

// 获取 NSW 的所有城市
const nswCities = getCitiesByDepot('NSW')

// 获取 VIC 的所有城市
const vicCities = getCitiesByDepot('VIC')
```

### 3. 获取运输详情
```typescript
import { getTransportDetails } from './transport-zones'

// 获取指定城市和 Depot 的完整运输详情
const details = getTransportDetails('Sydney', 'NSW')
// 返回: { depot: 'NSW', city: 'Sydney', tailgateRequest: 'N', tollCode: 'TOLL-N', zone: 'Z1' }
```

### 4. 分别获取各个字段
```typescript
import { 
  getTailgateRequirement, 
  getTollCode, 
  getZone 
} from './transport-zones'

const city = 'Melbourne'
const depot = 'VIC'

const tailgateRequired = getTailgateRequirement(city, depot) // 'Y' 或 'N'
const tollCode = getTollCode(city, depot)                   // 'TOLL-T'
const zone = getZone(city, depot)                          // 'VZ2'
```

## 使用场景

### 表单实现示例
```typescript
// 1. 用户选择 Depot
const selectedDepot = 'NSW'

// 2. 根据 Depot 显示城市选项
const cityOptions = getCitiesByDepot(selectedDepot).map(city => ({
  value: city,
  label: city
}))

// 3. 用户选择城市后，获取运输信息
const selectedCity = 'Sydney'
const transportInfo = getTransportDetails(selectedCity, selectedDepot)

// 4. 使用这些信息进行价格查询
const priceQuery = {
  depot: transportInfo.depot,
  city: transportInfo.city,
  tailgateRequest: transportInfo.tailgateRequest,
  tollCode: transportInfo.tollCode,
  zone: transportInfo.zone
}
```

## 数据统计

### NSW 数据
- 总城市数: 292
- 区域类型: Z1, Z2, Z3, Z4, Z5, Z6, Z7, ZSP
- 过路费代码: TOLL-N, TOLL-N/A

### VIC 数据
- 总城市数: 355
- 区域类型: VZ1.5, VZ2, VZ2.5, VZ3, VZ3.5, VZ4, VZ4.5, VZ5, VZ5.5, VZ6, VZ6.5, VZ7, VZ7.5, VZSP
- 过路费代码: TOLL-T, TOLL-W, TOLL-M, TOLL-N/A

## 注意事项

1. 所有城市名称都是精确匹配的，建议在 UI 中提供搜索功能
2. Zone 代码在不同 Depot 中格式不同（NSW: Z1-Z7, VIC: VZ1.5-VZ7.5）
3. TailgateRequest 为 'Y' 表示需要尾门服务，'N' 表示不需要
4. TollCode 用于计算过路费，不同代码对应不同的费用标准
