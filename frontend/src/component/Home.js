import React, { Component, useContext, useEffect, useState } from 'react';
import { WorkConsumer, WorkContext, WorkProvider } from '../context';
import { Table, button } from 'react-bootstrap';


const Home = () => {
    const { selectedDay, setSelectedDay, updateWorkData } = useContext(WorkContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        // console.log(selectedDay);
        setSelectedDay(prevState => ({
            ...prevState,
            [name]: value
        }));
        // console.log(selectedDay);
        // updateWorkData()
        // useEffect(() => {
        //     // This will run every time selectedDay changes
        //     console.log("Selected day has changed:", selectedDay);
        //     // You can perform any action that depends on the updated selectedDay here
        // }, [selectedDay]);
    };

    return (
        <WorkConsumer>
            {({ workData, selectedDay, onEdit, updateWorkData, onClear, onClearAll }) => (
                <div className="container-fluid mt-4 text-nowrap">
                    <h1>Work Logs</h1>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Date</th>
                                <th>Time In</th>
                                <th>Time Out</th>
                                <th>Work Carried Out</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="form-control" name="date" value={selectedDay['date']} type="date" onChange={handleChange} /></td>
                                <td><input className="form-control" name="time_in" value={selectedDay['time_in']} type="time" onChange={handleChange} /></td>
                                <td><input className="form-control" name="time_out" value={selectedDay['time_out']} type="time" onChange={handleChange} /></td>
                                <td><textarea className="form-control fit-textarea" name="work_carried_out" onChange={handleChange} value={selectedDay['work_carried_out']}></textarea></td>
                                <td>
                                    <button className="btn btn-success mr-2" onChange={handleChange} onClick={updateWorkData}>
                                        Update
                                    </button>
                                    <button className="btn btn-success mr-2" onChange={handleChange} onClick={onClearAll}>clear All</button>
                                </td>
                            </tr>
                            {workData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data['date']}</td>
                                    <td>{data['time_in']}</td>
                                    <td>{data['time_out']}</td>
                                    <td>{data['work_carried_out']}</td>
                                    <td><button className="btn btn-primary mr-2" onClick={() => { onEdit(index) }}>Edit</button>
                                        <button className="btn btn-danger mr-2" onClick={() => { onClear(index) }}>clear</button></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </WorkConsumer>
    );
};

export default Home;