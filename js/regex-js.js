// regex js loop
var myString = 'title:*tien nguyen* AND text:pailam';
var myRegexp = /(.+?)\:(.+?);/g;
match = myRegexp.exec(myString);
while (match != null) {
	// matched text: match[0]
	// match start: match.index
	// capturing group n: match[n]
	console.log('match', match);
	match = myRegexp.exec(myString);
}

// regex js match
var re = new RegExp(yyy, 'g');
xxx.match(re);
