import React from 'react'

const Message = () => {
const messages = [
    {
        id: 1,
        patient: "Mohit",
        text: "Patient Mohit's situation is serious. He need an urgent operation.",
        type: "serious",
        bgColor: "bg-red-50",
        tagColor: "text-red-600 bg-red-100",
        tag: "Serious"
    },
    {
        id: 2,
        patient: "Jhon Parker",
        text: "Patient Jhon Parker's STAT lab result is ready for review.",
        type: "review",
        bgColor: "bg-blue-50",
        tagColor: "text-yellow-700 bg-yellow-100",
        tag: "Review"
    },
    {
        id: 3,
        patient: "Jhon Parker",
        text: "AI has drafted a prescription for Jhon Parker. Review & Approve.",
        type: "ai",
        bgColor: "bg-green-50",
        tagColor: "text-green-700 bg-green-100",
        tag: "AI"
    },
    {
        id: 3,
        patient: "Jhon Parker",
        text: "AI has drafted a prescription for Jhon Parker. Review & Approve.",
        type: "ai",
        bgColor: "bg-green-50",
        tagColor: "text-green-700 bg-green-100",
        tag: "AI"
    },
    {
        id: 4,
        patient: "Jhon Parker",
        text: "AI has drafted a prescription for Jhon Parker. Review & Approve.",
        type: "ai",
        bgColor: "bg-green-50",
        tagColor: "text-green-700 bg-green-100",
        tag: "AI"
    }
];

return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-md space-y-5 h-[430px] overflow-hidden ">
        {/* Header */}
        <div className="flex justify-between items-center">
            <h2 className="font-semibold text-gray-800 text-4xl">Important</h2>
            <span className="text-sm text-gray-500">week ▼</span>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Messages Container - Scrollable */}
        <div className="max-h-96 overflow-y-auto space-y-4 " style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {messages.map((message) => (
                <div key={message.id} className={`${message.bgColor} text-gray-800 p-4 rounded-xl flex justify-between items-start`}>
                    <p>
                        {message.text.includes(message.patient) ? (
                            <>
                                {message.text.split(message.patient)[0]}
                                <span className="font-semibold">{message.patient}</span>
                                {message.text.split(message.patient)[1]}
                            </>
                        ) : (
                            message.text
                        )}
                    </p>
                    <span className={`ml-4 text-xs font-semibold ${message.tagColor} px-2 py-1 rounded-md`}>
                        {message.tag}
                    </span>
                </div>
            ))}
        </div>
    </div>
)
}

export default Message
