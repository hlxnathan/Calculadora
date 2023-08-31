//FUNÇÃO QUE INSERE NÚMERO NO VISOR
const insert = (num) => {
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}

//FUNÇÃO QUE LIMPA TUDO DO VISOR
const clean = () => {
    document.getElementById("resultado").innerHTML = '';
}

//FUNÇÃO QUE APAGA ÚLTIMO NÚMERO DO VISOR
const back = () => {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

//FUNÇÃO DO "=" QUE EXECUTA O CÁLCULO
let index = 1;
const calcular = () => {
    let res = document.getElementById("resultado").innerHTML;
    const historyline = document.getElementsByClassName("line");

    if (res) {
        if (index <= historyline.length) {
        data_calculo(res, index);
        document.getElementById("resultado").innerHTML = eval(res);
        index++;
        } else {
        index = 1;
        data_calculo(res, index);
        document.getElementById("resultado").innerHTML = eval(res);
        index++;
        }
    } else {
        document.getElementById("resultado").innerHTML = "Error";
    }
};

//FUNÇÃO QUE PUXA DATA E HORA ATUAL
const date_time = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return `${date} | ${time}`;
};
  
//FUNÇÃO QUE INDEXA ATRAVÉS DO 'Id' DATA HORA E RESULTADO DA CONTA À TABELA DO HISTÓRICO
const data_calculo = (res, index) => {
    document.getElementById(`data-${index}`).value = date_time();
    document.getElementById(`calculo-${index}`).value = `${res} = ${eval(res)}`;
};