import getTime from "./getTime";
console.log("hello world")

const setTime = () => {
const {hour, minute, sec} = getTime();
document.querySelector('#hour').innerHTML = hour;
document.querySelector('#minutes').innerHTML = minute;
document.querySelector('#seconds').innerHTML = sec;

setTimeout(() =>{ 
	 setTime();
}, 1000);	
}

setTime();
