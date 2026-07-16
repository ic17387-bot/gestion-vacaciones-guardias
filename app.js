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
                            menuPrincipal.style.display = "block";
                            moduloVacaciones.style.display = "none";

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
const btnSolicitar = document.getElementById("btnSolicitar");
const menuPrincipal = document.getElementById("menuPrincipal");
const moduloVacaciones = document.getElementById("moduloVacaciones");

const btnMenuVacaciones = document.getElementById("btnMenuVacaciones");
const btnRegresarVacaciones = document.getElementById("btnRegresarVacaciones");

const btnHistorial = document.getElementById("btnHistorial");
const btnRegresarHistorial = document.getElementById("btnRegresarHistorial");
const moduloHistorial = document.getElementById("moduloHistorial");
const listaHistorial = document.getElementById("listaHistorial");

btnSolicitar.addEventListener("click", () => {

    console.log("BOTÓN PRESIONADO");
    alert("Botón presionado");

    if (!fechaInicio.value || !fechaFin.value) {
            alert("Seleccione las fechas.");
                    return;
                        }

                            const inicio = new Date(fechaInicio.value);
                                const fin = new Date(fechaFin.value);

                                    const dias = Math.floor((fin - inicio) / (1000 * 60 * 60 * 24)) + 1;

                                        db.collection("solicitudesVacaciones").add({

                                                empleado: empleado.value,
                                                        fechaInicio: fechaInicio.value,
                                                                fechaFin: fechaFin.value,
                                                                        dias: dias,
                                                                                estatus: "Pendiente",
                                                                                        fechaSolicitud: new Date().toISOString()

                                                                                            })
                                                                                                .then(() => {

                                                                                                        Swal.fire({
                                                                                                                icon: "success",
                                                                                                                        title: "Solicitud registrada",
                                                                                                                                html: `
                                                                                                                                            <b>${empleado.value}</b><br><br>
                                                                                                                                                        📅 ${fechaInicio.value} al ${fechaFin.value}<br>
                                                                                                                                                                    🏖 ${dias} días solicitados<br><br>
                                                                                                                                                                                🟡 Estatus: Pendiente
                                                                                                                                                                                        `,
                                                                                                                                                                                                confirmButtonText: "Aceptar"
                                                                                                                                                                                                    }).then(() => {

                                                                                                                                                                                                            fechaInicio.value = "";
                                                                                                                                                                                                                    fechaFin.value = "";
                                                                                                                                                                                                                            diasSolicitados.innerHTML = "";

                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                })
                                                                                                                
                                                                                                                .catch((error) => {

                                                                                                                        console.error(error);

                                                                                                                            alert(
                                                                                                                                    "Código: " + error.code +
                                                                                                                                            "\n\nMensaje: " + error.message
                                                                                                                                                );

                                                                                                                                                });
                                                                                                                })
                                                                                                                                                

         btnMenuVacaciones.addEventListener("click", () => {

            menuPrincipal.style.display = "none";
                moduloVacaciones.style.display = "block";

                });

                btnRegresarVacaciones.addEventListener("click", () => {

                    moduloVacaciones.style.display = "none";
                        menuPrincipal.style.display = "block";

                        });
                        btnHistorial.addEventListener("click", () => {

                                menuPrincipal.style.display = "none";
                                    moduloHistorial.style.display = "block";
                                     listaHistorial.innerHTML = "Cargando...";
                                     db.collection("solicitudesVacaciones")
                                     .where("empleado", "==", empleado.value)
                                    
                                     .get()
                                     .then((querySnapshot) => {

                                         listaHistorial.innerHTML = "";

                                             if (querySnapshot.empty) {

                                                     listaHistorial.innerHTML =
                                                             "<p>No existen solicitudes.</p>";

                                                                     return;
                                                                         }

                                                                             querySnapshot.forEach((doc) => {

                                                                                     const datos = doc.data();

                                                                                             listaHistorial.innerHTML += `
                                                                                                     <div style="
                                                                                                                 border:1px solid #ddd;
                                                                                                                             border-radius:10px;
                                                                                                                                         padding:15px;
                                                                                                                                                     margin-bottom:15px;
                                                                                                                                                                 text-align:left;
                                                                                                                                                                         ">

                                                                                                                                                                                     <b>📅 ${datos.fechaInicio} al ${datos.fechaFin}</b><br>

                                                                                                                                                                                                 🏖 ${datos.dias} días<br>

                                                                                                                                                                                                             🟡 ${datos.estatus}

                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                             `;

                                                                                                                                                                                                                                 });

                                                                                                                                                                                                                                 })
                                                                                                                                                                                                                                 .catch((error)=>{

                                                                                                                                                                                                                                     console.error(error);

                                                                                                                                                                                                                                         listaHistorial.innerHTML="Error al consultar historial.";

                                                                                                                                                                                                                                         });
                                    });
                        btnRegresarHistorial.addEventListener("click", () => {

                                moduloHistorial.style.display = "none";
                                    menuPrincipal.style.display = "block";

                                    });
                        