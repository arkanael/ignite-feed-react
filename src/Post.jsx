
//Props: Propiedades
export function Post(props){
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
            <span>{props.data}</span>
        </div>
    )
}

