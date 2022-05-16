import logo from "../imgs/logo.png"
import React from "react"
import Footer from "./Footer"
import Perguntas from "./Perguntas"
export default function Tela2 (){
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
                <Perguntas adcAnswered={adcAnswered} />
            </main>
            <Footer Answered={Answered} />
        </>
    )
}