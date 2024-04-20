import React from "react";
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment(){
    return(
       <div className={styles.comment}>
           <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/9624274?v=4" />

           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Guilherme Bandeira</strong>
                            <time title="19 de Abril às 20:55" dataTime="2024-04-19 20:55">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom, parabéns!!</p>
                </div>
                <footer>
                   <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                   </button>
                </footer>
           </div>

       </div>
    );
}