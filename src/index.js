import client from './client'

export default (options = {}) => client(options)

export const ResponseCodes = {
  200: 'success',
  302: 'invalid parameters',
  500: 'server error'
}
