import { Footer } from "../footer/footer"
import Header from "../header/header"
import { ProductList } from "../product-list/product-list"

import './app.css'

const App  = () => {
    return (
        <>
        <Header></Header>
        <ProductList></ProductList>
        <Footer></Footer>
        </>
    )
}

export default App