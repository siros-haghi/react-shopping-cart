import { useContext } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

import { CartContext } from '../context/CartContext'

import { getProductData } from '../data/items'

function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext)

  const productData = getProductData(id)

  return (
    <>
      <div className='mt-5'>
        <div className='d-flex justify-content-between align-items-center mb-1'>
          <div>{productData.title}</div>
          <div>قیمت: {(quantity * productData.price).toLocaleString()}</div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <Button
            size='sm'
            className='text-white'
            variant='btn btn-outline-secondary'
            onClick={() => cart.deleteFromCart(id)}
          >
            حذف
          </Button>
          <Form as={Row}>
            <Col sm='6' className='d-flex'>
              <Button
                onClick={() => cart.addItemToCart(id)}
                sm='6'
                className='text-white'
                variant='btn btn-outline-secondary'
              >
                +
              </Button>

              <Button
                sm='6'
                className='text-white'
                variant='btn btn-outline-secondary'
              >
                {quantity}
              </Button>

              <Button
                onClick={() => cart.removeItemFromCart(id)}
                sm='6'
                className='text-white'
                variant='btn btn-outline-secondary'
              >
                -
              </Button>
            </Col>

          </Form>
        </div>
      </div>
    </>
  )
}

export default CartProduct
