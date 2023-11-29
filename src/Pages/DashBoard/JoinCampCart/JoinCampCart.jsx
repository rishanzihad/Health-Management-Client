import { FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const JoinCampCart = () => {
    const [cart, refetch] = useCart();
    const totalfees = cart.reduce((total, item) => total + parseFloat(item.fees), 0);
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)

    const { data: payment = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data
        }
    })



    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: ${totalfees}</h2>


            </div>
            <div className="overflow-x-auto">
                <table className="table   w-full">
                    {/* head */}
                    <thead>
                        <tr  >
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>

                            <th>Confirmation Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => {
                                const singlePayment = payment.find((status) => status.cartIds === item._id);
                                console.log(singlePayment)
                                return (
                                    <tr key={item._id}>

                                        <th>
                                            {index + 1}
                                        </th>
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
                                        <td>${item.fees}</td>
                                        <td>
                                            {singlePayment?.status ? (
                                                <>{singlePayment?.status}</>
                                            ) : (
                                                <Link to={`/dashboard/payment/${item._id}`}>
                                                    <button className="btn btn-sm bg-green-400 text-white">
                                                        Pay
                                                    </button>
                                                </Link>
                                            )}
                                        </td>

                                        <td>
                                            {singlePayment?.status? (<>{singlePayment?.status}</>):(<>Please Pay</>)
                                            }

                                        </td>
                                        <th>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn btn-ghost btn-lg">
                                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                            </button>
                                        </th>

                                    </tr>)

                            })


                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JoinCampCart;