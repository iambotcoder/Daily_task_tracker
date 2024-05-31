const data = [
    {
        date: "2024-03-01",
        time_in: "08:46",
        time_out: "18:07",
        work_carried_out: "Implemented CRUD API for API testing using Tokens",
    },
    {
        date: "2024-03-02",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-03",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-04",
        time_in: "08:37",
        time_out: "18:10",
        work_carried_out: "Developed a module named 'Research Paper Module' for the Asset Tool",
    },
    {
        date: "2024-03-05",
        time_in: "09:01",
        time_out: "18:04",
        work_carried_out: "Integrated 'Research Paper Module'",
    },
    {
        date: "2024-03-06",
        time_in: "08:52",
        time_out: "18:13",
        work_carried_out: "Designed and developed UI for 'Research Paper Module'",
    },
    {
        date: "2024-03-07",
        time_in: "08:43",
        time_out: "18:06",
        work_carried_out: "Developed API to interact with 'Research Paper Module'",
    },
    {
        date: "2024-03-08",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Public Holiday (Maha Shivaratri)",
    },
    {
        date: "2024-03-09",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-10",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-11",
        time_in: "08:41",
        time_out: "18:05",
        work_carried_out: "Module Demonstration and implementing suggested changes in the module",
    },
    {
        date: "2024-03-12",
        time_in: "08:27",
        time_out: "17:35",
        work_carried_out: "Implemented Search and Sorting Functionality for 'Research Paper Module'",
    },
    {
        date: "2024-03-13",
        time_in: "09:00",
        time_out: "18:35",
        work_carried_out: "Installed and set up Environment for the Asset Tool",
    },
    {
        date: "2024-03-14",
        time_in: "08:55",
        time_out: "18:41",
        work_carried_out: "Learned the workings of the Asset Tool to develop a new module",
    },
    {
        date: "2024-03-15",
        time_in: "08:53",
        time_out: "17:31",
        work_carried_out: "Implemented Audit Settings page",
    },
    {
        date: "2024-03-16",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-17",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-18",
        time_in: "08:56",
        time_out: "17:32",
        work_carried_out: "Worked on AJAX and API",
    },
    {
        date: "2024-03-19",
        time_in: "08:25",
        time_out: "17:03",
        work_carried_out: "Integrated Asset Network Scanner in Audit module",
    },
    {
        date: "2024-03-20",
        time_in: "08:14",
        time_out: "17:10",
        work_carried_out: "Revised React",
    },
    {
        date: "2024-03-21",
        time_in: "08:34",
        time_out: "17:33",
        work_carried_out: "Revised Node",
    },
    {
        date: "2024-03-22",
        time_in: "09:15",
        time_out: "18:49",
        work_carried_out: "Module Demonstration, Testing, and Integration of Module",
    },
    {
        date: "2024-03-23",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-24",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Weekend",
    },
    {
        date: "2024-03-25",
        time_in: "08:58",
        time_out: "18:16",
        work_carried_out: "Developed UI to interact with Asset Network Scanner tool",
    },
    {
        date: "2024-03-26",
        time_in: "08:40",
        time_out: "18:05",
        work_carried_out: "Module Demonstration and implemented suggested changes and modifications",
    },
    {
        date: "2024-03-27",
        time_in: "09:22",
        time_out: "18:05",
        work_carried_out: "Added a new feature named 'Initiate Audit' in the Audit Module",
    },
    {
        date: "2024-03-28",
        time_in: "08:59",
        time_out: "17:31",
        work_carried_out: "Feature demonstration and implemented modifications in the feature",
    },
    {
        date: "2024-03-29",
        time_in: "-",
        time_out: "-",
        work_carried_out: "Public Holiday (Good Friday)",
    },
    {
        date: "2024-03-30",
        time_in: "07:55",
        time_out: "17:00",
        work_carried_out: "Revised React and Python",
    },
];
const date_template =
    [
        {
            "date": "2024-03-01",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-02",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-03",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-04",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-05",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-06",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-07",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-08",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-09",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-10",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-11",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-12",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-13",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-14",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-15",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-16",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-17",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-18",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-19",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-20",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-21",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-22",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-23",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-24",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-25",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-26",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-27",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-28",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-29",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        },
        {
            "date": "2024-03-30",
            "time_in": "",
            "time_out": "",
            "work_carried_out": ""
        }
    ]

export { data, date_template };
