$(document).ready(function () {

	document.getElementById("dec-input").focus();

	$('#dec-form').submit(function(e){
	    e.preventDefault();
	    var getval = ($("#dec-input").val() ? $("#dec-input").val() : alert('Please enter a decimal value'));

	    document.getElementById("chosen-dec").innerHTML = "Decimal: " + "<strong>" + Number(getval).toLocaleString('en') + "</strong>";
	    document.getElementById("binary-text").innerHTML = "Binary: " + "<strong>" + decConvert(getval, 2) + "</strong>" + "<sub>2</sub>";
	    document.getElementById("octal-text").innerHTML = "Octal: " + "<strong>" + decConvert(getval, 8) + "</strong>"  + "<sub>8</sub>";
	    document.getElementById("hexadecimal-text").innerHTML = "Hexadecimal: " + "<strong>" + decConvert(getval, 16) + "</strong>" + "<sub>16</sub>";
		var dec_input = document.getElementById("dec-input").focus();
		document.getElementById("dec-form").reset();
	});
});

// Function to convert a decimal value to a given base
function decConvert(dec, base) {
    return Number(dec).toString(base);
}