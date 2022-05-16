import Party from "../imgs/party.png"
import Sad from "../imgs/sad.png"
export default function Footer (props) {
    const respostasErradas = props.Answered.filter(resposta => resposta==="close-circle-sharp")
    if(props.Answered.length===8){
        return(
            respostasErradas.length===0 ? 
        <footer>
            <p><img src={Party} alt="Boa"/>Parabéns!</p>
            <h6>Você não esqueceu de {"\n"}
                nenhum flashcard!</h6>
            <NumResps Answered={props.Answered} />
        </footer>:
        <footer>
            <p><img src={Sad} alt="Putz"/>Putz...</p>   
            <h6>Ainda faltam alguns...{"\n"}
                Mas não desanime!</h6>
            <NumResps Answered={props.Answered} />
        </footer> 
        )   
    }
    else{
        return (
        <footer>
            <NumResps Answered={props.Answered} />
        </footer>
    )
    }
}
function NumResps (props){
    const listaDeIcons=props.Answered.map((Resposta,index) =>  <ion-icon name={Resposta} class={`md hydrated ${Resposta}`} key={index}></ion-icon>)
    return (
        <>
            {`${props.Answered.length}/8 Concluídos`}
            <div>
                {listaDeIcons}
            </div>
        </>
    )
}