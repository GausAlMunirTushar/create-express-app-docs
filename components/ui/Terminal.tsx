"use client";

import { useState } from "react";

const Terminal = ({
	commands,
}: {
	commands: { question: string; answer: string }[];
}) => {
	const [input, setInput] = useState("");
	const [history, setHistory] =
		useState<{ question: string; answer: string }[]>(commands);

	const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && input.trim()) {
			setHistory([
				...history,
				{ question: input, answer: "Command not found" },
			]);
			setInput("");
		}
	};

	return (
		<div className="bg-black text-green-400 font-mono p-4 rounded-lg shadow-lg w-full max-w-2xl mx-auto h-96 overflow-y-auto">
			{history.map((cmd, index) => (
				<div key={index}>
					<span className="text-blue-400">➜</span>{" "}
					<span className="text-white">{cmd.question}</span>
					<div className="ml-4">{cmd.answer}</div>
				</div>
			))}
			<div className="flex items-center">
				<span className="text-blue-400">➜</span>
				<input
					type="text"
					className="bg-transparent border-none outline-none text-white ml-2 w-full"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleInput}
					autoFocus
				/>
			</div>
		</div>
	);
};

export default Terminal;
