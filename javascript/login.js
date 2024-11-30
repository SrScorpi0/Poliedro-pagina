document.addEventListener("DOMContentLoaded", function() {
    fetch("index.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la página");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar la página:", error));
});
/*
function openLogin() {
    document.getElementById('overlay').style.display = 'flex';
}
*/
function closeLogin() {
    window.location.href = "index.html";
}

function submitLogin() {
    alert('Iniciando sesión...');
    closeLogin();
}


