import "./style.css"


function CadastroDev() {


    function mascaraCep(event:any): "" | undefined {
        let valorDigitado = event.target.value; // Obtém o valor do elemento que acionou o evento, neste caso o valor digitado no input
    
        if (!valorDigitado) return ""; // Se o valor for vazio, retorna uma string vazia
    
        valorDigitado = valorDigitado.replace(/\D/g, ''); // Remove todos os caracteres não numéricos do valor (deixa apenas os dígitos)
        valorDigitado = valorDigitado.replace(/(\d{5})(\d)/, '$1-$2'); // Aplica a máscara de CEP (formato XXXXX-XXX) ao valor
    
        event.target.value = valorDigitado; // Atualiza o valor do input com o valor mascarado
    }



    return (
        <>
           
            <main id="lista-devs" className="main_cadastro">
                <div className="container container_cad">
                    <div className="cad_conteudo">
                        <h1>Cadastro</h1>
                        <hr />
                        <form className="cad_formulario" action="">
                            <div className="cad_box_input">
                                <label htmlFor="nome">Nome Completo:</label>
                                <input type="text" id="nome" placeholder="Digite aqui seu nome:" />
                            </div>
                            <div className="cad_box_input">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" placeholder="Digite aqui seu e-mail:" />
                            </div>
                            <div className="cad_box_input">
                                <label htmlFor="senha">Senha:</label>
                                <input type="password" id="senha" placeholder="Digite aqui sua senha:" />
                            </div>

                            <span>Endereço:</span>
                            <hr />

                            <div className="cad_box_input">
                                <label htmlFor="cep">Cep:</label>
                                <input type="text" id="cep" maxLength={9} onKeyUp={mascaraCep}
                                    placeholder="Digite aqui seu Cep:" />
                            </div>

                            <div className="cad_box_input">
                                <label htmlFor="logradouro">Logradouro:</label>
                                <input type="text" id="logradouro" placeholder="Digite aqui seu Logradouro:" />
                            </div>

                            <div className="cad_linha1_input">
                                <div className="cad_box_input2">
                                    <label htmlFor="numero">Numero:</label>
                                    <input type="text" id="numero" placeholder="Digite o Nº:" />
                                </div>

                                <div className="cad_box_input2">
                                    <label htmlFor="bairro">Bairro:</label>
                                    <input type="text" id="bairro" placeholder="Digite aqui seu Bairro:" />
                                </div>
                            </div>

                            <div className="cad_linha2_input">
                                <div className="cad_box_input2">
                                    <label htmlFor="cidade">Cidade:</label>
                                    <input type="text" id="cidade" placeholder="Digite aqui sua Cidade:" />
                                </div>

                                <div className="cad_box_input2">
                                    <label className="cad_uf" htmlFor="uf">UF:</label>
                                    <input type="text" id="uf" maxLength={2} placeholder="Digite a UF:" />
                                </div>
                            </div>

                            <div className="cad_linha_checkbox">
                                <span>Cliente</span>
                                <div className="cad_container_checkbox">
                                    <input className="cad_checkbox" type="checkbox" name="checkbox" id="checkbox" />
                                    <label className="cad_label" htmlFor="checkbox"></label>
                                    <div className="cad_box_checkbox"></div>
                                    <div className="cad_hard_skill">
                                        <span>Hard Skills</span>
                                        <hr />
                                        <div className="cad_box_skills">
                                            <span>Selecione uma Skill para adicionar</span>
                                            <div className="cad_linha_select">
                                                <select name="" id="cad_select_skill">
                                                    <option value="" selected={true} disabled={true}>Selecione</option>
                                                </select>
                                                <input type="button" value="Inserir" id="cad_btn_inserir" />
                                            </div>
                                            <div id="cad_lista_skills">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span>Desenvolvedor</span>
                            </div>


                            <input className="cad_botao" type="button" value="Cadastrar" />
                        </form>
                    </div>
                </div>
            </main>

        </>

    )
}
export default CadastroDev