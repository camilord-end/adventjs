const letter = 'bici coche balón _playstation bici coche peluche'

const listGifts = (letter) => {
	const cartaArray = letter.split(' ');
	const cartaObject = {};
	cartaArray.forEach(item => {
		if (item.charAt(0) === '_') {
			return;
		}
		if (cartaObject[item]) {
			cartaObject[item]++;
		} else {
		cartaObject[item] = 1;
		}
	});
return cartaObject;
}

const regalos = listGifts(letter)

console.log(regalos)