import client from './client'

export default (options = { endpoint: 'https://www.sparkpool.com', timeout: 1000 }) => client(options)
