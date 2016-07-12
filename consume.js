Array.prototype.consume=function(x){
	var f=x,m;if(f){m=this;while(e=m.shift()){f(e,m);};};
};

var m=[1,2,3,4,5];
m.consume(function(value,thearray){console.log(value,thearray);});

