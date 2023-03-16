import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export const Status = () => {
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Olha, faz sentido',
    'Parabéns pelo progresso!'
  ])

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }
  return (
    <main className="status">
      <Header title="Tweet"/>

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam et iure, dicta distinctio excepturi, quibusdam ea obcaecati quidem eum porro non doloribus sit accusantium illo? Quos enim nisi quibusdam ducimus." />
      
      <Separator />

      <form onSubmit={createNewAnswers} action="" className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/jeffsdc.png" alt="Jeff Sousa" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer" 
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
