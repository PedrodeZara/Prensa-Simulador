const carro = (() => {
    let ligado = false;
    let velocidade = 0;

    function ligarCarro() {
        if (!ligado) {
             return ligado = true;
        }
    }

    function desligarCarro() {
        if(ligado && velocidade == 0) {
            console.log("Carro Desligado");
            return ligado = false;
        } else {
            console.log("O carro ainda está em movimento");
        }
    }

    function movimento(acelerar) {
        if (acelerar >= 0) {
            velocidade += acelerar;
            console.log(`${velocidade} KM/H`);
        } else {
            velocidade += acelerar;
            console.log(`${velocidade} KM/H`);
        }
    }

    return {
        ligar() {
            ligarCarro();
            console.log("Carro Ligado");
        },
        desligar() {
            desligarCarro();
        },
        acelerar(valor) {
            movimento(valor);
        },
        desacelerar(valor) {
            movimento(-valor);
        }
    }
})()

carro.ligar()
carro.acelerar(50)
carro.desacelerar(50)
carro.desligar()