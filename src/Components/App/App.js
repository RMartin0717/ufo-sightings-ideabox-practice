import './App.css';
import AllSightings from '../AllSightings/AllSightings'
import AddSighting from '../AddSighting/AddSighting'

function App() {
  return (
    <main>
      <h1>UFO Sightings</h1>
      <AddSighting />
      <AllSightings />
    </main>
  );
}

export default App
