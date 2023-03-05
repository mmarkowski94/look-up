const sum = require('./sum').sum;
import { sum2 } from './sum2';
import { style } from './css/index.scss';
import Icon from './assets/img/proba.png';

console.log('Hello World');
console.log(sum(2, 3));
console.log(sum2(2, 3));

let heading = document.querySelector('#demo'),
	sumValue = sum(10, 5);

heading.innerText = `10+10= ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector('div').append(myIcon);
document.querySelector('div').classList.add('change');

fetch(
	'https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json'
)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});

    const destinationHTML = document.getElementById("desctination");
    const departureHTML = document.getElementById("departure");

    fetch(
        'https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json'
    )
        .then((response) => response.json())
        .then((data) => {
            data.destination.forEach(destinationElem => {
                const elem = document.createElement('option');
                elem.textContent = destinationElem.desc;
                elem.setAttribute('value', destinationElem.value);
                destinationHTML.appendChild(elem);
            });
        })
        .catch((error) => {
            console.error(error);
        });
        fetch(
            'https://raw.githubusercontent.com/mmarkowski94/look-up/main/src/endpointy/db.json'
        )
            .then((response) => response.json())
            .then((data) => {
                data.departure.forEach(departureElem => {
                    const elem = document.createElement('option');
                    elem.textContent = departureElem.desc;
                    elem.setAttribute('value', departureElem.value);
                    departureHTML.appendChild(elem);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    // <option value="volvo">Volvo</option>
