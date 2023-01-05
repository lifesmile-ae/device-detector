import express from "express";
import useragent from "useragent";

const app = express();

app.get("/", (req, res) => {
  const userAgent = useragent.parse(req.headers["user-agent"]);
  console.log(userAgent);
  res.json({
    userAgent,
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
