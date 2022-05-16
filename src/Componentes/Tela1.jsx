import logo from "../imgs/logo.png"
export default function Tela1({setScreen}){
    return(
        <main className="tela1">
            <img src={logo} alt="ZapRecallLogo" />
            <h1>ZapRecall</h1>
            <div onClick={()=>setScreen("tela2")}>Iniciar Recall!</div>
        </main>
    )
}