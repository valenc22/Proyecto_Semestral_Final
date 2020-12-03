$("#enviar-btn").click(function(){
    let mensajes = $("#mensajes");
    let errores = [];

    let nombre = $("#nombre-txt").val();
    let apellido =$("#apellido-txt").val();
    let correo = $("#correo-txt").val();
    let telefono = $("#telefono-txt").val();
    let mensaje = $("#mensaje-txt").val();
    if(nombre == ''){
       errores.push("Debe ingresar nombre");
    }
    if(apellido == ''){
      errores.push("Debe ingresar apellido");
    }
    if(correo == ''){
      errores.push("Debe ingresar correo");
    }
    if(telefono == ''){
      errores.push("Debe ingresar telefono");
    }
    if(mensaje == ''){
      errores.push("Debe ingresar mensaje");
    }
    if(errores.length == 0){
    let contacto = {};
        contacto.nombre = nombre;
        contacto.apellido = apellido;
        contacto.correo = correo;
        contacto.telefono = telefono;
        contacto.mensaje= mensaje;
        Swal.fire({
         title: "Formulario enviado",
         text: "Mensaje fue enviado exitosamente.",
         icon: "success",
        });

      }else {
        Swal.fire({
        title: "Formulario no enviado",
        text: "Por favor complete todos los campos.",
        icon: "error",
       });
      }
  });
