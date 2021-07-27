


const obtenerClima = async (pais) => {
    
 let urlWeather =  `https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=ae07fe16613fe9b6cba7c5d273cfd9ad`;
    try {
        const climaData =   await fetch(urlWeather);

        const {name, id, wind, weather, main} = await climaData.json();
      
        //if(!response.cod) throw err;

        return  {name, id, weather, wind, main};
       

    } catch (err) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'País no encontrado'
         
          })
   
    }
}

export{

    obtenerClima
}