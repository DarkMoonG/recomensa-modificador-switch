const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const toggle_switch = document.getElementById("btn-switch")
const miImagen = document.querySelector(".card_img");


let chose = 1

const changeOption = ()=>{
    chose==1 ?(
        option1.classList.value='option option-active',
        content1.classList.value='content content-active'
    )
    : (

        option1.classList.value = 'option',
        content1.classList.value= 'content'

    )

    chose== 2 ?  (

        option2.classList.value='option option-active',
        content2.classList.value='content content-active'

    )
    : (

        option2.classList.value = 'option',
        content2.classList.value= 'content'

    )



}

option1.addEventListener('click', ()=>{
    chose = 1
    changeOption()
})

option2.addEventListener('click', ()=>{
    chose = 2
    changeOption()
})


toggle_switch.onchange=function(){

    if (this.checked) {
        // si el checkbox está marcado, agregar clase "nueva-clase"
        miImagen.classList.add("toggle_card_img");
      } else {
        // si el checkbox no está marcado, remover clase "nueva-clase"
        miImagen.classList.remove("toggle_card_img");
      }
}

