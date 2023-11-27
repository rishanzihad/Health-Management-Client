

import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';


import { Link } from 'react-router-dom';
import useCamp from '../../Hooks/useCamp';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const ManageCamps = () => {
    const [camps, loading, refetch] = useCamp();
   
    const axiosSecure =useAxiosSecure()
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/camps/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success(`${item.name} has Been Deleted`);
                }
            }
        });
    }
    const handleUpdateItem =(item)=>{

    }
    return (
        <div>
           
            <div>
                <div className="overflow-x-auto w-ful">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                  #
                                </th>
                                <th>Image</th>
                                <th>Camp Name</th>
                                <th>Price</th>
                                <th> Update</th>
                                <th> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            camps.map((item,index)=>  <tr key={item._id}>
                                
                                <td>
                                {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                {item.name}
                                </td>
                                <td >${item.fees}</td>
                                <td>
                                   <Link to={`/dashboard/updateCamp/${item._id}`}>
                                       <button
                                       onClick={() => handleUpdateItem(item)}
                                       className="btn btn-md btn-ghost bg-green-500">
                                       <FaEdit className="text-white 
                                     "></FaEdit>
                                       </button>
                                    </Link>
                                </td>
                                <td>
                                <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                           </tr>  )
                            }
                                                
                        </tbody>
                     
                    

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCamps;