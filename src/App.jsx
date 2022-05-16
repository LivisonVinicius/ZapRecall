import Tela2 from "./Componentes/Tela2"
import React from "react"
import Tela1 from "./Componentes/Tela1"
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

