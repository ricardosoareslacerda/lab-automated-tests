export interface Repositorio<T, I> {
    buscar(campo: I): T;
    adicionar(entidade: T): void;
}