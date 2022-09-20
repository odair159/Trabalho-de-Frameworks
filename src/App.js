import './App.css';
import { Component } from 'react';
import { Cabecalho } from './components/cabecalho';
import { Rodape } from './components/rodape';
import { Lista } from './components/corpo';

class App extends Component{ 

    state = {
        busca:'',
        odas: []
    }

    componentDidMount(){
        this.carregaODAs();
    }

    carregaODAs(){  
        const {busca} = this.state;
        fetch('https://www.bocaweb.com.br/apibocaweb?nome-'+busca)
        .then(response => response.json())
        .then(odas => this.setState({odas}))
    }

    buscaODA = (evento) => {
        this.setState({busca: evento.target.value});
        this.carregaODAs()
    }

    render(){
        const {odas} = this.state; 
        return (
            <section className = "container">
                <Cabecalho 
                    pesquisa = {this.state.busca}
                    busca = {this.buscaODA}
                /> 

                <div className='ContainerLista'>
                <Lista   lista = {odas}/>

                </div>

                
                <Rodape>
                    
                </Rodape>
            </section>
        )
    }
}

export default App;
