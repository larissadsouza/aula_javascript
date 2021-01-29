function clicou() {
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://www.linkedin.com/in/larissa-dias-desouza/");
    //window.location.href("https://www.linkedin.com/in/larissa-dias-desouza/");
}
function trocar(elemento)
{
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load  (){
    alert("Página carregada!");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1 + n2;
}


alert (soma(10,5));

function setReplace (a,b,c)
{
    return a.replace(b,c);
}
alert(setReplace("larissa linda","larissa","valeria"));

*/
/*
var d = new Date();
alert (d.getDate());
alert (d.getMonth() +1);
alert (d.getHours());
alert (d.getMinutes());
*/

/*var count;
for (count =0; count <=5; count++){
    console.log(count);
    
}
*/

/*var count =0;
while (count <=5){
    console.log(count);
    count++
}
*/

/*var idade = prompt ("Qual sua idade?");
if (idade>=18)
{
    alert("Maior de idade");
}
else 
{
    alert("Menor de idade");
}
*/


//var frutas = [{nome: "maçã", cor: "vermelha"},{nome:"uva", cor: "roxa"}];
//console.log(frutas[0].cor);
//alert(frutas[1].nome);

/*var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.cor);
alert(fruta.nome);
*/

//var nome = "Larissa Souza";
//var idade = 24;
//var idade2 = 10;
//var frase = "Valeria linda";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase())

//var lista = ["pera", "maçã", "mamao"];
//lista.push("hehe");
//lista.pop();
//console.log (lista.join(" - "));
//console.log(lista.toString());
