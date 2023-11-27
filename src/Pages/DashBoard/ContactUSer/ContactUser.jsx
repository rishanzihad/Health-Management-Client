import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const ContactUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: contact =[],refetch}=useQuery({
     queryKey:['contact'],
     queryFn: async ()=>{
         const res =await axiosSecure.get('/contact',)
         return res.data
     } 
    })

    const handleDeleteContact = cont => {
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

                axiosSecure.delete(`/contact/${cont._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                           toast.success(`${cont.message} is Deleted`)
                        }
                    })
            }
        });
    }
    return (
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Contact</h2>
            <h2 className="text-3xl">Total Contact Information: {contact.length}</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                       
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((cont, index) => <tr key={cont._id}>
                            <th>{index + 1}</th>
                            <td>{cont.name}</td>
                            <td>{cont.email}</td>
                            <td>{cont.message}</td>
                           <td>
                            <button
                                        onClick={() => handleDeleteContact(cont)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ContactUser;