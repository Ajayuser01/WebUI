
function comp()
{
  var numOne, numTwo
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
if (numOne>numTwo){
	document.getElementById("answer").innerHTML="Bigger Number is "+numOne;
}
else if(numOne<numTwo){
	document.getElementById("answer").innerHTML="Bigger Number is "+numTwo;

}
else{
	document.getElementById("answer").innerHTML="Both First Number "+numOne+"and Second Number"+numTwo+" are equal ";
}

}