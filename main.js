/** @format */

const decrementButton = document.querySelectorAll(`[data-action="decrement"]`);

const incrementButton = document.querySelectorAll(`[data-action="increment"]`);

decrementButton.forEach(button => {
	function decrement(e) {
		const btn = e.target.parentNode.parentElement.querySelector(
			'[data-action="decrement"]'
		);
		const target = btn.nextElementSibling;
		let value = Number(target.value);
		value--;
		target.value = value;
		if (target.value < 0) {
			target.value = "0";
		}
	}
	button.addEventListener("click", decrement);
});

incrementButton.forEach(button => {
	function increment(e) {
		const btn = e.target.parentNode.parentElement.querySelector(
			'[data-action="decrement"]'
		);
		const target = btn.nextElementSibling;

		let value = target.value;
		value++;
		target.value = value;
	}
	button.addEventListener("click", increment);
});
