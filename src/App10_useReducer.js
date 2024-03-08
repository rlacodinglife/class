import React, { useCallback, useEffect, useReducer, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'
import productsReducer from './Reducer/productsReducer'

export default function App09_ChangeProducts() {
   const [products,dispatch] =useReducer(productsReducer,[])


    const [newcheck, setnewcheck] = useState(false)

    const changeNewCheck = () => {
        setnewcheck((prev) => !prev)
    }

    const Change = (A) => {
        if (newcheck === true) {
            return (A.filter((item) => (item.isNew === true)))
        }
        else { return (A) }
    }
    const changeA = Change(products)

    const changeProduct=useCallback(()=>{
      ()=>{
        let name=prompt('변경할 상품이름(대상)')
        let text=prompt('변경할 상품내용')
        let price=prompt('변경할 상품가격')
        let isNew=prompt('신상품인가요? 예)true,false')
        isNew=isNew.startsWith('true')

        dispatch({type:'update',name,text,price,isNew})
       
    }
    },[])

    const addProduct=()=>{
        let image=prompt('추가할 상품의 이미지를 입력하셈')
        let name=prompt('추가할 상품의 이름을 입력하셈')
        let text=prompt('추가할 상품의 내용을 입력하셈')
        let price=prompt('추가할 상품의 가격을 입력하셈')
        let isNew=prompt('추가할 상품의 신상품여부 입력하셈')
        isNew=isNew.startsWith('true')

        dispatch({type:'add',image,name,text,price,isNew})

        // setProducts((prev)=>{
        //     return(
        //         [...prev,{image,name,text,price,isNew}]
        //     )
        // })
    }

    const removeProduct=()=>{
        let name=prompt('삭제할 상품의 이름을 입력하셈')

        // setProducts((prev)=>{
        //     return(
        //         prev.filter((item)=>(item.name!==name))
        //     )
        // })
        dispatch({type:'remove',name})

    }




    useEffect(() => {
        axios.get('./data/products.json').then((res) => {
            dispatch({type:'road',data:res.data})
        })
    }, [])








    return (
        <>
            <div style={{ width: '360px', height: '30px', margin: '20px auto' }}>
                신상품<input type='checkbox' value={newcheck} onChange={changeNewCheck} />
            </div>


            {
                changeA.map((item) => {
                    return (
                        <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew} />
                    )
                })


            }

            <div style={{width:360,height:30,margin:'30px auto'}}>
            <button onClick={changeProduct}>상품수정</button>
            <button onClick={addProduct}>상품추가</button>
            <button onClick={removeProduct}>상품삭제</button>
            </div>

        </>
    )


}

