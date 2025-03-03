
import learners from "../data/learners";

// console.log(learners.data);

function Learner() {   
    const learnersList = learners.map(learners => (
       <div>
        <h2>{learners.name}</h2>
        <p>Bio: {learners.bio}</p>
        <p>{learners.scores}</p>
       </div> 
    ))
    return(
        <div>
            <ul>{learnersList}</ul>
        </div>
    )
}

export default Learner;