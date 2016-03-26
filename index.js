var op1;
var op2;
var operando;

$(document).ready(function(){
	$("#display").val("");
});

$(function(){
	$("*#num").addClass("butnum");
})
$(function(){
	$("*#op").addClass("butop");
})

$(function(){
	$("#restart").addClass("extra");
})

$(function(){
	$("#equal").addClass("extra");
})

$(function(){
	$("*#num").click(function(){
		var a = $(this).attr("value");
		$("#display").val($("#display").val()+a);
	});
});

$(function(){
	$("*#op").click(function(){
		operando = $(this).attr("value");
		op1 = $("#display").val();
		$("#display").val("");
	});
});

$(function(){
	$("#equal").click(function(){
		op2 = $("#display").val();
		operar(op1,op2,operando);
	})
})

$(function(){
	$("#restart").click(function(){
		 $("#display").val("");
		 op1 = "";
		 op2 = "";
		 operando = "";
	});
})

function operar(op1,op2,operando){
	var resultado;
	if(operando == "+"){
		resultado = parseFloat(op1)+parseFloat(op2);
	}else if(operando == "-"){
		resultado = parseFloat(op1)-parseFloat(op2);
	}else if(operando == "*"){
		resultado = parseFloat(op1)*parseFloat(op2);
	}else if(operando =="/"){
		resultado = parseFloat(op1)/parseFloat(op2);
	}
	op1 = resultado;
	$("#display").val(resultado);
}

$(function(){
	$("#display").keypress(function(e){
		if(e.which == 43 || e.which == 45 || e.which == 42 || e.which == 47){
			op1 = $("#display").val();
			operando = String.fromCharCode(e.which);
			$("#display").val("");
			return false;
		}else if(e.which == 8){
			$("#display").val("");
			op1 = "";
		 	op2 = "";
			operando = "";
		}else if(e.which == 13){
			op2 = $("#display").val();
			operar(op1,op2,operando);
		}else if((e.which < 48 || e.which > 57) && e.which != 46){
			return false;
		} 
	})
})

/*$(function(){
	$("#display").keypress(function(e){
		alert(e.which);
	})
})*/












