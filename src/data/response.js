import sales from '../icons/sales.svg';
import users from '../icons/users.svg';
import cart from '../icons/cart.svg';
import allorders from '../icons/allorders.svg';
import allproducts from '../icons/allproducts.svg';
import phone from '../icons/phone.png'

const sale =
    [
      {
        id: 1,
        icon: sales,
        iconColor: 'rgba(85, 112, 241, 0.12',
        left: {tag:'Sales',data:'₦4,000,000.00',percent:null},
        right: {tag:'Volume',data:450,percent:'+20.00%'},
        middle: null,
      }
    ]

  const customers = [
    {
      id: 1,
      icon: users,
      iconColor: 'rgba(255, 204, 145, 0.16)',
      left: {tag:'Customers',data:'1,250',percent:'+15.80%'},
      right: {tag:'Active',data:'1,180',percent:'85%'},
      middle: null,
    }
  ]
  const orders = [
    {
      id:1,
      icon: allorders,
      iconColor:'rgba(255, 204, 145, 0.16)',
      left: {tag:'All Orders',data:450,percent:null},
      middle: {tag:'Pending', data:5,percent:null},
      right: {tag:'Completed', data:445,percent:null},
    }
  ]
  const allProducts =
    [
      {
        id: 1,
        icon: allproducts,
        iconColor: 'rgba(255, 255, 255, 0.16)',
        left: {tag:'All Products',data:45,percent:null},
        right: {tag:'Active',data:32,percent:'+24%'},
        middle: null,
      }
    ]

  const cartData = [
    {
      id: 1,
      icon: cart,
      iconColor: 'rgba(255, 204, 145, 0.16)',
      left: { tag: 'Abandonded Cart', data: '20%', percent: '+0.00%' },
      middle: null,
      right: { tag: 'Customers', data:30, percent:null },
    }
  ]

  const ordersData = [
    { id: 1, image: phone, name: 'iPhone 13', price: '₦730,000', quantity: 1, date: '12 Sept 2022', status: 'Pending', statusColor:'#CC5F5F',statusBg:'rgba(245, 126, 119, 0.12)'},
    {id:2,image:phone,name:'iPhone 13',price:'₦730,000',quantity:1,date:'12 Sept 2022',status:'Completed',statusColor:'#519C66',statusBg:'rgba(50, 147, 111, 0.12)'},
    {id:3,image:phone,name:'iPhone 13',price:'₦730,000',quantity:1,date:'12 Sept 2022',status:'Completed',statusColor:'#519C66',statusBg:'rgba(50, 147, 111, 0.12)'},
    {id:4,image:phone,name:'iPhone 13',price:'₦730,000',quantity:1,date:'12 Sept 2022',status:'Completed',statusColor:'#519C66',statusBg:'rgba(50, 147, 111, 0.12)'},
    { id:5, image: phone, name: 'iPhone 13', price: '₦730,000', quantity: 1, date: '12 Sept 2022', status: 'Pending', statusColor:'#CC5F5F',statusBg:'rgba(245, 126, 119, 0.12)'},
    {id:6,image:phone,name:'iPhone 13',price:'₦730,000',quantity:1,date:'12 Sept 2022',status:'Completed',statusColor:'#519C66',statusBg:'rgba(50, 147, 111, 0.12)'},
  ]

export { sale, customers, orders, allProducts, cartData, ordersData }