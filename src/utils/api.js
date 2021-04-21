const key = process.env.REACT_APP_IP_ACCESS_KEY;

export const getIp = (ip) => {
  return fetch(`https://geo.ipify.org/api/v1?apiKey=at_${key}&ipAddress=${ip}`)
    .then((res) => {
      if (res.ok) {
          return res.json()
      }
      return Promise.reject(`${res.status}`);
    })
    .then((data) => {
      return data
    })
}

export const getInitialIp = () => {
  return fetch(`https://geo.ipify.org/api/v1?apiKey=at_${key}`)
    .then((res) => {
      if (res.ok) {
          return res.json()
      }
      return Promise.reject(`${res.status}`);
    })
    .then((data) => {
      return data
    })
}