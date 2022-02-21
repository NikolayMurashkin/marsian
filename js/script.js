'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против...",
		]
	};

	const list = document.querySelector('.promo__interactive-list');
	const inputFilm = document.querySelector('.adding__input');
	const form = document.querySelector('.add');
	const checkBox = form.querySelector('[type="checkbox"]');

	function moviesToLowerCase(arr) {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].toLowerCase();
		};
		arr.sort();
	}
	function films(arr) {
		list.innerHTML = "";
		for (let i = 0; i < arr.length; i++) {
			list.innerHTML += `<li class="promo__interactive-item"><span class='number'>${i + 1}</span>${arr[i]}<div class="delete"></div></li>`;
		}
	}
	function addFilm(arr) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			if (inputFilm.value == '') {
				e.target.reset();
			} else {
				if (checkBox.checked) {
					console.log('Добавляем любимый фильм');
				}
				if (inputFilm.value.length > 21) {
					inputFilm.value = `${inputFilm.value.substr(0, 20)}...`;
				}
				arr.push(inputFilm.value);
				e.target.reset();
			}
			moviesToLowerCase(movieDB.movies);
			films(movieDB.movies);
			deleteFilm(movieDB.movies);
		})
	}
	function deleteFilm(arr) {
		const trash = document.querySelectorAll('.delete');
		trash.forEach(item => {
			item.addEventListener('click', () => {
				item.previousElementSibling.remove();
				const filmName = item.parentElement.textContent;
				const indexOfFilm = arr.indexOf(filmName);
				if (indexOfFilm !== -1) {
					arr.splice(indexOfFilm, 1);
				}
				item.parentElement.remove();
				const numbers = document.querySelectorAll('.number');
				numbers.forEach((number, index) => {
					number.textContent = index + 1;
				})
			})
		})
	}

	moviesToLowerCase(movieDB.movies);
	films(movieDB.movies);
	addFilm(movieDB.movies);
	deleteFilm(movieDB.movies);

	const promo = document.querySelectorAll('.promo__adv img');
	promo.forEach(item => item.remove());

	const genre = document.querySelector('.promo__genre');
	genre.innerHTML = 'Драма';

	const bg = document.querySelector('.promo__bg');
	bg.style.background = "url('../img/bg.jpg') center top / cover no-repeat";

})

