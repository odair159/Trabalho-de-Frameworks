
export const Lista = ({lista}) => {
    return (
        <div className = 'container'>
            <div className="Listinha">
             <div className="ODAS">
             <p> {lista.length} odas </p>
             </div>   
           
                    {lista.map(oda => (
                        <div key={oda._id}>
                            <div className="NomeEUsuario"> 
                            <h1>nome: {oda.nome}</h1>
                            <p> usuario: {oda.usuario} </p>
                            <p> descricao: {oda.descricao} </p>
                            </div>
                            </div>
                            
                    ))}
                </div>
            </div>
             
       
    )
}
    