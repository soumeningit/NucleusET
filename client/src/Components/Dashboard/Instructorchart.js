import React, { useState } from 'react'
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)
function Instructorchart({ courses }) {
    // console.log("Courses Inside Instructor Chart : ", courses)
    const [currChart, setCurrChart] = useState("students")
    function generateColour(numOfColours) {
        let colours = [];
        for (let i = 0; i < numOfColours; i++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            colours.push(`rgb(${r}, ${g}, ${b})`)
        }
        return colours;
    }
    // Data for the chart displaying student information
    const chartDataStudents = {
        labels: courses?.enrolledCourseData?.map((course) => course.courseName),
        datasets: [
            {
                data: courses?.enrolledCourseData?.map((course) => course.noOfStudentsEnrolled),
                backgroundColor: generateColour(courses?.enrolledCourseData?.length),
            },
        ],
    }

    // Data for the chart displaying income information
    const chartIncomeData = {
        labels: courses?.enrolledCourseData?.map((course) => course.courseName),
        datasets: [
            {
                data: courses?.enrolledCourseData?.map((course) => course.totalAmount),
                backgroundColor: generateColour(courses?.enrolledCourseData?.length),
            },
        ],
    }

    // Options for the chart
    const options = {
        maintainAspectRatio: false,
    }
    return (

        <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
            <p className="text-lg font-bold text-richblack-5">Visualize</p>
            <div className="space-x-4 font-semibold">
                {/* Button to switch to the "students" chart */}
                <button
                    onClick={() => setCurrChart("students")}
                    className={`rounded-sm p-1 px-3 transition-all duration-200 ${currChart === "students"
                        ? "bg-richblack-700 text-yellow-50"
                        : "text-yellow-400"
                        }`}
                >
                    Students
                </button>
                {/* Button to switch to the "income" chart */}
                <button
                    onClick={() => setCurrChart("income")}
                    className={`rounded-sm p-1 px-3 transition-all duration-200 ${currChart === "income"
                        ? "bg-richblack-700 text-yellow-50"
                        : "text-yellow-400"
                        }`}
                >
                    Income
                </button>
            </div>
            <div className="relative mx-auto aspect-square h-full w-full">
                {/* Render the Pie chart based on the selected chart */}
                <Pie
                    data={currChart === "students" ? chartDataStudents : chartIncomeData}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Instructorchart