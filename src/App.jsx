import { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage"
import ResultPage from './components/ResultPage'
import { QuizContext } from './helper/Context'

function App() {
  const [quizData, setQuizData] = useState([])
  const [quizState, setQuizState] = useState("Start")
  const [genQues, setGenQues] = useState("true")
  const [score, setScore] = useState(0)

  useEffect(()=>{
      axios.get("https://the-trivia-api.com/v2/questions").then((res) => {
      setQuizData(res.data)
      
    }).catch((err) => {
      console.log("401 Error")
    });
  },[(genQues === "gen")])

 const data = quizData.map((data)=>{
    
    let incorrect = [...data.incorrectAnswers]
    let n = 4
    let randomIndex = Math.floor(Math.random()*(n+1))
    incorrect.splice(randomIndex, 0, data.correctAnswer)
    const newData = {
      propmt: data.question.text,
      optionA: incorrect[0],
      optionB: incorrect[1],
      optionC: incorrect[2],
      optionD: incorrect[3],
      correctAns: data.correctAnswer
    }
    return (newData)
  })

  return (
    <div style={{backgroundImage:'url("../intro-page.jpg")'}} className=' bg-cover flex justify-center flex-col items-center h-screen w-screen'>
      <h1 className=' text-5xl font-bold mb-2 mt-5'>QuizBuddy</h1>

      <QuizContext.Provider value={{quizState, setQuizState, score, setScore, setGenQues, genQues}}>
        {quizState === "Start" && <StartPage/>}
        {quizState === "Quiz" && <QuizPage  data= {data} />}
        {quizState === "Result" && <ResultPage data={data}/>}
      </QuizContext.Provider>

    </div>
  )
}

export default App
