const retrieveSightings = () => {
  return fetch('http://localhost:3001/sightings')
    .then(response => {
      if(!response.ok) {
        throw new Error('Unable to retrieve server data')
      } else {
        return response.json()
      }
    })
}

const reportSighting = (sightingInfo) => {
  return fetch('http://localhost:3001/sightings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sightingInfo)
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Unable to reach server data')
    } else {
      return response.json()
    }
  })
}

export { retrieveSightings, reportSighting }
