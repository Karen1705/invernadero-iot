const tabla = document.getElementById("tabla");

/* DATOS DE PRUEBA */
const datos = [
    { device:"sensor humedad", value:"45%", event:"OK", hora:"01:20" },
    { device:"sensor temperatura", value:"28°C", event:"OK", hora:"01:21" },
    { device:"riego", value:"ON", event:"Activo", hora:"01:22" }
];

function cargarDatos(){
    tabla.innerHTML = "";

    datos.forEach(d => {
        tabla.innerHTML += `
            <tr>
                <td>${d.device}</td>
                <td>${d.value}</td>
                <td>${d.event}</td>
                <td>${d.hora}</td>
            </tr>
        `;
    });
}

cargarDatos();
