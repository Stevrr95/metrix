import caret2 from '../icons/caret2.svg';

const Card = (props) => {
    return (
        <div className='card' style={{marginRight:props.mr,width:props.w,backgroundColor:props.bg,color:props.color,marginBottom:props.mb}}>
            <div className='top'>
              <img src={props.icon} style={{ backgroundColor: props.iconColor, borderRadius: 8, padding: 8 }} />
              <div className='time'>
                {
                  props.calender != false && (
                    <>
                      <p>This week</p>
                      <img src={caret2} style={{ marginLeft: 7 }} />
                    </>
                  )
                }
              </div>
            </div>
            <div className='bottom'>
              <div className='left'>
                <span style={{color:(props.tagcolor)?props.tagcolor:props.color}}>{props.left.tag}</span>
                <div className='vol'>
                  <p style={{ marginRight: 7 }}>{props.left.data}</p>
                  {
                    props.left.percent != null && (
                        <span>{props.left.percent}</span>
                    )
                  }
                </div>
              </div>
              <div className='middle'>
              {
                props.middle != null && (
                      <div>
                            <span>{props.middle.tag}</span>
                            <p>{props.middle.data}</p>
                        </div>
                )
              }
              </div>
              <div className='right'>
                <span style={{color:props.color}}>{props.right.tag}</span>
                <div className='vol'>
                  <p style={{ marginRight: 7 }}>{props.right.data}</p>
                  {
                    props.right.percent != null && (
                        <span style={{color:props.percentColor}}>{props.right.percent}</span>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
    )
}

export default Card