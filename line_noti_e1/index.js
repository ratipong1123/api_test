const LineNotify = require("./src/client");

const ACCESS_TOKEN = "usdaX9DELSJ3y8EMdf9CMMFUTr6Mdk3A4r9QyTdi4im";
const notify = new LineNotify(`${ACCESS_TOKEN}`);

notify.sendText("Ratipong หิวข้าวจุงเบย");
notify.sendImage("https://image.shutterstock.com/image-vector/welcome-letters-banner-on-blue-260nw-1189574716.jpg");
notify.sendImage("./img/1.jpg");
notify.sendSticker(512, 2);

//notify.status()
//notify.revoke()