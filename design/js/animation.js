const logolength=document.querySelectorAll("#logo path");

for(let i=0 ; i<logolength.length ; i++)
{
	console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}