import React from 'react';

function Loader() {
    return (
        <div className="flex items-center justify-center fixed inset-0 z-[100]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-mono font-semibold text-teal-500">One Eternity Later....⏳</h1>
                <div className="loader"></div>
            </div>
        </div>
    );
}

export default Loader;
