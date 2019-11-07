export default function(){
const currentDate = new Date();
return {
	hour: currentDate.getHours() % 12,
	minute: currentDate.getMinutes(),
	sec: currentDate.getSeconds()
	}
}
