export interface ExchangeRate {
    base: number;
    date: Date;
    rates: { name: string, value: number } [];
}
