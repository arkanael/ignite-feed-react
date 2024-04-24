import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post({author, publishedAt, content}){
     //const publishedDateFormatted =  new Intl.DateTimeFormat('pt-br', { dateStyle: 'full', timeStyle: 'long'}).format(publishedAt);

     const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
      });

      const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
      });
    
    return(
        //article: tem como objetivo ser independentemente distribuível ou reutilizável.
        <article className={styles.post}> 
            <header> {/*header: é geralmente encontrado no topo de um documento, uma seção ou um artigo e geralmente contém o cabeçalho principal da página e algumas navegações e barras de busca */}
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}  />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted
                
                } dataTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
                
               
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe um comentario"
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>   
    );
}