/*function darkmode()
{
	document.getElementByID('main-c').style+='background-color: black';
	document.body.style+="background-color: black";
}*/
/*function dark()
{
	document.body.style.backgroundColor="black";
	document.body.style.color="white";
}*/

function darkmode()
{
	var toggler=document.getElementByClass("navbar-sticky-bottom text-center").getElementById("toggle-dark-mode");
	var body=document.getElementById("main-c");
	if(toggler.innerHTML=="Dark Mode")
	{
		toggler.innerHTML="Light Mode";
		body.className+="dark";
	}
	else
	{
		toggler.innerHTML="Dark Mode";
		body.className="";
	}
}