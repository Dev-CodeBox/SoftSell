import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const exampleQuestions = [
    "How do I sell my license?",
    "Can I upgrade my plan?",
    "Where can I track my order?",
];

const predefinedResponses = {
    "How do I sell my license?": "You can sell your license by following the instructions on our 'Sell License' page.",
    "Can I upgrade my plan?": "Yes, you can upgrade your plan by visiting your account settings and selecting the 'Upgrade Plan' option.",
    "Where can I track my order?": "You can track your order on the 'Order History' page in your account.",
};

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [options, setOptions] = useState(exampleQuestions);

    const handleSend = (text = input) => {
        if (!text.trim()) return;

        const userMessage = { from: "user", text };
        const botMessage = { from: "bot", text: predefinedResponses[text] || "Sorry, I don't understand your question. Select From Mentioned Questions" };

        setMessages([...messages, userMessage, botMessage]);
        setInput("");

        setOptions(exampleQuestions);
    };

    const handleOptionClick = (option) => {
        setInput(option);
        handleSend(option);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {isOpen ? (
                <div className="w-80 bg-white rounded-lg shadow-lg flex flex-col max-h-[80vh]">

                    <div className="bg-cyan-600 text-white p-3 flex justify-between items-center">
                        <span className="font-semibold">Ask SoftSell AI</span>
                        <button onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    <div className="p-3 space-y-2 overflow-y-auto flex-1 text-sm">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`rounded-md p-2 whitespace-pre-wrap ${msg.from === "user"
                                    ? "bg-cyan-100 text-right ml-auto max-w-[80%]"
                                    : "bg-gray-100 text-left mr-auto max-w-[80%]"}`
                                }
                            >
                                {msg.text}
                            </div>
                        ))}

                        {options.length > 0 && (
                            <div className="text-gray-500 text-sm mt-3">
                                Try asking:
                                <ul className="list-disc ml-5 mt-1 space-y-1">
                                    {options.map((q, i) => (
                                        <li
                                            key={i}
                                            className="cursor-pointer text-cyan-700 hover:underline"
                                            onClick={() => handleOptionClick(q)}
                                        >
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="p-2 border-t flex gap-2 items-center">
                        <input
                            className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 ring-cyan-300"
                            placeholder="Type your question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={() => handleSend()}
                            className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-md text-sm"
                        >
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-cyan-600 p-3 rounded-full text-white shadow-md hover:bg-cyan-700"
                >
                    <MessageCircle className="w-5 h-5" />
                </button>
            )}
        </div>
    );
}

export default ChatWidget;
