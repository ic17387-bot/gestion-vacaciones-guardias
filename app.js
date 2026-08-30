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
           "🏖 Saldo disponible: " + datos.diasDisponibles+ " días";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
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

const btnMenuGuardias = document.getElementById("btnMenuGuardias");
const btnRegresarGuardias = document.getElementById("btnRegresarGuardias");
const moduloGuardias = document.getElementById("moduloGuardias");

const btnHistorialGuardias = document.getElementById("btnHistorialGuardias");
const btnRegresarHistorialGuardias = document.getElementById("btnRegresarHistorialGuardias");
const moduloHistorialGuardias = document.getElementById("moduloHistorialGuardias");
const listaHistorialGuardias = document.getElementById("listaHistorialGuardias");
const totalGuardias = document.getElementById("totalGuardias");

const btnGuardarGuardia = document.getElementById("btnGuardarGuardia");
const fechaGuardia = document.getElementById("fechaGuardia");
const horaEntrada = document.getElementById("horaEntrada");
const horaSalida = document.getElementById("horaSalida");
const tipoGuardia = document.getElementById("tipoGuardia");

const btnHistorial = document.getElementById("btnHistorial");
const btnRegresarHistorial = document.getElementById("btnRegresarHistorial");
const moduloHistorial = document.getElementById("moduloHistorial");
const listaHistorial = document.getElementById("listaHistorial");

// Administrador
const btnAdministrador = document.getElementById("btnAdministrador");
const moduloAdministrador = document.getElementById("moduloAdministrador");
const btnAdministrarEmpleados = document.getElementById("btnAdministrarEmpleados");
const btnAdministrarVacaciones = document.getElementById("btnAdministrarVacaciones");
const moduloAdministrarVacaciones = document.getElementById("moduloAdministrarVacaciones");
const btnRegresarAdministrarVacaciones = document.getElementById("btnRegresarAdministrarVacaciones");
const btnConsultarVacaciones = document.getElementById("btnConsultarVacaciones");
const btnRegresarConsultarVacaciones = document.getElementById("btnRegresarConsultarVacaciones");
const moduloConsultarVacaciones = document.getElementById("moduloConsultarVacaciones");
const empleadoConsulta = document.getElementById("empleadoConsulta");
const listaVacaciones = document.getElementById("listaVacaciones");
const btnAdministrarGuardias = document.getElementById("btnAdministrarGuardias");
const btnDashboard = document.getElementById("btnDashboard");
const moduloEmpleados = document.getElementById("moduloEmpleados");
const btnNuevoEmpleado = document.getElementById("btnNuevoEmpleado");
const btnConsultarEmpleados = document.getElementById("btnConsultarEmpleados");
const btnRegresarEmpleados = document.getElementById("btnRegresarEmpleados");


const moduloConsultarEmpleados = document.getElementById("moduloConsultarEmpleados");
const btnRegresarConsultaEmpleados = document.getElementById("btnRegresarConsultaEmpleados");
const listaEmpleados = document.getElementById("listaEmpleados");
// Nuevo Empleado
const moduloNuevoEmpleado = document.getElementById("moduloNuevoEmpleado");
const numeroEmpleado = document.getElementById("numeroEmpleado");
const nombreEmpleado = document.getElementById("nombreEmpleado");
const areaEmpleado = document.getElementById("areaEmpleado");
const puestoEmpleado = document.getElementById("puestoEmpleado");
const fechaIngresoEmpleado = document.getElementById("fechaIngresoEmpleado");
const btnGuardarEmpleado = document.getElementById("btnGuardarEmpleado");
const btnCancelarNuevoEmpleado = document.getElementById("btnCancelarNuevoEmpleado");
const btnRegresarAdministrador = document.getElementById("btnRegresarAdministrador");

let empleadoEditando = null;

btnSolicitar.addEventListener("click", () => {

    console.log("BOTÓN PRESIONADO");
    

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
    
// Abrir módulo de Guardias
btnMenuGuardias.addEventListener("click", () => {

    menuPrincipal.style.display = "none";
        moduloGuardias.style.display = "block";

        });

        // Regresar al menú principal
        btnRegresarGuardias.addEventListener("click", () => {

            moduloGuardias.style.display = "none";
                menuPrincipal.style.display = "block";

                })
  btnGuardarGuardia.addEventListener("click", () => {

                if (
                                    !fechaGuardia.value ||
                                                        !horaEntrada.value ||
                                                                            !horaSalida.value ||
                                                                                                !tipoGuardia.value
                                                                                                                        ) {

                                                                                                                                            Swal.fire({
                                                                                                                                                                icon: "warning",
                                                                                                                                                                                    title: "Información incompleta",
                                                                                                                                                                                                        text: "Debe capturar todos los datos de la guardia."
                                                                                                                                                                                                                                 });

                                                                                                                                                                                                                                                             return;
                                                                                                                                                                                                                                                                                         }
                                                                                                                                                                                                                                                                                                      db.collection("guardias").add({

                                                                                                                                                                                                                                                                                                                          empleado: empleado.value,
                                                                                                                                                                                                                                                                                                                                                  fecha: fechaGuardia.value,
                                                                                                                                                                                                                                                                                                                                                                              horaEntrada: horaEntrada.value,
                                                                                                                                                                                                                                                                                                                                                                                                              horaSalida: horaSalida.value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                  tipoGuardia: tipoGuardia.value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          fechaRegistro: new Date()

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          .then(() => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Swal.fire({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        icon: "success",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        title: "Guardia registrada",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     text: "La guardia se registró correctamente."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            fechaGuardia.value = "";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            horaEntrada.value = "";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            horaSalida.value = "";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             tipoGuardia.value = "";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             moduloGuardias.style.display = "none";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             menuPrincipal.style.display = "block";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .catch((error) => {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  console.error(error);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Swal.fire({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      icon: "error",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        title: "Error",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           text: "No fue posible registrar la guardia."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          })
  

        btnHistorialGuardias.addEventListener("click", () => {

                menuPrincipal.style.display = "none";
                    moduloHistorialGuardias.style.display = "block";

                        cargarHistorialGuardias();

                        });
        

                    btnRegresarHistorialGuardias.addEventListener("click", () => {

                        moduloHistorialGuardias.style.display = "none";
                            menuPrincipal.style.display = "block";

                            });

        btnAdministrador.addEventListener("click", () => {

                menuPrincipal.style.display = "none";
                    moduloAdministrador.style.display = "block";

                    });
        btnRegresarAdministrador.addEventListener("click", () => {

                moduloAdministrador.style.display = "none";
                    menuPrincipal.style.display = "block";

                    });
        btnAdministrarEmpleados.addEventListener("click", () => {

            moduloAdministrador.style.display = "none";
                moduloEmpleados.style.display = "block";

                });

        btnAdministrarVacaciones.addEventListener("click", () => {

                moduloAdministrador.style.display = "none";
                moduloAdministrarVacaciones.style.display = "block";

                    });
        
        btnRegresarAdministrarVacaciones.addEventListener("click", () => {

                moduloAdministrarVacaciones.style.display = "none";
                moduloAdministrador.style.display = "block";

                     });

    async function cargarEmpleadosConsulta() {

            try {

                    const snapshot = await db
                                .collection("empleados")
                                            .get();

                empleadoConsulta.innerHTML = `
                 <option value="">Seleccione un empleado...</option>
                                                                        `;

                        snapshot.forEach((doc) => {

                         const empleado = doc.data();

                          empleadoConsulta.innerHTML += `
                       <option value="${empleado.nombre}">
                                           ${empleado.nombre}                                                          </option>
                                          `;

                                         });

                 } catch (error) {

                 console.error("Error al cargar empleados para consulta:", error);

                 empleadoConsulta.innerHTML = `
                <option value="">Error al cargar empleados</option>
                                                `;
                                                     }
                                      }
    

    async function consultarVacacionesEmpleado() {

            const nombreEmpleado = empleadoConsulta.value;

                if (!nombreEmpleado) {
                        listaVacaciones.innerHTML = "";
                                return;
                                    }

                        listaVacaciones.innerHTML = "Consultando vacaciones...";

                      try {

    const snapshot = await db
        .collection("solicitudesVacaciones")
        .where("empleado", "==", nombreEmpleado)
        .get();

        if (snapshot.empty) {

            listaVacaciones.innerHTML =    
         "No existen solicitudes de vacaciones para este empleado.";

                   return;
                                       }

            listaVacaciones.innerHTML = "";

         snapshot.forEach((doc) => {

        const vacaciones = doc.data();

        listaVacaciones.innerHTML += `
                    <div style="
             border:1px solid #ddd;
             border-radius:10px;
             padding:15px;
             margin-bottom:15px;
             background:white;
             text-align:left;
                ">

              <strong>Fecha de inicio:</strong>
                          ${vacaciones.fechaInicio || ""}<br>

             <strong>Fecha final:</strong>
                           ${vacaciones.fechaFin || ""}<br>

             <strong>Días solicitados:</strong>
                          ${vacaciones.dias || ""}<br>

             <strong>Estatus:</strong>
                          ${vacaciones.estatus || ""}

                         <div style="
                         display:flex;
                        gap:10px;                                                                                                                                                               margin-top:15px;
                        flex-wrap:wrap;
                             ">

                        <button
                      onclick="autorizarVacacion('${doc.id}')"
                       style="
                        background:#198754;
                       color:white;
                           border:none;
                           padding:10px 15px;
                           border-radius:8px;
                            cursor:pointer;
                              ">
                          ✅ Autorizar
                           </button>

                            <button
                          onclick="editarVacacion('${doc.id}')"
                              style="
                              background:#0d6efd;
                             color:white;
                           border:none;
                          padding:10px 15px;
                        border-radius:8px;
                          cursor:pointer;
                             ">
                              ✏️ Editar
                               </button>

                           <button
                          onclick="cancelarVacacion('${doc.id}')"
                          style="
                           background:#dc3545;
                          color:white;
                          border:none;                                                                                                                                                                                                                                                                                                                                         padding:10px 15px;
                            border-radius:8px;                                                                                                                                                                                                                                                 cursor:pointer;
                                      ">
                       ❌ Cancelar
                          </button>

                          </div>

                                  
                          </div>
                                      `;
                                                });
                                            }catch (error) {
                                                console.error("Error al consultar vacaciones", error);

                                                listaVacaciones.innerHTML =
                                                "Error al consultar vacaciones.";
                                            }
                                        }
                    
    
    

        btnConsultarVacaciones.addEventListener("click", () => {
            moduloAdministrarVacaciones.style.display = "none";
                moduloConsultarVacaciones.style.display = "block";
                cargarEmpleadosConsulta();
                });   
                
        empleadoConsulta.addEventListener("change", () => {

                consultarVacacionesEmpleado();

                });
        
        btnRegresarConsultarVacaciones.addEventListener("click", () => {
                moduloConsultarVacaciones.style.display = "none";
                    moduloAdministrarVacaciones.style.display = "block";
                    });

async function autorizarVacacion(idSolicitud) {

        try {

                const solicitudRef = db
                 .collection("solicitudesVacaciones")
                .doc(idSolicitud);

                const doc = await solicitudRef.get();

                    if (!doc.exists) {

                        Swal.fire({
                         icon: "error",
                        title: "Solicitud no encontrada",
                        text: "La solicitud ya no existe."
                                               });

                                   return;
                                }

                      const datos = doc.data();

                      if (datos.estatus !== "Pendiente") {

                       Swal.fire({
                     icon: "warning",
                     title: "Solicitud no disponible",
                     text: `Esta solicitud ya tiene estatus: ${datos.estatus}`
                                                   });

                          return;
                              }

                      const confirmacion = await Swal.fire({
                      icon: "question",
                      title: "¿Autorizar solicitud?",
                         html: `
                      <b>${datos.empleado}</b><br><br>
                      📅 ${datos.fechaInicio} al ${datos.fechaFin}<br>
                      🏖 ${datos.dias} días
                                        `,
                      showCancelButton: true,
                            confirmButtonText: "Sí, autorizar",
                            cancelButtonText: "Cancelar"
                                        });

                     if (!confirmacion.isConfirmed) {
                          return;
                                   }
// Buscar al empleado
const empleadoQuery = await db.collection("empleados")
    .where("nombre", "==", datos.empleado)
        .get();

        if (empleadoQuery.empty) {
            await Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `No se encontró al empleado ${datos.empleado}.`
                                        });
                                            return;
                                            }

                                            const empleadoDoc = empleadoQuery.docs[0];
                                            const empleadoRef = empleadoDoc.ref;
                                            const empleado = empleadoDoc.data();

                                            // Verificar días disponibles
                                            if (empleado.diasDisponibles < datos.dias) {
                                                await Swal.fire({
                                                        icon: "warning",
                                                        title: "Días insuficientes",
                                                        text: `El empleado ${datos.empleado} solamente tiene ${empleado.diasDisponibles} días disponibles.`
                                                                            });
                                                                return;
                                                                   }

                                 // Descontar días
                                await empleadoRef.update({
                                diasDisponibles: empleado.diasDisponibles - datos.dias,
                                diasUtilizados: (empleado.diasUtilizados || 0) + datos.dias
                                       });

                    await solicitudRef.update({   
                   estatus: "Autorizada",
                   fechaAutorizacion: new Date().toISOString()
                                                });


                           await Swal.fire({
                          icon: "success",
                            title: "Solicitud autorizada",
                          text: "La solicitud fue autorizada correctamente.",
                        confirmButtonText: "Aceptar"
                              });

                        consultarVacacionesEmpleado();

                     } catch (error) {

                console.error("Error al autorizar vacaciones:", error);

                Swal.fire({
                icon: "error",
                title: "Error al autorizar",
                text: error.message
                         });
                         }
                   }


        btnRegresarEmpleados.addEventListener("click", () => {

            moduloEmpleados.style.display = "none";
                moduloAdministrador.style.display = "block";

                });
    btnNuevoEmpleado.addEventListener("click", () => {

            moduloEmpleados.style.display = "none";
                moduloNuevoEmpleado.style.display = "block";

                });
    btnCancelarNuevoEmpleado.addEventListener("click", () => {

            moduloNuevoEmpleado.style.display = "none";
                moduloEmpleados.style.display = "block";

                });

    btnConsultarEmpleados.addEventListener("click", () => {

        moduloEmpleados.style.display = "none";
            moduloConsultarEmpleados.style.display = "block";

            cargarEmpleados();

            });

    btnRegresarConsultaEmpleados.addEventListener("click", () => {

            moduloConsultarEmpleados.style.display = "none";
                moduloEmpleados.style.display = "block";

                });

    function calcularProximaRenovacion(fechaIngreso) {

            const hoy = new Date();

            const partes = fechaIngreso.split("-");

            const anioIngreso = Number(partes[0]);
            const mesIngreso = Number(partes[1]) - 1;
            const diaIngreso = Number(partes[2]);

            let proxima = new Date(
                hoy.getFullYear(),
                    mesIngreso,
                        diaIngreso
                        );

                if (proxima < hoy) {

                    proxima.setFullYear(proxima.getFullYear() + 1);

                }
const anio = proxima.getFullYear();
const mes = String(proxima.getMonth() + 1).padStart(2, "0");
const dia = String(proxima.getDate()).padStart(2, "0");

return `${anio}-${mes}-${dia}`;
                    
            }     
            
    function verificarRenovacionEmpleado(idEmpleado, empleado) {

            const hoy = new Date();

            const partesIngreso = empleado.fechaIngreso.split("-");

            const mesIngreso = Number(partesIngreso[1]) - 1;
            const diaIngreso = Number(partesIngreso[2]);

                let fechaRenovacionEsteAnio = new Date(
                    hoy.getFullYear(),
                    mesIngreso,
                    diaIngreso
                       );

                  if (hoy < fechaRenovacionEsteAnio) {
                    return;
                           }

              const ultimaRenovacion = empleado.ultimaRenovacion || "";

                if (ultimaRenovacion.startsWith(String(hoy.getFullYear()))) {
                    return;
                    }

            const nuevaUltimaRenovacion =
          `${hoy.getFullYear()}-${String(mesIngreso + 1).padStart(2, "0")}-${String(diaIngreso).padStart(2, "0")}`;

             db.collection("empleados")
                 .doc(idEmpleado)
                  .update({

                  diasUtilizados: 0,

                  diasDisponibles: empleado.diasOtorgados,

                 ultimaRenovacion: nuevaUltimaRenovacion

                                           });

                           }
    
            
    function cargarEmpleados() {

            listaEmpleados.innerHTML = "Cargando empleados...";

                db.collection("empleados")
                    .orderBy("nombre")
                        .get()
                         .then((snapshot) => {

                        listaEmpleados.innerHTML = "";

                        if (snapshot.empty) {

                        listaEmpleados.innerHTML =
                 "<p>No existen empleados registrados.</p>";

                        return;

                 }

                         snapshot.forEach((doc) => {

                         const empleado = doc.data();
                         

                         verificarRenovacionEmpleado(doc.id, empleado);

                                
                         
                         const proximaRenovacion = calcularProximaRenovacion(empleado.fechaIngreso);

                    listaEmpleados.innerHTML += `

                                 <div style="
                     border:1px solid #ddd;
                            border-radius:10px;
                            padding:15px;
                             margin-bottom:15px;
                            text-align:left;
                            background:white;
                         ">

                            <b>${empleado.numeroEmpleado}</b><br><br>

                        👤 <b>${empleado.nombre}</b><br><br>

                     🏢 Área: ${empleado.area}<br>

                        💼 Puesto: ${empleado.puesto}<br>

                        ✅ Estatus: ${empleado.estatus}<br>

                        📅 Próxima renovación: ${proximaRenovacion}<br>

                        <br><br>

                        <button onclick="editarEmpleado('${doc.id}')">
                            ✏️ Editar
                            </button>

                                 </div>

                      `;

                       });

                      })
             .catch((error) => {

              console.error(error);

               listaEmpleados.innerHTML =
                "Error al consultar empleados.";

                          });

                   }

  function editarEmpleado(id) {

      empleadoEditando = id;

          db.collection("empleados").doc(id).get().then((doc) => {

         if (!doc.exists) {
            alert("Empleado no encontrado.");
             return;
                       }

    const empleado = doc.data();

         moduloConsultarEmpleados.style.display = "none";
         moduloNuevoEmpleado.style.display = "block";

        numeroEmpleado.value = empleado.numeroEmpleado || "";
        numeroEmpleado.disabled = true;
        nombreEmpleado.value = empleado.nombre || "";
        areaEmpleado.value = empleado.area || "";
        puestoEmpleado.value = empleado.puesto || "";
        fechaIngresoEmpleado.value = empleado.fechaIngreso || "";

                                 });

                                        }  


    btnGuardarEmpleado.addEventListener("click", () => {

            if (
                    numeroEmpleado.value.trim() === "" ||
                    nombreEmpleado.value.trim() === "" ||
                    areaEmpleado.value.trim() === "" ||
                    puestoEmpleado.value.trim() === "" ||
                    fechaIngresoEmpleado.value === ""
                               ) {

                    alert("Debe capturar todos los datos del empleado.");
                            return;

                    }
const hoy = new Date();

const partes = fechaIngresoEmpleado.value.split("-");

const anioIngreso = Number(partes[0]);
const mesIngreso = Number(partes[1]) - 1;
const diaIngreso = Number(partes[2]);

let anioUltimaRenovacion = hoy.getFullYear();

if (
    hoy.getMonth() < mesIngreso ||
        (hoy.getMonth() === mesIngreso && hoy.getDate() < diaIngreso)
        ) {
            anioUltimaRenovacion--;
            }

            const ultimaRenovacion =
                `${anioUltimaRenovacion}-${String(mesIngreso + 1).padStart(2, "0")}-${String(diaIngreso).padStart(2, "0")}`;

        const datosEmpleado = {

                numeroEmpleado: numeroEmpleado.value,
                nombre: nombreEmpleado.value,
                area: areaEmpleado.value,
                puesto: puestoEmpleado.value,

                fechaIngreso: fechaIngresoEmpleado.value,
                ultimaRenovacion: ultimaRenovacion,
                

                diasOtorgados: 0,
                diasUtilizados: 0,
                diasDisponibles: 0,

                estatus: "Activo"

              };

              let operacion;

              if (empleadoEditando) {
                  operacion = db.collection("empleados")
                          .doc(empleadoEditando)
                                  .update(datosEmpleado);
                                  } else {
                                      operacion = db.collection("empleados")
                                              .add(datosEmpleado);
                                              }
                operacion.then(() => {

           Swal.fire({
                icon: "success",
                    title: empleadoEditando ? "Empleado actualizado" : "Empleado registrado",
                        text: empleadoEditando
                                ? "Los datos del empleado se actualizaron correctamente."
                                        : "El empleado se registró correctamente.",
                                            confirmButtonColor: "#003366"
                                            });
           
                        })

                            numeroEmpleado.value = "";
                            nombreEmpleado.value = "";
                            areaEmpleado.value = "";
                            puestoEmpleado.value = "";
                            fechaIngresoEmpleado.value = "";
                            
                            empleadoEditando = null;

                             moduloNuevoEmpleado.style.display = "none";
                             moduloEmpleados.style.display = "block";

                                                    })
                
                .catch((error) => {

                 console.error(error);
                 alert("Ocurrió un error al guardar.");

              });


        
       
                                                                                                                
       
                        

function cargarHistorialGuardias() {

        listaHistorialGuardias.innerHTML = "Cargando...";

            db.collection("guardias")
                    .where("empleado", "==", empleado.value)
                            .orderBy("fecha", "desc")
                                    .get()
                                            .then((snapshot) => {

                                            listaHistorialGuardias.innerHTML = "";

                                        if (snapshot.empty) {

                                            totalGuardias.innerHTML = "Total de guardias registradas: 0";

                                                listaHistorialGuardias.innerHTML =
                                                        "<p>No existen guardias registradas.</p>";

                                                            return;
                                                            }

                                            let tabla = `
                                        <table style="
                                            width:100%;
                                            border-collapse:separate;
                                            border-spacing:0;
                                            overflow:hidden;
                                            border-radius:12px;
                                            box-shadow:0 3px 10px rgba(0,0,0,.12);
                                            text-align:center;
                                            margin-top:15px;
                                            font-size:15px;
                                        ">
                                                <tr style="
                                                    background:#123A73;
                                                        color:white;
                                                        ">
                                                    <th style="padding:14px;">Fecha</th>
                                                    <th style="padding:14px;">Entrada</th>
                                                    <th style="padding:14px;">Salida</th>
                                                    <th style="padding:14px;">Tipo</th>
                                                    <tr style="background:white;">
                                            `;

                                            snapshot.forEach((doc) => {

                                        const guardia = doc.data();
                                        const fecha = guardia.fecha.split("-").reverse().join("/");

                                                    tabla += `
                                                        <tr style="background:white;">
                                                        <td style="padding:12px;">${fecha}</td>

                                                        <td style="padding:12px;">${guardia.horaEntrada}</td>

                                                        <td style="padding:12px;">${guardia.horaSalida}</td>

                                                        <td style="padding:12px;">${guardia.tipoGuardia}</td>
                                                                <tr style="background:white;">
                                                                 `;

                                                                           });

                                                      tabla += "</table>";

                                                      totalGuardias.innerHTML =
                                                          `Total de guardias registradas: ${snapshot.size}`;

                                                     listaHistorialGuardias.innerHTML = tabla;

                                                             })
                                            
                                                        .catch((error) => {

                                                                console.error(error);

                                                                    Swal.fire({
                                                                            icon: "error",
                                                                                    title: "Error",
                                                                                            text: error.message
                                                                                                });                
                                                                                            });
                                                                                        }