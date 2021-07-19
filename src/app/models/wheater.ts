export interface Weather {
    location: Location
    current: Current
}

export interface Location {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    localtime: string
}
export interface Current {
    condition: Condition,
    last_updated_epoch: number,
    last_updated: String,
    temp_c: number,
    temp_f: number,
    is_day: number,
    wind_mph: number
    wind_kph: number,
    wind_degree: number,
    wind_dir: String,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    vis_km: number,
    vis_miles: number,
    uv: number,
    gust_mph: number,
    gust_kph: number
}

export interface Condition {
    text: String,
    icon: String,
    code: number

}