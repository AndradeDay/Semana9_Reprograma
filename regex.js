
//02. altere sua função para que ela aceite maiusculas e minusculas (case insensitivel)

function retornarString (palavra) {
 const  regex =  /h || H/ // ou /h/i  --> o i é um jeito de ignorar se a letra deve ser 
 // maiuscula ou minuscula (case insensitive)
 return regex.test(palavra)
}

const resultado = retornarString('Hermanos')
console.log(resultado)

/* 03 altere sua função para que ele retorne se a string termina com 'a' ou começa com 'a'
aceitando minusculas ou maiusculas*/

function retornarString2 (palavra) {
    const  regex =  /a$|^b/i // $ quer informar que a letra esta no final e o ^ para primeira letra
    return regex.test(palavra)
   }
   
   const resultado2 = retornarString2('eeermanossss')
   console.log(resultado2)

// altere sua função para verificar a string contem numero 
