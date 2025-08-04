import './list-header.css'
export const ListHeader = (props) => {
    
    return (
        <div className="new-product-info">
            <div>
                <label htmlFor="newProduct">Enter the name of product</label>
            </div>
            <div className="new-product-data">
                <input id="newProduct" type="text" />
                <input type="button" value="Save" onClick={()=>{
                    props.onClickTaskCreate()
                }}/>
            </div>
        </div>
    )
}