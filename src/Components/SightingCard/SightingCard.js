import { deleteSighting } from '../../utilities/ApiCalls'

const SightingCard = ({ id, location, description }) => {
  const deleteCard = (id) => {
    deleteSighting(id)
  }

  return(
    <section>
      <h3>Sighting {id}</h3>
      <h4>Location: {location}</h4>
      <p>{description}</p>
      <button onClick={event => deleteSighting(id)}>delete</button>
    </section>
  )
}

export default SightingCard
