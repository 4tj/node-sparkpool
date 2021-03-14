declare module 'node-sparkpool' {

  export enum ResponseCodes {
    200 = 'success',
    302 = 'invalid parameters',
    500 = 'server error'
  }

  export interface CurrencyStats {
    poolHashrate?: string
    income?: number
    meanIncome24h?: number
    incomeHashrate?: string
    blocks?: number
    miners?: number
    workers?: number
    networkHashrate?: string
    networkHashrateDiff?: number
    difficulty?: string
    difficultyDiff?: number
    hashrate?: string
    hashrateDiff?: number
    usd?: number
    usdDiff?: number
    cny?: number
    cnyDiff?: number
    usdMarketValue?: number
    cnyMarketValue?: number
    rank?: number
  }

  export interface currencyStatsHistory {
    difficulty: string
    hashrate: string
    income: number
    incomeHashrate: string
    usd: number
    cny: number
    time: string
  }

  export interface PoolStats {
    pool: string
    currency: string
    income: number
    meanIncome24h: number
    incomeHashrate: string
    blocks: number
    hashrate: string
    miners: number
    workers: number
    usd: number
    usdDiff: number
    cny: number
    cnyDiff: string
    networkHashrate: string
    diff: number
    message?: string
  }

  export interface MinerSharesHistory {
    time: string
    hashrate: string
    meanHashrate: string
    localHashrate: string
    validShares: number
    staleShares: number
    invalidShares: number
  }

  export interface MinerStats {
    hashrate: string
    meanHashrate24h: string
    localHashrate: string
    meanLocalHashrate24h: string
    validShares24h: number
    staleShares24h: number
    invalidShares24h: number
    onlineWorkerCount: number
    offlineWorkerCount: number
  }

  export interface WorkerCountHistory {
    time: string
    count: number
  }

  export interface WorkerList {
    worker: string
    hashrate: string
    meanHashrate24h: string
    localHashrate: string
    meanLocalHashrate24h: string
    meanHashrateDiff: string // Math.abs(meanLocalHashrate24h-meanHashrate24h)/meanLocalHashrate24h
    validShares: number
    staleShares: number
    invalidShares: number
    validShares24h: number
    staleShares24h: number
    invalidShares24h: number
    staleRate: number
    invalidRate: number
    online: boolean
    lastReportTime: string
    pager?: {
      pageSize?: number
      currentPage?: number
      orderBy?: string
      direction?: string
      totalPage?: number
      totalCount?: number
    }
  }

  export interface WorkerSharesHistory {
    time: string
    hashrate: string
    meanHashrate: string
    localHashrate: string
    validShares: number
    staleShares: number
    invalidShares: number
  }

  export interface WorkerStats {
    hashrate: string
    meanHashrate24h: string
    localHashrate: string
    meanLocalHashrate24h: string
    validShares24h: number
    staleShares24h: number
    invalidShares24h: number
  }

  export interface BillList {
    time: string
    amount: number
    transactionId: string
    exchangeInfo: string
    status: string // INIT, PENDING, ACCEPT, SUBMITED_TO_USER, FINALIZED, SUCCESS
    uniqNo: string
    pager: {
      pageNum: number
      pageSize: number
      totalCount: number
    }
  }

  export interface BillStats {
    balance: number
    initBalance: number
    penddingBalance: number
    lastPaid: number
    lastPayTime: string
    totalPaid: number
    pay1day: number
    pay1week: number
    paid30days: number
  }

  export interface PayoutHistory {
    time: string
    amount: number
    meanAmount: number
  }

  export interface SparkPool {
    minerSharesHistory (options: { currency: string, miner: string, zoom?: string }): Promise<MinerSharesHistory[]>,
    minerStats (options: { currency: string, miner: string }): Promise<MinerStats>,
    workerCountHistory (options: { currency: string, miner: string, zoom?: string }): Promise<WorkerCountHistory[]>,
    workerList (options: {
      currency: string,
      miner: string,
      pageSize: number,
      currentPage: number,
      orderBy?: string,
      direction?: string,
      only?: string,
      showDisabled?: number,
      invalidRateSymbol?: string,
      invalidRate?: number,
      staleRateSymbol?: string,
      staleRate?: number,
      meanHashrateDiffSymbol?: string,
      meanHashrateDiff?: number,
      worker?: string
    }): Promise<WorkerList[]>,
    workerSharesHistory (options: { currency: string, miner: string, worker: string, zoom?: string }): Promise<WorkerSharesHistory[]>,
    workerStats (options: { currency: string, miner: string, worker: string }): Promise<WorkerStats>,
    billList (options: { currency: string, miner: string, pageNum?: number, pageSize?: number }): Promise<BillList[]>,
    billStats (options: { currency: string, miner: string }): Promise<BillStats>,
    payoutHistory (options: { currency: string, miner: string }): Promise<PayoutHistory[]>,
    currencyStats (options: { currency: string }): Promise<CurrencyStats>,
    currencyStatsHistory (options: { currency: string, zoom: string }): Promise<currencyStatsHistory[]>,
    poolStats (): Promise<PoolStats[]>,
  }

  export default function (options?: {
    endpoint?: string
  }): SparkPool
}
