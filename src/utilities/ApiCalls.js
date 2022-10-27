export const retrieveSightings = async () => {
  const response = await fetch('http://localhost:3001/sightings')
  const data = await errorHandler(response)
  return data
}

export const reportSighting = async (sightingInfo) => {
  const response = await fetch('http://localhost:3001/sightings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sightingInfo)
  })
  const data = await errorHandler(response)
  return data
}

export const deleteSighting = async (id) => {
  const response = await fetch(`http://localhost:3001/sightings/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await errorHandler(response)
  return data
}

export const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message)
  } else {
    return response.json()
  }
}
