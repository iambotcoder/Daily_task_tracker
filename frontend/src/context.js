import React, { createContext, useState } from 'react';
import { data, date_template } from "./appData"
import { Component } from 'react';

const WorkContext = createContext();
// console.log(data);
const WorkProvider = ({ children }) => {
    const [workData, setWorkData] = useState(data);
    const [selectedDay, setSelectedDay] = useState({
        date: "",
        time_in: "",
        time_out: "",
        work_carried_out: "",
    });

    const handleDayChange = (obj) => {
        setSelectedDay(obj);
    }
    const getRecord = (date) => {
        const record = workData.find(item => item['date'] === date);
        // console.log(record);
        return record;
    }
    const updateWorkData = () => {
        const date = selectedDay['date'];
        const record = workData.find(index => index['date'] === date);
        const index = workData.findIndex(item =>
            Object.keys(date).every(key => item['date'] === date)
        );

        const newWorkData = [...workData]
        newWorkData[index] = { ...workData[index], ...selectedDay }
        setWorkData(newWorkData)
        // console.log(date, index, record, selectedDay, newWorkData);
    }
    const onClearAll = () => {
        // const newWorkData = [];
        setWorkData(date_template);
        // console.log(workData);
    }
    const onClear = (index) => {
        const newWorkData = [...workData];
        const temp = {
            date: workData[index]['date'],
            time_in: "",
            time_out: "",
            work_carried_out: "",
        };
        newWorkData[index] = { ...workData[index], ...temp }
        setWorkData(newWorkData)
    }
    const onEdit = (id) => {
        const record = getRecord(workData[id]['date']);
        // console.log(workData[id]['date']);
        setSelectedDay(record)
        // updateWorkData(record)

    }

    return (
        <div>
            <WorkContext.Provider
                value={{ workData, updateWorkData, setSelectedDay, selectedDay, onEdit, getRecord, onClear, onClearAll }}>
                {children}
            </WorkContext.Provider>
        </div>
    )

}
const WorkConsumer = WorkContext.Consumer;
export { WorkProvider, WorkConsumer, WorkContext }
