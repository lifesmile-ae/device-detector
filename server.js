const express = require("express");
const useragent = require("useragent");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const userAgent = useragent.parse(req.headers["user-agent"]);
  console.log(userAgent);
  res.json({
    userAgent,
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
