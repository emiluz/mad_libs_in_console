alert("i'm working with JavaScript");
function mad_libs() {
	var noun = ["girl", "story", "languages", "light"];
	var article = ["the", "a"];
	var verb = ["lost", "sees", "is", "was"];
	var preposition = ["of", "in"];
	document.write('This ' + verb[2] +' '+ article[0] +' '+ noun[1] +' '+ preposition[0]+' '+ article[1]+' '+ noun[0] +
	' that '  + verb [3]+' '+ verb [0]+' '+ preposition [1]+' '+ 'all these different' +' '+ noun [2] + '. Sometimes she' 
	+' '+ verb[1]+' '+ article[0]+' '+ noun[3] + ', sometimes ' + verb[2] + ' all darkness... What should she do? Go to' 
	+' '+ article[0]+' '+ noun[3] + ' or run away?');
	
};

mad_libs();

