import React from 'react';

const DeleteModal = ({ allBills, setDeleteBill, deleteBill, setAllBills, loadBill, setLoadBill }) => {
    const { _id, name } = deleteBill;

    const handleDelete = (id) => {
        const url = `https://quiet-peak-88079.herokuapp.com/api/delete-billing/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(allBills)
        })
            .then(res => res.json())
            .then(remaingData => {
                const remaining = allBills.filter(bills => bills._id !== id);
                setAllBills(remaining);
                setLoadBill(loadBill + 1)
                setDeleteBill(null);
            })

    }

    return (
        <div>


            <input type="checkbox" id="delete-bill" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-2xl text-error">Are You Sure to delete {name}!</h3>
                    <p class="py-4 text-xl">Once deleted item can never be retrived!!!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)}
                            className='btn btn-xs btn-error ml-2'>Delete</button>
                        <label for="delete-bill" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;