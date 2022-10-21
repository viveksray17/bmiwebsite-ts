function displayBmi(): void {
	let height = document.getElementById("height")! as HTMLInputElement;
	let weight = document.getElementById("weight")! as HTMLInputElement;
	let result = calculateBmi(parseFloat(height.value), parseFloat(weight.value));
	document.getElementById(
		"showresult"
	)!.innerText = `Your BMI is ${result.toFixed(2)}`;
	console.log(`Your random number is ${(Math.random() * 100).toFixed(0)}`)
}

function calculateBmi(height: number, weight: number): number {
	let heightInM = height / 100;
	return weight / heightInM ** 2;
}
