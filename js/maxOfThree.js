var maxOfThree = function(num1,num2,num3){
	if (num1<num2){
				if(num2<num3){
					console.log(num3)
				}else{
					console.log(num2)
				}
			}else {
				if(num1<num3){
					console.log(num3)
				}else{
					console.log(num1)
				}
			}	
}


maxOfThree(18,27,4);