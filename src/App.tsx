import { useState } from 'react'

import styles from './App.module.css'
import HangingMan from './components/HangingMan/HangingMan'
import TypedLetters from './components/TypedLetters/TypedLetters'
import KeyBoard from './components/KeyBoard/KeyBoard'
import words from './wordList.json'
const wordToGuess:string = words[Math.floor(Math.random() * words.length)]
function App() {
  const [selectedKeys,setSelectedKeys] = useState<string[]>([])
  const wrongAnswers:string[] = selectedKeys.filter((key) => !wordToGuess.includes(key))
  const [attempts,setAttempts] = useState<number>(6)
  console.log({wrongAnswers,selectedKeys,wordToGuess})
  const handleSelectedKey = (key:string):void => {
      if(!selectedKeys.includes(key)){
          setSelectedKeys(selectedKeys => [...selectedKeys,key])
      }
      const wordToGuessArr = wordToGuess.split("")
      if(wordToGuessArr.includes(key)) return
      const occurrences = wordToGuessArr.filter(letter => letter === key).length;

        if (occurrences > 0) {
          setAttempts(attempts => attempts - occurrences);
        } else {
          setAttempts(attempts => attempts - 1);
        }
  }

  const disabled:boolean = wrongAnswers.length >= 6

  const title = (
  <>
  <h2 style={{marginBottom:"0px"}} >{disabled?"Refresh Page to Retry":"Lets Begin..!"}</h2>
  <h2>{attempts} wrong attemps left</h2>
  
  </>
)

  return (
    <>
       <div className={`${styles.outerDiv}`}  >
           {title}
           <HangingMan wrongAnswers={wrongAnswers} />
           <TypedLetters selectedKeys={selectedKeys} wordToGuess = {wordToGuess} />
           <KeyBoard wordToGuess = {wordToGuess} disabled = {disabled} selectedKeys={selectedKeys} handleSelectedKey={handleSelectedKey} />
       </div>
    </>
  )
}

export default App
