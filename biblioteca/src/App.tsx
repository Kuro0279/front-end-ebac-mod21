import { useEffect, useState } from "react";
import FormularioLivro from "./componentes/FormularioLivro";
import type { Livro } from "./tipos/Livro";
import ListaLivros from "./componentes/Listalivros";
import styles from "./componentes/App.module.css";
import axios from "axios";

function App() {

  const [livros, setLivros] = useState<Livro[]>([])

  const APIurl = "https://crudcrud.com/api/68485dfe914d4a7fa7d1e85b4abf6342/livros"

  const addLivro = (dados: Livro) => {

    axios
    .post<Livro>(APIurl, dados)
    .then(resposta => setLivros(prev => [...prev, resposta.data]))
  }
  
  const excLivro = (id: string) => {
    axios
    .delete(`${APIurl}/${id}`)
    .then(() => {
      setLivros(prev =>
        prev.filter(livro => livro._id !== id)
      )
    })
    .catch(erro => console.log(erro))
  }

  useEffect(() => {
    //fetch
    axios
    .get<Livro[]>(APIurl)
    .then(resposta => setLivros(resposta.data))
  },[])

  return (
    <div className={styles.principal}>
      <div className={styles.formulario}>
        <FormularioLivro aoEnviar={addLivro}/>
      </div>
      <ListaLivros livros={livros} onDelete={excLivro} />
    </div>
  )
}

export default App
