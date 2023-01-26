

$(document).ready(function() {

    const avatar = $('#avatar');
    const name = $('#name');
    const username = $('#username');
    const respositorios = $('#repositorios');
    const seguidores = $('#seguidores');
    const  seguindo = $('#seguindo');
    const link = $('#link-github')


    fetch('https://api.github.com/users/Paulo-Cesar-Paiva-Ferreira')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            avatar.attr('src', json.avatar_url);
            name.text(json.name);
            username.text(json.login);
            respositorios.text(json.public_repos);
            seguidores.text(json.followers);
            seguindo.text(json.following);
            link.attr('href', json.html_url);
        });
});