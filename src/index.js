import client from './client'

export default (options = { endpoint: 'https://www.sparkpool.com', timeout: 1000 }) => client(options)

export const ResponseCodes = {
  200: 'success',
  302: 'invalid parameters',
  500: 'server error'
}
