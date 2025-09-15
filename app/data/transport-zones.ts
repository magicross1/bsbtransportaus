// Main Transport Zones Data Manager
// This file provides a unified interface for accessing NSW and VIC transport zone data

import { nswTransportZones, getNSWCities, getNSWZones, getNSWZoneByCity, getNSWCitiesByZone } from './transport-zones-nsw'
import { vicTransportZones, getVICCities, getVICZones, getVICZoneByCity, getVICCitiesByZone } from './transport-zones-vic'

export interface TransportZone {
  depot: string
  city: string
  tailgateRequest: 'Y' | 'N'
  tollCode: string
  zone: string
}

// Available depots
export const availableDepots = ['NSW', 'VIC'] as const
export type DepotType = typeof availableDepots[number]

// Main data access functions
export const getTransportZonesByDepot = (depot: DepotType): TransportZone[] => {
  switch (depot) {
    case 'NSW':
      return nswTransportZones
    case 'VIC':
      return vicTransportZones
    default:
      return []
  }
}

export const getCitiesByDepot = (depot: DepotType): string[] => {
  switch (depot) {
    case 'NSW':
      return getNSWCities()
    case 'VIC':
      return getVICCities()
    default:
      return []
  }
}

export const getZonesByDepot = (depot: DepotType): string[] => {
  switch (depot) {
    case 'NSW':
      return getNSWZones()
    case 'VIC':
      return getVICZones()
    default:
      return []
  }
}

export const getZoneByCityAndDepot = (city: string, depot: DepotType): TransportZone | undefined => {
  switch (depot) {
    case 'NSW':
      return getNSWZoneByCity(city)
    case 'VIC':
      return getVICZoneByCity(city)
    default:
      return undefined
  }
}

export const getCitiesByZoneAndDepot = (zone: string, depot: DepotType): string[] => {
  switch (depot) {
    case 'NSW':
      return getNSWCitiesByZone(zone)
    case 'VIC':
      return getVICCitiesByZone(zone)
    default:
      return []
  }
}

// Validation functions
export const isValidDepot = (depot: string): depot is DepotType => {
  return availableDepots.includes(depot as DepotType)
}

export const isValidCityForDepot = (city: string, depot: DepotType): boolean => {
  const cities = getCitiesByDepot(depot)
  return cities.some(c => c.toLowerCase() === city.toLowerCase())
}

export const isValidZoneForDepot = (zone: string, depot: DepotType): boolean => {
  const zones = getZonesByDepot(depot)
  return zones.includes(zone)
}

// 价格查询相关函数
export const getTransportDetails = (city: string, depot: DepotType): TransportZone | null => {
  const zoneData = getZoneByCityAndDepot(city, depot)
  return zoneData || null
}

export const getTailgateRequirement = (city: string, depot: DepotType): 'Y' | 'N' | null => {
  const details = getTransportDetails(city, depot)
  return details?.tailgateRequest || null
}

export const getTollCode = (city: string, depot: DepotType): string | null => {
  const details = getTransportDetails(city, depot)
  return details?.tollCode || null
}

export const getZone = (city: string, depot: DepotType): string | null => {
  const details = getTransportDetails(city, depot)
  return details?.zone || null
}

// 获取所有可用的 Toll Code
export const getAllTollCodes = (): string[] => {
  const nswTollCodes = [...new Set(nswTransportZones.map(zone => zone.tollCode))]
  const vicTollCodes = [...new Set(vicTransportZones.map(zone => zone.tollCode))]
  return [...new Set([...nswTollCodes, ...vicTollCodes])].sort()
}

// 根据 Toll Code 获取相关城市
export const getCitiesByTollCode = (tollCode: string, depot?: DepotType): string[] => {
  let cities: string[] = []
  
  if (!depot || depot === 'NSW') {
    cities = [...cities, ...nswTransportZones.filter(zone => zone.tollCode === tollCode).map(zone => zone.city)]
  }
  
  if (!depot || depot === 'VIC') {
    cities = [...cities, ...vicTransportZones.filter(zone => zone.tollCode === tollCode).map(zone => zone.city)]
  }
  
  return [...new Set(cities)].sort()
}

// Data summary functions
export const getDataSummary = () => {
  return {
    nsw: {
      totalCities: nswTransportZones.length,
      totalZones: getNSWZones().length,
      zones: getNSWZones(),
      tollCodes: [...new Set(nswTransportZones.map(zone => zone.tollCode))]
    },
    vic: {
      totalCities: vicTransportZones.length,
      totalZones: getVICZones().length,
      zones: getVICZones(),
      tollCodes: [...new Set(vicTransportZones.map(zone => zone.tollCode))]
    }
  }
}


