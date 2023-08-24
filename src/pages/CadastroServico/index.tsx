//estilização
import "./style.css";

//Hook
import { useEffect, useState } from "react";

import api from "../../utils/api";

function CadastroServico() {

    const [titulo, setTitulo] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [valor, setValor] = useState<string>("")

    function cadastrarServico (event: any) {
        event.prevent.default();

        const formdata = new FormData ()

        formdata.append("titulo", titulo)
        formdata.append("descricao", descricao)
        formdata.append("valor", valor)
    }

    const [skillsSelecionadas, setSkillsSelecionadas] = useState<string[]>([]); // Array (lista) para armazenar as skills selecionadas



    useEffect(() => {
        //Inserindo o título da guia de endereço da página atual.
        document.title = "VSConnect - Lista de Serviços";
    }, []);

    return (
        <main className="main_cad_servico">
            <div className="container container_cad_serv">
                <div className="cad_serv_conteudo">
                    <h1>Cadastro de Serviço</h1>
                    <hr />
                    <form className="cad_serv_formulario" action="">
                        <div className="cad_serv_box_input">
                            <label htmlFor="titulo">Titulo do serviço:</label>
                            <input
                                type="text"
                                id="titulo"
                                placeholder="Ex: E-commerce para pizzaria"
                            />
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="descricao">Descrição do serviço:</label>
                            <textarea
                                name=""
                                id="descricao"
                                placeholder="Digite aqui a descrição resumida do que você precisa:"
                            ></textarea>
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="proposta">Proposta:</label>
                            <input
                                type="text"
                                id="proposta"
                                // onKeyUp={ }
                                maxLength={17}
                                placeholder="Digite o valor que deseja pagar:"
                            />
                        </div>

                        <span>Tecnologias Desejadas</span>
                        <hr />
                        <div className="cad_serv_box_skills">
                            <span>Selecione uma Skill para adicionar</span>
                            <div className="cad_linha_select">
                                <select defaultValue={"DEFAULT"} name="" id="cad_select_skill">
                                    <option value="DEFAULT" disabled>Selecione</option>
                                </select>
                                <input
                                    type="button"
                                    value="Inserir"
                                    id="cad_btn_inserir"
                                />
                            </div>
                            <div id="cad_lista_skills">

                            </div>
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadastroServico;