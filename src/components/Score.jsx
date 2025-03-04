import React from 'react'
import learners from "../data/learners";

 function Score() {
    const learnersScore = learners.map((learners, idx) => (
        <div key={idx}>
            {/* <h3>Date: {learners.scores.date}</h3>
            <h3>Score:{learners.scores.score}</h3> */}
        </div>
    ))
  return (
    <div>{learnersScore}</div>
  )
}
console.log(learners);


export default Score;
