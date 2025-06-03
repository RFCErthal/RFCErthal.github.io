
function buscarQuantidade() {
    const valor = document.getElementById("quantidade")?.value;
    if (valor) {
        alert("Você digitou: " + valor + "g.");
    } else {
        alert("Digite uma quantidade!");
    }
}

function adicionarAcompanhamento(item) {
    alert(item + " adicionado como acompanhamento!");
}

function adicionarGenerico() {
    alert("Item adicionado!");
}
