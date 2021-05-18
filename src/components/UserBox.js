import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between item-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1072875232967290881/DqrxPbyT_400x400.jpg" 
            alt="Profile" className="w-11 h-11 rounded-full" />
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">
                    Efe Temel ERSÖZ
                </span>
                <span className="text-sm text-gray-dark">
                    @efetemelersoz
                </span>
            </div>
            <div className="flex items-center space-x-1">
                <div  className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div  className="w-1 h-1 bg-gray-900 rounded-full"/>
                <div  className="w-1 h-1 bg-gray-900 rounded-full"/>
            </div>
        </div>
    )
}

export default UserBox
