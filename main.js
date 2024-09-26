"use strict";
const factorElement = document.getElementById('factor');
const gr = document.getElementById('gr');
const ml = document.getElementById('ml');
let factor;

function setFactor() {
	let values = factorElement.value.split('/').map(Number);
	[gr.valueAsNumber, ml.valueAsNumber] = values;
	factor = values[0] / values[1];
}

function fix(value) {
	return Number(value.toFixed(1));
}

setFactor();
factorElement.addEventListener('change', setFactor);
gr.addEventListener('input', () => ml.valueAsNumber = fix(gr.valueAsNumber / factor));
ml.addEventListener('input', () => gr.valueAsNumber = fix(ml.valueAsNumber * factor));

for (let input of [gr, ml]) {
	input.disabled = false;
	input.addEventListener('mouseenter', () => input.focus());
	input.addEventListener('focus', () => input.select());
}
