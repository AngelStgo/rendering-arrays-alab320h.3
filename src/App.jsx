
// import { useState } from 'react'
import './App.css'
import Learner from './components/Learner'
import Score from './components/Score'

function App() {
  // const [learners, setLearners] = useState(data);
  // const [newLearnes, setNewLarners] = useState({
  //   name: "",
  //   bio: ""
  // });

  return (
    <div>
      <h1>Learners Info:</h1>

     
      <Learner/>
      {/* <Score/> */}
    </div>
  )
}

export default App
