import logo from "../imgs/logo.png"
import Play from "../imgs/Play.svg"
import Turn from "../imgs/Turn.svg"
import Party from "../imgs/party.png"
import Sad from "../imgs/sad.png"
import React from "react"
import Footer from "./Footer"
export default function Tela2 (){
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

    const [Answered,setAnswered] = React.useState ([])
    function adcAnswered (Resps){
        setAnswered([...Answered,Resps])
    }

    return (
        <>
            <main className="tela2">
                <div className="title ">
                    <img src={logo} alt="ZapRecallLogo" />
                    <h1>ZapRecall</h1>
                </div>
                <div className="perguntas">
                    {QnA.map((pergunta, index)=> <Pergunta question={pergunta.question} answer={pergunta.answer} index={index} key ={index} adcAnswered={adcAnswered} />)}
                </div>
            </main>
            <Footer Answered={Answered} />
        </>
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
function FlipCards (props) {
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

    return (
        <div className="optionsCSS">
            <div className="option option1" onClick={() => {props.setRespondido("close-circle-sharp") ; props.setPerguntar(false) ;props.adcAnswered("close-circle-sharp") }  } >
                Não lembrei
            </div>
            <div className="option option2" onClick={() => {props.setRespondido("help-circle-sharp") ; props.setPerguntar(false) ; props.adcAnswered("help-circle-sharp") }}>
                Quase não lembrei
            </div>
            <div className="option option3" onClick={() => {props.setRespondido("checkmark-circle-sharp") ; props.setPerguntar(false) ; props.adcAnswered("checkmark-circle-sharp")}}>
                Zap!
            </div>
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

function Footer (props) {
    const listaDeIcons=props.Answered.map(Resposta =>  <ion-icon name={Resposta} class={`md hydrated ${Resposta}`}></ion-icon>)
    const respostasErradas = props.Answered.filter(resposta => resposta==="close-circle-sharp")
    if(props.Answered.length===8){
        return(
            respostasErradas.length===0 ? 
        <footer>
            <p><img src={Party} alt="Boa"/>Parabéns!</p>
            <h6>Você não esqueceu de {"\n"}
                nenhum flashcard!</h6>
            {`${props.Answered.length}/8 Concluídos`}
            <div>
                {listaDeIcons}
            </div>
        </footer>:
        <footer>
            <p><img src={Sad} alt="Putz"/>Putz...</p>   
            <h6>Ainda faltam alguns...{"\n"}
                Mas não desanime!</h6>
            {`${props.Answered.length}/8 Concluídos`}
            <div>
                {listaDeIcons}
            </div>
        </footer> 
        )   
    }
    else{
        return (
        <footer>
            {`${props.Answered.length}/8 Concluídos`}
            <div>
                {listaDeIcons}
            </div>
        </footer>
    )
    }
}