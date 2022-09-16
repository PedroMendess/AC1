import { useState } from "react"

export const PAGINA_INICIAL = () => {
    const [name, setName] = useState("");
    const[sobrenome, setsobrenome] = useState("");
    const[idade, setidade] = useState("");
    const[comida,setcomida] = useState("");
    const[ir,setlugares] = useState("");
    const [steps, setSteps] = useState(1);
    
    
    const chamaryt = () => {
        window.location.href = `https://www.google.com.br/maps/search/${ir}`;
    }
    const handleAddSteps = () => {
        if (steps === 5) return;
  
        setSteps(steps + 1);
     };

     const handleRemoveSteps = () => {
        if (steps === 1) return;
  
        setSteps(steps - 1);
     };


    return(
<>

        {steps === 1 && (
        <>

        <div>
            <h1>
                Seja bem-vindo.
            </h1>
        </div>
        <div>
            <h2>Para acessar as proximas paginas, digite seu nome e sobrenome.</h2>
        </div>
        
        <div>
            <label>Insira seu nome </label><br></br>
            <input type="name" value={name} onChange={(e) => setName(e.target.value)}  />
            <br></br><label>Insira seu sobrenome </label><br></br>
            <input type="sobrenome" value={sobrenome} onChange={(e) => setsobrenome(e.target.value)} />
            <br></br><label>Insira sua idade</label><br></br>
            <input type="idade" value={idade} onInput={(e) => setidade(e.target.value)} />
            <br></br><label>Qual é sua comida favorita</label><br></br>
            <input type="comida" value={comida} onChange={(e) => setcomida(e.target.value)} />
        </div>
        <div>
            <button onClick={handleAddSteps}>
            Avançar
            </button>
        </div>
        </>
        )}
        {steps === 2 && (
            <>
        
            <h2>Qual lugar gostaria de ir, {`${name}`} {`${sobrenome}`}?</h2>
            <div>
                <label>Insira o lugar que gostaria de ir</label>
                <input type="text" value={ir} onChange={(e) => setlugares(e.target.value)} />
            </div>
            <button onClick={handleAddSteps}>
            Avançar
            </button>
            <button onClick={handleRemoveSteps}>
                Voltar
            </button>
            </>
            
        )}
        {steps === 3 && (
            <>
            <h3>{`${name}`}, clique no botão. </h3>
            <div>
                <button onClick={chamaryt} >
                    Acesse
                </button>
                <button onClick={handleRemoveSteps}>
                Voltar
            </button>
            </div>
            </>
        )}


    </>
    )
}