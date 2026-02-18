const API="TU_LINK_MOCKAPI/dispositivos"

async function cargar(){
 const res=await fetch(API)
 const data=await res.json()

 graficas.innerHTML=""
 tabla.innerHTML=""

 data.slice(-10).forEach(d=>{
  graficas.innerHTML+=`
  <div>
   ${d.nombre} :
   <progress value="${d.estado?100:0}" max="100"></progress>
  </div>`

  tabla.innerHTML+=`
  <tr>
   <td>${d.nombre}</td>
   <td>${d.estado?"Encendido":"Apagado"}</td>
   <td>${new Date(d.fecha).toLocaleString()}</td>
  </tr>`
 })
}

cargar()
setInterval(cargar,2000)
