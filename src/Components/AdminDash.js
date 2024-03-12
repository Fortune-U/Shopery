import '../Styles/admindash.css';
import block from '../Assets/block.png';
import stat from '../Assets/stat.png';
import handbag from '../Assets/handbag.png';
import canc from '../Assets/canc.png';
import AdminOrderItem from './AdminOrderItem';
import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement ,  Chart } from "chart.js";
Chart.register(CategoryScale , LinearScale , PointElement , LineElement);


export default function AdminDash () {
    return (
        <div className="ad-dash-wrp">

            <div className='ad-dash-tp1'>
                <div className="ad-dsh-blk1">
                    <main>
                        <p className='title'>Total Products</p>
                        <p className='num' >30,000</p>
                    </main>
                    <aside><img src={block} alt='' /></aside>
                </div>

                <div className="ad-dsh-blk2">
                    <main>
                        <p className='title'>Total Sales</p>
                        <p className='num' >120</p>
                    </main>
                    <aside><img src={stat} alt='' /></aside>
                </div>

                <div className="ad-dsh-blk3">
                    <main>
                        <p className='title'>Total Orders</p>
                        <p className='num' >138</p>
                    </main>
                    <aside><img src={handbag} alt='' /></aside>
                </div>

                <div className="ad-dsh-blk4">
                    <main>
                        <p className='title'>Cancelled Orders</p>
                        <p className='num' >18</p>
                    </main>
                    <aside><img src={canc} alt='' /></aside>
                </div>
            </div>

            <div className='ad-dsh-mid'>
                <div className='chart-title'>
                    <p>General Sales Activity</p>
                    <div className='time-frame'>
                        <p>14 days</p>
                        <p>Monthly</p>
                        <p>Yearly</p>
                    </div>
                </div>
            <Line
              datasetIdKey='id'
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    id: 1,
                    label: 'Yearly Sales Activity',
                    data: [10, 12, 15, 18, 20, 22, 25, 28, 24, 20, 18, 15],
                    borderColor: '#84D187', // Color of the line
                    backgroundColor: 'rgba(0, 0, 255, 0.2)', // Fill color under the line
                    pointBackgroundColor: '#00B207', // Color of the points
                    pointBorderColor: '#00B207', // Border color of the points
                    pointHoverBackgroundColor: '#2C742F', // Background color of the points on hover
                    pointHoverBorderColor: '#2C742F', // Border color of the points on 
                  },
                ],
              }}
                // options={...}
                // data={...}
                // {...props}
                />
            </div>

            <div className='admin-dash-low'>
                <div className='adl-tp'>
                    <p className='nw-od'>New Orders</p>
                    <p className='view-a'>View All</p>
                </div>

                <div>
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                    <AdminOrderItem />
                </div>

            </div>

        </div>
    )
}