import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td>{product.quantity} EA</td>
                <td>$ {product.price} </td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >Supprimer </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image du Produit </th>
                        <th> Qte du Produit </th>
                        <th>Prix du Produit </th>
                        <th>Supprimer du Pannier</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
