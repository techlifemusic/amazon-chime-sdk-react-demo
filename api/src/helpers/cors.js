export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
}

export const withCors = (response) => ({
  ...response,
  headers: { ...CORS_HEADERS, ...response.headers },
})
