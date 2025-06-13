import { type JSX } from 'react'
import styles from './HangingMan.module.css'

type HangingManProps = {
  wrongAnswers:string[]
}

function HangingMan({wrongAnswers=[]}:HangingManProps) {

    const Head = <div className={`${styles.head}`} ></div>
    const Neck = <div className={`${styles.neck}`} ></div>
    const rightHand = <div className={`${styles.rightHand}`} ></div>
    const leftHand = <div className={`${styles.leftHand}`} ></div>
    const rightLeg = <div className={`${styles.rightLeg}`} ></div>
    const leftLeg = <div className={`${styles.leftLeg}`} ></div> 

    const allParts: JSX.Element[] = [Head,Neck,leftHand,rightHand,leftLeg,rightLeg]; 
    
  return (
      <div className={`${styles.hmOuterDiv}`} >
        <div className={`${styles.horizantal2}`} ></div>
        <div className={`${styles.vertical1}`} ></div>
        <div className={`${styles.horizantal1}`} ></div>
        <div className={`${styles.vertical2}`} ></div>
        <div className={`${styles.humanDiv}`} >
            
        {
          allParts.map((component:JSX.Element,index:number):JSX.Element | string =>{
               if(index+1 <= wrongAnswers.length){
                return (
                  <div key={index} >
                     {component}
                  </div>
                ) 
               }
               return ""
          })
        }
        </div>

    </div>
  )
}

export default HangingMan