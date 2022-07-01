import React from 'react';

const UpdateBill = ({ allBills, setUpdateBill, updateBill, setAllBills, loadBill, setLoadBill }) => {
    const { _id, name, email, phone, paid } = updateBill;
    const handleUpdate = id => {
        setUpdateBill(null)
    }
    return (
        <div>

            <input type="checkbox" id="update-bill" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">You Can Update Any Field!!</h3>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change name?</span>
                        </label>
                        <input type="text" value={name} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change email?</span>
                        </label>
                        <input type="email" value={email} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change Phone Number?</span>
                        </label>
                        <input type="number" value={phone} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change Amount?</span>
                        </label>
                        <input type="number" value={paid} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="modal-action">
                        <input type='submit' value="Update" onClick={() => handleUpdate(_id)}
                            className='btn btn-xs btn-primary' />
                        <label for="update-bill" class="btn btn-xs btn-warning">Undo</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBill;