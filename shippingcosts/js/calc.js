//$("#mktest").click(function() {
    //alert("clicked"); 
//    var a = $("#goodsvalue").val();
//    var b = $("#handlingcost").val();   
//    var sum = a + b;
//    alert(sum); 
//});


$("#mktest").click(function() {
//EX WORKS
    var VOG=parseInt($("#VOG").val());
    var COH=parseInt($("#COH").val());
	var COC=parseInt($("#COC").val());
	var HC=parseInt($("#HC").val());
//FOB	
    var FOB=VOG + COH + COC + HC           
    $("#FOB").val(FOB);


	var TC=parseInt($("#TC").val());
	var IC=parseInt($("#IC").val());


//CIF
    var CIF=TC + IC  + FOB         
    $("#CIF").val(CIF);



	var COHA=parseInt($("#COHA").val());
	var CDpercent=parseInt($("#CDpercent").val());
    var CD=CDpercent * 500;
    $("#CD").val(CD);
	
	var ITpercent=parseInt($("#ITpercent").val());
    var IT=ITpercent * 500;
    $("#IT").val(IT);


//DDP
	var DDP=CIF  + COHA + CD + IT + ICust + CCA
    $("#DDP").val(DDP);

 	//var =parseInt($("#handlingcost").val());
	//var =parseInt($("#handlingcost").val());



    alert(FOB); 
    ALERT(CIF);
});





