export interface Countries {
    alpha3Code: string,
    capital: string,
    flag: string,
    name: string,
    population: number,
    region: string
}

export interface Country {
    borders: any,
    capital: string,
    currencies: object[],
    flag: string,
    languages: object[],
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    topLevelDomain: string[]
}

export interface BorderCountry {
    name: any
}