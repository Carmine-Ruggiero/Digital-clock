let hrs = document.getElementById("hrs");
let mnt = document.getElementById("mnt");
let scnd = document.getElementById("scnd");

setInterval(() => { 
	let currentTime = new Date();

hrs.textContent =( currentTime.getHours()<10?"0":"") + currentTime.getHours();

mnt.textContent = (currentTime.getMinutes()<10?"0":"") +  currentTime.getMinutes();

scnd.textContent =( currentTime.getSeconds()<10?"0":"") +  currentTime.getSeconds();


},1000)

