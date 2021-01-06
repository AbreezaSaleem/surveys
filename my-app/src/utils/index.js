import jwt_decode from 'jwt-decode'

const api = async function (path, init = {}) {
  
  init = {
    ...init,
    credentials: 'same-origin',
    headers: {
      ...init.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    },
  }

  const response = await fetch(`/${path}`, init)
  return response
  // if (!response.ok) {
  //   let { message = '' } = await response.json()
  //   const error = new Error(`Api call to path '${path}' failed with ${response.status}.`)
  //   error.response = response
  //   error.message = message
  //   throw error
  // }

  // let text = await response.text()

  // try {
  //   return JSON.parse(text)
  // }
  // catch (error) {
  //   return text
  // }
}

function parseJwt(token) {
  try {
    if (!token) return
    const decoded = jwt_decode(token)
    return decoded
  } catch (error) {
    console.log('Error parsing token:', token)
  }
}

export {
  api,
  parseJwt
}