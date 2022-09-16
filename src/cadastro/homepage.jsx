import { useState } from "react"

export const Homepage = () => {
    const [name, setName] = useState("");
    const [musica, setmusica] = useState("");
    const [steps, setSteps] = useState(1);
    
    const chamaryt = () => {
        window.location.href = `https://www.youtube.com/results?search_query=${musica}`;
    }
    const handleAddSteps = () => {
        if (steps === 4) return;
  
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
            <h2>Para acessar as proximas paginas, digite seu nome.</h2>
        </div>
        
        <div>
            <label>Insira seu nome </label>
            <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
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
        
            <h2>Qual sua banda/musica favorita, {`${name}`}?</h2>
            <div>
                <label>Insira sua banda/musica</label>
                <input type="text" value={musica} onChange={(e) => setmusica(e.target.value)} />
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