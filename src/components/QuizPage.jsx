
import { useState, useContext } from "react"
// import { Questions } from "../helper/questionBank"
import { QuizContext } from "../helper/Context"

const QuizPage = ({data}) => {
  
  const [curQues, setCurQues] = useState(0)
  const [optionChoosen, setQptionChossen] = useState("")
  const {score, setScore, quizState, setQuizState} = useContext(QuizContext)

  const chooseOption = (option)=>{
    setQptionChossen(option)
  }

  const nextQuestion = ()=>{
    if (optionChoosen === data[curQues].correctAns){
      setScore(score + 1)
    }
    setCurQues (curQues + 1)
  }

  const prevQuestion = ()=>{
    if (optionChoosen === data[curQues].correctAns){
      setScore(score - 1)
    }
    setCurQues(curQues - 1)
  }

  const finishQuiz = ()=>{
    if (optionChoosen === data[curQues].correctAns){
      setScore(score + 1)
    }
    setQuizState("Result")
  }

  return (
    <div className=" flex w-full h-full max-lg:w-[70%] flex-col justify-center lg:w-[40%] md:w-[60%]">
      <p>Question {curQues+1} of 10</p>
      <h1 className=" text-2xl font-semibold">{data[curQues].propmt}</h1>
      <div className=" flex flex-col w-auto gap-3  my-5">
        <button className={` border border-gray-300 mr-2 p-2 hover:bg-green-100 ${optionChoosen === data[curQues].optionA ? "bg-green-300 hover:bg-green-300" : "bg-transparent"}`} onClick={()=>{chooseOption(data[curQues].optionA)}} >{data[curQues].optionA}</button>
        <button className={`border border-gray-300 mr-2 p-2 hover:bg-green-100 ${optionChoosen === data[curQues].optionB ? "bg-green-300  hover:bg-green-300" : "bg-transparent"}`} onClick={()=>{chooseOption(data[curQues].optionB)}}>{data[curQues].optionB}</button>
        <button className={`border border-gray-300 mr-2 p-2 hover:bg-green-100 ${optionChoosen === data[curQues].optionC ? "bg-green-300  hover:bg-green-300" : "bg-transparent"}`} onClick={()=>{chooseOption(data[curQues].optionC)}}>{data[curQues].optionC}</button>
        <button className={`border border-gray-300 p-2 hover:bg-green-100 ${optionChoosen === data[curQues].optionD ? "bg-green-300  hover:bg-green-300" : "bg-transparent"}`} onClick={()=>{chooseOption(data[curQues].optionD)}}>{data[curQues].optionD}</button>
      </div>

      {curQues === data.length - 1 ? 
      (<button className=" border border-gray-300 p-3 text-2xl font-medium hover:bg-red-300 my-2" onClick={finishQuiz}>Finish Quiz</button>): 
      (<button className=" border border-gray-300 p-3 text-2xl font-medium hover:bg-red-300 my-2" onClick={nextQuestion}>Next Question</button> )
      }

      {curQues >= 1 && (<button className=" border border-gray-300 p-3 text-2xl font-medium hover:bg-red-300" onClick={prevQuestion}>Perv Question</button>)  }
      
      
    </div>


  )
}

export default QuizPage
