function todayTime(){
    var date = new Date()
    var hrs = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var sess =  document.getElementById('session')
    var today = date.toLocaleDateString();
    if(hrs > 12){
        sess.innerHTML='PM'
    }else{
        sess.innerHTML='AM'
    }

    if(hrs>12){
        hrs = hrs -12;
    }
    
    document.getElementById('date').innerHTML=today;
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(todayTime,10)
