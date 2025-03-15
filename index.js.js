const prensa = (() => {
    ligado = false
    let moverPrensa = false;

    let prensaLigar = () => {
        if (!ligado) {
            ligado = true;
            return console.log("Prensa ligada...");
        }
        console.log("Prensa já está ligada");
    }

    let prensaDesligar = () => {
        if (ligado) {
            ligado = false;
            return console.log("Prensa desligada...");
        }
        console.log("Prensa já está desligada");
    }

    let movimentar = (autoSubir,autoDescer,maxSubir,maxDescer,subir,descer) => {
        if (ligado) {
            if (autoSubir && !autoDescer){
                if (subir < maxSubir && subir > maxDescer && !moverPrensa) {
                    let up = 0;
                    moverPrensa = true;
                    let porcentagem;

                    while (up <= subir) {
                        porcentagem =(up*100)/subir;
                        console.log(`\Subindo: %${porcentagem.toFixed(0)}`);
                        up++;
                    }
                    moverPrensa = false;
                    return console.log("\nConcluído\n");
                } else {
                    return console.log("37 Valores fora das medidas Máxima");
                }
            }
                
            if (autoDescer && !autoSubir) {
                if (descer < maxSubir && descer > maxDescer && !moverPrensa) {
                    let down = 0;
                    moverPrensa = true;
                    let porcentagem;
    
                    while (down <= descer) {
                        porcentagem =(down*100)/descer;
                        console.log(`\rDescendo: %${porcentagem.toFixed(0)}`);
                        down++;
                    }
                    moverPrensa = false;
                    return console.log("\nConcluído\n");
                } else {
                    return console.log("53 Valores fora das medidas Máxima")
                }
            } else {
                return console.log("A prensa não está ligada ou comandos sadasd");
            }
        }   
    }

    return {
        ligar() {
            prensaLigar();
        },
        desligar() {
            prensaDesligar()
        },
        mover(PDsubir,PDdescer,maxSu,maxDe,up,down) {
            movimentar(PDsubir,PDdescer,maxSu,maxDe,up,down)
        }
    }
})();


prensa.ligar();
prensa.mover(true,false,150,0,120,0);
prensa.desligar();


//ligar(): liga a prensa;
//desligar(): desliga a prensa;
//mover(): move a prensa;

/*

Para mover a prensa precisamos autorizar a sua descida e sua subida:
-------------------------------------------------------------------
|    PDsuvir   |  Autoriazação para subir tipo bool;              |
|    PDdescer  |  Autoriazação para descer tipo bool;             |
|    maxSu     |  O máximo que a prensa pode subir;               |
|    maxDe     |  Máximo que a prensa pode descer;                |
|    up        |  O tanto que ela irá subir;                      |
|    down      |  O tanto que ira descer.                         |
-------------------------------------------------------------------

*/