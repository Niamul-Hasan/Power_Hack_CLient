import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import UpdateBill from './UpdateBill';

const TableRow = ({ loadBill, setTotalPaid, setLoadBill }) => {
    const [allBills, setAllBills] = useState([]);
    const [totalBill, setTotalBill] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [deleteBill, setDeleteBill] = useState(null);
    const [updateBill, setUpdateBill] = useState(null);
    const limit = 10;

    useEffect(() => {
        fetch(`http://localhost:5000/api/billing-list?limit=${limit}&pageNumber=${pageNumber}`, {
            method: 'GET'
        }).then(res => res.json()).then(data => {

            console.log(data);
            setAllBills(data.data);
            setTotalBill(data.billing);
            setPageCount(Math.ceil(data.count / limit));

        })


    }, [pageNumber, loadBill, setAllBills]);
    let sum = 0;
    totalBill.map(item => sum = sum + parseInt(item.paid))
    console.log(sum);
    setTotalPaid(sum);


    return (
        <div>

            <div class="overflow-x-auto mt-5">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBills.map((bill, index) => <tr key={bill._id}>
                                <th>{index + 1}</th>
                                <td>{bill.name}</td>
                                <td>{bill.email}</td>
                                <td>{bill.phone}</td>
                                <td>${bill.paid}</td>
                                <td>
                                    <label onClick={() => setUpdateBill(bill)} for="update-bill"
                                        class="btn btn-xs btn-primary mr-2">Edit</label> |
                                    <label onClick={() => setDeleteBill(bill)} for="delete-bill" class="btn btn-xs btn-error ml-2">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className='flex flex-row gap-5 justify-end mt-5 mr-10'>
                {[...Array(pageCount).keys()].map(number => <div onClick={() => setPageNumber(number)}
                    className={`border-2 rounded-full border-teal-500 p-2 cursor-pointer ${pageNumber === number ? "bg-teal-500" : ""}`}
                >{number + 1}</div>)}
            </div>

            {
                deleteBill && <DeleteModal
                    deleteBill={deleteBill}
                    setDeleteBill={setDeleteBill}
                    allBills={allBills}
                    setAllBills={setAllBills}
                    loadBill={loadBill}
                    setLoadBill={setLoadBill}
                ></DeleteModal>
            }

            {
                updateBill && <UpdateBill
                    updateBill={updateBill}
                    setUpdateBill={setUpdateBill}
                    allBills={allBills}
                    setAllBills={setAllBills}
                    loadBill={loadBill}
                    setLoadBill={setLoadBill}
                ></UpdateBill>
            }


        </div>
    );
};

export default TableRow;