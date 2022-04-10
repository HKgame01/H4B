import React from 'react'
import MiaImg from '../assets/mia.svg'
import RobertImg from '../assets/robert.svg'
import AliyahIng from '../assets/aliyah.svg'
import { Link } from 'react-router-dom'

export default function Doctors() {

    return (
        <div className='min-h-screen pb-8'>
            <h1 className='text-5xl p-8 text-white'>Ask a Doctor!</h1>

            <div layout className="flex flex-wrap justify-around w-full px-6 gap-y-6">

                <div className="flex flex-col justify-center">
                    <div layout
                        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-6 py-3 max-w-sm md:max-w-xl lg:max-w-6xl mx-auto border border-white bg-white">

                        <div className="w-full md:w-72 grid place-items-center md:drop-shadow-3xl">
                            <img src={MiaImg} width="350" height="350" alt="img" className="rounded-xl bg-projectBg" />
                        </div>

                        <div className="w-full bg-white flex flex-col p-3">
                            <h1 className="font-black text-gray-800 text-3xl">Mia Chang</h1>

                            <h1 className="text-gray-800 text-2xl py-2">Background: Mental health is very important to me and I have been therapist for 10 years. I love to listen to your problems and help you fix them. A lot of people have anxiety, depression, or just emotional struggles with their jobs, family, children, or significant others. I believe that I can help you feel better. Please call or email me today and let's start talking.!</h1>

                            <div className="flex flex-row space-x-2 py-2">
                                <Link to="/book">
                                    <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
                                </Link>

                                <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>
                                    Donate
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div layout
                        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-6 py-3 max-w-sm md:max-w-xl lg:max-w-6xl mx-auto border border-white bg-white">

                        <div className="w-full md:w-72 grid place-items-center md:drop-shadow-3xl">
                            <img src={RobertImg} width="350" height="350" alt="img" className="rounded-xl bg-projectBg" />
                        </div>

                        <div className="w-full bg-white flex flex-col p-3">
                            <h1 className="font-black text-gray-800 text-3xl">Mary Smith</h1>

                            <h1 className="text-gray-800 text-2xl py-2">Background: Hello, my name is Mary Smith. I have been a therapist for five years, having graduated from Emory University with a degree in Psychology. I am planning to further my education so that I can become a medical psychiatrist and feel I would be of great use to you in the capacity of a therapist.</h1>

                            <div className="flex flex-row space-x-2 py-2">
                                <Link to="/book">
                                    <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
                                </Link>

                                <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>
                                    Donate
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div layout
                        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-6 py-3 max-w-sm md:max-w-xl lg:max-w-6xl mx-auto border border-white bg-white">

                        <div className="w-full md:w-72 grid place-items-center md:drop-shadow-3xl">
                            <img src={AliyahIng} width="400" height="400" alt="img" className="rounded-xl bg-projectBg" />
                        </div>

                        <div className="w-full bg-white flex flex-col p-3">
                            <h1 className="font-black text-gray-800 text-3xl">Dr. Cortez</h1>

                            <h1 className="text-gray-800 text-2xl py-2">Background: Dr. Cortez is a medical psychiatrist with more than 25 years of experience treating children, adolescents and adults. She has worked with people from all ethnic groups and from diverse backgrounds. Dr Cortez has treated children, adolescents and adults in public, private and community mental health centers, institutes and hospitals. </h1>

                            <div className="flex flex-row space-x-2 py-2">
                                <Link to="/book">
                                    <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
                                </Link>

                                <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>
                                    Donate
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
