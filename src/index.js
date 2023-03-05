import { style } from './css/index.scss';

const destinationHTML = document.getElementById('desctination');
const departureHTML = document.getElementById('departure');

fetch(
	'https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json'
)
	.then((response) => response.json())
	.then((data) => {
		data.destination.forEach((destinationElem) => {
			const elem = document.createElement('option');
			elem.textContent = destinationElem.desc;
			elem.setAttribute('value', destinationElem.value);
			destinationHTML.appendChild(elem);
		}),
			data.departure.forEach((departureElem) => {
				const elem = document.createElement('option');
				elem.textContent = departureElem.desc;
				elem.setAttribute('value', departureElem.value);
				departureHTML.appendChild(elem);
			});
	})
	.catch((error) => {
		console.error(error);
	});



function hidden() {
    Array.from(document.getElementById('desctination').children).forEach((children) => {
		if (children.classList.contains('hidden')) {
			children.classList.remove('hidden');
		}
	});

	const departureChecked = document.getElementById('departure').value;
    console.log('------')
    console.log(departureChecked);
    console.log(document.getElementById('desctination').children);
	Array.from(document.getElementById('desctination').children).forEach((children) => {
		if (children.value === departureChecked) {
			children.classList.add('hidden');
		}
	});

    if(document.getElementById('departure').value === document.getElementById('desctination').value) {
        document.getElementById('desctination').value = "";
    }

}

departureHTML.addEventListener("change", hidden);
