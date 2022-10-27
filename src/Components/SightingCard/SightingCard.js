const SightingCard = ({ id, location, description }) => {
  return(
    <section>
      <h3>Sighting {id}</h3>
      <h4>Location: {location}</h4>
      <p>{description}</p>
    </section>
  )
}

export default SightingCard
