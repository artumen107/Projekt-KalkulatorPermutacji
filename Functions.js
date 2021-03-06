//historia to tablica 10 elementów, 
//jeśli klikniemy w jakis przycisk pod permutacją
//element 10 z tabeli sie usuwa, dodaje sie element 1
//select pobiera dane z tablicy
//local storage

//Podstawowe:
//klawiatura wlasna, po kliknieciu w przycisk staje sie nieczynny
//DONE: widok działania w postaci cyklicznej
//DONE: widok działania w postaci tabelarycznej
//DONE: wprowadzanie tabelarycznie
//DONE: wszystkie przyciski
//wypisanie liczby inwersji oraz parzystości permutacji

//Zaawansowane:
//wersja na komputer stacjonarny/laptop

window.onload = function () {
	var tekst = document.getElementById("test");
	var tekst2 = document.getElementById("test2");
	var powerbtA = document.getElementById("powerbtA");
	var powerbtB = document.getElementById("powerbtB");
	var reversebtA = document.getElementById("reversebtA");
	var reversebtB = document.getElementById("reversebtB");
	var multiplyBt = document.getElementById("multiplyBt");
	var cycleBt = document.getElementById("cycleBt");
	var resultText = document.getElementById("resultText");
	var powerBInput = document.getElementById("powerBInput");
	var powerAInput = document.getElementById("powerAInput");
	
	var bt1 = document.getElementById("bt1");
	var bt2 = document.getElementById("bt2");
	var bt3 = document.getElementById("bt3");
	var bt4 = document.getElementById("bt4");
	var bt5 = document.getElementById("bt5");
	var bt6 = document.getElementById("bt6");
	var bt7 = document.getElementById("bt7");
	var bt8 = document.getElementById("bt8");
	var bt9 = document.getElementById("bt9");
	
	var clickedField = 0;
	var clickedArray = [];
	var clickedArray2 = [];
	

	
//localStorage.clear();
	var historyTable = [];
	for (var i = 1; i<10; i++)
	{
		if ((localStorage.getItem(''+i))!= null)
		{
			historyTable.push(localStorage.getItem(''+i));
		}
		document.getElementById(""+i+i+i+i).innerHTML=historyTable[i-1];
		
	}
	
	var historyTableX = [];
	for (var i = 1; i<10; i++)
	{
		if ((localStorage.getItem(''+i+i))!= null)
		{
			historyTableX.push(localStorage.getItem(''+i+i));
		}
		document.getElementById(""+i+i+i+i+i).innerHTML=historyTableX[i-1];
	}
	
	var historyTableY = [];
	for (var i = 1; i<10; i++)
	{
		if ((localStorage.getItem(''+i+i+i))!= null)
		{
			historyTableY.push(localStorage.getItem(''+i+i+i));
		}
		document.getElementById(""+i+i+i+i+i+i).innerHTML=historyTableY[i-1];
	}
	
	
	
	powerbtA.addEventListener("click", powerA);
	powerbtB.addEventListener("click", powerB);
	reversebtA.addEventListener("click", reverseA);
	reversebtB.addEventListener("click", reverseB);
	multiplyBt.addEventListener("click", multiply);
	cycleBt.addEventListener("click", showCycle);
	console.log(historyTable);
	console.log(historyTableX);
	console.log(historyTableY);
	
	var input1 = document.getElementById("1");
	var input2 = document.getElementById("2");
	var input3 = document.getElementById("3");
	var input4 = document.getElementById("4");
	var input5 = document.getElementById("5");
	var input6 = document.getElementById("6");
	var input7 = document.getElementById("7");
	var input8 = document.getElementById("8");
	var input9 = document.getElementById("9");
	
	input1.addEventListener("click", function() {clickedInput("1");}, false);
	input2.addEventListener("click", function() {clickedInput("2");}, false);
	input3.addEventListener("click", function() {clickedInput("3");}, false);
	input4.addEventListener("click", function() {clickedInput("4");}, false);
	input5.addEventListener("click", function() {clickedInput("5");}, false);
	input6.addEventListener("click", function() {clickedInput("6");}, false);
	input7.addEventListener("click", function() {clickedInput("7");}, false);
	input8.addEventListener("click", function() {clickedInput("8");}, false);
	input9.addEventListener("click", function() {clickedInput("9");}, false);

	var input11 = document.getElementById("11");
	var input22 = document.getElementById("22");
	var input33 = document.getElementById("33");
	var input44 = document.getElementById("44");
	var input55 = document.getElementById("55");
	var input66 = document.getElementById("66");
	var input77 = document.getElementById("77");
	var input88 = document.getElementById("88");
	var input99 = document.getElementById("99");
	
	input11.addEventListener("click", function() {clickedInput("11");}, false);
	input22.addEventListener("click", function() {clickedInput("22");}, false);
	input33.addEventListener("click", function() {clickedInput("33");}, false);
	input44.addEventListener("click", function() {clickedInput("44");}, false);
	input55.addEventListener("click", function() {clickedInput("55");}, false);
	input66.addEventListener("click", function() {clickedInput("66");}, false);
	input77.addEventListener("click", function() {clickedInput("77");}, false);
	input88.addEventListener("click", function() {clickedInput("88");}, false);
	input99.addEventListener("click", function() {clickedInput("99");}, false);
	
	bt1.addEventListener("click", function() {insertNumber(1);}, false);
	bt2.addEventListener("click", function() {insertNumber(2);}, false);
	bt3.addEventListener("click", function() {insertNumber(3);}, false);
	bt4.addEventListener("click", function() {insertNumber(4);}, false);
	bt5.addEventListener("click", function() {insertNumber(5);}, false);
	bt6.addEventListener("click", function() {insertNumber(6);}, false);
	bt7.addEventListener("click", function() {insertNumber(7);}, false);
	bt8.addEventListener("click", function() {insertNumber(8);}, false);
	bt9.addEventListener("click", function() {insertNumber(9);}, false);
	
	
	function clickedInput (id)
	{

			clickedField = id;
		

	}
	
	function insertNumber(clickedButtonValue) {
	clickedFieldInput = document.getElementById(clickedField);			
	
	
		if (parseInt(clickedField)<10)
		{
		
		
			if (!clickedArray.includes(clickedButtonValue))
			{
				
				clickedFieldInput.value=clickedButtonValue;
				clickedArray.push(clickedButtonValue);
			}
		
		}
		else if (parseInt(clickedField)>10 && parseInt(clickedField)<=99)
			{
				if (!clickedArray2.includes(clickedButtonValue))
			{
				clickedFieldInput.value=clickedButtonValue;
				clickedArray2.push(clickedButtonValue);
			}
			
		
			}
	
		
		
	}
	
	
	function powerA() {
		
	
		var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i).value.toString();
		}
		if (historyTable.length<9)
		{
		localStorage.setItem((historyTable.length+1).toString(), permutationString);
		historyTable.push(permutationString);
		
		//DODAWANIE DYNAMICZNE DO HISTORII
		var len = historyTable.length;
		document.getElementById(""+len+len+len+len).innerHTML=historyTable[len-2];
		//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
		console.log(""+len.toString()+len.toString()+len.toString()+len.toString() + " if")
		console.log(historyTable[len-2]);
		//WKLEIC TE FUNKCJE WSZEDZIE!!!
		}
		else 
		{
			
			historyTable.shift();
			var len = historyTable.length;
			historyTable.push(permutationString);
			localStorage.setItem((historyTable.length+1).toString(), permutationString);
			
			document.getElementById(""+len+len+len+len).innerHTML=historyTable[len-2];
			//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
			console.log(""+len.toString()+len.toString()+len.toString()+len.toString() + " else ")
		}
		
		
		
		if (powerAInput.value && powerAInput.value > 0)
		{
			
			var power = powerAInput.value;
		for (var n=1; n<10; n++)
		{
		document.getElementById(""+n+n+n).innerHTML=document.getElementById(""+n).value;
		}
		
		//tekst.innerHTML= permutationString;
		
		for (var j = 1; j < power; j++)
		{
		for (var i = 1; i<10; i++)
		{
		var bufor = document.getElementById(""+i+i+i).innerHTML;
		var result = document.getElementById(""+bufor.toString()).value;
		document.getElementById(i+""+i+i).innerHTML=result;
		}
		}
		}
	
	}
	
	
	
	
	function powerB() {
		
		
		
		
		var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i+i).value.toString();
		}
		if (historyTableX.length<9)
		{
		localStorage.setItem(((historyTableX.length+1)+""+(historyTableX.length+1)).toString(), permutationString);
		historyTableX.push(permutationString);
		
		//DODAWANIE DYNAMICZNE DO HISTORII
		var len = historyTableX.length;
		document.getElementById(""+len+len+len+len+len).innerHTML=historyTableX[len-2];
		//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
		console.log(""+len.toString()+len.toString()+len.toString()+len.toString()+len.toString() + " if")
		console.log(historyTableX[len-2]);
		//WKLEIC TE FUNKCJE WSZEDZIE!!!
		}
		else 
		{
			
			historyTableX.shift();
			var len = historyTableX.length;
			historyTableX.push(permutationString);
			localStorage.setItem(((historyTableX.length+1)+""+(historyTableX.length+1)).toString(), permutationString);
			
			document.getElementById(""+len+len+len+len+len).innerHTML=historyTableX[len-2];
			//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
			console.log(""+len.toString()+len.toString()+len.toString()+len.toString() +len.toString() + " else ")
		}
		
		
		if (powerBInput.value && powerBInput.value > 0)
		{
			
			var power = powerBInput.value;
		for (var n=1; n<10; n++)
		{
		document.getElementById(""+n+n+n).innerHTML=document.getElementById(""+n+n).value;
		}
		
		//tekst.innerHTML= permutationString;
		
		for (var j = 1; j < power; j++)
		{
		for (var i = 1; i<10; i++)
		{
		var bufor = document.getElementById(""+i+i+i).innerHTML;
		var result = document.getElementById(""+bufor.toString()+bufor.toString()).value;
		document.getElementById(i+""+i+i).innerHTML=result;
		}
		}
		}
		
	
	}
	
	function reverseA() {
		
	var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i).value.toString();
		}
		if (historyTable.length<9)
		{
		localStorage.setItem((historyTable.length+1).toString(), permutationString);
		historyTable.push(permutationString);
		
		//DODAWANIE DYNAMICZNE DO HISTORII
		var len = historyTable.length;
		document.getElementById(""+len+len+len+len).innerHTML=historyTable[len-2];
		//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
		console.log(""+len.toString()+len.toString()+len.toString()+len.toString() + " if")
		console.log(historyTable[len-2]);
		//WKLEIC TE FUNKCJE WSZEDZIE!!!
		}
		else 
		{
			
			historyTable.shift();
			var len = historyTable.length;
			historyTable.push(permutationString);
			localStorage.setItem((historyTableX.length+1).toString(), permutationString);
			
			document.getElementById(""+len+len+len+len).innerHTML=historyTable[len-2];
			//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
			console.log(""+len.toString()+len.toString()+len.toString()+len.toString() + " else ")
		}
	
	var buforTable = [];
	var resultTable = [];
	
	for (var i = 1; i<10; i++)
	{
		
		var buforItem = document.getElementById(i).value;
		buforTable.push(buforItem);
		
	}
	//tekst.innerHTML=buforTable.toString();

	for (var i = 0; i<9; i++)
	{
		var searchingIndex = i+1;
		resultTable[i]=buforTable.indexOf(searchingIndex.toString());
		document.getElementById(""+searchingIndex+searchingIndex+searchingIndex).innerHTML=(parseInt(resultTable[i])+1);
	}
	
	resultText.innerHTML = "ODWROTNOŚĆ permutacji 1";
	}
	
	
	function reverseB() {
		
		var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i+i).value.toString();
		}
		if (historyTableX.length<9)
		{
		localStorage.setItem(((historyTableX.length+1)+""+(historyTableX.length+1)).toString(), permutationString);
		historyTableX.push(permutationString);
		
		//DODAWANIE DYNAMICZNE DO HISTORII
		var len = historyTableX.length;
		document.getElementById(""+len+len+len+len+len).innerHTML=historyTableX[len-2];
		//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
		console.log(""+len.toString()+len.toString()+len.toString()+len.toString()+len.toString() + " if")
		console.log(historyTableX[len-2]);
		//WKLEIC TE FUNKCJE WSZEDZIE!!!
		}
		else 
		{
			
			historyTableX.shift();
			var len = historyTableX.length;
			historyTableX.push(permutationString);
			localStorage.setItem(((historyTableX.length+1)+""+(historyTableX.length+1)).toString(), permutationString);
			
			document.getElementById(""+len+len+len+len+len).innerHTML=historyTableX[len-2];
			//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
			console.log(""+len.toString()+len.toString()+len.toString()+len.toString() +len.toString() + " else ")
		}
		
		
		
		
		
		var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i+i).value.toString();
		}
		if (historyTableX.length<10)
		{
			var len = historyTableX.length;
		localStorage.setItem((len+1)+""+(len+1), permutationString);
		historyTableX.push(permutationString);
		console.log(historyTableX);
		}
		else 
		{
			historyTableX.shift;
			historyTableX.push(permutationString);
		}
		
	var buforTable = [];
	var resultTable = [];
	
	for (var i = 1; i<10; i++)
	{
		
		var buforItem = document.getElementById(""+i+i).value;
		buforTable.push(buforItem);
		
	}
	
	for (var i = 0; i<9; i++)
	{
		var searchingIndex = i+1;
		resultTable[i]=buforTable.indexOf(searchingIndex.toString());
		document.getElementById(""+searchingIndex+searchingIndex+searchingIndex).innerHTML=(parseInt(resultTable[i])+1);
	}
	
	resultText.innerHTML = "ODWROTNOŚĆ permutacji 2";
	
	}
	
	function multiply() {
		
		
		
		
		
		for (var i = 1; i<10; i++)
		{
		var bufor = document.getElementById(i).value;
		var result = document.getElementById(""+bufor+bufor.toString()).value;
		document.getElementById(i+""+i+i).innerHTML=result;
		}
		
		var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i+i+i).innerHTML.toString();
		}
		if (historyTableY.length<9)
		{
		localStorage.setItem(((historyTableY.length+1)+""+(historyTableY.length+1)+(historyTableY.length+1)).toString(), permutationString);
		historyTableY.push(permutationString);
		
		//DODAWANIE DYNAMICZNE DO HISTORII
		var len = historyTableY.length;
		document.getElementById(""+len+len+len+len+len+len).innerHTML=historyTableY[len-2];
		//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
		console.log(""+len.toString()+len.toString()+len.toString()+len.toString()+len.toString() + " if")
		console.log(historyTableY[len-2]);
		//WKLEIC TE FUNKCJE WSZEDZIE!!!
		}
		else 
		{
			
			historyTableY.shift();
			var len = historyTableY.length;
			historyTableY.push(permutationString);
			localStorage.setItem(((historyTableY.length+1)+""+(historyTableY.length+1)+(historyTableY.length+1)).toString(), permutationString);
			
			document.getElementById(""+len+len+len+len+len+len).innerHTML=historyTableY[len-2];
			//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
			console.log(""+len.toString()+len.toString()+len.toString()+len.toString() +len.toString()+len.toString() + " else ")
		}
	
	}
	
	function showCycle() {

	var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i+i+i).innerHTML.toString();
		}
		if (historyTableY.length<10)
		{
			var len = historyTableY.length;
		localStorage.setItem((len+1)+""+(len+1)+(len+1), permutationString);
		historyTableY.push(permutationString);
		console.log(historyTableY);
		}
		else 
		{
			historyTableY.shift;
			historyTableY.push(permutationString);
		}
		
	var cyclesResult = "";
	var usedCheckings = [];
	var usedHeaders = [];
	
	
	for (var i = 1; i<10; i++)
	{
		for (var y = 1; y<10; y++)
		{	
		var checking = parseInt(document.getElementById(""+y+y+y).innerHTML);
		var header = y;
		console.log("checking = ", checking);
		console.log("header = ", header);
		if (y == 1){
			if(!usedCheckings.includes(checking))
					usedCheckings.push(checking);
				
			if(!usedHeaders.includes(1))
			{
					usedHeaders.push(1);
					cyclesResult += ""+ header + checking;
			}
		console.log(checking);
		}
	
		if (!usedCheckings.includes(checking) && !usedHeaders.includes(header))
			{
				if (header == usedCheckings[usedCheckings.length-1])
				{
					cyclesResult += ""+ header + checking;
					usedCheckings.push(checking);
					usedHeaders.push(y);
					console.log("%c ####### DODAJE ELEMENT #######" + " " + header + checking, 'background: #222; color: #bada55');
				}
				
				else if (header != usedCheckings[usedCheckings.length-1])
				{
					if (usedHeaders.includes(usedCheckings[usedCheckings.length-1]))
					{
					cyclesResult += ""+ header + checking;
					usedCheckings.push(checking);
					usedHeaders.push(y);
					console.log("%c ####### DODAJE ELEMENT #######" + " " + header + checking, 'background: #222; color: #bada55');
					}
				}
			}
		
		else {console.log("%c ####### OMIJAM ELEMENT #######" + " " + header + checking, 'background: #222; color: #bada55');}
		}
	}
	
	
	var finalCyclesText = "";
	var usedNumber = [];
	for (var i=0; i<cyclesResult.length; i++)
	{
		
		if (!usedNumber.includes(cyclesResult[i]))
		{
			if (cyclesResult[i]!=cyclesResult[i+1])
			{
				if (i==0)
				{
					finalCyclesText += "("+ cyclesResult[i];
					usedNumber.push(cyclesResult[i]);
				}
				
				else 
				{
					finalCyclesText += ")("+ cyclesResult[i];
					usedNumber.push(cyclesResult[i]);
				}
			}

			else
			{
			finalCyclesText += ""+ cyclesResult[i];
			usedNumber.push(cyclesResult[i]);
			}
		}
		else if (i == cyclesResult.length-1)
		{
			finalCyclesText += ")";
		}
	}


	console.log("%c ####### USED HEADERS #######" + " " +usedHeaders, 'background: #222; color: #bada55');
	console.log("%c ####### USED CHECKINGS #######" + " " +usedCheckings, 'background: #222; color: #bada55');
	//tekst.innerHTML=cyclesResult;
	
	//tekst2.innerHTML=finalCyclesText;
	var regex = /\([^)]*\)/g;
	
	const finalCyclesTEST = finalCyclesText.match(regex);
	console.log(finalCyclesTEST);
	tekst.innerHTML = finalCyclesTEST.toString();
	//tutaj mamy dlugosc cyklu:
	console.log(finalCyclesTEST[0].length-2);
	//ilosc cykli:
	console.log(finalCyclesTEST.length);
	
	
	
	var permutationString = "";
		for (var i =1; i<10; i++)
		{
			permutationString=permutationString + "" +document.getElementById(""+i+i+i).innerHTML.toString();
		}
		if (historyTableY.length<9)
		{
		localStorage.setItem(((historyTableY.length+1)+""+(historyTableY.length+1)+(historyTableY.length+1)).toString(), permutationString);
		historyTableY.push(permutationString);
		
		//DODAWANIE DYNAMICZNE DO HISTORII
		var len = historyTableY.length;
		document.getElementById(""+len+len+len+len+len+len).innerHTML=historyTableY[len-2];
		//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
		console.log(""+len.toString()+len.toString()+len.toString()+len.toString()+len.toString() + " if")
		console.log(historyTableY[len-2]);
		//WKLEIC TE FUNKCJE WSZEDZIE!!!
		}
		else 
		{
			
			historyTableY.shift();
			var len = historyTableY.length;
			historyTableY.push(permutationString);
			localStorage.setItem(((historyTableY.length+1)+""+(historyTableY.length+1)+(historyTableY.length+1)).toString(), permutationString);
			
			document.getElementById(""+len+len+len+len+len+len).innerHTML=historyTableY[len-2];
			//console.log(document.getElementById(""+len.toString()+len.toString()+len.toString()+len.toString()).innerHTML);
			console.log(""+len.toString()+len.toString()+len.toString()+len.toString() +len.toString()+len.toString() + " else ")
		}
	}
	
	
	
	

}