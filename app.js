const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://developer:developer19@cluster0-b7fym.gcp.mongodb.net/alive?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true})
   .then(() => console.log("mongo conectado"))
   .catch(err => console.log(err));

require("dotenv").config();
app.use(bodyParser.json())

app.use(cors())
app.use(morgan("tiny"))

app.use("/diagramas", require("./routes/routes"))
app.use((err, req, res, next) => {
   res.json(err)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("api na porta " + PORT));