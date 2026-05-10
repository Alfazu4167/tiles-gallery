import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiEdit } from 'react-icons/bi';
import { MdUpdate } from 'react-icons/md';
import { toast } from 'react-toastify';

const UpdateUserProfile = () => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = async (data) => {
        const { name, photo } = data;
        await authClient.updateUser({
            name,
            image: photo
        })
        toast.success("Account Updated Successfully")
        document.getElementById('my_modal_1').close();
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn rounded-[100px] text-[#47dae7] border border-[#47dae7]" onClick={() => document.getElementById('my_modal_1').showModal()}><BiEdit></BiEdit> Update Your Profile</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box Max-w-24">
                    <h3 className="font-bold text-lg"> <MdUpdate></MdUpdate> Update Your Profile</h3>
                    <div className=" flex justify-center items-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <button className="btn mt-1 bg-[#47dae7] rounded-[100px]">Update</button>
                        </form>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_1').close()}>✕</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUserProfile;