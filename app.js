const empleado = document.getElementById("empleado");
const infoEmpleado = document.getElementById("infoEmpleado");
const bienvenida = document.getElementById("bienvenida");
const saldo = document.getElementById("saldo");

empleado.addEventListener("change", () => {
    console.log("Empleado seleccionado:", empleado.value);

    if (empleado.value === "Seleccione...") {

            infoEmpleado.style.display = "none";

                    return;

                        }

                            infoEmpleado.style.display = "block";

                                bienvenida.innerHTML = "👋 Bienvenido, " + empleado.value;
console.log("Firebase conectado", db);
                                    db.collection("empleados")
                                      .where("nombre", "==", empleado.value)
                                        .get()
                                          .then((querySnapshot) => {

                                              if (querySnapshot.empty) {

                                                    saldo.innerHTML = "❌ Empleado no encontrado";
                                                          return;

                                                              }

                                                                  const datos = querySnapshot.docs[0].data();

                                                                      saldo.innerHTML =
                                                                            "🏖 Saldo disponible: " + datos.saldo + " días";

                                                                              })
                                                                                .catch((error) => {

                                                                                    console.error(error);

                                                                                        saldo.innerHTML = "❌ Error al conectar con Firebase";

                                                                                          });
                                                                                        });
const fechaInicio = document.getElementById("fechaInicio");
const fechaFin = document.getElementById("fechaFin");
const diasSolicitados = document.getElementById("diasSolicitados");

function calcularDias() {

  console.log("calculando dias...");
  
    if (!fechaInicio.value || !fechaFin.value) {
            diasSolicitados.innerHTML = "";
                    return;
                        }

                            const inicio = new Date(fechaInicio.value);
                                const fin = new Date(fechaFin.value);

                                    const diferencia = fin - inicio;

                                        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 1;

                                            if (dias > 0) {
                                                    diasSolicitados.innerHTML =
                                                                "🏖 Días solicitados: <b>" + dias + "</b>";
                                                                    }

                                                                    }

                                                                    fechaInicio.addEventListener("change", calcularDias);
                                                                    fechaFin.addEventListener("change", calcularDias);
