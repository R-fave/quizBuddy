import { useContext } from "react"
import { QuizContext } from "../helper/Context"


const StartPage = () => {

  const {quizState, setQuizState, setGenQues} = useContext(QuizContext)
  return (
    <div>
      <button className=" border border-black w-full text-2xl p-3 rounded-md hover:bg-gray-500 hover:text-gray-50 " 
       onClick={()=>{
        setQuizState("Quiz")
       }}
      > 
        Start Quiz
      </button>
    </div>
  )
}

export default StartPage
