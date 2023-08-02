import caret2 from '../icons/caret2.svg';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const Marketing = (props) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [19, 10, 5],
                backgroundColor: [
                    '#5570F1',
                    '#FFCC91',
                    '#97A5EB'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',

                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className='card marketing' style={{ marginRight:props.mr, width: props.w, marginBottom: props.mb,height:props.h }}>
            <div className='box'>
                <div className='top'>
                    <p>Marketing</p>
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
                <div className='variables'>
                    <div className='row'><div className='dot' style={{backgroundColor:'#5570F1'}}></div><p>Acquisition</p></div>
                    <div className='row'><div className='dot' style={{backgroundColor:'#97A5EB'}}></div><p>Purchase</p></div>
                    <div className='row'><div className='dot' style={{backgroundColor:'#FFCC91'}}></div><p>Retention</p></div>
                </div>
                <div className='flex-center'>
                    <div style={{ height: "220px", height: "220px", position: "relative", marginBottom: "5px" }}>
                        <Doughnut data={data} />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Marketing