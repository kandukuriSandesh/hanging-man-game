import styles from './KeyBoard.module.css'
import { keys } from '../../constants'

type KeyBoardProps = {
  handleSelectedKey:(key:string) => void,
  selectedKeys:string[],
  disabled:boolean,
  wordToGuess:string
}

function KeyBoard({handleSelectedKey,selectedKeys,disabled,wordToGuess}:KeyBoardProps) {

 
  return (
    <div className={`${styles.buttonDiv}`} >
      {keys.map((key:string,index:number) => {
        return (
        <button disabled={selectedKeys.includes(key) || disabled} onClick={() => handleSelectedKey(key)} key={index} className={`${styles.button} ${wordToGuess.includes(key) && selectedKeys.includes(key) && styles.buttonBack}`} >
          {key}
        </button>
        )
      } )}
    </div>
  )
}

export default KeyBoard