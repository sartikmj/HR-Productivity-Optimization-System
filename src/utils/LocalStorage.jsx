// localStorage.clear();

const employee = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design Homepage UI",
                "taskDescription": "Create and refine the homepage layout based on Figma designs.",
                "taskDate": "2025-03-25",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests for Login Module",
                "taskDescription": "Ensure the login functionality is properly covered with unit tests.",
                "taskDate": "2025-03-26",
                "category": "Testing"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Research React 18 Features",
                "taskDescription": "Analyze the new features of React 18 and document the migration steps.",
                "taskDate": "2025-03-25",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update API Documentation",
                "taskDescription": "Ensure API documentation is up to date with the latest endpoints.",
                "taskDate": "2025-03-26",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ishaan",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Fix Login Authentication Issue",
                "taskDescription": "Resolve the issue where users cannot log in after a session timeout.",
                "taskDate": "2025-03-25",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Improve the performance of slow queries in the user service.",
                "taskDate": "2025-03-26",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Kavya",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement Two-Factor Authentication",
                "taskDescription": "Add an extra security layer for user login.",
                "taskDate": "2025-03-25",
                "category": "Security"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Refactor Payment Processing Module",
                "taskDescription": "Improve maintainability and performance of the payment system.",
                "taskDate": "2025-03-26",
                "category": "Development"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Ananya",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare Project Roadmap",
                "taskDescription": "Create a roadmap detailing upcoming features and timelines.",
                "taskDate": "2025-03-25",
                "category": "Planning"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Develop New User Dashboard",
                "taskDescription": "Implement a responsive dashboard for users to manage their profiles.",
                "taskDate": "2025-03-26",
                "category": "Development"
            }
        ]
    }
];



const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

//function to set Local storage , exporting it as well as

export const setLocalStorage = () => {
    //method used to store data in local storage of browser
    localStorage.setItem('employees',JSON.stringify(employee)) //'name of property' , 'data' 
    //JSON.stringify() , converts  Javascript Object to JSON string.

    localStorage.setItem('admin',JSON.stringify(admin))
}


//function to get Local Storage , exporting it as well as

export const getLocalStorage = () => {
    // const data = localStorage.getItem('employees') //employees is the data we stored into as property
    // console.log(JSON.parse(data)) // JSON.parse() convert data from string into object , so we will get data on console in form of Array 

    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}