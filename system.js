// JavaScript code for encoding by matching Al-Bhed Lang with LAtin (based on Final Fantasy Wiki)

   let translate1 = "";
   let translate2 = "";
   let charLatin = ["e","p","s","t","i","w","k","n","u","v","g","c","l","r","y","b","x","h","m","d","o","f","z","q","a","j"," "];
   let charAlBhed = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];

<!-- Functiopn for supports Upper/Lowercase -->
  function checkCaps(item) {
    if (item == item.toUpperCase()) {
	  Caps = true;
	 } else if (item == item.toLowerCase()) {
	  Caps = false;
	  }
	 }
	 
<!-- Translate frm AlBhed to Latin -->

   function trsnlLtn() {
      translate1 = "";
      const user = document.getElementById('input1').value;
      const Input = user.split('');
      Input.forEach(FunctionAlBhed);
      document.getElementById("result1").textContent = translate1;
    }

   function FunctionAlBhed(value) {
     let reslt = "";
     let res = "";
	 checkCaps(value);
	 valueSml = value.toLowerCase();

     if (charLatin.includes(valueSml)) {
      let Latin = charLatin.indexOf(valueSml);
      reslt = charAlBhed[Latin];
	  if (Caps == true) {
        res = reslt.toUpperCase();
	  } else if (Caps == false) {
	    res = reslt.toLowerCase();
	  }
     } else {
      res = value; }
     translate1 = translate1 + res;
    }

  //Translate from AlBhed to Latin

   function trsnlAB() {
      translate2 = "";
      const user = document.getElementById('input2').value;
      const Input = user.split('');
      Input.forEach(FunctionLatin);
      document.getElementById("result2").textContent = translate2;
    }


   function FunctionLatin(value) {
     let reslt = "";
     let res = "";
	 checkCaps(value);
	 valueSml = value.toLowerCase();

     if (charAlBhed.includes(valueSml)) {
      let Latin = charAlBhed.indexOf(valueSml);
      reslt = charLatin[Latin];
	  if (Caps == true) {
        res = reslt.toUpperCase();
	  } else if (Caps == false) {
	    res = reslt.toLowerCase();
	  }
     } else {
      res = value; }
     translate2 = translate2 + res;
    }

//Function for copy to clipboard feature

function copas1() {
	var CopyInput = document.getElementById("result1");
	CopyInput.select();
	CopyInput.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(CopyInput.value);
	alert("Copied the text: " + CopyInput.value);
}
function copas2() {
	var CopyInput = document.getElementById("result2");
	CopyInput.select();
	CopyInput.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(CopyInput.value);
	alert("Copied the text: " + CopyInput.value);
}