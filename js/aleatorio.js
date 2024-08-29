const nomes = ["carlos", "carlos", "carlos", "carlos", "carlos", "carlos", "carlos"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)