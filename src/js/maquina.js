let texto = document.getElementById('txt');

const palabras = texto.ariaValueText
let arrayText = palabras.split(',')




console.log(arrayText)

const maquina = (arrayText, tiempo) => {

   

    arrayText = arrayText.map((e)=> {return e+"  "});
    let size = arrayText.length
    let contador = 0;
    let index = 0;
    let estado = true

    setInterval(() => {
        if (contador < size) {

            if (index < arrayText[contador].length && estado) {

                texto.innerHTML = arrayText[contador].slice(0, index +1) 
                index++

                if (index > arrayText[contador].length - 1) {

                    estado = false

                    
                

                    }
            }





            if (index > arrayText[contador].length || !estado) {
            

                texto.innerText = arrayText[contador].slice(0, index) 

                index--

                if (index < 0) {
                   
                    texto.innerText = ""
                    enfrente=false
                    estado = true;
                    contador++;
                    index = 0; 
                    
        
                }

            }
        } else {
            contador = 0
            

        }


    

    }, tiempo)

    

}


maquina(arrayText, 150)

