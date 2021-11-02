"use strict";
const factor = 96 / 300;
const gr = document.getElementById('gr');
const ml = document.getElementById('ml');

function fix(value) {
	return Number(value.toFixed(1));
}

gr.addEventListener('input', () => ml.value = fix(gr.value / factor));
ml.addEventListener('input', () => gr.value = fix(ml.value * factor));

function selectInput(input) {
	setTimeout(function() {
		try {
			input.setSelectionRange(0, input.value.length);
		}
		catch(e) {
			input.select();
		}
	}, 0);
}

for (let input of [gr, ml]) {
	input.addEventListener('mouseenter', () => input.focus());
	input.addEventListener('focus', () => selectInput(input));
}
