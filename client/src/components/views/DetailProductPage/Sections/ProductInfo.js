import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Information du produit">
                <Descriptions.Item label="Prix"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Qte">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="views"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Déscription"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Ajouter au pannier
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
