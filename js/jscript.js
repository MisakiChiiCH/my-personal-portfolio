function getTheNumberInArray(){

	const guessNumber=document.getElementById("guess").value;
	let remarks;

	//the list arrays
	const dataArray=[0,12,57,4,96,29,71,45,38,62,19,88,6,24,70,91,11,33,52,2,99,31,67,43,9,60,15,76,40,21,94,1,27,35,17,85,48,7,55,13,36,30,92,26,79,66,98,3,59,20,83];


	//find the index of the guess
	const index = dataArray.indexOf(guessNumber);

	if (index !== -1){
		console.log('Congratulations! Your guess of ${guessNumber} was found in position ${index}');
	} else{
		console.log("Sorry, your guess of ${guessNumber} was not in the array");
	}
}