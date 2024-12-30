import { useContext } from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

import { CartContext } from '../context/CartContext'

function ProductItem({ product }) {
  const cart = useContext(CartContext)

  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <Card className='mt-5 card-bg'>
      <Card.Body>
        <Card.Img
          variant='top'
          src={product.image}
          height='200px'
          style={{ objectFit: 'cover' }}
        />
        <div className='d-flex justify-content-between pt-4'>
          <Card.Text align='right' className='text-light' dir='rtl'>
            {(product.price).toLocaleString()} تومان
          </Card.Text>
          <Card.Title align='right' className='text-light'>
            {product.title}
          </Card.Title>
        </div>
        {productQuantity > 0 ? (
          <div className='d-flex justify-content-between'>
            <Form as={Row}>

              <Col sm='6' className='d-flex'>

                <Button
                  onClick={() => cart.addItemToCart(product.id)}
                  sm='6'
                  className='text-white my-4'
                  variant='btn btn-outline-secondary'
                >
                  +
                </Button>

                <Button
                  sm='6'
                  className='text-white my-4'
                  variant='btn btn-outline-secondary'
                >
                  {productQuantity}
                </Button>

                <Button
                  onClick={() => cart.removeItemFromCart(product.id)}
                  sm='6'
                  className='text-white my-4'
                  variant='btn btn-outline-secondary'
                >
                  -
                </Button>
              </Col>

            </Form>
            <Button
              onClick={() => cart.deleteFromCart(product.id)}
              variant='btn btn-light'
              className='my-4'
            >
              حذف از سبد خرید
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => cart.addItemToCart(product.id)}
            variant='btn btn-outline-secondary'
            className='text-white my-4'
          >
            افزودن به سبد خرید
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem
