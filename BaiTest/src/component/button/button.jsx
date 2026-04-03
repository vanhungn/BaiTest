import "./button.css"

export const Button=({ style, content})=>{
    return(
        <button style={{...style}} className="button">{content}</button>
    )
}