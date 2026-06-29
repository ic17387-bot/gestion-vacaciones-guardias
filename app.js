const empleado = document.getElementById("empleado");
const infoEmpleado = document.getElementById("infoEmpleado");
const bienvenida = document.getElementById("bienvenida");
const saldo = document.getElementById("saldo");

empleado.addEventListener("change", function () {

    if (empleado.value === "Seleccione...") {
        infoEmpleado.style.display = "none";
        return;
    }

    infoEmpleado.style.display = "block";

    bienvenida.innerHTML = "👤 Bienvenido, " + empleado.value;

    saldo.innerHTML = "🏖 Consultando saldo...";
});
