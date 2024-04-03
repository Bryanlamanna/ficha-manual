//SELETORES PARA O BOLETIM
const nome = document.querySelector(".campo-nome");
const nascimento = document.querySelector(".campo-nascimento");
const convenio = document.querySelector(".campo-convenio");
const data = document.querySelector(".campo-data");
const sexo = document.querySelector(".campo-sexo");
const queixa = document.querySelector(".campo-queixa");
const exame = document.querySelector(".campo-exame");
const procedimento = document.querySelector(".campo-procedimento");
const medicacao = document.querySelector(".campo-medicacao");
const boletim = document.querySelector(".boletim");
//SELETORES PARA OS CAMPOS DO FORMULÁRIO
const nomeForm = document.querySelector(".nome");
const nascimentoForm = document.querySelector(".nascimento");
const convenioForm = document.querySelector(".convenio");
const dataForm = document.querySelector(".data");
const sexoForm = document.querySelector(".sexo");
const queixaForm = document.querySelector(".queixa");
const exameForm = document.querySelector(".exame");
const procedimentoForm = document.querySelector(".procedimento");
const medicacaoForm = document.querySelector(".medicacao");
const formulario = document.querySelector(".formularioFicha");
const botao = document.querySelector(".enviarBtn");

function enviar() {
    nome.innerHTML = nomeForm.value;
    nascimento.innerHTML = nascimentoForm.value;
    convenio.innerHTML = convenioForm.value;
    data.innerHTML = dataForm.value;
    sexo.innerHTML = sexoForm.value;
    queixa.innerHTML = queixaForm.value;
    exame.innerHTML = exameForm.value;
    procedimento.innerHTML = procedimentoForm.value;
    medicacao.innerHTML = medicacaoForm.value;
    
    document.body.style.backgroundColor = "white";
    formulario.style.display = "none";
    boletim.style.display = "block";
}

