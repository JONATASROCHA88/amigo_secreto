let amigos= [];

function adicionarAmigo() {
   let inserirAmigo = document.getElementById("amigo");
   let nomeAmigo = inserirAmigo.value;

   if(!nomeAmigo) {
      alert("Digite o nome do amigo");
      return;
   }
  amigos.push (nomeAmigo);
  inserirAmigo.value = "";
  inserirAmigo.focus();
  atualizarLista();

}

function atualizarLista(){
   let listaDeAmigos = document.getElementById("listaAmigos");
   listaDeAmigos.innerHTML = "";

   for (let indice = 0; indice < amigos.length; indice++){
      let itemNome = document.createElement("li");
      itemNome.textContent = amigos[indice];
      listaDeAmigos.appendChild(itemNome);
   }
}

function sortearAmigo(){
   if(amigos.length === 0){
      alert ("Nenhum amigo adicionado");
      return;
   }
   let amigoSorteado = amigos [Math.floor(Math.random() * amigos.length)];
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

   let limparLista = document.getElementById("listaAmigos");
   limparLista.innerHTML = "";

}