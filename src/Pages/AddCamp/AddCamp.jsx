import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCamp = () => {
    const axiosPublic = useAxiosPublic();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };

        // Include all the form data
        const formData = {
            name: data.name,
            image: imageFile,
            fees: data.fees,
            scheduledDate: data.scheduledDate,
            scheduledTime: data.scheduledTime,
            location: data.location,
            specializedServices: data.specializedServices,
            healthcareProfessionals: data.healthcareProfessionals,
            targetAudience: data.targetAudience,
            comprehensiveDescription: data.comprehensiveDescription,
        };

        console.log(formData);

        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        });

        // Handle the response as needed
        console.log(res.data);
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
                        <span className="label-text">Camp Image</span>
                    </label>
                    <input required {...register('image', { required: true })} type="file" className="file-input w-full" />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Fees</span>
                    </label>
                    <input required type="number" {...register('fees', { required: true })} placeholder="Fees" className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Scheduled Date</span>
                    </label>
                    <input
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
                        required
                        type="text"
                        {...register('location', { required: true })}
                        placeholder="Venue Location"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Specialized Services</span>
                    </label>
                    <input
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
                        {...register('comprehensiveDescription', { required: true })}
                        placeholder="Comprehensive Description"
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                <button className="btn bg-green-500 text-white" type="submit">Add Camp</button>
            </form>
        </div>
    );
};

export default AddCamp;
