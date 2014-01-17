function nuevoAjax() {
	var xmlhttp = false;
	try {
		// Creacion del objeto AJAX para navegadores no IE
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			// Creacion del objet AJAX para IE
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			if (!xmlhttp && typeof XMLHttpRequest != "undefined") xmlhttp = new XMLHttpRequest();
		}
	}
	return xmlhttp;

}

function enviarDatos(nom, tel, email) {
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom=" + nom + "&tel=" + tel + "&mai=" + email
	}).done(function (msg) {
		if (msg == 1) {
			//subirFoto(foto,nom);
			window.location.href = "#page";
		} else {
			navigator.notification.alert("Error al Registrarse" + msg, null, "Registro", "Aceptar");
		}
	});
}

function setCookie(c_name, value, exdays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie = c_name + "=" + c_value;
}


function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}

	return c_value;
}

function guarda_calif(valrad1, valrad2, valrad3, valrad4, valrad5, times) {

	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_preguntas.php",
		data: "c1=" + valrad1 + "&c2=" + valrad2 + "&c3=" + valrad3 + "&c4=" + valrad4 + "&c5=" + valrad5 + "&times=" + times
	}).done(function (msg) {

		if (msg == 1) {

			//subirFoto(foto,nom);


			navigator.notification.alert("Datos enviados", null, "Conectando al servidor", "Aceptar");
			return msg;

		} else {
			navigator.notification.alert("Error al guardar calificacion", null, "Alert", "Aceptar");
			return msg;
		}
	});
}

function guarda_cliente(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, times) {
	/*alert( "c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&times="+times);
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/prospectos.php",
		data: "c1="+val1+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&times="+times
	}).done(function(msg) {
		
		if(msg==1){
			
			//subirFoto(foto,nom);
		
			
			navigator.notification.alert("Datos enviados", null, "Conectando al servidor", "Aceptar");	
			return msg;
			
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Alert", "Aceptar");	
			return msg;
		}
	});*/
	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/g_clientes.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("c1=" + val1 + "&c2=" + val2 + "&c3=" + val3 + "&c4=" + val4 + "&c5=" + val5 + "&c6=" + val6 + "&c7=" + val7 + "&c8=" + val8 + "&c9=" + val9 + "&c10=" + val10 + "&c11=" + val11 + "&c12=" + val12 + "&c13=" + val13 + "&c14=" + val14 + "&c15=" + val15 + "&c16=" + val16 + "&c17=" + val17 + "&times=" + times);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {
			var msg = ajax.responseText
			if (msg == 1) {
				navigator.notification.alert("Datos guardados correctamente", obtener_ultimo_folio(times), "Guardado", "Aceptar");


			}
		}
	}
	return false;
}

function sube_interno(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17) {


	/*	
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_clientes.php",
		data: "c1="+val+"&c2="+val2+"&c3="+val3+"&c4="+val4+"&c5="+val5+"&c6="+val6+"&c7="+val7+"&c8="+val8+"&c9="+val9+"&c10="+val10+"&c11="+val11+"&c12="+val12+"&c13="+val13+"&c14="+val14+"&c15="+val15+"&c16="+val16+"&c17="+val17
	}).done(function(msg) {
		
		if(msg==1){
			
			
			window.location.href="#form1";
			//navigator.notification.alert("Reserva Sincronizada Satisfactoriamente",null,"Reserva Realizada", "Aceptar");
			
			//subirFoto(foto,nom);
		
		
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Registro", "Aceptar");	
		}
	});*/

	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/g_clientes.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("c1=" + val1 + "&c2=" + val2 + "&c3=" + val3 + "&c4=" + val4 + "&c5=" + val5 + "&c6=" + val6 + "&c7=" + val7 + "&c8=" + val8 + "&c9=" + val9 + "&c10=" + val10 + "&c11=" + val11 + "&c12=" + val12 + "&c13=" + val13 + "&c14=" + val14 + "&c15=" + val15 + "&c16=" + val16 + "&c17=" + val17);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {
			var msg = ajax.responseText;
			if (msg == 1) {
				window.location.href = "#form1";
			}
		}
	}
	return false;
}

function subirReserva(id, th, ha, di, pe) {
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom=" + th + "&tel=" + ha + "&mai=" + di + "&pe=" + pe
	}).done(function (msg) {
		if (msg == 1) {
			navigator.notification.alert("Reserva Sincronizada Satisfactoriamente", function () {

				guardarHistorial(th, ha, di, pe);
				borrarReserva(id);
			}, "Reserva Realizada", "Aceptar");
		} else {
			navigator.notification.alert("Error al Registrarse", null, "Registro", "Aceptar");
		}
	});
}



function obtener_ultimo_folio(clave) {


	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/d_o.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("clave=" + clave);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {

			var msg = ajax.responseText
			var obj = $.parseJSON(msg);
			navigator.notification.alert("Su Numero de folio es: " + obj.ultimo_folio, window.location.reload(), "Folio", "Aceptar");


		}

	}
	return false;
}

function obtener_coincidencias(buscado) {


	ajax = nuevoAjax();
	ajax.open("POST", "http://testapp2.260mb.net/sincronizar/b_clientes.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("buscado=" + buscado);
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4) {

			var msg = ajax.responseText
			
			var obj = $.parseJSON(msg);
			return obj;


		}

	}
	return false;
}

function obtener_info_clave(clave, objc) {
	return $.ajax({
		type: "GET",
		url: "http://testapp2.260mb.net/sincronizar/info_clave.php",
		data: "clave=" + clave
	}).done(function (msg) {
		if (msg[0] == 0) {
			//subirFoto(foto,nom);

			navigator.notification.alert("Error al obtener info", "Folio", "Aceptar");

		} else {

			var obj = $.parseJSON(msg);

			(function () {
				llena_tabla(objc, obj);
			}());
			//navigator.notification.alert(obj.precio,llena_tabla(objc,obj), "Folio", "Aceptar");



		}

	});


}


function obtener_info_cliente(cliente) {

	return $.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/datos_cliente.php",
		data: "cliente=" + cliente
	}).done(function (msg) {
		if (msg[0] == 0) {
			//subirFoto(foto,nom);

			navigator.notification.alert("Error al obtener info", "Folio", "Aceptar");

		} else {

			var obj = $.parseJSON(msg);

			(function () {

				llena_datos_cliente(obj);
			}());
			//navigator.notification.alert(obj.precio,llena_tabla(objc,obj), "Folio", "Aceptar");



		}

	});


}

function llena_datos_cliente(obj) {

	$('#Comprador').val(obj.nombre);
	$('#agente').val(obj.agente);
	$('#poblacion').val(obj.ciudad);
	$('#condic').val(obj.cond_pago);
	$('#razon').val(obj.nombre);
	$('#estado').val(obj.estado);
	$('#tel').val(obj.telefono);
	$('#calle').val(obj.calle);
	$('#cp').val(obj.cp);
	$('#colonia').val(obj.col);
	$('#status').val(obj.status);
	$('#mail').val(obj.mail);

}

function llena_tabla(objc, obj) {
	
	
		var opc1=$("#radio-choice-1").is(":checked");
		var opc2=$("#radio-choice-2").is(":checked");
		var opc3=$("#radio-choice-3").is(":checked");
		var opc4=$("#radio-choice-4").is(":checked");
		
	$("#radio-choice-1").prop('disabled', true);
	$("#radio-choice-2").prop('disabled', true);
	$("#radio-choice-3").prop('disabled', true);
	$("#radio-choice-4").prop('disabled', true);
			
			var valor = (isNaN(parseFloat(obj.precio))) ? 0 : parseFloat(obj.precio);
			//var punit = $(this).parents('tr').children('.p_unit').children('#labo').html();
			if (opc1) 
			{
				valor=valor*1;				
			}
			else if (opc2)
			{
				valor=valor*1.12;
			}
			else if (opc3)
			{
				valor=valor*1.20;
			}
			else if (opc4)
			{
				valor=valor*1.67;
			}
	

	
	objc.parents('tr').children('.descripcion').children('#las').remove();
	$('<label style="text-align:right" data-theme="b" id="las" class="cldescripcion">' + obj.descripcion + '</label>').appendTo(objc.parents('tr').children('.descripcion'));
	objc.parents('tr').children('.p_unit').children('#labo').remove();
	
	$('<label  style="visibility:hidden" id="labo" ">' + valor + '</label>').appendTo(objc.parents('tr').children('.p_unit'));
	objc.parents('tr').children('.p_unit').children('#lab').remove();
	$('<label style="text-align:right" data-theme="b" id="lab" class="clprecio">$' + valor.format() + '</label>').appendTo(objc.parents('tr').children('.p_unit'));
}

function exporta() {

var comp=$('#Comprador').val();
	alert(comp);
	//doc.text(5,lineas,comp);
	var agente=$('#agente').val();
	alert(agente);
	
	var tel=$('#tel').val();
	alert(tel);

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);








}


function success3(parent) {
	var directoryReader = parent.createReader();
	directoryReader.readEntries(success, fail);
}

function success2(parent) {
	parent.getParent(success3, fail);
	alert(parent.name);
}





function gotFS(fileSystem) {
	fileSystem.root.getFile($('#No_cliente').val() + ".pdf", {
		create: true,
		exclusive: false
	}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
	alert(fileEntry.name);

	fileEntry.createWriter(gotFileWriter, fail);

	// Obtiene el `DirectoryEntry` padre
	fileEntry.getParent(success2, fail);


}

function success(entries) {
	var i;
	for (i = 0; i < entries.length; i++) {
		alert(entries[i].name);
	}
}

function fail(error) {
	alert("Ocurrió un error mientras se obtenía la lista: " + error.code);
}



function gotFileWriter(writer) 
{
	var temppdf=0;
	var sumpdf=0;
	var valorclave='';
	var meses1 = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	var f1 = new Date();
	var doc = new jsPDF();
	var lineas=10;
	var contador=0;
	

	
	
	var imagen='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAWRXhpZgAASUkqAAgAAAAAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAqACoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDz+CFGUcVfttONxNHBDE8s8hwkUalnb6Acmq9muVWuzvtUutD8NaN/YuyxTULVvtc8Q/fySo5VgXPIXoQBjrVVJ8kbl4PCyxVVUouzZTPw/wDEAnSD+xLrzHQuvAxgYzls4B5HB5rFvtGn0+cwXlpPbTdkmjKk/TPUe4zWna+H9dvPC95q0LE6UJPMuAbnG5kyMle5+b9a1/B2r3upXg0TVZPt+iiGSaaG6G8xqiE5RvvKc4HXvWMcRqk1uerXyTkpznTqKXLv/Xc4SSBFzxVExpk8Vs3KqRuUEKeQCc4FZJ6muk8BmjY/dWu/gGgroPhceIROLQz3rExkgbdw64+brjpXn1m+1VrtrzTJvEnh/Rk0SeC7k06zKT2QYrcB2Ys7BCPmXpyDWVa/Loj0cq5PrC55cq1126M9K07/AIQ8eAr37GZP+Eey/nkmTOeN2M/N6dK4mBvCsep6x/wjQuNn9hXHLFtu7K5+/wDNnH4VyNv4n1ex0C50FJI47GUt5sbwjeCSNwyeQeK2/CmjT6PdRa1rcsOnaXLBJEVuCRLcI6FfkjAJPY5OK51Pmkkke7WwX1alVlUqP3r2V9/Xuzk7zpisU9TWtcsMbVJKjgE9cVkkjJrtPkSzC2EHNXre6eCWOWORo5YyCjo2GU+oI5FYqE7BzTwTxyaAO+XxfaymPUL7R4LvXoRtivX4jcdnljGN0i9B2OST0Fc/f6pcahdy3d3O09zKcvLIck+3sPYcVhhmyeT+dISc9T0pJJbFzqzmkpO9i48me9UDncee9Lk+tVyTnrTIP//Z';
	
	doc.addImage(imagen, 'JPEG', 15, 15, 42, 42);
	
	doc.setFontSize(12); 
	doc.text(120,lineas,'VICTORINOX');
	lineas=lineas+10;
	doc.text(60,lineas,'COTIZACION');
	doc.text(120,lineas,'Puebla Pue, a:  ' + f1.getDate() +  ' de '  + meses1[f1.getMonth()] + ' de ' + f1.getFullYear());
	lineas=lineas+10;
	doc.text(5,lineas,'Comprador');
	doc.text(155,lineas,'Agente');
	
	lineas=lineas+5;
	var comp=$('#Comprador').val();
	alert(comp);
	doc.text(5,lineas,comp);
	var agente=$('#agente').val();
	alert(agente);
	doc.text(155,lineas,agente);
	
	lineas=lineas+5;
	doc.text(5,lineas,'Cliente');
	doc.text(75,lineas,'Poblacion');
	doc.text(155,lineas,'Condiciones');
	
	lineas=lineas+5;
	var no_cliente=$('#No_cliente').val();
	doc.text(5,lineas,no_cliente);
	var poblacion=$('#poblacion').val();
	doc.text(75,lineas,poblacion);
	var condic=$('#condic').val();
	doc.text(155,lineas,condic);
	
	lineas=lineas+5;
	
	doc.text(5,lineas,'Razon Social');
	doc.text(77,lineas,'Estado');
	doc.text(155,lineas,'Telefono');
	
	lineas=lineas+5;
	var razon=$('#razon').val();
	doc.text(5,lineas,razon);
	var estado=$('#estado').val();
	doc.text(77,lineas,estado);
	var tel=$('#tel').val();
	doc.text(155,lineas,tel);
	
	lineas=lineas+5;
	doc.text(5,lineas,'Calle');
	doc.text(77,lineas,'C.P.');
	doc.text(155,lineas,'Fax');
	
	
	lineas=lineas+5;
	var calle=$('#calle').val();
	doc.text(5,lineas,calle);
	var cp=$('#cp').val();
	doc.text(77,lineas,cp);
	var fax=$('#fax').val();
	doc.text(155,lineas,fax);
	
	
	lineas=lineas+5;
	doc.text(5,lineas,'Colonia');
	doc.text(77,lineas,'Status');
	doc.text(155,lineas,'Mail');
	
	lineas=lineas+5;
	var colonia=$('#colonia').val();
	doc.text(5,lineas,colonia);
	var status=$('#status').val();
	doc.text(77,lineas,status);
	var  mail=$('#mail').val();
	doc.text(155,lineas,mail);
	
	lineas=lineas+20;
	
	
	doc.text(5,lineas,'Por medio de la presente le envio un cordial saludo y a su vez le hago llegar la cotizacion solicitada');
	
	
	contador=lineas+20;
	
	$.each($('.clave123'), function(index, value) {
				valorclave=$(this).val();
				doc.text(5,contador,valorclave);	
					contador = contador + 5;
				});
	contador=lineas+20;
	$.each($('.cnt123'), function(index, value) {
				valorclave=$(this).val();
				doc.text(45,contador,valorclave);	
					contador = contador + 5;
				});
	contador=lineas+20;
	$.each($('.cldescripcion'), function(index, value) {
				valorclave=$(this).text();
				doc.text(55,contador,valorclave);	
					contador = contador + 5;
				});
	contador=lineas+20;
	$.each($('.clprecio'), function(index, value) {
				valorclave=$(this).text();
				doc.text(165,contador,valorclave);	
					contador = contador + 5;
				});
	
	contador=lineas+20;
	$.each($('.cl_stotal'), function(index, value) {
				valorclave=$(this).text();
				doc.text(185,contador,valorclave);	
					contador = contador + 5;
				});
	lineas=contador;
	
	lineas=lineas+5;
	var tt=$('#tt').text();
	doc.text(185,lineas,tt);
	lineas=lineas+5;
	doc.text(165,lineas,'Descuento');
	
	var t_descuento2=$('#c_percent').val();
	doc.text(185,lineas,t_descuento2);
	
	lineas=lineas+5;
	
	var t_descuento=$('#t_descuento').text();
	alert(t_descuento);
	
	doc.text(185,lineas,t_descuento);
	
	
	
	
	
	
	
	
	
	
	
	lineas=lineas+5;
	
	doc.text(165,lineas,'Flete');	
	doc.setFontSize(9); 
	doc.text(5,lineas+5,'Condiciones');
	doc.text(5,lineas+10,'de venta');
	doc.text(5,lineas+45,'Comentarios');
	doc.text(5,lineas+55,'Tiempo de');
	doc.text(5,lineas+60,'entrega');
	
	
	doc.text(30,lineas+5,'100% de deposito');
	
	doc.text(30,lineas+15,'Deposito de efectivo o cheque mismo banco. Si es un cheque de otro banco');
	
	doc.text(30,lineas+20,'se autoriza su');
	doc.text(30,lineas+25,'pedido al tercer dia que su cheque se refleje y no sea rebotado por el banco');
	
	doc.text(30,lineas+30,'Ficha de convenio CIE Bancomer Num. 1829-7 Cta. Bancomer Suc. 1803');
	doc.text(30,lineas+35,'No. de Cta. 0446573118 Trasferencia electronica 012 650 0044573118 3');
	
	doc.text(30,lineas+40,'BANAMEX 184414-2 Suc. 826 San Felipe o Transferencia 002 65008261844142 7 ');
	doc.text(30,lineas+45,'Los precios anteriores No incluyen IVA, estan sujetos a cambio');
	
	doc.text(30,lineas+50,'sin previo aviso y a existencias');
	doc.text(30,lineas+55,'5 dias habiles');
	
	doc.setFontSize(12); 
	
	var felte=$('#flete1').text();
	doc.text(185,lineas,felte);
	
	
	

	
	lineas=lineas+5;
	doc.text(165,lineas,'SUB-TOTAL');
	
	
	var SB=$('#st_m1').text();
	doc.text(185,lineas,SB);
	
	
	lineas=lineas+5;
	doc.text(165,lineas,'IVA');
	
	

	var IVA=$('#iva1').text();
	doc.text(185,lineas,IVA);
	
	lineas=lineas+5;
	doc.text(165,lineas,'TOTAL');
	
	
	var TOTAL=$('#mt1').text();
	doc.text(185,lineas,TOTAL);
	
	writer.write(doc.output());
	
	
	//window.plugins.EmailComposer.showEmailComposerWithCallback(callback,subject,body,toRecipients,ccRecipients,bccRecipients,isHtml,attachments);
	window.plugins.EmailComposer.showEmailComposer(null,null,null,null,null,null,null,[fileEntry.name]);
	
	
	

}
function callback(error1) {
	alert(error1);


}

function fail(error) {
	alert(error.code);


}