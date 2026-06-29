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
