function mouse(){
    alert('Cliquei mouse')
};

function mouseDown() {
    document.getElementById("p1").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("p1").style.color = "black";
  }

  function mudaImagem(i) {    

    if (i == 1) {

        document.getElementById("imagem1").src="c:\Users\DSN6011251050\Downloads\imagens\imagem1.jfif";

        document.getElementById("imagem2").src="c:\Users\DSN6011251050\Downloads\imagens\imagem2.jfif";    

    } else if (i == 2) {       

        document.getElementById("imagem1").src="c:\Users\DSN6011251050\Downloads\imagens\imagem1.jfif ";        

        document.getElementById("imagem2").src="c:\Users\DSN6011251050\Downloads\imagens\imagem2.jfif";    

    }

}