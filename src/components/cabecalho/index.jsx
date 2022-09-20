
export const Cabecalho = ({pesquisa, busca}) => {
    return (
        <div className="ContainerBoca">
            <div className="boca">
            <h1>BocaWeb</h1>
            </div>
            
            
           
       <div className="ImputODA">
       <input 
            type="text" 
            name="busca" 
            value={pesquisa}
            placeholder = "pesquisa, odas"
            onChange={busca}
        />        
        </div>     
       
        </div> 
    )
}

