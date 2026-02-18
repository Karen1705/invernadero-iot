const API="TU_LINK_MOCKAPI/dispositivos"

async function cargar(){
 const res=await fetch(API)
 const data=await res.json()

 tabla.innerHTML=""
 data.forEach(d=>{
  tabla.innerHTML+=`
   <tr>
    <td>${d.nombre}</td>
    <td>${d.tipo}</td>
    <td>
     <button onclick="eliminar(${d.id})">Eliminar</button>
    </td>
   </tr>`
 })
}

async function crear(){
 await fetch(API,{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
   nombre:nombre.value,
   tipo:tipo.value,
   estado:false,
   humedad:0,
   fecha:new Date()
  })
 })
 cargar()
}

async function eliminar(id){
 await fetch(API+"/"+id,{method:"DELETE"})
 cargar()
}

cargar()
