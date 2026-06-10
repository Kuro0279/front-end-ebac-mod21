import type { Livro } from "../tipos/Livro"
import ItemLivro from "./ItemLivro";

type Props = {
    livros : Livro[];
    onDelete: (id: string) => void;
}

const ListaLivros = ({livros, onDelete}:Props) => {

    if(livros.length === 0) {
        return <p>Nenhum livro registrado <i>até agora</i></p>
    }

    return(
        <div>
            {
                livros.map(item => (<ItemLivro key={item._id} livro={item} onDelete={onDelete}/>))
            }
        </div>
    )
}

export default ListaLivros;