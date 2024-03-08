import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App09_ChangeProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('./data/products.json').then(
            (res) => {
                setProducts(res.data)
            })


    }, [])

    const addProduct = () => {
        let image = prompt("추가할 상품의 이미지 경로를 입력하세요")
        let name = prompt("추가할 상품의 이름를 입력하세요")
        let text = prompt("추가할 상품의 내용 입력하세요")
        let price = prompt("추가할 상품의 가격 입력하세요")

        // setProducts((prev)=>{
        //     return(
        //         [...prev, {image, name, text, price}]
        //     )
        // })

        setProducts((prev) => ([...prev, { image, name, text, price }]))
    }


    const removeProduct = () => {
        let name = prompt("삭제할 상품의 이름을 입력하세요")

        // setProducts((prev)=>{
        //     return(
        //         prev.filter((item)=>{
        //             if(item.name!==name){
        //                 return ({item})
        //             }
        //         })
        //         )
        // })

        setProducts((prev) => (prev.filter((item) => (item.name !== name))))
    }
    // setProducts((prev)=>([...prev, {image, name, text, price}]))


    const changeProduct = () => {
        let name = prompt("변경할 상품의 이름를 입력하세요")
        let text = prompt("변경할 상품의 내용 입력하세요")
        let price = prompt("변경할 상품의 가격 입력하세요")

        setProducts((prev) => {

            return (prev.map((item) => {
                if (item.name === name) {
                    return { ...item, text: text, price: price }
                } else {
                    return { ...item }
                }
            })
            )
        })
    }


    return (
        <>
            {
                products.map((item) => {
                    return (
                        <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew} />
                    )
                })
            }

            <div style={{ width: '320px', height: 'auto', margin: '30px auto' }}>

                <button onClick={addProduct}>상품추가</button>
                <button onClick={removeProduct}>상품삭제</button>
                <button onClick={changeProduct}>상품변경</button>
            </div>
        </>
    )
}
