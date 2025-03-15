# Como funciona

O código a seguir é uma simulação de uma prensa, algo simples feito com o intuito de estudar JS e suas funções, objetos, e métodos.

Dentro do código, possuimos alguns métodos;

### Métodos

| Principais métodos| Como funcionam                  |
|        :--:       |       --                        |
| prensa.ligar()    | Usado para ligar o objeto       |
| prensa.desligar() | Usado para desligar o objeto    |
| prensa.mover()    | Usado para os comando no objeto |
<hr>
Comandos simples para melhor entendimento e manuseio com o código.

</br>


### ligar()
Comando inical para que o programa possa rodar, sem ela nossa prensa não irá funcionar 

```javascript
prensa.ligar()
```

### desligar()
Comando que encerra o ciclo da prensa, terminando sua atividade.

```javascript
prensa.desligar()
```

### mover()
Esse é o comando mais complexo da lista, pois possui 6 parâmetros para ajustarmos, entre eles são: 

| Parâmetros    | Oque fazem:|
| -----------   |-|
| PDsubir       |Autoriazação para subir tipo bool; 
| PDdescer      |Autoriazação para descer tipo bool;
| maxSu         |O máximo que a prensa pode subir;
| maxDe         |Máximo que a prensa pode descer;   
| up            |O tanto que ela irá subir;  
| down          |O tanto que ira descer.  


Formando assim. Exemplo: 

```javascript
prensa.mover(true,false,150,0,120,0);
```

Fazendo o programa funcionar;

Espero ter gostado :)
