import caret from './icons/caret.svg';
import Sidenav from './components/sidenav.js'
import bell from './icons/bell.svg';
import profile from './icons/profile.png';
import Card from './components/card.js'
import Orders from './components/orders.js'
import Marketing from './components/marketing.js'
import Sidebar from "react-sidebar";
import mobileNav from './components/mobileNav'
import { sale, customers, orders, allProducts, cartData, ordersData } from './data/response'

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [open, setOpen] = useState(false)

  const onSetSidebarOpen = (open) => {
    setOpen(open)
  }
  return (
    <div>
    
      <Sidenav className="mobile"></Sidenav>

      <div className="content" id="main">
        <div className='head'>
          <div className='flex'>
            <Sidebar
              sidebar={mobileNav}
              open={open}
              onSetOpen={onSetSidebarOpen}
              styles={{ sidebar: { background: "#ffffff" } }}
            >
              <p className='mobile' onClick={() => { onSetSidebarOpen(true) }} style={{ fontSize: 25 }}>&nbsp; &#9776;</p>
            </Sidebar>
            
            {/* <span onClick={() => {toggleNav()}} style={{fontSize:30,cursor:"pointer"}} onclick="openNav()">&#9776; open</span> */}
            <p className='desk' >Dashboard</p>
          </div>
          <div className='right'>
            <div className='name'>
              <p>Nanny's Shop</p>
              <img src={caret} />
            </div>
            <img src={bell} style={{padding:"0 20px"}} />
            <img src={profile} />
          </div>
        </div>

        <div className='topRow'> 
          <div className='left'>
            <Card mr={19} w={321} icon={sale[0].icon} iconColor={sale[0].iconColor} left={sale[0].left} right={sale[0].right}>
            </Card>
            <Card mr={0} w={321} icon={customers[0].icon} iconColor={customers[0].iconColor} left={customers[0].left} right={customers[0].right}>
            </Card>
          </div>
          
          <Card className="center" mr={0} middle={orders[0].middle} key={orders[0].id} icon={orders[0].icon} iconColor={orders[0].iconColor} left={orders[0].left} right={orders[0].right}>
          </Card>
          
        </div>
        <div className='bottomRow'>
          <div className='left'>
            <Marketing className="marketing" w={311} h={309}>
            </Marketing>
            
            <div className='right'>
              <div className='stack'>
                <Card mb={19} bg={'#5570F1'} percentColor={'#DBDEEE'} calender={false} color={'#fff'} mr={0} w={321} icon={allProducts[0].icon} iconColor={allProducts[0].iconColor} left={allProducts[0].left} right={allProducts[0].right}>
                </Card>

                <Card tagcolor={'#CC5F5F'} w={321} middle={null} icon={cartData[0].icon} iconColor={cartData[0].iconColor} left={cartData[0].left} right={cartData[0].right}>
                </Card>

              </div>

            </div>

          </div>
          <div style={{width:'100%',display:'flex',justifyContent:'center',marginRight:19}}>
            <Orders w={386} orders={ordersData} >

            </Orders>
          </div>
        </div>



      </div>
      
    </div>
  );
}

export default App;
