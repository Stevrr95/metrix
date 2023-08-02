import logo from '../icons/logo.svg';
import dash from '../icons/dash.svg';
import order from '../icons/orders.svg';
import customer from '../icons/customers.svg';
import inventory from '../icons/inventory.svg';
import chat from '../icons/chat.svg';
import settings from '../icons/settings.svg';
import rcaret from '../icons/rcaret.svg';
import contact from '../icons/contact.svg';
import gift from '../icons/gift.svg';
import logout from '../icons/logout.svg';

const Sidenav = (props) => {
    return (
        <>
    
        <div className="sidebar">
            <div className="logo">
                <img src={logo} />
                <p>Metrix</p>
            </div>
            <div className="navItems">
                <p className='active'><img src={dash} />Dashboard</p>
                <p><img src={order} />Orders<div className='info flex-center'>3</div></p>
                <p><img src={customer} />Customers</p>
                <p><img src={inventory} />Inventory</p>
                <p><img src={chat} />Converstions<div className='info flex-center'>16</div></p>
                <p><img src={settings} />Settings</p>

            </div>
            <div className='box'>
                <div className='contact'>
                    <img src={contact} />
                    <p>Contact Support</p>
                </div>
                <div className='gift'>
                    <div className='top'>
                        <img src={gift} />
                        <p>Free Gift Awaits You!</p>
                    </div>
                    <div className='upgrade'>
                        <span>Upgrade your account </span>
                        <img src={rcaret} />
                    </div>
                </div>
                <div className='logout'>
                    <img src={logout} />
                    <p>Logout</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidenav