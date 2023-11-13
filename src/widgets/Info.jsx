import React, { useEffect, useState } from 'react'

function Info() {
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(actualData => {
                console.log(actualData);
                setData(actualData);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='grid justify-items-center gap-8 pb-8 relative'>
            <p className='text-5xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
                Customer Details
            </p>

            <div className='relative w-full'>
                <svg
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -right-20 -z-10"
                >
                    <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_0_22"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="256"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DFDFDF" />
                            <stop offset="0.774017" stop-color="#E8FCFF" />
                            <stop offset="1" stop-color="#A0C9FF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className=' grid justify-items-center relative'>
                    <table className='table-auto grid  p-2 rounded-2xl'>
                        <tbody>
                            <tr className=' bg-blue-50'>
                                <th className='border-t border-b border-black p-6'>ID</th>
                                <th className='border-t border-b border-black'>NAME</th>
                                <th className='border-t border-b border-black'>USERNAME</th>
                                <th className='border-t border-b border-black'>EMAIL</th>
                                <th className='border-t border-b border-black'>ADDRESS</th>
                                <th className='border-t border-b border-black'>PHONE</th>
                                <th className='border-t border-b border-black'>WEBSITE</th>
                            </tr>
                            {data.map((item, index) => (
                                <tr className='text-center'>
                                    <td className='border-t border-b border-black p-4'>{item.id}</td>
                                    <td className='border-t border-b border-black p-4'>{item.name}</td>
                                    <td className='border-t border-b border-black p-4'>{item.username}</td>
                                    <td className='border-t border-b border-black p-4'>{item.email}</td>
                                    <td className='border-t border-b border-black p-4'>{item.address.street + ", " + item.address.city}</td>
                                    <td className='border-t border-b border-black p-4'>{item.phone}</td>
                                    <td className='border-t border-b border-black p-4'>{item.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 md:bottom-20 -left-10 -z-10"
                >
                    <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_0_23"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="128"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#A0C9FF" />
                            <stop offset="0.774017" stop-color="#E8FCFF" />
                            <stop offset="1" stop-color="#DFDFDF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Info