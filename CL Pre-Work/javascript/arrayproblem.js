function printReverse(array){
	for(let i = array.length - 1; i >= 0; i--){
		console.log(array[i]);
	}
}

function isUniform(array){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

function sumArray(array){
	var total = 0;
	array.forEach(function(el){
		total += element;
	});
	return total;
}

function max(array){
	var max = arr[0];
	for(var i = 1; i< array.length; i++){
		if(array[i] > max){
			max = array[i];
		}
	}
	return max;
}