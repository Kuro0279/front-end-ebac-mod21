import type { Livro } from "../tipos/Livro"

type Props = {
    livro : Livro
    onDelete: (id: string) => void;
}

const ItemLivro = ({livro, onDelete}: Props) => {
    return(
        <div>
            <div>
                <strong>Título: {livro.titulo}</strong>
            </div>
            <p>Autor: {livro.autor}</p>
            <button onClick={() => livro._id && onDelete(livro._id)}>Excluir livro</button>
        </div>
    )
}

export default ItemLivro;