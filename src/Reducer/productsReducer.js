export default function productsReducer(products, action) {
    //  함수가아니니 리턴할 필요없이 명령만 처리한다

    switch (action.type) {
        case 'road': {
            const { data } = action

            return data

        }
        case 'update': {
            const { name, text, price, isNew } = action

            return (
                products.map((item) => {
                    if (item.name === name) {
                        return ({ ...item, text, price, isNew })
                    } else {
                        return ({ ...item })
                    }
                })
            )

        }

        case 'add': {
            const { image, name, text, price, isNew } = action

            return (
                [...products, { image, name, text, price, isNew }]
            )
        }

        case 'remove': {
            const {name} = action

            return (
                products.filter((item) => (item.name !== name))
            )
        }
    }
}



