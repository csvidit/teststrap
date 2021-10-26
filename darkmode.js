//var siteStatus;

function darkMode()
{
	var buttons = document.querySelectorAll("button");
	/*if(siteStatus === undefined)
	{
		siteStatus = "light";
		return;
	}*/
	if(Cookies.get('siteStatus') === 'undefined')
	{
		Cookies.set('siteStatus', 'light', {expires: 7});
		return;
	}
	//if(document.getElementById("dark")!=null)
	else if(Cookies.get('siteStatus') === 'dark')
	{
		document.getElementById("dark").id="light";
		document.querySelector("body").classList.replace("bg-black", "bg-white");
		document.querySelector("body").classList.replace("text-white", "text-dark");
		document.querySelector("#site-nav").classList.replace("bg-black", "bg-light");
		document.querySelector("#site-nav").classList.replace("navbar-dark", "navbar-light");
		for(i=0; i<buttons.length; i++)
		{
			buttons[i].classList.replace("btn-outline-light", "btn-outline-dark");
		}
		var elements = document.querySelectorAll(".darkable");
		for(i=0; i<elements.length; i++)
		{
			elements[i].classList.replace("bg-black", "bg-white");
			elements[i].classList.replace("text-white", "text-dark");
		}
		var borders = document.querySelectorAll(".border");
		for(i=0; i<borders.length; i++)
		{
			borders[i].classList.replace("border-white", "border-dark");
		}
		//siteStatus="light";
		Cookies.set('siteStatus', 'light', {expires: 7});
		document.getElementById("darkModeToggle").innerHTML="Revert to Dark Mode";
	}
	else
	{
		document.getElementById("light").id="dark";
		document.querySelector("body").classList.replace("bg-white", "bg-black");
		document.querySelector("body").classList.replace("text-dark", "text-white");
		document.querySelector("#site-nav").classList.replace("bg-light", "bg-black");
		document.querySelector("#site-nav").classList.replace("navbar-light", "navbar-dark");
		for(i=0; i<buttons.length; i++)
		{
			buttons[i].classList.replace("btn-outline-dark", "btn-outline-light");
		}
		var elements = document.querySelectorAll(".darkable");
		for(i=0; i<elements.length; i++)
		{
			elements[i].classList.replace("bg-white", "bg-black");
			elements[i].classList.replace("text-dark", "text-white");
		}
		var borders = document.querySelectorAll(".border");
		for(i=0; i<borders.length; i++)
		{
			borders[i].classList.replace("border-dark", "border-white");
		}
		//siteStatus="dark";
		Cookies.set('siteStatus', 'dark', {expires: 7});
		document.getElementById("darkModeToggle").innerHTML="Change to Light Mode";
	}
	
}