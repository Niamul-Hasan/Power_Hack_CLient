import React, { useState } from 'react';
import { useQuery } from 'react-query';

const TableRow = ({ loadBill }) => {
    const [pageNumber, setPageNumber] = useState(0);

    const { data: Bills, isLoading, refetch } = useQuery(['bills', loadBill], () => fetch('http://localhost:5000/api/billing-list', {
        method: 'GET'
    }).then(res => res.json()));

    let loading = " ";
    if (isLoading) {
        return loading = "Bill is generating..."
    }
    const allBills = Bills.data;
    console.log(allBills);
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
                                <th>{isLoading ? { loading } : index + 1}</th>
                                <td>{bill.name}</td>
                                <td>{bill.email}</td>
                                <td>{bill.phone}</td>
                                <td>{bill.paid}</td>
                                <td>
                                    <button className='btn btn-xs btn-primary'>Edit</button> |
                                    <button className='btn btn-xs btn-error ml-2'>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className='flex flex-row gap-5 justify-end mt-5 mr-10'>
                {[...Array(5).keys()].map(number => <div onClick={() => setPageNumber(number)}
                    className={`border-2 rounded-full border-teal-500 p-2 cursor-pointer ${pageNumber === number ? "bg-teal-500" : ""}`}
                >{number + 1}</div>)}
            </div>

        </div>
    );
};

export default TableRow;