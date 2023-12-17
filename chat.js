let input = document.querySelector("input");
let button = document.querySelector("button")
let section = document.querySelector("section")
input.focus()
let search = {
    "h": "g",
    "hello": "hello pro",
    "مرحبا": "اهلا صديقي",
    "how are you": "fine and you",
    "im fine": "ok",
    "what's your name": "my name is smsm"
}
function clearinput(){
    input.value = ""
}
function creatmss(){
    if (input.value !== "") {
        let now = new Date();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds()
        let sendiv = document.createElement("div");
        let p = document.createElement("p");
        let small = document.createElement("small");
        if (h > 12) {
            small.innerHTML = `${h - 12}:${m}:${s}s`
        }else{
            small.innerHTML = `${h}:${m}:${s}s`
        }
        sendiv.className = "sendiv";
        p.className = "sender";
        p.innerHTML = input.value;        
        section.appendChild(sendiv);
        sendiv.appendChild(p);
        p.appendChild(small);
    }
}
function botmss(){
        if (input.value !== "") {
            let botdiv = document.createElement("div");
        let bot = document.createElement("p");
        let now = new Date();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let small = document.createElement("small");
        if (h > 12) {
            small.innerHTML = `${h - 12}:${m}:${s}s`
        }else{
            small.innerHTML = `${h}:${m}:${s}s`
        }
        botdiv.className = "botdiv";
        bot.className = "bot";
        if (search[input.value] === undefined) {
            bot.innerHTML = "i dont understand you try again";
        } else{
            bot.innerHTML = search[input.value];
        }
        section.appendChild(botdiv);
        botdiv.appendChild(bot);
        bot.appendChild(small);
        }
        
}
button.addEventListener("click",() => {
    creatmss()
    botmss()
    input.focus()
    section.scrollBy(0,10000);
    clearinput()
    window.localStorage.setItem("all", section.innerHTML)
})
if (window.localStorage.getItem("all")) {
    section.innerHTML = window.localStorage.getItem("all");
}
