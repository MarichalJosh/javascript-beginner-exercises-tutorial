/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	var randomNumber = Math.floor(Math.random() * 10) + 1;// para que no salga el 0 agregar + 1 despues del parentesis
	return randomNumber;
}


console.log(getRandomInt());