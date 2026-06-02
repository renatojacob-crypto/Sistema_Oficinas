function verificarLogin() {
    if (localStorage.getItem("sessaoAtiva") !== "sim") {
        window.location.href = "index.html";
    }
}

function sair() {
    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("sessaoAtiva");
    window.location.href = "index.html";
}