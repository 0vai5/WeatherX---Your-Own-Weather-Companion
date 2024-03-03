import React from 'react'

const Spinner = () => {
    return (
        <section className='max-container flex justify-center'>
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-[#696969] animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-[#696969] animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-[#696969] animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </section>
    )
}

export default Spinner