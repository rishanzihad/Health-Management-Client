import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddHealthTips = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { handleSubmit, register,reset, formState: { errors } } = useForm();
    const axiosSecure =useAxiosSecure()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res =await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type':"multipart/form-data"
            }
           })
           if(res.data.success){
            const formData = {
             
                organizers:data.organizers,
                name: data.name,
                image: res.data.data.display_url,
                author:data.author,
                source:data.source,
               
               
                description: data.description,
            };
            console.log(formData)
            const campRes =await axiosSecure.post('/camps',formData)
        if(campRes.data.insertedId){
            reset()
            toast.success(`${data.name} is added to the HealthTips Collection`)
        }
        }
        console.log(res.data)
    };
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Camp Name</span>
                    </label>
                    <input required type="text" {...register('name', { required: true })} placeholder="Camp Name" className="input input-bordered w-full " />
                </div>
               
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Health Tips Image</span>
                    </label>
                    <input required {...register('image', { required: true })} type="file" className="file-input w-full" />
                </div>

               

              

               

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input
                        required
                        type="text"
                        {...register('author', { required: true })}
                        placeholder="Author Name"
                        className="input input-bordered w-full"
                    />
                </div>
               

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Source</span>
                    </label>
                    <input
                        required
                        type="text"
                        {...register('source', { required: true })}
                        placeholder="source"
                        className="input input-bordered w-full"
                    />
                </div>

                

             

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text"> Description</span>
                    </label>
                    <textarea
                        required
                        {...register('description', { required: true })}
                        placeholder="Description"
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                <button className="btn bg-green-500 text-white" type="submit">Add Health Tips</button>
            </form>
        </div>
    );
};

export default AddHealthTips;


