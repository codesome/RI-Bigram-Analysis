var str = `first:"hero" second:"motocorp" PMI:10.6154302511 Freq:5
first:"san" second:"francisco" PMI:10.6154302511 Freq:5
first:"mscis" second:"broadest" PMI:10.4331086943 Freq:6
first:"gen" second:"ze" PMI:10.4331086943 Freq:6
first:"grama" second:"panchayat" PMI:10.4331086943 Freq:6
first:"thomas" second:"cook" PMI:10.2789580145 Freq:5
first:"jio" second:"infocomm" PMI:10.1454266219 Freq:5
first:"silicon" second:"valley" PMI:10.1454266219 Freq:7
first:"texas" second:"intermediate" PMI:10.1248073347 Freq:6
first:"sukanya" second:"samriddhi" PMI:10.0276435862 Freq:6
first:"tamil" second:"nadu" PMI:9.92228307058 Freq:9
first:"rajya" second:"sabha" PMI:9.92228307058 Freq:6
first:"nirmala" second:"sitharaman" PMI:9.92228307058 Freq:5
first:"coca" second:"cola" PMI:9.82697289077 Freq:10
first:"circuit" second:"breaker" PMI:9.82697289077 Freq:9
first:"narayana" second:"hrudayalaya" PMI:9.73996151378 Freq:8
first:"saudi" second:"arabia" PMI:9.58581083396 Freq:10
first:"arundhati" second:"bhattacharya" PMI:9.58581083396 Freq:8
first:"viral" second:"shot" PMI:9.58581083396 Freq:5
first:"l" second:"ampt" PMI:9.56460862631 Freq:10
first:"germany" second:"dax" PMI:9.55763995699 Freq:5
first:"sq" second:"ft" PMI:9.51681796247 Freq:8
first:"patanjali" second:"ayurved" PMI:9.51681796247 Freq:7
first:"infinite" second:"analytics" PMI:9.49050065415 Freq:5
first:"losing" second:"streak" PMI:9.33449640568 Freq:5
first:"blue" second:"chip" PMI:9.26649167656 Freq:15
first:"hang" second:"seng" PMI:9.22913589002 Freq:19
first:"raw" second:"material" PMI:9.22913589002 Freq:12
first:"jan" second:"dhan" PMI:9.22913589002 Freq:9
first:"angel" second:"broking" PMI:9.22913589002 Freq:6
first:"morgan" second:"stanley" PMI:9.18034572585 Freq:13
first:"jp" second:"morgan" PMI:9.18034572585 Freq:7
first:"intermediate" second:"wti" PMI:9.18034572585 Freq:5
first:"somnath" second:"temple" PMI:9.15217484888 Freq:5
first:"dedicated" second:"freight" PMI:9.14909318234 Freq:9
first:"app" second:"click" PMI:9.14689779178 Freq:7
first:"mercedes" second:"benz" PMI:9.13382571021 Freq:14
first:"dual" second:"mode" PMI:9.13382571021 Freq:6
first:"bharti" second:"airtel" PMI:9.12092230538 Freq:7
first:"poll" second:"conducted" PMI:9.11580720471 Freq:5
first:"aditya" second:"birla" PMI:9.11135285436 Freq:6
first:"kongs" second:"hang" PMI:9.09560449739 Freq:14
first:"shree" second:"cement" PMI:9.08937394764 Freq:5
first:"sun" second:"pharma" PMI:9.07498521019 Freq:6
first:"generic" second:"medicine" PMI:9.07498521019 Freq:6
first:"latin" second:"america" PMI:9.05518258289 Freq:5
first:"dhan" second:"yojana" PMI:9.04681433322 Freq:5
first:"freight" second:"corridor" PMI:9.03131014669 Freq:8
first:"electrified" second:"route" PMI:9.0059923387 Freq:5`;

str = str.split('\n');

var re = /[^\"]*\"([^\"]*)\"[^\"]*\"([^\"]*)\"[^\:]*\:([^ ]*)/g;
var x;
for( var i=0; i< str.length ; i++) {

	x = /[^\"]*\"([^\"]*)\"[^\"]*\"([^\"]*)\"[^\:]*\:([^ ]*)/g.exec(str[i])

	console.log( '| ' + (i+1) +' | ' + x[1] + ' | ' + x[2] + ' | ' + x[3] + ' |');

}


