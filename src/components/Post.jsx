import styles from './Post.module.css'

export function Post(){
    return(
        //article: tem como objetivo ser independentemente distribuível ou reutilizável.
        <article className='{styles.post}'> 
            {/*header: é geralmente encontrado no topo de um documento, uma seção ou um artigo e geralmente contém o cabeçalho principal da página e algumas navegações e barras de busca */}
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/9624274?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Luiz Guilherme Bandeira</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title="19 de Abril às 20:55" dataTime="2024-04-19 20:55">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto para meu portifolio</p>
                <p><a href=''>luiz.guilherme/doctorcare</a></p>
                <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>   
    );
}