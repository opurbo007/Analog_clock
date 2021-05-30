setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    let hrotation = 30 * hours + mins / 2;
    let mrotation = 6 * mins;
    let srotation = 6 * secs;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
    
},1000);