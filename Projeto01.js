// 1º Projeto  - Aula 02 - CODELAB
// Aluno: Renan Augusto de Carvalho

console.log("Depois de muito tempode luta, de muitos desafios contra Dragões e Orcs, quase perdendo sua vida diversas vezes, chegou ao seu ultimo desafio, o Mestre dis Magos, o Warlord.\n\nPorem precisa se lembrar se conseguiu todos os equipamentos, as runas magicas e o colar do coração do Dragão negro que deixará invisivel e imune aos poderes do Mestre Mago. ")//background

let resposta = [];//Declaração de array vazia, para preenchimento de respostas (s/n).
let a =0 ;// variavel para calculo no laço  - Do while - e para mudar o alocamento da resposta no array 'resposta'.
let b =0 ;// variavel para mudar qual pergunta será escolhida e impressa do array 'pergutas'.
let contador = 0;
let perguntas =["Você pegou o escudo de osso do Orc da montanha?(s/n)","Você tirou a runa do olho do Drgão Colonus?(s/n)","Você pegou o chifre do Touro Assasino?(s/n)","Você pegou a pele do Golem Arterfil?(s/n)", "Você pegou o colar do Dragão negro da Floresta?(s/n)"]//array com todas as perguntas.

    do { // laço de repetição para realizar as perguntas existentes no array 'perguntas'.
  
        console.log("\nDigite S ou N para continuar !!!!!\n")
        resposta [a] = resposta.push = prompt(perguntas[b])// adiciona ao array 'name' a resposta de cada pergunta do array 'perguntas'.
        
             if (resposta[a] == 's'){
                 b ++    
                 a ++
                console.clear()
             }else if (resposta[a]=='n'){
                 b ++    
                 a ++
                console.clear()
            }
    
    }while(a<=4)

    for (let i = 0; i <= 5; i++) // laço para verificar quantas strings "s" existe na array 'resposta'.
        
    {
        if (resposta[i] == 's')
       {
           contador ++
       }
    }

// nesse ponto, ja se sabe quantos "s" existe no array 'resposta' e verifica qual caminho a história do Heroi encerrara.

if (contador == 0)
    {
      console.log("\nEle falhará miseravelmente!\n")
    }
     
else if (contador >=1 && contador <=2)
    {
      console.log("\nEle falhará, mas ainda consegue fugir da situação!\n")
    }    
             
else if (contador == 3)
    {
      console.log("\nEle chegará perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco!\n")                   
    }
         
else if (contador == 4)
    {
      console.log("\nDepois de muito esforço ele conquista seu objetivo, embora não de maneira perfeita!\n")                   
    } 

else if (contador == 5)
    {
      console.log("\nEle triunfará de maneira inquestionável e seus feitos serão lembrados por muitas gerações!\n")                   
    } 

  // FIM DO CÓDIGO.