import React, { useState, useEffect } from 'react'
import SightingCard from '../SightingCard/SightingCard'
import { retrieveSightings } from '../../utilities/ApiCalls'

const AllSightings = () => {
  const [sightingList, setSightingList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    retrieveSightings()
      .then(sightings => {
        if(mounted) {
          setSightingList(sightings)
        }
      })
      .catch(error => setError('Unable to retrieve data'))
    return () => mounted = false
  }, [sightingList])

  const allSightings = sightingList?.map(sighting => {
    return(
      <SightingCard
        id={sighting.id}
        location={sighting.location}
        description={sighting.description}
      />
    )
  })

  return(
    <article>
      <h2>Documented Sightings</h2>
      {allSightings}
    </article>
  )
}

export default AllSightings
