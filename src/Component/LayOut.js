import React from 'react';
import Table from './Table';

const LayOut = () => {
    return (
        <div>
            <div className="bg-neutral flex justify-between items-center px-12">
                <div><h1 className="text-accent text-4xl text-center font-bold">Power Hack</h1></div>
                <div>
                    <button className="btn btn-warning btn-sm">click me!</button>
                </div>
            </div>
            <Table></Table>

        </div>
    );
};

export default LayOut;