const moduleFunctions = {
	"startCounter": startCounter,
	"stopCounter": stopCounter
};

module.LoadModule(moduleFunctions);

var interval;
var babies = 0;

// Received via intense Googling for like 5 minutes
const babiesBornEverySecond = 4.5;
var elValue = document.getElementById("value");

function update()
{
	babies += babiesBornEverySecond;
	elValue.innerText = Math.floor(babies);
}

function startCounter()
{
	if(interval == null)
	{
		var interval = setInterval(update, 1000)
	}
}

function stopCounter()
{
	if(interval != null)
	{
		clearInterval(interval);
		interval = null;
	}
}