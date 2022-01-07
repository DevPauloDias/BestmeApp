

const questions = [
    "o que aprendi hoje?",
    "O que me deixou aborrecido? E o que posso fazer para melhorar?",
    "O que me deixou feliz?",
    "Quantas pessoas ajudei hoje?"

]

const ask = (index=0) => {

    process.stdout.write("\n\n" + questions[index] + " > ");
}

ask();

const answers= []

process.stdin.on("data", data =>{

    answers.push(data.toString().trim())
    if( answers.length < questions.length){
       ask(answers.length)

    }else{       

        saindo();         
            
    }
  
   
} )





function saindo (){
    console.log( ` --------------------------------------------------------\n Chegamos ao fim de mais um dia meu amigo, Parabéns! \n\n
    ----------------------------------------------`);
    console.log("\n seguem suas repostas...\n ")
    const sair= answers.length
   

    for (cont=0; cont < answers.length; cont++){  
        (function (cont){
            setTimeout(function(){
                console.log(` \n  ${questions[cont]}: \n ${answers[cont]} \n`);
    
            }, cont *1000);
    
        }(cont));       
    
    }

      

(function (sair){
    
    setTimeout(function(){
        process.exit();

    }, sair *1000);

}(sair)); 
    
    
}





process.on("exit", () => { 

    console.log(" \n\n --- Até amanhã! Bom descanso. ---- \n\n")

}) 




