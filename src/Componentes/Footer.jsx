export default function Footer (props) {
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
            <NumResps />
        </footer>
    )
    }
}
function NumResps (){
    return (
        <>
            {`${props.Answered.length}/8 Concluídos`}
            <div>
                {listaDeIcons}
            </div>
        </>
        
    )
}