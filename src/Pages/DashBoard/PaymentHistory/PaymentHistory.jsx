import  { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const PaymentHistory = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure =useAxiosSecure()
    const {data:payment=[]}=useQuery({
        queryKey:['payment',user.email],
        queryFn: async()=>{
            const res = await  axiosSecure.get(`payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text3-xl">Total Payments: {payment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.fees}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;