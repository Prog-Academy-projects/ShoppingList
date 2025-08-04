export const DeleteElement = (props) => {
    return (
        <span onClick={()=>{
            props.onClickDelete()
        }}> ❌ </span>
    )
}