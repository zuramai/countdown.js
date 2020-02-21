# Countdown.js
A simple countdown class

## How to use 
```javascript
let countDownMaghrib = new Countdown;
countDownMaghrib.until(maghribTime);
```
Then you can get day, hours, minutes and seconds left

```javascript
dayLeft = countDownMaghrib.getRemainingDay(); // 00
hourLeft = countDownMaghrib.getRemainingHours(); // 3 
minuteLeft = countDownMaghrib.getRemainingMinutes(); // 25
secondLeft = countDownMaghrib.getRemainingSeconds(); // 01
```

You can check the example provided
