import CardDev from "../../components/CardServ"
import { useEffect, useState } from "react"
import "./style.css"

import api from "../../utils/api"

function ListaServicos() {

    const  [serv, setServ] = useState<any[]>([]);

    const [techsDigitada, setTechsDigitada] = useState<string>("");

    const [servFiltrados, setServFiltrados] = useState<any[]>(serv);

    useEffect(() =>{
        document.title = "Lista Servicos - VSConnect"
        listarServicos()
    }, [] )

    function buscarPorServ(event: any){
        event.preventDefault();

        const servFiltrados = serv.filter((serv: any) => serv.techs.includes(techsDigitada.toLocaleUpperCase()));

        if(servFiltrados.length === 0) {
            alert("Nenhum servicos com essas techs encontrado")
        }else{
            setServFiltrados(servFiltrados)
        }
    }

    function retornoTechsGeral(event: any) {
        if(event.target.value === ""){
            setServFiltrados(serv)
        }
        setTechsDigitada(event.target.value)
    }

    function listarServicos(){
        api.get("servicos").then((response: any) =>{
            console.log(response.data)
            setServ(response.data)
            

        })
    }

 

    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                        <form method="post"  onSubmit={buscarPorServ}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoTechsGeral}/>
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                            {servFiltrados.map((serv: any, index: number) => {
                                    return <li key={index}>
                                          <CardDev 
                                          id={serv.id}
                                          nomeServ={serv.nomeServ}
                                          valor={serv.valor}
                                          descricao={serv.descricao}
                                          techs={serv.techs}
                                           />
                                    </li>
                                }
                                )}
                                    
                            </ul>
                        </div>
                </div>
            </div>
        </main>
    )
}

export default ListaServicos;