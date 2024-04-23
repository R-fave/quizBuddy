import { useContext } from "react"
import { QuizContext } from "../helper/Context"
// import { Questions } from "../helper/questionBank"


const ResultPage = ({data}) => {
  const {score, setQuizState, setScore, setGenQues, genQues} = useContext(QuizContext)

  const restartQuiz = ()=>{
    setQuizState("Start")
    setScore(0)
    {genQues === "true" ? setGenQues("gen") : setGenQues("true")}
  }

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className={`text-7xl my-4 ${score < 6 ? " text-red-400" : "text-teal-400"}`}>
       {score} / {data.length}
      </div>
      <div>
        <button className=" border border-gray-500 text-2xl p-2 rounded-md mt-5" onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
    
  )
}

export default ResultPage
