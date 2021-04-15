

export const getIp = (ip) => {
  return fetch(`https://geo.ipify.org/api/v1?apiKey=at_rHuyiBj5EZCctq3a8RjpBuOrJs60m&ipAddress=${ip}`)
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
  return fetch(`https://geo.ipify.org/api/v1?apiKey=at_rHuyiBj5EZCctq3a8RjpBuOrJs60m`)
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