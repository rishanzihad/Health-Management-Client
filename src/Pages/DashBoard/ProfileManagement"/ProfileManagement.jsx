import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ProfileManagement = () => {

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { handleSubmit, register,reset, formState: { errors } } = useForm();
  const { data: participantData, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const email = user.email;

      const res = await axiosSecure.get(`/users/${email}`);
      return res.data;
    },
  });

  const [editMode, setEditMode] = useState(false);


  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });

    
       if(res.data.success){
      
           
     const updateUserData ={
             image: res.data.data.display_url,
              name:data.name,
        }
        const email = user.email;
const updateUserUrl = `https://medical-camp-server-two.vercel.app/users/${email}`;



        const updateRes =await axiosSecure.patch(updateUserUrl,updateUserData)
        if(updateRes.data.modifiedCount > 0){
            reset()
            Swal.fire({
                position:'top-end',
                title: `${data.name} is Update Profile SuccessFul`,
               showConfirmButton: false,
               timer: 1500
              })
        }
       }
  

    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className=''>
      <h1 className='text-2xl text-center font-bold mb-5'>My Profile</h1>
      <div className='flex-row gap-8 md:flex p-4'>
        <div className='md:w-1/4 text-center'>
          <img className='w-20 mx-auto md:w-full rounded-full mb-2' src={participantData?.image} alt='' />
          <div>
      {
        editMode? (
            <div className="form-control w-full my-6">
            <label  className='block cursor-pointer'>
            <span className='text-blue-500  btn'>{ 'Upload Photo'}</span>
            <input {...register('image', )} type='file'        className='hidden file-input' />
          </label>
           
        </div>
            
        ):''
       }
         </div>
          <button className='btn bg-orange-300 text-white mt-3' onClick={handleEditProfile}>
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        <div className=' w-full mt-10 '>
          
          {editMode ? (
             <div className="form-control w-full my-6">
             <label className="label">
                 <span className="label-text">Name</span>
             </label>
             <input defaultValue={participantData?.name}  type="text" {...register('name', )} placeholder="Name" className="input input-bordered w-full " />
         </div>
             
            
          ) : (
            <h1  className='text-xl text-white  font-bold'>Full name:{participantData?.name}</h1>

          )}
          {editMode ? (
           <div>
             <h1>Email Address (Email Address cannot be changed)</h1>
            <h1 className='border-white py-3  w-full input mt-4 p-1'> {participantData?.email}</h1>
           </div>
          ) : (
            <h1 className='text-xl text-white font-bold mt-5'>Email Address: {participantData?.email}</h1>
          )}

        </div>
      </div>
      {editMode && (
        <div className='text-center'>
          <button type='submit' className='btn bg-green-500 text-white mt-3' >
            Save Profile
          </button>
        </div>
      )}
    </div>
    </form>
  );
};

export default ProfileManagement;