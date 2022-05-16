import React from "react"
import Turn from "../imgs/Turn.svg"
export default function FlipCards (props) {
    const [Flip, setFlip]=React.useState(true)
    return (
        <>
        {Flip ? 
        <div className={`face front-face`}>
            <h4>{props.question}</h4>
            <img src={Turn} alt="" onClick={()=>setFlip(false) } />
        </div> : 
        <div className={`face back-face`}>
            <h4>{props.answer}</h4>
            <Options setRespondido={props.setRespondido} setPerguntar={props.setPerguntar} adcAnswered={props.adcAnswered} />
        </div>}
        </>  
    )
}
function Options (props) {
    const listaDeOptions = [
        {option:"1", icon:"close-circle-sharp",texto:"Não lembrei" },
        {option:"2", icon:"help-circle-sharp",texto:"Quase não lembrei" },
        {option:"3", icon:"checkmark-circle-sharp",texto:"Zap!" }
    ]
    const novasOptions=listaDeOptions.map(objeto=>
        <div className={`option option${objeto.option}`} onClick={() => {props.setRespondido(`${objeto.icon}`) ; props.setPerguntar(false) ;props.adcAnswered(`${objeto.icon}`) }  } >
                {objeto.texto}
        </div>)
    return (
        <div className="optionsCSS">
            {novasOptions}
        </div>
    )
}