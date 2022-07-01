import React from 'react';
import HookForm from './HookForm';

const AddbillModal = ({ setOpenModal, setLoadBill, loadBill }) => {
    const handleAddBill = () => {
        setLoadBill(loadBill + 1);
        setOpenModal(false);

    }
    return (
        <div>


            <input type="checkbox" id="AddBill" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-center">All Informations Are Required !!</h3>
                    <HookForm
                        handleAddBill={handleAddBill}
                    ></HookForm>

                    <label for="AddBill" class="btn btn-sm mt-3">Skip</label>
                </div>
            </div>
        </div>
    );
};

export default AddbillModal;