import Play from "../imgs/Play.svg"
import React from "react"
import FlipCards from "./FlipCards"
export default function Perguntas (props){
    const QnA = [
        {question: "O que é JSX?",
        answer: "uma extensão de linguagem do JavaScript"},
        {question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __",
        answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"},
        {question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"},
        {question: "Usamos props para __",
        answer: "passar diferentes informações para componentes "},
        {question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    QnA.sort(parametro)
    return(
        <div className="perguntas">
            {QnA.map((pergunta, index)=> <Pergunta question={pergunta.question} answer={pergunta.answer} index={index} key ={index} adcAnswered={props.adcAnswered} />)}
        </div>
    )
}
function parametro(){
    return Math.random()-0.5;
}
function Pergunta(props){
    const [Respondido, setRespondido] = React.useState("")
    const [Perguntar, setPerguntar]= React.useState(false)

    return(
        <div className={`pergunta`}>
            {!Perguntar ?
             <div className={`initial ${!Respondido ? "" : Respondido}`}>
                <h3>Pergunta {props.index +1}</h3>
                <Icon Respondido={Respondido} setPerguntar={setPerguntar} />
            </div> : 
            <FlipCards question = {props.question} answer={props.answer} setRespondido={setRespondido} setPerguntar={setPerguntar} adcAnswered={props.adcAnswered} />}
        </div>
    )
}
function Icon(props) {
    return (
        <>
            {!props.Respondido ? <img src={Play} alt="play" onClick={()=>props.setPerguntar(true) } /> : <ion-icon name={props.Respondido}></ion-icon> }
        </>
    )
}