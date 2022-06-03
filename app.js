const express = require("express");
// communiquer avec le protocole HTTP

const app = express();
// utiliser express avec le mot clé app

app.use(express.json());
// communiquer via des données format json
// lecture et affichage
// url: localhost:{numéro du port/}
app.get("/", (req, res) => {
res.json({ status: "success", message: "Welcome To Testing API" });
});

// création d'addresse de récuperation /add (post)

app.post("/add", (req, res) => {
 const { num1, num2 } = req.body;
 /* req.body doit contenir deux valeurs json {}
 {
     num1:valeur1,
     num2:valeur2
 }


 */
 const add = (num1, num2) => {
return num1 + num2;
};
res.json({
status: "success",
result: "Welcome To Testing API",
 result: add(num1, num2)
});
});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));


module.exports = app;