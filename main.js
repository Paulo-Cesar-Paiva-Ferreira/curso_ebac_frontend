const form = document.getElementById('enviar');


function validaCampo(campoA, campoB) {
    let comparaCampo = campoA < campoB;
    return comparaCampo;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const menssagemSucesso = '<b>validado com sucesso</b>';
    const menssagemErro = '<b>Não foi possivel validar, pois o campo A é maior que o campo B</b>';

    if(campoA.value <= campoB.value ) {
        const containerMenssagemSucesso =  document.querySelector('.validation');
        containerMenssagemSucesso.innerHTML = menssagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    } else {
        const containerMenssagemErro = document.querySelector('.validation');
        containerMenssagemErro.innerHTML = menssagemErro;
        containerMenssagemErro.style.display = 'block';
    }
})

console.log(form);