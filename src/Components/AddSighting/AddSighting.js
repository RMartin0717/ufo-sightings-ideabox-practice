import React, { useState, useEffect } from 'react'
import { reportSighting } from '../../utilities/ApiCalls'

const AddSighting = () => {
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInput = (setInputState, event) => {
    setInputState(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitReport()
  }

  const submitReport = () => {
    if(location && description) {
      let sightingData = {
        location: location,
        description: description
      }
      setError('')
      addSighting(sightingData)
      clearInputs()
    } else {
      setError('Please fill out the report form in its entirety.')
    }
  }

  const addSighting = async (data) => {
    try {
      const postResponse = await reportSighting(data)
      setSubmitMessage('Thank you for your report.')
    } catch (error) {
      setError(error.message)
    }
  }

  const clearInputs = () => {
    setLocation('')
    setDescription('')
  }

  return(
    <form>
      <h2>Report Sighting</h2>
      <input
        type='text'
        placeholder='Location of Sighting'
        name='location'
        value={location}
        onChange={event => handleInput(setLocation, event)}
      />
      <input
        type='text'
        placeholder='Description of Sighting'
        name='description'
        value={description}
        onChange={event => handleInput(setDescription, event)}
      />
      <button onClick={event => handleSubmit(event)}>Submit Sighting Report</button>
      {error &&
        <p>{error}</p>
      }
      {submitMessage &&
        <p>{submitMessage}</p>
      }
    </form>
  )
}

export default AddSighting
