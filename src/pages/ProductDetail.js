import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { name } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductsByName(name).then(result => setProduct(result.data.data))
    }, [name])

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div>            
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.unitPrice} $</Card.Meta>
                        <Card.Description>
                            {product.quantityPerUnit}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Add to Cart
                            </Button>
                            <Button basic color='red'>
                                Remove from Cart
                            </Button>
                        </div>
                    </Card.Content>
                </Card>                
            </Card.Group>
        </div>
    )
}
