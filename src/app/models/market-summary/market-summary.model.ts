export interface MarketSummary {
    gainers: number;
    losers: number;
    stockCount: number;
    tradesCount: number;
    totalVolume: number;
    totalValue: number;
    borsaDate: string;
    id: number;
  }
  export interface MarketMoneyFlow {
    money: number;
    pctMoney: number;
    tradeClass: string;
    id: number;
  }
  export interface EgxSummary {
    difference: number;
    value: number;
    name: string;
    id: number;
  }
  export interface Investor {
    sell: number;
    buy: number;
    investorDate: Date,
    name: string;
  }
  export interface EgxChart {
    value: number;
    date: Date,

  }
  export interface Market {
    nameA: string;
    nameE: string;
    marketValue: number;
    changeValue: number;
    changePercentage: number;
  }
  export interface MarketIndicatorDto {
    nameA: string;
    nameE: string;
    marketValue: number;
    changePercent: number;
    changeValue: number;
    markeTypetId: number;
    marketTypeName: string;
  }
  export interface SectorsDto{
    period: string;
    lastUpdated: Date;
    sectorId: number;
    sectorName: string;
    valuePcnt: number;
    value: number;
  }
  export interface CurrencyDto {
    ask: number;
    bid: number;
    id: number;
    lastUpdated: Date;
    name: string;
  }