function editar(){
	var dato,tiempo;

	dato = document.getElementById("dato").value;
	tiempo = document.getElementById("tiempo").value;
	if (dato === "" || tiempo === "") {
		alert("Campo vacio no se modificó")
		return false;
	}else
	alert("Se modifico correctamente")
}

function registrarse(){
	alert("Se realizo su compra")
}