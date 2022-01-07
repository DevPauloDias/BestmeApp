

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
       // console.log(answers)
        process.exit();

    }
  

})

const timeOut= 2000;

const saindo= ()=>{
    
     for (cont=0; cont < answers.length; cont ++){
         
        
       ( function (x) {
            
                console.log(` \n  ${questions[cont]}: \n ${answers[cont]} \n`)          
           
        });
        
        setInterval( x, timeOut)     
       

    }
   
}



process.on("exit", () => {
    console.log( ` --------------------------------------------------------\n Chegamos ao fim de mais um dia meu amigo, Parabéns! \n\n
    ----------------------------------------------`);
    console.log("\n seguem suas repostas...\n ")

    saindo();
   
  //setTimeout(saindo, timeOut);

    console.log(" \n\n --- Até amanhã! Bom descanso. ---- \n\n")

}) 




