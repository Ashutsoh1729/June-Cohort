import React from 'react'

const Firstcard = () => {
  return (
            <div className="h-[430px] w-full max-w-sm mx-auto flex flex-col justify-between">
          <div className="h-[360px] bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-semibold text-gray-800">Patients</h2>
              <span className="text-sm text-gray-500">This month ▼</span>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="space-y-4">
              <div className="bg-green-100 text-green-800 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm font-medium">new patients</span>
                <span className="text-2xl font-bold">34</span>
              </div>
              <div className="bg-yellow-100 text-yellow-800 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm font-medium">old patients</span>
                <span className="text-2xl font-bold">108</span>
              </div>
              <div className="bg-red-100 text-red-800 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm font-medium">critical patients</span>
                <span className="text-2xl font-bold">7</span>
              </div>
            </div>
          </div>

          <div className="mt-3 bg-black text-white text-sm rounded-xl px-5 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition">
            <span className="font-medium">Summarise</span>
            <span className="text-xs text-gray-300">the day</span>
            <div className="ml-auto pl-4">
              <span className="bg-white text-black px-2 py-1 text-xs font-bold rounded-md">
                AI ✨
              </span>
            </div>
          </div>
        </div>
  )
}

export default Firstcard
