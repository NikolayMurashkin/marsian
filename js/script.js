'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};




function films() {
	const moviesToLowerCase = movieDB.movies.map(e => e.toLowerCase()).sort();
	const list = document.querySelector('.promo__interactive-list');
	list.innerHTML = "";
	moviesToLowerCase.forEach((movie, i) => {
		list.innerHTML += `<li class="promo__interactive-item"><span class='number'>${i + 1}</span>${movie}<div class="delete"></div></li>`;
	});

	const inputFilm = document.querySelector('.adding__input');
	const promoBtn = document.querySelector('button');
	promoBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (inputFilm.value == '') {
			inputFilm.value = '';
		} else {
			if (inputFilm.value.length >= 21) {
				inputFilm.value = `${inputFilm.value.substr(0, 20)}...`;
			}
			movieDB.movies.push(inputFilm.value);
			inputFilm.value = '';
		}
		films();
	})

	const trash = document.querySelectorAll('.delete');
	trash.forEach(item => {
		item.addEventListener('click', () => {
			item.previousElementSibling.remove();
			const filmName = item.parentElement.textContent;
			const indexOfFilm = moviesToLowerCase.indexOf(filmName);
			if (indexOfFilm !== -1) {
				moviesToLowerCase.splice(indexOfFilm, 1);
			}
			item.parentElement.remove();
			const numbers = document.querySelectorAll('.number');
			numbers.forEach((number, index) => {
				number.textContent = index + 1;
			})
		})
	})
}

films();






const promo = document.querySelectorAll('.promo__adv img');
promo.forEach(item => item.remove());

const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'Драма';

const bg = document.querySelector('.promo__bg');
bg.style.background = "url('../img/bg.jpg') center top / cover no-repeat";
