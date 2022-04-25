function talk(){
    var know = {
        "Quem é você?" : "Oi, sou a Linda, sua assistente virtual.",
        "Como você está?" : "Bem :)",
        "O que eu posso fazer por você?" : "Por favor curta e nos siga.",
        "Seus seguidores" : "Eu tenhi minha familia de 5000 membros, eu não tenho seguidores tenho suporte familiar",
        "ok" : "Muito obrigada",
        "Tchau" : "Ok! Nos vemos em breve..."
    };
    var user = document.getElementById('userBox').value;
        document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Desculpe, eu não entendi <br>"
    }
}