const productList = [
  {
    id: '1',
    title: 'ایرپادز',
    price: 1500000,
    image: '/images/airpods.jpg',
  },
  {
    id: '2',
    title: 'آیپد',
    price: 31500000,
    image: '/images/ipad.jpg',
  },
  {
    id: '3',
    title: 'مک‌بوک',
    price: 45000000,
    image: '/images/macbook.jpg',
  },
  {
    id: '4',
    title: 'آیفون',
    price: 60000000,
    image: '/images/phone.jpg',
  },
  {
    id: '5',
    title: 'هدفون',
    price: 2500000,
    image: '/images/headphone.jpg',
  },
  {
    id: '6',
    title: 'ماوس',
    price: 9800000,
    image: '/images/mouse.jpg',
  },
  {
    id: '7',
    title: 'اپل واچ',
    price: 3500000,
    image: '/images/watch.jpg',
  },
  {
    id: '8',
    title: 'میکروفون',
    price: 4000000,
    image: '/images/mic.jpg',
  },
]

function getProductData(id) {
  let productData = productList.find((product) => product.id === id)

  return productData
}

export { productList, getProductData }
