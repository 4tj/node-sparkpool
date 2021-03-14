import axios from 'axios'

function request ({ endpoint }) {
  const instance = axios.create({
    baseURL: endpoint,
    timeout: 1000
  })
  instance.interceptors.response.use((response) => {
    if (response.data?.code !== 200) {
      throw Error(response.data.message)
    }
    return response.data.data
  }, (error) => {
    return Promise.reject(error)
  })
  return instance
}

export default options => {
  const apiRequest = request(options)
  return {
    currencyStats: (params) => apiRequest.get('/v1/currency/stats', { params }),
    currencyStatsHistory: (params) => apiRequest.get('/v1/currency/statsHistory', { params }),
    poolStats: (params) => apiRequest.get('/v1/pool/stats', { params }),
    minerSharesHistory: (params) => apiRequest.get('/v1/miner/sharesHistory', { params }),
    minerStats: (params) => apiRequest.get('/v1/miner/stats', { params }),
    workerCountHistory: (params) => apiRequest.get('/v1/worker/countHistory', { params }),
    workerList: (params) => apiRequest.get('/v1/worker/list', { params }),
    workerSharesHistory: (params) => apiRequest.get('/v1/worker/sharesHistory', { params }),
    workerStats: (params) => apiRequest.get('/v1/worker/stats', { params }),
    billList: (params) => apiRequest.get('/v1/bill/list', { params }),
    billStats: (params) => apiRequest.get('/v1/bill/stats', { params }),
    payoutHistory: (params) => apiRequest.get('/v1/bill/payoutHistory', { params }),
  }
}
