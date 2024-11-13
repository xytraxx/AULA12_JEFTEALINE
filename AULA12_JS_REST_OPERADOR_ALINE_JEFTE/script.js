//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4) {
//     console.log("Sejam benvindo todos os alunos!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }

//Vamos reescrever a função utilizando o rest operator
function listaAlunos(...alunos) {
  console.log("Sejam benvindos todos os alunos!");
  console.log(alunos);
  console.log(alunos[0]);
  console.log(alunos[3]);
}
listaAlunos("Deivid", "Benevides", "Conegundes", "Demerval", "Emengarda");

//outro exemplo: sorteador de numeros primos menores do que 20

function sorteadorPrimo(...numeros) {
  console.log(numeros);
  //const numeroSorteado = Math.random()*numeros.lenght;
  const numeroSorteado = Math.random() * numeros.lenght;
  console.log(`posição ${numeroSorteado}`);
  console.log(`Número primo: ${numeros[numeroSorteado]}`);
}

sorteadorPrimo(2, 3, 5, 7, 11, 13, 17, 19);


function DS(...alunos) {
    const DS =
        math.floor(match.random() * número.legth);
    console.log('Aluno sorteados:${alunos[DS]}}; 
DS()
}
