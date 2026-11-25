const {app,BrowserWindow,shell}=require("electron"),path=require("path");
function win(){const w=new BrowserWindow({width:1200,height:850,backgroundColor:"#0a0d1f",title:"JEE PYQ Quiz",webPreferences:{contextIsolation:true}});w.setMenuBarVisibility(false);w.loadFile(path.join(__dirname,"www","index.html"));
w.webContents.setWindowOpenHandler(({url})=>{if(/^(https?|mailto):/.test(url)){shell.openExternal(url);return{action:"deny"}}return{action:"allow"}});}
app.whenReady().then(()=>{win();app.on("activate",()=>{if(!BrowserWindow.getAllWindows().length)win()})});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit()});
