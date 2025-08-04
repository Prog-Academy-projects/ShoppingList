export const DoneElement = (props) => {
    return (
        <span onClick={()=>{
            props.onClickDone()
        }}> ✅ </span>
    )
}