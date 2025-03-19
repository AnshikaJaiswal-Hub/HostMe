import express from "express";
import postRoute from "./routes/postroute.js";
import authroute from "./routes/auth.route.js";

const app = express();
 
app.use(express.json());

//app.use("/api/posts", postRoute);
app.use("/api/auth", authroute);

app.listen(8800, () => {
  console.log("Server is running");
});
