$("#buttonCalc").click(function() {
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
    var CD=CDpercent * CIF;
    CD=CD/100;
    $("#CD").val(CD);
	
	var ITpercent=parseInt($("#ITpercent").val());
    var IT=ITpercent * CIF;
    IT= IT/100;
    $("#IT").val(IT);

	var ICust=parseInt($("#ICust").val());
	var CCA=parseInt($("#CCA").val())

//DDP
	var DDP=CIF  + COHA + CD + IT + ICust + CCA
    $("#DDP").val(DDP);

    
});





