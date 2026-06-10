import { useEffect, useState } from "react";
import FormularioLivro from "./componentes/FormularioLivro";
import type { Livro } from "./tipos/Livro";
import ListaLivros from "./componentes/Listalivros";
import styles from "./componentes/App.module.css";
import axios from "axios";

function App() {

  const [livros, setLivros] = useState<Livro[]>([])

  const APIurl = "https://crudcrud.com/api/b7f06b3dca2f44a6838fe32ed70d2347/livros"

  const addLivro = (dados: Livro) => {

    axios
    .post<Livro>(APIurl, dados)
    .then(resposta => setLivros(prev => [...prev, resposta.data]))
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
      <ListaLivros livros={livros} />
    </div>
  )
}

export default App
