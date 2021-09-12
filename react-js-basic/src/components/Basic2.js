import React, {useState} from 'react'

const Basic2 = () => {

    const [product, setProducts] = useState({name: '', price: ''})

    return (
        <div>
            <h2>hello basic2 compornent</h2>
            <form>
                <input type='text' value={product.name}
                // ...productで要素分解→nameだけ変更
                onChange={evt => setProducts({...product, name: evt.target.value})}
                />
                <input type='text' value={product.price}
                // ...productで要素分解→priceだけ変更
                onChange={evt => setProducts({...product, price: evt.target.value})}
                />
            </form>
            <h3>Product name is {product.name}</h3>
            <h3>Product price is {product.price}</h3>
        </div>
    )
}

export default Basic2
