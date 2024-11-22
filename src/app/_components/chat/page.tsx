"use client";
import { useState } from "react";

export default function Home() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<Array<{ role: string; content: string }>>([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setOutput((prev) => [...prev, { role: "user", content: input }]);
        setOutput((prev) => [...prev, { role: "assistant", content: "" }]);

        try {
            const response = await fetch("http://localhost:11434/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama3.2",
                    messages: [{ role: "user", content: input }]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let fullResponse = "";

            while (true) {
                const { done, value } = await reader!.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const jsonStrings = chunk.split("\n").filter((str) => str.trim());

                for (const jsonString of jsonStrings) {
                    try {
                        const data = JSON.parse(jsonString);
                        if (data.message?.content && data.done !== true) {
                            fullResponse += data.message.content;
                            setOutput((prev) => {
                                const newOutput = [...prev];
                                const lastMessage = newOutput[newOutput.length - 1];
                                if (lastMessage.role === "assistant") {
                                    lastMessage.content = fullResponse;
                                }
                                return newOutput;
                            });
                        }
                    } catch (e) {
                        console.error("Error parsing JSON:", e);
                    }
                }
            }

            setInput("");
        } catch (error) {
            console.error("Error connecting to Ollama API:", error);
            setOutput((prev) => [...prev, { role: "error", content: "Error: Unable to fetch response from Ollama API." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen flex-col bg-gray-100">
            {/* Header */}
            <header className="bg-white px-6 py-4 shadow-sm">
                <h1 className="text-center text-2xl font-bold">Ollama Chat Interface</h1>
            </header>

            {/* Main container */}
            <main className="container mx-auto flex max-w-6xl flex-1 flex-col p-4">
                <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-md">
                    {/* Messages container */}
                    <div className="flex-1 space-y-4 overflow-y-auto p-4">
                        {output.length === 0 ? (
                            <div className="flex h-full items-center justify-center">
                                <p className="text-center text-gray-500">No messages yet. Start a conversation!</p>
                            </div>
                        ) : (
                            output.map((message, index) => (
                                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[80%] rounded-lg p-4 ${
                                            message.role === "user" ? "bg-blue-100" : message.role === "error" ? "bg-red-100" : "bg-green-100"
                                        }`}
                                    >
                                        <p className="mb-1 text-sm font-semibold">{message.role === "user" ? "You" : "Ollama"}</p>
                                        <p className="whitespace-pre-wrap break-words text-sm">{message.content}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Input container */}
                    <div className="border-t bg-gray-50 p-4">
                        <div className="mx-auto flex max-w-4xl gap-4">
                            <input
                                type="text"
                                className="flex-1 rounded-lg border border-gray-300 p-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={loading}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit();
                                    }
                                }}
                            />
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className={`rounded-lg px-6 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                    loading ? "cursor-not-allowed bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
                                }`}
                            >
                                {loading ? "Loading..." : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
