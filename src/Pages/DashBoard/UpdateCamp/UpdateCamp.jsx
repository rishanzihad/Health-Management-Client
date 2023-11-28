import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateCamp = () => {

    const { handleSubmit, register,reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const camp = useLoaderData()
  
    const { name,organizers,participant,scheduledDate,scheduledTime,specializedServices,targetAudience ,healthcareProfessionals, comprehensiveDescription, fees, image, location, recipe, price, _id } = useLoaderData();
    const onSubmit = async (data) => {
      
        // image upload to imgbb and then get an url
      
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
            // now send the menu item data to the server with the image url
            const camp ={ name:data.name,
                organizers:data. organizers,
                participant:parseFloat(data.participant),
                scheduledDate:data.scheduledDate,
                scheduledTime:data.scheduledTime,
                specializedServices:data.specializedServices,
                targetAudience:data.targetAudience ,
                healthcareProfessionals:data.healthcareProfessionals,
                 comprehensiveDescription:data.comprehensiveDescription, 
                 fees:parseFloat(data.fees),
                  image:data.image,
                   location:data.location,
            }
              
         
            const campRes = await axiosSecure.patch(`/camps/${_id}`, camp);
            console.log(campRes.data)
            if(campRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        
        console.log( 'with image url', res.data);
    };
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Camp Name</span>
                    </label>
                    <input    defaultValue={name} required type="text" {...register('name', { required: true })} placeholder="Camp Name" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Organizer Name</span>
                    </label>
                    <input    defaultValue={organizers} required type="text" {...register('organizers', { required: true })} placeholder="Organizer" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Camp Image</span>
                    </label>
                    <input  {...register('image', { required: true })} type="file" className="file-input w-full" />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Fees</span>
                    </label>
                    <input    defaultValue={fees} required type="number" {...register('fees', { required: true })} placeholder="Fees" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Scheduled Date</span>
                    </label>
                    <input
                       defaultValue={scheduledDate}
                        required
                        type="date"
                        {...register('scheduledDate', { required: true })}
                        placeholder="Scheduled Date"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Scheduled Time</span>
                    </label>
                    <input
                      defaultValue={scheduledTime}
                        required
                        type="time"
                        {...register('scheduledTime', { required: true })}
                        placeholder="Scheduled Time"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Venue Location</span>
                    </label>
                    <input
                      defaultValue={location}
                        required
                        type="text"
                        {...register('location', { required: true })}
                        placeholder="Venue Location"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Participant</span>
                    </label>
                    <input
                    
                    defaultValue={participant}

                        required
                        type="number"
                        {...register('participant', { required: true })}
                        placeholder="Participant"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Specialized Services</span>
                    </label>
                    <input
                      defaultValue={specializedServices}
                        required
                        type="text"
                        {...register('specializedServices', { required: true })}
                        placeholder="Specialized Services"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Healthcare Professionals</span>
                    </label>
                    <input
                      defaultValue={healthcareProfessionals}
                        required
                        type="text"
                        {...register('healthcareProfessionals', { required: true })}
                        placeholder="Healthcare Professionals"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Target Audience (Age Range)</span>
                    </label>
                    <input
                      defaultValue={targetAudience}
                        required
                        type="text"
                        {...register('targetAudience', {
                            required: true,
                            pattern: /^\d{1,2}-\d{1,2}$/, // Allow one or two digits for each part of the range (e.g., "5-10")
                        })}
                        placeholder="Enter age range (e.g., 5-10)"
                        className="input input-bordered w-full"
                    />
                    {errors.targetAudience && (
                        <p className="text-red-500">Please enter a valid numeric age range (e.g., 5-10).</p>
                    )}
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Comprehensive Description</span>
                    </label>
                    <textarea
                        required
                        defaultValue={comprehensiveDescription}
                        {...register('comprehensiveDescription', { required: true })}
                        placeholder="Comprehensive Description"
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                <button className="btn w-full bg-green-500 text-white" type="submit">Update Camp</button>
            </form>
        </div>
    );
};

export default UpdateCamp;