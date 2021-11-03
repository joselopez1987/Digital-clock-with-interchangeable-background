
window.addEventListener("DOMContentLoader", showTime());

function showTime(){
    let date = new Date();

    //date.setTime(5000000);
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h==0){
        h = 12;

    }

    if(h>12){
        h = h - 12;
        session = "PM";
    }

    // if(h<10){
    //     h = "0" + h;
    // }
    // if(m<10){
    //     m ="0" + m;
    // }
    // if(s<10){
    //     s ="0" + s;
    // }

    h=h<10 ? (h="0" + h) : h;
    m=m<10 ? (m="0" + m) : m;
    s=s<10 ? (s="0" + s) : s;

    //const time = h + ":" + m + ":" + s + ""+ '|' + "" + session;
    //console.log(time);
    const time = `${h}:${m}<small>.${s}|${session}</small>`; 

    document.getElementById("DisplayClock").innerHTML=time;
    setTimeout(showTime, 1000)

    // Change body background
    let bg;

    const userName = "Seiya";
    const user = document.getElementById("User");
    //console.log(user);

    if(h<8 && session === "AM"){
        bg = `url(https://images.freeimages.com/images/large-previews/2a9/good-morning-1380564.jpg)`;
        user.innerHTML=`Good Morning ${userName}`;
    }else if(h < 12 && session === "AM"){
        bg = `url(https://images.freeimages.com/images/large-previews/781/nature-1633368.jpg)`;
        user.innerHTML=`Good Day ${userName}`;
    }else if(h < 8 && session === "PM"){
        bg = `url(https://images.freeimages.com/images/large-previews/87f/sundial-1217857.jpg)`;
        user.innerHTML=`Good Afternoon ${userName}`;
    }else{
        bg = `url(https://images.freeimages.com/images/large-previews/595/winter-night-1380237.jpg)`;
        user.innerHTML=`Good Night ${userName}`;
    }

    // Insert bg image
    const body=document.querySelector("body");

    body.style.background = `${bg} center/cover`;

}

document.querySelector(".focus-container input").addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        const focus=document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML=`<h6>TODAY:</h6><h1>${focus.value}</h1>`
    }
});