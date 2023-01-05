const express = require("express");
const useragent = require("useragent");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const userAgent = useragent.parse(req.headers["user-agent"]);
  const device = userAgent.os.family.toString();

  switch (device) {
    case "Android":
      res.redirect(
        "https://play.google.com/store/apps/details?id=com.lifesmile.ecommerce"
      );
      break;
    case "iOS":
      res.redirect("https://apps.apple.com/ua/app/lifesmile-ae/id6444078111");
      break;
    default:
      res.redirect("https://lifesmile.ae/");
      break;
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
