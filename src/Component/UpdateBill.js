import React, { useRef } from 'react';

const UpdateBill = ({ allBills, setUpdateBill, updateBill, setAllBills, loadBill, setLoadBill }) => {
    const { _id, name, email, phone, paid } = updateBill;
    const userRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const paidRef = useRef();


    const handleUpdate = (id) => {
        const user = userRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const paid = paidRef.current.value;

        const updateBill = { name: user, email, phone, paid };

        fetch(`http://localhost:5000/api/updating-billing/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateBill)
        }).then(res => res.json()).then(data => {
            console.log(data);
            setLoadBill(loadBill + 1);
            setUpdateBill(null);
        })

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
                        <input type="text" ref={userRef} defaultValue={name} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change email?</span>
                        </label>
                        <input type="email" ref={emailRef} defaultValue={email} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change Phone Number?</span>
                        </label>
                        <input type="number" ref={phoneRef} defaultValue={phone} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Change Amount?</span>
                        </label>
                        <input type="number" ref={paidRef} defaultValue={paid} class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                    <div class="modal-action">
                        <input type='submit' value="Update" onClick={() => handleUpdate(_id)}
                            className='btn btn-xs btn-primary' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBill;