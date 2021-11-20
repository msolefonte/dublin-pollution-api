export interface EmissionData {
  area_id: number,
  timestamp: string,
  no2_level: number
}

export interface MySQLConfig {
    auth: {
        username: string,
        password: string
    },
    host: string,
    port: number,
    database: string
}

export interface TrafficData {
  area_id: number,
  timestamp: string,
  frc: string,
  current_speed: number,
  free_flow_speed: number,
  current_travel_time: number,
  free_flow_travel_time: number,
  confidence: number,
  road_closure: 0 | 1
}
