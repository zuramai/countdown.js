# Countdown.js
A simple countdown for islamic prayers time

## How to use 
```javascript
let countDownMaghrib = new Countdown;
countDownMaghrib.until(maghribTime);
```
Then you can get day, hours, minutes and seconds left

```javascript
dayLeft = countDownMaghrib.getDay(); // 00
hourLeft = countDownMaghrib.getHours(); // 3 
minuteLeft = countDownMaghrib.getMinutes(); // 25
secondLeft = countDownMaghrib.getSeconds(); // 01
```

You can check the example provided
