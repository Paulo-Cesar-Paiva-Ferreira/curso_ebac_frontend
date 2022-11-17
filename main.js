$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000'),

    $('#cpf').mask('000.000.000-00'),

    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true, 
                email: true
            },
            telefone: {
                required:true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Insira  seu nome',
            telefone: 'Insira seu telefone',
            email:'Insira seu E-mail',
            cpf: 'Digite seu CPF',
            enderecoCompleto: 'Digite seu endereço',
            cep:'Digite seu CEP'
        },
        submitHandler: function(form)  {
            console.log(form)
        },
        invalidHandler: function(evento, validador)  {
            let composIncorretos =  validador.numberOfInvalids();
            if (composIncorretos) {
                alert(`Existem ${composIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})