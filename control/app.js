const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ====== RUTA CONTROL ======
app.post("/control", (req, res) => {

    console.log("COMANDO RECIBIDO:");
    console.log(req.body);

    res.json({
        status: "ok",
        mensaje: "Comando recibido correctamente"
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
