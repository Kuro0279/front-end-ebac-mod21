import type { Livro } from "../tipos/Livro"

type Props = {
    livro : Livro
}

const ItemLivro = ({livro}: Props) => {
    return(
        <div>
            <div>
                <strong>{livro.titulo}</strong>
            </div>
            <p>{livro.autor}</p>
        </div>
    )
}

export default ItemLivro;