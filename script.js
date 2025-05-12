

// grab the id's (#joke and #get-joke) and set them as const variables 
const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');


// add an event listener = when you 'click',  run the 'generateJoke' funciton
get_joke.addEventListener('click', generateJoke);


generateJoke();


// function that calls the API
async function generateJoke() {
	
	// call icanhaz API
	const jokeResult = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	
	
	const joke = await jokeResult.json();
	
	
	
	// set the new joke in the HTML
	jokeEl.innerHTML = joke.joke;
	
}