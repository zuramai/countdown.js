class Countdown {
    constructor() {
        this.daysLeft = 0;
        this.hoursLeft = 0;
        this.minutesLeft = 0;
        this.secondsLeft = 0;
    }
    until(datetime) {
        setInterval(() => {
            let theDate = Date.parse(datetime);
            let now = new Date().getTime();
    
            let distance = theDate - now;
    
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            
            this.daysLeft = days;
            this.hoursLeft = hours;
            this.minutesLeft = minutes;
            this.secondsLeft = seconds;
        }, 1000);
    }
    getRemainingDay() {
        return this.daysLeft;
    }
    getRemainingHours() {
        return this.hoursLeft;
    }
    getRemainingMinutes() {
        return this.minutesLeft;
    }
    getRemainingSeconds() {
        return this.secondsLeft;
    }
    
}
