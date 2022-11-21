stack = new Array();
stackbak = new Array();
var und=0;
var mode='RAD';

function stacksav(){
	und=1;
	while(stackbak.length>0)stackbak.shift();
	for(var i=stack.length-1;i>=0;i--)stackbak.unshift(stack[i]);
	stackbak.unshift(document.javacalc.inp1.value);
	stackbak.unshift(document.javacalc.inp2.value);	
}

function undo(){
	if(und){
		document.javacalc.inp2.value=stackbak.shift();
		document.javacalc.inp1.value=stackbak.shift();
		while(stack.length>0)stack.shift();
		for(var i=stackbak.length-1;i>=0;i--)stack.unshift(stackbak[i]);
		if(document.javacalc.inp2.value=="undefined")document.javacalc.inp2.value="";
		if(document.javacalc.inp1.value=="undefined")document.javacalc.inp1.value="";
	}
	und=0;
}

function degmode(){
	mode='DEG';
	document.javacalc.deg.value='*DEG';
	document.javacalc.rad.value='RAD';
}

function radmode(){
	mode='RAD';
	document.javacalc.rad.value='*RAD';
	document.javacalc.deg.value='DEG';
}

function push(repeat){
	if (document.javacalc.inp.value!=''){
		rex=/\s/;
		var ind=document.javacalc.inp.value.search(rex);
		if (ind!=-1){
			if (document.javacalc.inp.value.slice(0,ind)=="undefined"){
				document.javacalc.inp.value="";
				alert("Undefined.");
				return false;
			}
			if (document.javacalc.inp.value.slice(0,ind)=="Infinity"){
				document.javacalc.inp.value="";
				alert("Infinity.");
				return false;
			}
			if (document.javacalc.inp.value.slice(0,ind)=="-Infinity"){
				document.javacalc.inp.value="";
				alert("Negative Infinity.");
				return false;
			}
			if (isNaN(document.javacalc.inp.value.slice(0,ind))){
				document.javacalc.inp.value="";
				alert("Not a number.");
				return false;
			}
			stack.unshift(document.javacalc.inp.value.slice(0,ind));
			document.javacalc.inp2.value=document.javacalc.inp1.value;
			document.javacalc.inp1.value=stack[0];
			document.javacalc.inp.value=document.javacalc.inp.value.slice(ind+1,document.javacalc.inp.value.length);
			push(0);
			return true;
		}
		else{
			if (document.javacalc.inp.value=="undefined"){
				document.javacalc.inp.value="";
				alert("Undefined.");
				return false;
			}
			if (document.javacalc.inp.value=="Infinity"){
				document.javacalc.inp.value="";
				alert("Infinity.");
				return false;
			}
			if (document.javacalc.inp.value=="-Infinity"){
				document.javacalc.inp.value="";
				alert("Negative Infinity.");
				return false;
			}
			if (isNaN(document.javacalc.inp.value)){
				document.javacalc.inp.value="";
				alert("Not a number.");
				return false;
			}
			stack.unshift(document.javacalc.inp.value);
			document.javacalc.inp2.value=document.javacalc.inp1.value;
			document.javacalc.inp1.value=document.javacalc.inp.value;
			document.javacalc.inp.value='';
			return true;
		}
	}
	else{
		if(document.javacalc.inp1.value!=''){
			if(repeat==1){
				document.javacalc.inp.value=document.javacalc.inp1.value;
				push(0);
			}
			else return true;
		}
		else return false;
	}
	return true;
}

function pop(){
	if (stack.length>0)document.javacalc.inp.value=stack.shift();
	else document.javacalc.inp.value='';
	if (stack.length>0)document.javacalc.inp1.value=stack[0];
	else document.javacalc.inp1.value='';
	if (stack.length>1)document.javacalc.inp2.value=stack[1];
	else document.javacalc.inp2.value='';
	return document.javacalc.inp.value;
}

function swap(){
	stacksav();
	var x,y;

	push(0);
	x=pop();
	y=pop();
	document.javacalc.inp.value=x;
	push(0);
	document.javacalc.inp.value=y;
	push(0);
}	

function clr(){
	stacksav();
	document.javacalc.inp.value='';
	document.javacalc.inp1.value='';
	document.javacalc.inp2.value='';
	while(stack.length>0)stack.shift();
}

function bkspc(){
	stacksav();
	if (document.javacalc.inp.value==''){
		pop();
		document.javacalc.inp.value='';
	}
	else document.javacalc.inp.value=document.javacalc.inp.value.slice(0,-1);
}

function sign(){
	stacksav();
	var num=document.javacalc.inp.value!='';

	push(0);
	if (num)pop();
	if (document.javacalc.inp.value!=''){
		rex=/e/i;
		var z=document.javacalc.inp.value.search(rex);
		if (z!=-1){
			var y=new Number(document.javacalc.inp.value.slice(z+1,document.javacalc.inp.value.length));
			y*=-1;
			document.javacalc.inp.value=document.javacalc.inp.value.slice(0,z+1)+y.toString();
		}
		else{
			var x=new Number(document.javacalc.inp.value);
			x*=-1;
			document.javacalc.inp.value=x.toString();
		}
	}
	else{
		pop();
		if (document.javacalc.inp.value!=''){
			var x=new Number(document.javacalc.inp.value);
			x*=-1;
			document.javacalc.inp.value=x.toString();
		}
		push(0);
	}
}

function pi(){
	stacksav();
	push(0);
	document.javacalc.inp.value=Math.PI.toString();
	push(0);
}

function add(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		else num1=new Number(document.javacalc.inp.value);
		if (document.javacalc.inp1.value!='')num2=new Number(pop());
		else num2="NaN";
		if (isNaN(num1)||isNaN(num2))document.javacalc.inp.value='';
		else document.javacalc.inp.value=(num2+num1).toString();
		push(0);
	}
}

function sub(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (document.javacalc.inp1.value!='')num2=new Number(pop());
		else num2="NaN";
		if (isNaN(num1)||isNaN(num2))document.javacalc.inp.value='';
		else document.javacalc.inp.value=(num2-num1).toString();
		push(0);
	}
}

function mul(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (document.javacalc.inp1.value!='')num2=new Number(pop());
		else num2="NaN";
		if (isNaN(num1)||isNaN(num2))document.javacalc.inp.value='';
		else document.javacalc.inp.value=(num2*num1).toString();
		push(0);
	}
}

function div(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (document.javacalc.inp1.value!='')num2=new Number(pop());
		else num2="NaN";
		if (isNaN(num1)||isNaN(num2))document.javacalc.inp.value='';
		else document.javacalc.inp.value=(num2/num1).toString();
		push(0);
	}
}

function sin(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (mode=='DEG')num1=num1*Math.PI/180;
		document.javacalc.inp.value=Math.sin(num1).toString();
		push(0);
	}
}

function cos(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (mode=='DEG')num1=num1*Math.PI/180;
		document.javacalc.inp.value=Math.cos(num1).toString();
		push(0);
	}
}

function tan(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (mode=='DEG')num1=num1*Math.PI/180;
		document.javacalc.inp.value=Math.tan(num1).toString();
		push(0);
	}
}

function asin(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.asin(num1).toString();
		if(mode=='DEG')document.javacalc.inp.value=document.javacalc.inp.value*180/Math.PI;
		push(0);
	}
}

function acos(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.acos(num1).toString();
		if (mode=='DEG')document.javacalc.inp.value=document.javacalc.inp.value*180/Math.PI;
		push(0);
	}
}

function atan(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.atan(num1).toString();
		if (mode=='DEG')document.javacalc.inp.value=document.javacalc.inp.value*180/Math.PI;
		push(0);
	}
}

function sq(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.pow(num1,2).toString();
		push(0);
	}
}

function sqrt(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.sqrt(num1).toString();
		push(0);
	}
}

function inv(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=(1/num1).toString();
		push(0);
	}
}

function factorial(num){
	if (num<=1)return 1;
	else return num*factorial(num-1);
}

function fact(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (Math.round(num1)!=num1)document.javacalc.inp.value='NaN';
		else{
			if(num1<0)document.javacalc.inp.value="Infinity";
			if(num1==0)document.javacalc.inp.value=(0).toString();
			if((num1<999)&&(num1>0))document.javacalc.inp.value=factorial(num1).toString();
			if(num1>998)document.javacalc.inp.value="Infinity";
		}
		push(0);
	}
}

function tenx(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.pow(10,num1).toString();
		push(0);
	}
}

function lg(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=(Math.log(num1)/Math.LN10).toString();
		push(0);
	}
}

function ex(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.exp(num1).toString();
		push(0);
	}
}

function ln(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		document.javacalc.inp.value=Math.log(num1).toString();
		push(0);
	}
}

function pw(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (document.javacalc.inp1.value!='')num2=new Number(pop());
		else num2="NaN";
		if (isNaN(num1)||isNaN(num2))document.javacalc.inp.value='';
		else document.javacalc.inp.value=Math.pow(num2,num1).toString();
		push(0);
	}
}

function root(){
	stacksav();
	if(push(0)){
		pop();
		if (document.javacalc.inp.value=='')num1=new Number(pop());
		if (document.javacalc.inp.value!='')num1=new Number(document.javacalc.inp.value);
		if (document.javacalc.inp1.value!='')num2=new Number(pop());
		else num2="NaN";
		if (isNaN(num1)||isNaN(num2))document.javacalc.inp.value='';
		else document.javacalc.inp.value=Math.pow(num2,1/num1).toString();
		push(0);
	}
}

function base(){
	alert("Function not yet implemented.");
}
