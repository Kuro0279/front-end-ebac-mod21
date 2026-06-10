import React, { useState } from "react";
import type { Livro } from "../tipos/Livro";
import styles from './FormularioLivro.module.css'

type Props = {
    aoEnviar : (livro : Livro) => void;
}

const FormularioLivro = ({ aoEnviar } : Props) =>  {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    const enviar = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!titulo || !autor) return;
        aoEnviar({titulo, autor});
        setTitulo('');
        setAutor('');
        return;
    }
    
    return(
        <form className={styles.formulario} onSubmit={enviar}>
            <h2>Cadastrar livro:</h2>
            <input 
            className={styles.input}
            type="text"
            placeholder="Título do livro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}/>
            <input
            className={styles.input}
            type="text"
            placeholder="Autor do livro"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}/>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default FormularioLivro;