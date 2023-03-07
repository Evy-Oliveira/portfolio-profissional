function toggleMode(){
  const hmtl = document.documentElement

  // if(hmtl.classList.contains('tema-claro')){
  //   hmtl.classList.remove('tema-claro')
  // }else {
  //   hmtl.classList.add('tema-claro')
  // }
  // abaixo forma resumida de escrever o if/else acima
  hmtl.classList.toggle('tema-claro')

  // pega a tag img
const img = document.querySelector("#profile img")
// substitui a imagem
  if (hmtl.classList.contains('tema-claro')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpeg")
    img.setAttribute("alt", "foto de Evy Oliveira sorrindo com cabelos soltos e óculos escuros")
  }else {
    // se tiver sem o light mode
    img.setAttribute("src", "./assets/avatar.jpeg")
    img.setAttribute("alt", "Foto de Evy Oliveira, sorrindo de cabelo solto")
  }
// o setAttribute é para selecionar ou substituir um atributo


}
