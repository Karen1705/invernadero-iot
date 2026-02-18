const API="https://698a177cc04d974bc6a15394.mockapi.io/api/v1/devices"

const tabla=document.getElementById("tabla")
const nombre=document.getElementById("nombre")
const tipo=document.getElementById("tipo")
const unidad=document.getElementById("unidad")

async function cargar(){
 const res=await fetch(API)
 const data=await res.json()

 tabla.innerHTML=""

 data.forEach(d=>{
  tabla.innerHTML+=`
   <tr>
    <td>${d.name}</td>
    <td>${d.type}</td>
    <td>${d.status}</td>
    <td>
     <button class="btn btn-danger btn-sm"
     onclick="eliminar('${d.id}')">
     Eliminar
     </button>
    </td>
   </tr>`
 })
}

async function crear(){

 if(!nombre.value || !tipo.value){
  alert("Completa los campos")
  return
 }

 await fetch(API,{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
   name:nombre.value,
   type:tipo.value,
   status:"OFF",
   value:0,
   unit:unidad.value || "%"
  })
 })

 nombre.value=""
 tipo.value=""
 unidad.value=""

 cargar()
}

async function eliminar(id){
 await fetch(API+"/"+id,{method:"DELETE"})
 cargar()
}

cargar()
