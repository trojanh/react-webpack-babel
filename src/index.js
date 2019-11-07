console.log("hello world")

const getTime = () => {
const currentDate = new Date();
document.querySelector('#hour').innerHTML = currentDate.getHours() % 12;
document.querySelector('#minutes').innerHTML = currentDate.getMinutes();
document.querySelector('#seconds').innerHTML = currentDate.getSeconds();

setTimeout(() =>{ 
	 getTime();
}, 1000);	
}
getTime();
