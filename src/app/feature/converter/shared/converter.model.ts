export interface Converter {
    base: number;
    date: Date;
    rates: {string, number}
}