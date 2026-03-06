// Configuración de rutas según tu estructura de carpetas
const PATHS = {
    login: "/index.html",
    menu: "/APP/menu.html" // Ajusta "APP" si en tu repo está en minúsculas
};

function login() {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;
    const valido = usuarios.find(u => u.usuario === user && u.password === pass);

    if (valido) {
        localStorage.setItem("login", "true");
        localStorage.setItem("user_name", user);
        window.location.href = "APP/menu.html";
    } else {
        document.getElementById("mensaje").innerText = "Acceso denegado";
    }
}

function verificarLogin() {
    if (localStorage.getItem("login") !== "true") {
        // Redirige a la raíz buscando el index.html
        const path = window.location.pathname.includes('/APP/') || window.location.pathname.includes('/JUEGOS/') ? '../index.html' : 'index.html';
        if(window.location.pathname.includes('/JUEGOS/')) window.location.href = "../../index.html";
        else window.location.href = path;
    }
}

function logout() {
    localStorage.removeItem("login");
    const path = window.location.pathname;

    // Si estás dentro de la carpeta profunda de juegos, sube dos niveles
    if (path.includes('/ASSETS/JUEGOS/')) {
        window.location.href = "../../index.html";
    } 
    // Si estás en el menú o carpetas de primer nivel, sube solo uno
    else {
        window.location.href = "../index.html";
    }
}