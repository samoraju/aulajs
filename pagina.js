
// removendo o item da lista (hide)
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement; //retorna o elemento parente do elemento q ta sendo especificado
    div.style.display = "none";
  }
}

// criando um novo item da lista clicando no btn adicionar
function insereElemento() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  // estruturinha pra validar antes de add um item na lista (vazio nao)
  if (inputValue === '') {
    alert("Voce deve escrever alguma coisa para poder adicionar!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  //excluindo um item da lista
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //simbolo x
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  //estruturinha para excluir o item qnd clicar no x
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}