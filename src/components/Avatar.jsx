import styles from './Avatar.module.css';

// Desentruturação de objetos em react
//const user = {name: "Guilherme"} 
//const { name } = user; pegar a propiedade name do objeto user

export function Avatar({hasBorder = true, src}){
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.Avatar} 
            src={src} 
        />
    );
}