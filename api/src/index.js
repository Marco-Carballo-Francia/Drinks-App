import app from "./app.js";
import "./db.js";

app.listen(app.get("port"), () => {
	console.log(` |> server on port: ${app.get("port")}`);
})