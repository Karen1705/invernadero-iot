const API="https://698a177cc04d974bc6a15394.mockapi.io/api/v1/invernadero-iot"

async function cargar(){
 const res=await fetch(API)
 const data=await res.json()

 lista.innerHTML=""

 data.forEach(d=>{

  // SIMULACIÓN SENSOR HUMEDAD
  if(d.Tipo==="Sensor"){
     let humedadRandom=Math.floor(Math.random()*100)

     fetch(API+"/"+d.id,{
       method:"PUT",
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({Humedad:humedadRandom})
     })

     d.Humedad=humedadRandom
  }

  // REGLAS AUTOMÁTICAS
  if(d.Nombre==="Valvula Agua"){
     if(d.Humedad<40){
        actualizarEstado(d.id,true)
        d.Estado=true
     }
     if(d.Humedad>80){
        actualizarEstado(d.id,false)
        d.Estado=false
     }
  }

  lista.innerHTML+=`
  <div>
   <b>${d.Nombre}</b>
   <input type="checkbox"
    ${d.Estado?"checked":""}
    ${d.Tipo==="Sensor"?"disabled":""}
    onchange="toggle(${d.id},this.checked)">
   <span> Humedad: ${d.Humedad}%</span>
  </div>`
 })
}

async function toggle(id,estado){
 await fetch(API+"/"+id,{
  method:"PUT",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
   Estado:estado,
   Fecha:new Date()
  })
 })
}

async function actualizarEstado(id,estado){
 await fetch(API+"/"+id,{
  method:"PUT",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({Estado:estado})
 })
}

cargar()
setInterval(cargar,2000)
