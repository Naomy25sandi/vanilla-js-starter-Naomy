import { getUsuarios } from "./consultas";

const btnSingIn = document.getElementById('singIn');
const btnRegistrarse = document.getElementById("singUp");

btnRegistrarse.addEventListener("click", () => {
    window.location.href = "index.html";
});

btnSingIn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contrasena').value;

    try {
        const usuariosRegistrados = await getUsuarios();
        let usuarioEncontrado = false;
        usuariosRegistrados.forEach(usuario => {
            if (email === usuario.email && password === usuario.contra) {
                alert("DATOS CORRECTOS");
                usuarioEncontrado = true;
                localStorage.setItem("id",usuario.id)
                localStorage.setItem("nombre",usuario.email)
                console.log(`El usuario que se registró es ${usuario.email}`);
                window.location.href = "./home.html";
            }
        });
        if (!usuarioEncontrado) {
            alert("DATOS INCORRECTOS");
        }
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
});
