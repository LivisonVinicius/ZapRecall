import logo from "./imgs/logo.png"
import Play from "./imgs/Play.svg"
import Turn from "./imgs/Turn.svg"
import React from "react"
export default function App () {
    return (
        <RenderizarTela />
    )
}

function RenderizarTela() {
    const [screen, setScreen]=React.useState("home")
    if (screen==="home"){
        return (
            <Tela1 setScreen={setScreen}/>
        )
    }
    if (screen==="tela2"){
        return(
            <Tela2 />
        )
    }
}

function Tela1({setScreen}){
    return(
        <main className="tela1">
            <img src={logo} alt="ZapRecallLogo" />
            <h1>ZapRecall</h1>
            <div onClick={()=>setScreen("tela2")}>Iniciar Recall!</div>
        </main>
    )
}

function Tela2 (){
    const QnA = [
        {
            question: "O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript",
        },
        {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }
    ]
    QnA.sort(parametro)
    return (
        <main className="tela2">
            <div className="title">
                <img src={logo} alt="ZapRecallLogo" />
                <h1>ZapRecall</h1>
            </div>
            <div className="perguntas">
                {QnA.map((pergunta, index)=> <Pergunta question={pergunta.question} answer={pergunta.answer} index={index} key ={index}/>)}
            </div>
        </main>
    )
}
function parametro(){
    return Math.random()-0.5;
}

function Pergunta(props){
    const [Flip, setFlip]=React.useState(true)
    const [Perguntar, setPerguntar]= React.useState(false)
    return(
        <div className={`pergunta ${Perguntar===false?"":"escondido"}`}>
            <div className="initial">
                <h3>Pergunta {props.index +1}</h3>
                <img src={Play} alt="play" onClick={()=>setPerguntar(true) } />
            </div>
            <div className={`face front-face ${Perguntar===true?"":"escondido"}`}>
                <h4>{props.question}</h4>
                <img src={Turn} alt="" />
            </div>
        </div>
    )
}