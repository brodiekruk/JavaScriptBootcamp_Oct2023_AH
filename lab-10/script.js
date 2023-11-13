const submissions = [
    {
      name: "Jane",
      score: 95,
      passed: true
    },
  
    {
      name: "Joe",
      score: 77,
      passed: true
    },
  
    {
      name: "Jack",
      score: 59,
      passed: false
    },
  
    {
      name: "Jill",
      score: 88,
      passed: true
    }
  ]
  
  const addSubmission = (array,newName,newScore) => {
    let passFail = true;

    if(newScore>=60) {
        passFail = true
    } else {
        passFail = false
    }

    array.push({name : newName,score : newScore,passed : passFail});
  }

// addSubmission(submissions, "Brodie", 12)
// findLowestScore(submissions)
// console.log(submissions)

  const deleteSubmissionByIndex = (array, index) => {
    array.splice(index,1);
  }

deleteSubmissionByIndex(submissions,2)
console.log(submissions)

  const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex((hotdog)=> {
      console.log(hotdog.score, name)
      return hotdog.name === name
    
    })
    console.log("----------------")
    console.log(index)
   //array.splice(index,1)
    deleteSubmissionByIndex(array, index)
  }
  deleteSubmissionByName(submissions, "Jill")
  console.log(submissions)

  const editSubmission = (array, index, score) => {
    const submission = array[index]
    submission.score = score
    if(score >= 60) {
      submission.passed = true
    }else {
      submission.passed = false
    }

  }

  editSubmission(submissions, 0, 55)
  console.log(submissions)

  const findSubmissionByName = (array, name) => {
    const index = array.findIndex((submission)=> {
      console.log(submission.name, name)
      return submission.name === name
    
    })
  }

  findSubmissionByName(submissions, "Joe")
console.log(submissions)

const findLowestScore = (array) => {
  return array.reduce((lowest, submission) => (submission.score < lowest.score ? submission : lowest),array[0])

}

// const findLowestScore = (array) => {
//   let lowest = array[0]
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < lowest.score)  {
//       lowest = array[i]
//     }
//   }
//   return lowest

// }

console.log()
addSubmission(submissions, "Brodie", 12)
console.log(findLowestScore(submissions))
console.log(submissions)

// let thisThing = findLowestScore(submissions)// {}
// console.log(thisThing.name + ' ---------------------------------')