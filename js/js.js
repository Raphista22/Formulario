var formElement = null;
var resText1 = "";
var resText2 = "";
var resSel1 = [];
var resSel2 = [];
var resRad1 = [];
var resRad2 = [];
var resBox1 = [];
var resBox2 = [];
var resMul1 = [];
var resMul2 = [];
var nota = 0 ;
window.onload = function () {




/*-----------------------------------------------------------------------------------------------------------------------*/
													/*Corregir al apretar boton /
/*-----------------------------------------------------------------------------------------------------------------------*/

formElement = document.getElementById("MyForm");
formElement.onsubmit = function (){
	inicializar();
	if (comprobar()){
		corrText1 ();
		corrText2 ();
		corrSel1 ();
		corrSel2 ();
		corrRad1 ();
		corrRad2 ();
		corrBox1 ();
		corrBox2 ();
		corrMul1 ();
		corrMul2 ();
		darnota();
		}
	return false;
	}
	
	/*-----------------------------------------------------------------------------------------------------------------------*/
													/*Parser con Xml /
/*-----------------------------------------------------------------------------------------------------------------------*/
var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "https://rawgit.com/Raphista22/Formulario/master/xml/xml.xml", true);
xhttp.send();

}
/*-----------------------------------------------------------------------------------------------------------------------*/
													/*Coger Datos de Xml /
/*-----------------------------------------------------------------------------------------------------------------------*/
function gestionarXml(dadesXml){
 var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc





													/*TEXTO de Xml */

var TT1 = xmlDoc.getElementsByTagName('title')[0].innerHTML;
var TT2 = xmlDoc.getElementsByTagName('title')[1].innerHTML;

ponerDatosTextHtml1(TT1);
ponerDatosTextHtml2(TT2);
resText1 = xmlDoc.getElementsByTagName('answer')[0].innerHTML;
resText2 = xmlDoc.getElementsByTagName('answer')[1].innerHTML;


			/*sELECT de Xml */
			
var titSel1 = xmlDoc.getElementsByTagName('title')[2].innerHTML;
var titSel2 = xmlDoc.getElementsByTagName('title')[3].innerHTML;
var optSel1 = [];
var optSel2 = [];
var nopts1 = xmlDoc.getElementById('p02').getElementsByTagName('option').length;
var nopts2 = xmlDoc.getElementById('p03').getElementsByTagName('option').length;
for (i = 0; i < nopts1; i++){
	optSel1[i] = xmlDoc.getElementById('p02').getElementsByTagName('option')[i].innerHTML;
}
for (i = 0; i < nopts2; i++){
	optSel2[i] = xmlDoc.getElementById('p03').getElementsByTagName('option')[i].innerHTML;
}
	ponerDatosSelHtml1(titSel1, optSel1);
	ponerDatosSelHtml2(titSel2, optSel2);
	/*resSel1 = parseInt(xmlDoc.getElementsByTagName('answer')[2].innerHTML);
	resSel2 = parseInt(xmlDoc.getElementsByTagName('answer')[3].innerHTML);*/
	for (i = 0; i < nresm1; i++) {
		resSel1[i] = xmlDoc.getElementsByTagName('answer')[2][i].innerHTML;
	}
	for (i = 0; i < nresm2; i++) {
		resSel2[i] = xmlDoc.getElementsByTagName('answer')[3][i].innerHTML;
	}
											/*Radio de Xml */
	
	var titRad1=xmlDoc.getElementsByTagName('title')[4].innerHTML;
	var titRad2=xmlDoc.getElementsByTagName('title')[5].innerHTML;
	var optRad1=[];
	var optRad2=[];
	var noptr1=xmlDoc.getElementById('p04').getElementsByTagName('option').length;
	var noptr2=xmlDoc.getElementById('p05').getElementsByTagName('option').length;
	for (i = 0; i < noptr1; i++){
		optRad1[i] =  xmlDoc.getElementById('p04').getElementsByTagName('option')[i].innerHTML;
	}
	for (i = 0; i < noptr2; i++){
		optRad2[i] = xmlDoc.getElementById('p05').getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosRadHtml1(titRad1,optRad1);
	ponerDatosRadHtml2(titRad2,optRad2);
	
	var nresr1=xmlDoc.getElementById('p04').getElementsByTagName('answer').length;
	var nresr2=xmlDoc.getElementById('p05').getElementsByTagName('answer').length;
	
	for (i = 0; i < nresr1; i++) {
		resRad1[i] = xmlDoc.getElementById('p04').getElementsByTagName('answer')[i].innerHTML;
	}
	for (i = 0; i < nresr2; i++) {
		resRad2[i] = xmlDoc.getElementById('p05').getElementsByTagName('answer')[i].innerHTML;
	}
	
	
											/*CheckBox de Xml */
	
	var titBox1=xmlDoc.getElementsByTagName('title')[6].innerHTML;
	var titBox2=xmlDoc.getElementsByTagName('title')[7].innerHTML;
	var optBox1=[];
	var optBox2=[];
	var noptb1=xmlDoc.getElementById('p06').getElementsByTagName('option').length;
	var noptb2=xmlDoc.getElementById('p07').getElementsByTagName('option').length;
	
	for (i = 0; i < noptb1; i++) {
		optBox1[i] = xmlDoc.getElementById('p06').getElementsByTagName('option')[i].innerHTML;
	}
	for (i = 0; i < noptb2; i++) {
		optBox2[i] = xmlDoc.getElementById('p07').getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosBoxHtml1(titBox1,optBox1);
	ponerDatosBoxHtml2(titBox2,optBox2);
	
	var nresb1=xmlDoc.getElementById('p06').getElementsByTagName('answer').length;
	var nresb2=xmlDoc.getElementById('p07').getElementsByTagName('answer').length;
	
	for (i = 0; i < nresb1; i++) {
		resBox1[i] = xmlDoc.getElementById('p06').getElementsByTagName('answer')[i].innerHTML;
	}
	for (i = 0; i < nresb2; i++) {
		resBox2[i] = xmlDoc.getElementById('p07').getElementsByTagName('answer')[i].innerHTML;
	}
	
									/*Multiple de Xml  */
	var titMul1=xmlDoc.getElementsByTagName('title')[8].innerHTML;
	var titMul2=xmlDoc.getElementsByTagName('title')[9].innerHTML;
	var optMul1=[];
	var optMul2=[];
	var noptm1=xmlDoc.getElementById('p08').getElementsByTagName('option').length;
	var noptm2=xmlDoc.getElementById('p09').getElementsByTagName('option').length;
	var nresm1=xmlDoc.getElementById('p08').getElementsByTagName('answer').length;
	var nresm2=xmlDoc.getElementById('p09').getElementsByTagName('answer').length;
	for (i = 0; i < noptm1; i++) {
		optMul1[i] = xmlDoc.getElementById('p08').getElementsByTagName('option')[i].innerHTML;
	}
	for (i = 0; i < noptm2; i++) {
		optMul2[i] = xmlDoc.getElementById('p09').getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosMulHtml1(titMul1,optMul1);
	ponerDatosMulHtml2(titMul2,optMul2);
	for (i = 0; i < nresm1; i++) {
		resMul1[i] = xmlDoc.getElementById('p08').getElementsByTagName('answer')[i].innerHTML;
	}
	for (i = 0; i < nresm2; i++) {
		resMul2[i] = xmlDoc.getElementById('p09').getElementsByTagName('answer')[i].innerHTML;
	}
	
}	
	
	/*-----------------------------------------------------------------------------------------------------------------------*/
													/*Corregir /
/*-----------------------------------------------------------------------------------------------------------------------*/
											/*Texto*/
											
	
	function corrText1() {
		var s=document.getElementById('T1').value; 
		
		if (s==resText1){
			darResHtml('Pregunta 1: correcto');
			nota += 1;
		}else{
			darResHtml('Pregunta 1: incorrecto');
			nota -= 1;
		}
	}
	
	function corrText2() {
		var s=document.getElementById('T2').value; 
		
		if (s==resText2){
			darResHtml('Pregunta 2: correcto');
			nota += 1;
		}else{
			darResHtml('Pregunta 2: incorrecto');
			nota -= 1;
		}
	}
							/*Select
				
	function corrSel1(){
		var sel = document.getElementById('SS1');
		if (sel.selIndex-1==resSel1) {
			darResHtml('Pregunta 3: correcto');
			nota += 1;
		}else{
			darResHtml('Pregunta 3: incorrecto');
			nota -= 1;
		}
	}
	
		function corrSel2(){
		var sel = document.getElementById('SS2');
		if (sel.selIndex-1==resSel2) {
			darResHtml('Pregunta 4: correcto');
			nota += 1;
		}else{
			darResHtml('Pregunta 4: incorrecto');
			nota -= 1;
		}
	}
	*/
	function corrSel1(){
	var sel=document.getElementsByClassName('optSel1');
	var escorrecta=[];
	for (i = 0; i < sel.length; i++){
		if (sel[i].selected){
			escorrecta[i]=false;
			for (j = 0; j < resSel1.length; j++){
				if (i + 1 == resSel1[j])
					escorrecta[i]=true;
			}if (escorrecta[i]){
				nota += 1.0 / resSel1.length;
				darResHtml('Pregunta 3: correcta');
			}else{
				nota -= 1.0 / resSel1.length;
				darResHtml('Pregunta 3; incorrecta');
			}
		}
	}
}		
function corrSel2(){
	var sel=document.getElementsByClassName('optSel2');
	var escorrecta=[];
	for (i = 0; i < sel.length; i++){
		if (sel[i].selected){
			escorrecta[i]=false;
			for (j = 0; j < resSel2.length; j++){
				if (i + 1 == resSel2[j])
					escorrecta[i]=true;
			}if (escorrecta[i]){
				nota += 1.0 / resSel2.length;
				darResHtml('Pregunta 4: correcta');
			}else{
				nota -= 1.0 / resSel2.length;
				darResHtml('Pregunta 4; incorrecta');
			}
		}
	}
}				
								/*Radio*/
	
	function corrRad1(){
		var f=formElement;
		var escorrecta=[];
		for (i = 0; i<f.rajoi.length; i++) {
			if (f.rajoi[i].checked){
				escorrecta[i]=false;
				for (j = 0; j < resRad1.length; j++) {
					 if (i + 1 == resRad1[j])
						 escorrecta[i]=true;
				}
				if (escorrecta[i]){
					nota += 1 / resRad1.length;
					darResHtml('Pregunta 5 :correcta');
				}else{
					nota -= 1 / resRad1.length;
					darResHtml('Pregunta 5 : incorrecta')
				}
			}
		}
	}
		function corrRad2(){
		var f=formElement;
		var escorrecta=[];
		for ( i = 0; i<f.mario.length; i++) {
			if (f.mario[i].checked){
				escorrecta[i]=false;
				for ( j = 0; j < resRad2.length; j++) {
					 if (i + 1 == resRad2[j])
						 escorrecta[i]=true;
				}
				if (escorrecta[i]){
					nota += 1 / resRad2.length;
					darResHtml('Pregunta 6 :correcta');
				}else{
					nota -= 1 / resRad2.length;
					darResHtml('Pregunta 6 : incorrecta')
				}
			}
		}
	}
									/*CheckBox*/
	
	function corrBox1(){
		var f=formElement;
		var escorrecta=[];
		for (i = 0; i < f.belen.length; i++){
			if (f.belen[i].checked){
				escorrecta[i]=false;
				for (j = 0; j < resBox1.length; j++) {
					if (i + 1 == resBox1[j])
						escorrecta[i]=true;
				}
				if (escorrecta[i]){
					nota += 1 / resBox1.length;
					darResHtml('pregunta 7: correcta');
				}else{
					nota -= 1 / resBox1.length;
					darResHtml('pregunta 7: incorrecta');
				}
			}
		}
	}
	function corrBox2(){
		var f=formElement;
		var escorrecta=[];
		for (i = 0; i < f.jueves.length; i++){
			if (f.jueves[i].checked){
				escorrecta[i]=false;
				for (j = 0; j < resBox2.length; j++) {
					if (i + 1 == resBox2[j])
						escorrecta[i]=true;
				}
				if (escorrecta[i]){
					nota += 1.0 / resBox2.length;
					darResHtml('pregunta 8: correcta');
				}else{
					nota -= 1.0 / resBox2.length;
					darResHtml('pregunta 8: incorrecta');
				}
			}
		}
	}
	
										/*Select Multiple*/

function corrMul1(){
	var mul=document.getElementsByClassName('optMul1');
	var escorrecta=[];
	for (i = 0; i < mul.length; i++){
		if (mul[i].selected){
			escorrecta[i]=false;
			for (j = 0; j < resMul1.length; j++){
				if (i + 1 == resMul1[j])
					escorrecta[i]=true;
			}if (escorrecta[i]){
				nota += 1.0 / resMul1.length;
				darResHtml('Pregunta 9: correcta');
			}else{
				nota -= 1.0 / resMul1.length;
				darResHtml('Pregunta 9; incorrecta');
			}
		}
	}
}										
	
function corrMul2(){
	var mul=document.getElementsByClassName('optMul2');
	var escorrecta=[];
	for (i = 0; i < mul.length; i++){
		if (mul[i].selected){
			escorrecta[i]=false;
			for (j = 0; j < resMul2.length; j++){
				if (i + 1 == resMul2[j])
					escorrecta[i]=true;
			}if (escorrecta[i]){
				nota += 1.0 / resMul2.length;
				darResHtml('Pregunta 10: correcta');
			}else{
				nota -= 1.0 / resMul2.length;
				darResHtml('Pregunta 10; incorrecta');
			}
		}
	}
}			
	
		/*-----------------------------------------------------------------------------------------------------------------------*/
													/*Poner Datos en HTML/
/*-----------------------------------------------------------------------------------------------------------------------*/
														/*Texto */
function ponerDatosTextHtml1(t){
	document.getElementById('TT1').innerHTML = t;
}
function ponerDatosTextHtml2(t){
	document.getElementById('TT2').innerHTML = t;
}
														/*Select */
function ponerDatosSelHtml1(t, opt) {
	document.getElementById('TT3').innerHTML = t;
	var select = document.getElementById('S1');
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement('option');
		option.text = opt[i];
		option.value = i + 1;
		select.options.add(option);
	}
}
function ponerDatosSelHtml2(t, opt) {
	document.getElementById('TT4').innerHTML = t;
	var select = document.getElementById('S2');
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement('option');
		option.text = opt[i];
		option.value = i + 1;
		select.options.add(option);
	}
}	
													/* radio*/
function ponerDatosRadHtml1(t, opt) {
    var radioContainer = document.getElementById('R1');
    document.getElementById('TT5').innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "respuesta_" + i);
        input.type = "radio";
        input.name = "rajoi";
        input.id = "rajoi_" + i;
        ;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br"));
    }
}
function ponerDatosRadHtml2(t, opt) {
    var radioContainer = document.getElementById('R2');
    document.getElementById('TT6').innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "respuesta_" + i);
        input.type = "radio";
        input.name = "mario";
        input.id = "mario_" + i;
        ;
        radioContainer.appendChild(input);
        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement("br"));
    }
}

													/* CheckBox*/	
	function ponerDatosBoxHtml1(t, opt) {
    var checkboxContainer = document.getElementById('C1');
    document.getElementById('TT7').innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "belen_" + i);
        input.type = "checkbox";
        input.name = "belen";
        input.id = "belen_" + i;
        ;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement("br"));
    }
}	
	function ponerDatosBoxHtml2(t, opt) {
    var checkboxContainer = document.getElementById('C2');
    document.getElementById('TT8').innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "jueves_" + i);
        input.type = "checkbox";
        input.name = "jueves";
        input.id = "jueves_" + i;
        ;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement("br"));
    }
}												
												
													
													/* Multiple*/
	
function ponerDatosMulHtml1(t, opt) {
    document.getElementById("TT9").innerHTML = t;
    var multiple = document.getElementById("M1");
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        option.className = "optMul1";
        multiple.options.add(option);
    }
}
function ponerDatosMulHtml2(t, opt) {
    document.getElementById("TT10").innerHTML = t;
    var multiple = document.getElementById("M2");
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        option.className = "optMul2";
        multiple.options.add(option);
    }
}
	
		/*-----------------------------------------------------------------------------------------------------------------------*/
													/*Respuestas/
/*-----------------------------------------------------------------------------------------------------------------------*/
	function darResHtml(r) {
    var p = document.createElement("p");
    var node = document.createTextNode(r);
    p.appendChild(node);
    document.getElementById('resultados').appendChild(p);
}

function darnota() {
    darResHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar() {
    document.getElementById('resultados').innerHTML = "";
    nota=0.0;
}

//Comprobar que se han introducido datos en el formulario
function comprobar() {
    var f = formElement;
	var checked = false;
	 //Pregunta Text 1 
    if ( document.getElementById('T1').value == "") {
       document.getElementById('T1').focus()
        alert("Escribe una respuesta en la pregunta 1");
        return false;
    }
	 //Pregunta Text 2
    if ( document.getElementById('T2').value == "") {
        document.getElementById('T2').focus();
        alert("Escribe una respuesta en la pregunta 2");
        return false;
    }
	//Pregunta Sel 1
  if (document.getElementById('SS1').selectedIndex == 0) {
        document.getElementById('SS1').focus();
        alert("Selecciona una opción en la pregunta 3");
        return false;
    }
    
	//Pregunta Sel 2
   if (document.getElementById('SS2').selectedIndex == 0) {
       document.getElementById('SS2').focus();
        alert("Selecciona una opción en la pregunta 4");
        return false;
    }
    //Pregunta Radio 1
    var checked = false;
    for (i = 0; i < f.rajoi.length; i++) {
        if (f.rajoi[i].checked)
            checked = true;
    }
    if (!checked) {
        document.getElementsByTagName("h3")[4].focus();
        alert("Selecciona una opción de la pregunta 5");
        return false;
    }
       //Pregunta Radio 2
    var checked = false;
    for (i = 0; i < f.mario.length; i++) {
        if (f.mario[i].checked)
            checked = true;
    }
    if (!checked) {
        document.getElementsByTagName("h3")[5].focus();
        alert("Selecciona una opción de la pregunta 6");
        return false;
    }
	
	    
    /*Pregunta Box 1*/
    checked = false;
    for (i = 0; i < f.jueves.length; i++) {
        if (f.jueves[i].checked)
            checked = true;
    }
    if (!checked) {
       document.getElementsByTagName("h2")[6].focus();
        alert("Selecciona una opción de la pregunta 7");
        return false;
    }
		    
    //Pregunta Box 2
    checked = false;
    for (i = 0; i < f.jueves.length; i++) {
        if (f.jueves[i].checked)
            checked = true;
    }
    if (!checked) {
       document.getElementsByTagName("h2")[7].focus();
        alert("Selecciona una opción de la pregunta 8");
        return false;
    }
	
    
	  //Pregunta mul 1
       if (document.getElementById('MM1').selectedIndex == 0) {
        document.getElementById('MM1').focus();
        alert("Selecciona una o más opciones en la pregunta 9");
        return false;
    }
	
	  //Pregunta mul 2
      if (document.getElementById('MM2').selectedIndex == 0) {
        document.getElementById('MM2').focus();
        alert("Selecciona una o más opciones en la pregunta 10");
        return false;
    }else return true;
}
