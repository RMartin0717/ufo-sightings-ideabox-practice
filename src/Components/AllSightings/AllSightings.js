import React, { useState, useEffect } from 'react'
import SightingCard from '../SightingCard/SightingCard'

const AllSightings = () => {
  const [sightingList, setSightingList] = useState([])

  return(
    <article>
      <h2>Documented Sightings</h2>
      <SightingCard />
    </article>
  )
}

export default AllSightings
