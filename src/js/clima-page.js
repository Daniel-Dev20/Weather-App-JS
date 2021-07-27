import { obtenerClima } from "./service"

const btnClima = document.querySelector('button');
const txtInput = document.querySelector('input');
const divHtml  = document.querySelector('.container-info');
let pais;
let divMostrarClima = document.createElement('div');
const infoTxtPais =  async() => {

     txtInput.addEventListener('keyup', async(event) => {

        pais = await txtInput.value;

        if( event.keyCode === 13  ){
           
            crearClimaHtml(pais);
         
            //btnClima.disabled = true;
           
           divMostrarClima.innerText = "";
            
            return pais;
           
        }else if(event.keyCode === 32){

            eventos(await pais);
        }

    })   
}

const crearClimaHtml = async (paisName) => {
    
        const {name, id, wind, weather, main} =  await obtenerClima(paisName);
      
        const dataApi = `

            ID: ${id}<br/>  
            País: ${name} <br/>  
            vientos: ${wind.speed}  <br/>
            Clima: ${weather[0].main} <br/> 
            Descripción: ${weather[0].description}  <br/>
            temp: ${main.temp} <br/>
            temp_max: ${main.temp_max} <br/>
            temp_min: ${main.temp_min}
        `; 
       
        divMostrarClima.innerHTML = dataApi;

        divMostrarClima.classList.add('divMostrarClima');
        
         divHtml.append( divMostrarClima);    
}

export const init = () => {

    infoTxtPais();
}