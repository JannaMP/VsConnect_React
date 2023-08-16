import CardDev from "../../components/CardDev"
import { useState } from "react"
import "./style.css"

export default function ListaServicos() {

    const  [serv, setServ] = useState<any[]>([

        {
            nomeServ: ["Desenvolvimento de site institucional - Gateway de Pagamento / Fintech"],
            valor: "R$ 1300,00",
            descricao: ["Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes."],
            techs: ["HTML", "CSS", "REACT"]
        },
        {
            nomeServ: ["Bot telegram Pagamento"],
            valor: "R$ 2400,00",
            descricao: ["Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento."],
            techs: ["PYTHON"]
        },
        {
            nomeServ: ["Caixa Rápido"],
            valor: "R$ 1200,00",
            descricao: ["Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas."],
            techs: ["PYTHON"]
        },

    ])

    const [techsDigitada, setTechsDigitada] = useState<string>("");

    const [servFiltrados, setServFiltrados] = useState<any[]>(serv);

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
                                    return <li>
                                          <CardDev 
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