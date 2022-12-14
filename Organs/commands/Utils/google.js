const axios = require('axios')
require ('../../../settings')
module.exports={
    name:"google",
    alias:["g"],
    cool: 20,
    usage:`${prefa}google [Any text or sentence]`,
    desc:"Search result from Google.",
    category:"Utils",
    react:"β",

    start:async(client,m,{command,prefix,text,args})=>{
if (!text)  return m.reply(`Please provide me some text`)
if (ggle == "none" || null)  return m.reply(`*β€οΈ Ask owner to give me an API key*`)
await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=${ggle}`)
.then((res) => {
    if (res.status !== 200) return void m.reply(`π Error: ${res.status}`);
    let result = ``;
    for (const item of res.data?.items) {
        result += `*π Title* : ${item.title}\n*πLink* : ${item.link}\n*π― Description* : ${item.snippet}\n\n`;
    }
 let urll = "https://i.ibb.co/qmbDtY2/acastro-180427-1777-0001-0.jpg"
 client.sendMessage(m.from,{image:{url:urll}, caption:result},{quoted:m})
})
.catch((err) => {
  m.reply(`π Error: ${err}`);
});
},
}
