$(document).ready(function(){

    $('#contato').mask('(00) 00000-0000', {
        placeholder: ' (00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: ' 000.000.000-00'
    })

    $('#cep').mask('00.000-000', {
        placeholder: ' 00.000-000'
    })


    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            contato: {
                required: true
            },
            endereco:{
                required: true
            },
            cpf:{
                required: true
                
            },
            cep:{
                required: true
                
            }      
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            contato: 'Por favor, insira seu contato',
            email: 'Por favor, insira seu email',
            endereco: 'Por favor, insira seu endereço',
            cpf: 'Por favor, insira seu cpf',
            cep: 'Por favor, insira seu cep'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
        }
    })
})