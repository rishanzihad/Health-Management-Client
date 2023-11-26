import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const ContactUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: contact =[],refetch}=useQuery({
     queryKey:['contact'],
     queryFn: async ()=>{
         const res =await axiosSecure.get('/contact',)
         return res.data
     } 
    })
    return (
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Users</h2>
            <h2 className="text-3xl">Total Users: {contact.length}</h2>
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