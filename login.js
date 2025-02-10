const fs = require("fs-extra");
const login = require("helyt-dev");

const FB_EMAIL = "bijat57781@bawsny.com"; // Thay bằng email đăng nhập
const FB_PASSWORD = "datn8436"; // Thay bằng mật khẩu
const APPSTATE_PATH = "appstate.json";

login({ email: FB_EMAIL, password: FB_PASSWORD }, (err, api) => {
    if (err) return console.error("Đăng nhập thất bại:", err);
    
    const json = JSON.stringify(api.getAppState(), null, 2);
    fs.writeFileSync(APPSTATE_PATH, json);
    console.log("Appstate đã được lưu vào", APPSTATE_PATH);
    
    process.exit(0);
});
