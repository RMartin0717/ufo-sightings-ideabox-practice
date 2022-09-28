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

export { retrieveSightings }
