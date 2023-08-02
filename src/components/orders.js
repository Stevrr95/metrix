

const Orders = (props) => {
    return (
        <div className='card orders' style={{height:'100%',width:props.w, marginBottom: props.mb }}>
            <div className='top'>
                <p>Recent Orders</p>
                <div className='time'>
                </div>
            </div>
            {
                props.orders.map((data) => {
                    return (
                        <div key={data.id}>
                            <div className='flex'>
                                <div className='innerFlex'>
                                    <img src={data.image} />
                                    <div className='column'>
                                        <p className='name'>{data.name}</p>
                                        <p className='price'>{data.price} x {data.quantity}</p>
                                    </div>
                                </div>
                                <div className='column'>
                                    <p className='date' style={{fontSize:10}}>{data.date}</p>
                                    <p className='status' style={{ borderRadius: 8,width:70, padding: '2px 15px', backgroundColor: data.statusBg,color:data.statusColor}}><center>{data.status}</center></p>
                                </div>
                            </div>
                            <hr style={{border:'1px solid #F1F3F9'}}/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Orders