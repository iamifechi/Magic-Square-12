document.addEventListener('DOMContentLoaded', () => {
// Getting User inputs
	const checkUserInputs = (data)=>{
			this.data = data;
			for(let i=0; i<data.length;i++){ 
				let box = i+1;
				let requiredNum = /[0-8]/g;
				if(requiredNum.test([data[i]]) == false || `${data[i]}` === 'NaN'){
					alert(`Fill box ${box} with a number from 0-8!`);
					//console.log(`Change this box number: ${box}`);
				}
				
			}	
			
	}

	// Checking for repetitions;
	const checkRepeat = (data)=>{
			this.data = data;
				var sorted_arr = data.slice().sort();
				var results = [];
				for (var i = 0; i < sorted_arr.length - 1; i++) {
					//let box = i+1;
					if (sorted_arr[i + 1] === sorted_arr[i]) {
						alert(`You repeated ${sorted_arr[i]}`)
						results.push(sorted_arr[i]);
					}
				}
		}
		
	// Checking the sum of each row and each column;
	const checkSumOfRowsAndColumns = (data)=>{
		this.data = data;

				const getRows = ()=>{
					let  rows = [[],[],[]];
					let rowArr = data.slice()
					for(let i in rowArr){
							for(let j in rows){
								while(rows[j].length<3){
								rows[j].push(rowArr[i]);
								rowArr.shift() 
							}
						}
						
					} 
					return rows
				}
			
				const getColumns = ()=> {
					let columns = [[],[],[]];
					let colArr = [...getRows()]
							for(let i in colArr){
								for(let j in colArr[i]){
									for(let k in columns){
									columns[k].push(colArr[i][j])
										colArr[i].splice(0,1)
									}
								} 
							}
					return columns;
				}
				
				let sum = function (arr){
					let total = 0;
					for(let i=0;i<arr.length;i++){
						total += arr[i];
					}
					return total;
				}

				let rowSum =[];
				let colSum = [];
				let correctArray = [12,12,12];
			
					for (let i in getRows()){
						rowSum.push(sum(getRows()[i]))
					}
					for (let i in getColumns()){
						colSum.push(sum(getColumns()[i]))
					}

					console.log(rowSum);
					console.log(colSum);

			
					if(rowSum.join()===colSum.join() && rowSum.join() === correctArray.join()){
					alert("Weldone Genius!!!");
					//clear();
				}
				else{
					if(rowSum.join()===correctArray.join()){
						alert(`Try again. Check the sum of boxes in you Columns`)}
					
					alert(`Try again. Check the sum of boxes in you Rows`);
				}
				
				

	}


// working on User inputs
document.addEventListener('onclick', puzzle=() => {

	var userInputs = {
			 r1c1 : parseInt(document.getElementById('r1c1').value),
			 r1c2 : parseInt(document.getElementById('r1c2').value),
			 r1c3 : parseInt(document.getElementById('r1c3').value),
			 r2c1 : parseInt(document.getElementById('r2c1').value),
			 r2c2 : parseInt(document.getElementById('r2c2').value),
			 r2c3 : parseInt(document.getElementById('r2c3').value),
			 r3c1 : parseInt(document.getElementById('r3c1').value),
			 r3c2 : parseInt(document.getElementById('r3c2').value),
			 r3c3 : parseInt(document.getElementById('r3c3').value)
	}
	
	// Converting user inputs to an array
	function dataArray(){
			let array = [];
			for(let i in userInputs){
				array.push(userInputs[i]);
			}
				return array;
	}

	// Checking if user inputs meets conditions and outputing results
checkUserInputs(dataArray());

checkRepeat(dataArray());

checkSumOfRowsAndColumns(dataArray());
})

})