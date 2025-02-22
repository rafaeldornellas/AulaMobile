let texto = "JavaScript";
console.log(texto.charAt(4)); //exibe: S

let frase1 = "O Gato subiu no telhado e depois pulou.";
console.log(frase1.indexOf("gato")); //exibe: 2
console.log(frase1.lastIndexOf("pulou"));//exibe 37

let palara = "abcdefgh";
console.log(palara.substring(2, 5)); //Exibe: cde

let texto1 = "Esta é uma string";
console.log(texto1.slice(5,7)); //Exibe: É

let lista = "maçã, banana, uva, melancia";
let frutas = lista.split(",");
console.log(frutas); //Exibe [maçã, "banana", "uva", "melancia"]

let frase2 = "O javaScript é incrível";
let novaFrase = frase2.replace("JavaScript","Python"); 
console.log(novaFrase); //Exibe: O python é incrível!

let texto2 = "JavaSCRIPT";
console.log(texto2.toLocaleLowerCase()); //Exibe: javascript
console.log(texto2.toUpperCase()); //Exibe: JAVASCRIPT

let texto3 = " Espaço ao redor ";
console.log(texto3.trim()); //Exibe: Espaços ao redor