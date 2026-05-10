import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateUserProfile = () => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const  onSubmit = async (data) => {
       const {name, photo} = data;
       await authClient.updateUser({
        name,
        image: photo
       })
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className=" flex justify-center items-center">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 ">
                                <label className="label">Name</label>
                                <input type="text" className="input w-full"
                                    {...register("name")}
                                    placeholder="Name" />
                                <label className="label">Photo Url</label>
                                <input type="text" className="input"
                                    {...register("photo")}
                                    placeholder="Photo Url" />
                            </fieldset>
                            <button className="btn flex justify-end">Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUserProfile;