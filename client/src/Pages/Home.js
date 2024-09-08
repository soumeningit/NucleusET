import React, { useEffect, useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import bgImg from "../assets/hero-bg.png"
import Card from '../Components/Home/Card';
import img1 from '../assets/statistics1.png'
import img2 from '../assets/statistics2.png'
import img3 from '../assets/statistics3.png'
import somoneCodingImage from '../assets/somoneCoding.webp'
import CTAButton from '../Components/Home/CTAButton';
import CodeBlocks from '../Components/Home/CodeBlocks';
import HighlightText from '../Components/Home/HighlightText';
import logo1 from '../assets/Logo1.svg'
import logo2 from '../assets/Logo2.svg'
import logo3 from '../assets/Logo3.svg'
import logo4 from '../assets/Logo4.svg'
import reading from '../assets/reading.jpg'
import instructor from '../assets/instructor.jpg'
import FAQSection from '../Components/Home/FAQItem';
import CardItem from '../Components/Home/CardItem';
import Footer from './Footer';
import { getAllCourses } from '../service/CourseAPI';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const logos = [
        { img: logo1, number: "Leadership", text: "Fully committed to the success company" },
        { img: logo2, number: "Leadership", text: "Fully committed to the success company" },
        { img: logo3, number: "Leadership", text: "Fully committed to the success company" },
        { img: logo4, number: "Leadership", text: "Fully committed to the success company" },
    ];

    const [text] = useTypewriter({
        words: ['PRACTICAL', 'AFFORDABLE', 'EASY TO LEARN'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 200,
    })

    const [allCourses, setAllCourses] = useState([]);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getAllCourses();
                console.log("Response in home page : ", response);
                setAllCourses(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCourses();
    }, [token])

    // console.log("All courses : ", allCourses);

    return (
        <div className='relative flex flex-col overflow-hidden bg-pure-greys-5 font-inter'>
            <section className='flex justify-evenly mt-4 gap-x-6 mx-auto'>
                <div className='w-[45%]'>
                    <p className='p-4 font-bold text-4xl w-full'>
                        Stay Ahead Of The Curve With Our
                        <span className='flex text-pink-200'>
                            <FaLessThan className='text-4xl mt-1' /> {text} <Cursor cursorColor='red' className='text-4xl font-bold' /> <FaGreaterThan className=' text-4xl mt-1' />
                        </span>
                        Courses
                    </p>
                    <p className='font-medium text-lg'>
                        Nucleous is your one-stop-shop for upscaling. Get maximum value for time
                        and resources you invest, with job-ready courses & high-technology,
                        available at the lowest cost.
                    </p>
                    <div className='group bg-blue-800 text-blue-5 rounded-md transition-all duration-200 hover:scale-95 w-fit mt-16'>
                        <button className='px-4 py-2 transition-all duration-200 group-hover:bg-blue-900'>Explore Courses</button>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <img src={bgImg} alt="" />
                </div>

            </section>

            <section className='w-full flex justify-evenly gap-x-4 m-6'>
                <Card img={img1} number={"55%"} text={"Average Salary Hike"} />
                <Card img={img2} number={"600+"} text={"instructor"} />
                <Card img={img3} number={"Students"} text={"120000"} />
                <Card img={img1} number={"55%"} text={"Average Salary Hike"} />
            </section>

            <section className="mt-16 flex mx-auto justify-between">
                <div className='flex-col w-[35%] gap-y-24'>
                    <h2 className='text-4xl'>
                        Where
                        <span className="px-1 bg-gradient-to-r  from-[#b7648b] via-[#c4586c] to-[#e90e66] text-transparent bg-clip-text">
                            Education
                        </span>
                        Exceeds Expectations
                    </h2>
                    <p className='text-lg font-medium py-4'>
                        We are transforming your path to launching your career by offering programs that provide the guidance of expert educators.
                    </p>
                    <div className='flex flex-row mt-8 gap-8'>
                        <CTAButton text={"Know More"} active={true} linkto={"/signUp"} />
                        <CTAButton text={"Book Demo"} active={false} linkto={"/login"} />
                    </div>
                </div>
                <div className='w-[45%] m-4 object-fit'>
                    <img src={somoneCodingImage} alt="" className='rounded-md h-[400px] w-[450px] shadow-richblack-5' />
                </div>

            </section>

            <section className='flex mt-8 ml-6'>
                <CodeBlocks
                    // position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock your
                            <HighlightText text={"coding potential"} /> with our online
                            courses.
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                    }
                    btn1={{
                        text: "Try it Yourself",
                        linkto: "/signup",
                        active: true,
                    }}
                    btn2={{
                        text: "Learn More",
                        linkto: "/signup",
                        active: false,
                    }}
                    codeColor={"text-blue-400"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                />
            </section>

            <section className='flex flex-col mt-10 w-full items-center gap-8'>
                <div className='flex flex-row justify-betwen items-center mx-auto gap-x-8 mt-4'>
                    <div className=''>
                        Acquire the expertise <HighlightText text={"necessary to thrive in a sought-after"} /> career field.
                    </div>

                    <div className='flex flex-col items-center justify-center mt-4 max-w-lg'>
                        <p className='text-md font-medium mt-4 mb-4 '>
                            Today, the modern Nucleus sets its own standards.
                            Being a competitive specialist now demands more than just professional skills.
                        </p>
                        <CTAButton text={"Know More"} linkto={"/signup"} active={true} />
                    </div>
                </div>

                <div className='flex items-center justify-center sm-16 w-full gap-x-4'>
                    <div className='w-full h-11/12 flex flex-col mx-auto justify-center gap-2 '>
                        <div className='max-w-[45%] flex flex-col mx-auto justify-center gap-2 '>
                            {logos.map((logo, index) => (
                                <CardItem key={index} img={logo.img} number={logo.number} text={logo.text} />
                            ))}
                        </div>
                    </div>
                    <div className='m-10 justify-center items-center max-w-[45%] '>
                        <img src={reading} alt="" loading='lazy' className='object-fill rounded-md ' />
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="mx-auto px-4 py-8">
                <h2 className='font-bold text-xl'>All the skills you need in one place</h2>
                <p className='text-md'>From critical skills to technical topics, Udemy supports your professional development.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                    {
                        allCourses?.slice(0, 6)?.map((course, indx) => {
                            return (
                                <div key={indx} className="bg-white rounded-lg shadow-md p-4">
                                    <img src={course?.thumbnail} alt={course?.courseName} className="w-full h-40 object-cover rounded-lg mb-4" />
                                    <span className="text-lg font-bold flex felx-row">
                                        <img src={course?.instructor?.image} alt="instructor-image" className='h-6 w-6 rounded-full mr-2' /> {course?.instructor?.firstName} {course?.instructor?.lastName}
                                    </span>
                                    <h2 className="text-lg font-bold">{course?.courseName}</h2>
                                    <p className="text-md">{course?.description}</p>
                                    <p>Price : ₹ {course?.price}</p>
                                    <p>Students : {course?.studentsEnrolled.length}</p>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Button to navigate to AllCourses */}
                <button
                    onClick={() => navigate('/allcourses', { state: { allCourses } })}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    All Courses
                </button>
            </section >


            {/* Became an Instructor */}
            <section className='bg-richblue-400 w-full gap-16 flex flex-row mx-auto justify-center mt-10' >
                <div className=' mt-16 items-center'>
                    <img src={instructor} alt="" loading='lazy' className='z-10 h-96 w-96 rounded-md' />
                </div>
                <div className=' flex flex-col justify-center gap-10 max-w-96'>
                    <h1 className='font-semibold text-xl text-blue-5'>Become an <HighlightText text={"instructor"} /></h1>
                    <p className='text-md text-richblue-5'>Instructors spanning the globe educate millions of students through Nucleus, empowering them with the tools and expertise to share their passions.</p>
                    <CTAButton text={"Instructor"} linkto={"/signup"} active={true} />
                </div>
            </section >

            <FAQSection />

            {/* Review */}
            {/* Footer */}
            <div>
                <Footer />
            </div>

        </div >
    )
}

export default Home