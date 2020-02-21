let todayDate = new Date();
let today = todayDate.getFullYear() + "-" + (todayDate.getMonth()+1)+"-"+todayDate.getDate();
let now = todayDate.getTime();
let sholatSetelahIni = document.getElementById('sholat')


// change time here
let subuhTime = today+" 04:30:00"
let zuhurTime = today+" 12:30:00"
let asharTime = today+" 15:20:00"
let maghribTime = today+" 18:05:00"
let isyaTime = today+" 19:20:00"

// CREATE COUTNDOWN OBJECT
let countDownSubuh = new Countdown;
countDownSubuh.until(subuhTime);
let countDownZuhur = new Countdown;
countDownZuhur.until(zuhurTime);
let countDownAshar = new Countdown;
countDownAshar.until(asharTime);
let countDownMaghrib = new Countdown;
countDownMaghrib.until(maghribTime);
let countDownIsya = new Countdown;
countDownIsya.until(isyaTime);

setInterval(() => { 
    let dayLeft, hourLeft, minuteLeft, secondLeft;
    
    if(now > new Date(subuhTime).getTime() && now < new Date(zuhurTime).getTime()) {
        sholat.innerHTML = "ZUHUR"
        dayLeft = countDownZuhur.getRemainingDay();
        hourLeft = countDownZuhur.getRemainingHours();
        minuteLeft = countDownZuhur.getRemainingMinutes();
        secondLeft = countDownZuhur.getRemainingSeconds();
    }else if(now >= new Date(zuhurTime).getTime() && now < new Date(asharTime).getTime()) {
        sholat.innerHTML = "ASHAR"
        dayLeft = countDownAshar.getRemainingDay();
        hourLeft = countDownAshar.getRemainingHours();
        minuteLeft = countDownAshar.getRemainingMinutes();
        secondLeft = countDownAshar.getRemainingSeconds();
    }else if(now >= new Date(asharTime).getTime() && now < new Date(maghribTime).getTime()) {
        sholat.innerHTML = "MAGHRIB"
        dayLeft = countDownMaghrib.getRemainingDay();
        hourLeft = countDownMaghrib.getRemainingHours();
        minuteLeft = countDownMaghrib.getRemainingMinutes();
        secondLeft = countDownMaghrib.getRemainingSeconds();
    }else if(now >= new Date(maghribTime).getTime() && now < new Date(isyaTime).getTime()) {
        sholat.innerHTML = "ISYA"
        dayLeft = countDownIsya.getRemainingDay();
        hourLeft = countDownIsya.getRemainingHours();
        minuteLeft = countDownIsya.getRemainingMinutes();
        secondLeft = countDownIsya.getRemainingSeconds();
    }else if(now > new Date(isyaTime).getTime()) {
        sholat.innerHTML = "SUBUH"
        dayLeft = countDownZuhur.getRemainingDay();
        hourLeft = countDownZuhur.getRemainingHours();
        minuteLeft = countDownZuhur.getRemainingMinutes();
        secondLeft = countDownZuhur.getRemainingSeconds();
    }

    
    let day = document.getElementById('day');
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    

    day.innerHTML = dayLeft
    hour.innerHTML = hourLeft
    minute.innerHTML = minuteLeft
    second.innerHTML = secondLeft;
    
    todayDate = new Date();
    today = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
    now = todayDate.getTime();


}, 1000);