import React from 'react'
import styles from './TypedLetters.module.css'

type TypedLettersProps = {
  wordToGuess:string,
  selectedKeys:string[]
}

function TypedLetters({wordToGuess,selectedKeys}:TypedLettersProps) {
  return (
    <div className={`${styles.wordDiv}`}   >
     {
      wordToGuess.split("").map((word:string) => {
        return(
          <span className={`${styles.word}`} >
            <span className={`${selectedKeys.includes(word) ? "" : styles.wordHidden}`}  >
            {word} 
            </span>
          </span>
        )
      })
     }
    </div>
  )
}

export default TypedLetters