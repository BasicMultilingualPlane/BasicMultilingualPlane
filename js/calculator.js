function encode(){ 
  if(document.forms[2].ascii.value != ''){ 
     var vText = document.forms[2].ascii.value; 
     document.forms[2].hex.value = convertToHex(vText); 
         var vEncoded = convertToUnicode(vText); 
     document.forms[2].unicode.value = vEncoded; 
         document.getElementById("unicodeHTML").innerHTML = vEncoded;
 	document.forms[2].ascii.focus();
	document.forms[2].ascii.blur();
	document.forms[2].ascii.select();
  } 
} 



function convertToUnicode(source) { 
  result = ''; 
  for (i=0; i<source.length; i++) 
    result += '&#' + source.charCodeAt(i) + ';'; 
  return result; 
} 

               
function convertToHex(num) { 
  var hex = ''; 
  for (i=0;i<num.length;i++) 
    hex += "%" + num.charCodeAt(i).toString(16).toUpperCase(); 
  return hex; 
}
