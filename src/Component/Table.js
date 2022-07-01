import React, { useState } from 'react';
import AddbillModal from './AddbillModal';
import TableRow from './TableRow';

const Table = () => {

    const [openModal, setOpenModal] = useState(false);
    const [loadBill, setLoadBill] = useState(0);


    return (
        <div>
            <div className='flex justify-between items-center px-8 bg-neutral mt-8'>
                <div className='flex flex-row justify-between items-center gap-x-28'>
                    <div>
                        <h2 className='font-bold text-lg text-teal-500'>Billing</h2>
                    </div>
                    <div>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm" />
                        <button className='btn btn-xs btn-success mx-3'>Search</button>
                    </div>
                </div>
                <div>

                    <label onClick={() => setOpenModal(true)} for="AddBill" class="btn btn-sm btn-accent">Add New</label>
                </div>
            </div>
            <TableRow
                loadBill={loadBill}
            ></TableRow>
            {
                openModal && <AddbillModal
                    setOpenModal={setOpenModal}
                    setLoadBill={setLoadBill}
                    loadBill={loadBill}
                    openModal={openModal}
                ></AddbillModal>
            }

        </div>
    );
};

export default Table;