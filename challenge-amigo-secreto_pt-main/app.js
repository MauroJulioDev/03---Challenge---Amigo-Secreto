let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    document.getElementById('amigo').value = '';

    // Verifica se o campo está vazio
    if (amigo.trim() === '') {
        alert('O campo não pode estar vazio');
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(amigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Se tudo ok, adiciona o amigo na lista
    alert('Amigo adicionado com sucesso!');
    amigos.push(amigo);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //Incremento na Lista de Amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Verifica se tem mais que 2 amigos para sortear
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione mais amigos para sortear!');
        return;
    }

    //Sorteia um amigo Aleatório
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`O amigo sorteado foi: ${sorteado}`);

    //Remove o amigo sorteado da lista
    amigos.splice(sorteado, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    console.log(amigos);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

    if (amigos.lenght === 0) {
        let ultimoAmigo = amigos[0];
        alert(`O amigo restante foi: ${ultimoAmigo}`);
        resultado.innerHTML = `O amigo restante foi: ${ultimoAmigo}`;
    }

}