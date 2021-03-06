

'use strict';

let quranList = document.querySelector('.quran-asat');
let toggleKey = document.querySelector('.toggle-button');
let quranListItems = document.querySelector('.quran-select-wrapper');


const quranWrap = () =>{
	if(toggleKey.classList.contains('toggle-js')){
		quranList.style.height = "76px";
	quranListItems.style.width = "90%";
	toggleKey.classList.remove('toggle-js');
	}
	else{
	quranList.style.height = "320px";
	quranListItems.style.width = "100%";
	toggleKey.classList.add('toggle-js');
}
}

toggleKey.addEventListener('click', quranWrap);


document.querySelector('.quran-ayat-window').addEventListener('click', quranWrap);