var str = `first:"r" second:"crore" PMI:5.43379381898 Freq:443
first:"new" second:"delhi" PMI:5.68241444275 Freq:158
first:"r" second:"lakh" PMI:5.08384120453 Freq:98
first:"oil" second:"price" PMI:5.06858131037 Freq:92
first:"stock" second:"market" PMI:4.16827881557 Freq:78
first:"u" second:"s" PMI:7.12481973557 Freq:67
first:"year" second:"ago" PMI:5.02966893573 Freq:63
first:"early" second:"trade" PMI:6.29669846684 Freq:60
first:"central" second:"bank" PMI:5.23958703124 Freq:59
first:"s" second:"ampp" PMI:7.16862235822 Freq:58
first:"lakh" second:"crore" PMI:4.83756404705 Freq:55
first:"net" second:"profit" PMI:6.30531619805 Freq:49
first:"managing" second:"director" PMI:7.32307639009 Freq:49
first:"long" second:"term" PMI:6.31587983829 Freq:48
first:"official" second:"said" PMI:3.84878761355 Freq:47
first:"crude" second:"oil" PMI:5.545554537 Freq:44
first:"source" second:"said" PMI:3.96981321566 Freq:43
first:"mutual" second:"fund" PMI:6.35981754132 Freq:42
first:"emerging" second:"market" PMI:4.9138724715 Freq:39
first:"bse" second:"sensex" PMI:6.94596888288 Freq:39
first:"finance" second:"ministry" PMI:6.72597579992 Freq:38`;



str = str.split('\n');

var re = /[^\"]*\"([^\"]*)\"[^\"]*\"([^\"]*)\"[^\:]*\:([^ ]*)/g;
var x;
for( var i=0; i< str.length ; i++) {

	x = /[^\"]*\"([^\"]*)\"[^\"]*\"([^\"]*)\"[^\:]*\:([^ ]*)[^\:]*\:(.*)/g.exec(str[i])
	// console.log(x);
	// x[3] = x[3].split('.');
	// x[3] = x[3][0] + '.' + x[3][1].substr(0,4);

	console.log( '| ' + (i+1) +' | ' + x[1] + ' ' + x[2] + ' | ' + x[4] + ' |');

}