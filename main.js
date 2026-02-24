function copiarEmail(){
    const email = "gabriel.fernandes.abreu17@gmail.com"
    navigator.clipboard.writeText(email);
    alert("Email copiado!");
}

function copiarTelefone(){
    const telefone = "(31)99107-1964"
    navigator.clipboard.writeText(telefone);
    alert("Telefone copiado!");
}
