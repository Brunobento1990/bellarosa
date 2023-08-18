export interface IPromocaoViewDto {
    dataDeExpiracao?: string,
    descricao: string,
    descricaoProduto: string,
    id: string,
    numero:number,
    preco: number,
    precoProduto: number
}

export interface IProdutoView {
    id: string,
    numero:number,
    descricao: string;
    especificacaoTecnica?: string;
    foto?: string,
    tamanho?: string,
    cor?: string,
    preco: number,
    categoriaId: string,
    fornecedorId?: string,
    produtoEmDestaque: boolean
}

export interface IHomeViewDto {
    promocoesViewDto: IPromocaoViewDto[],
    produtosEmDestaque: IProdutoView[]
}