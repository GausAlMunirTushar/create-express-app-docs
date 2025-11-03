"use client";

import { useState } from "react";
import { MdFeedback, MdThumbUp, MdThumbDown, MdSend } from "react-icons/md";

const FeedbackPage = () => {
	const [feedbackType, setFeedbackType] = useState("");
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFeedbackType("");
			setMessage("");
			setEmail("");
		}, 1500);
	};

	if (isSubmitted) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
				<div className="max-w-md w-full bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 rounded-2xl p-8 text-center">
					<div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
						<MdThumbUp className="w-8 h-8 text-green-600 dark:text-green-400" />
					</div>
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
						Thank You!
					</h2>
					<p className="text-gray-600 dark:text-gray-400 mb-6">
						Your feedback has been received. We appreciate you taking the time to help improve Create Express App.
					</p>
					<button
						onClick={() => setIsSubmitted(false)}
						className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
					>
						Submit Another Feedback
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen py-16 px-4">
			<div className="max-w-3xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-5">
						<div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-2xl flex items-center justify-center shadow-md">
							<MdFeedback className="w-8 h-8 text-white dark:text-gray-900" />
						</div>
					</div>
					<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
						Share Your Feedback
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
						We’re constantly improving <span className="font-semibold text-green-600 dark:text-green-400">Create Express App</span>.
						Your suggestions and thoughts help us make it better for everyone.
					</p>
				</div>

				{/* Feedback Form */}
				<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-10">
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Type Selection */}
						<div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
								What type of feedback are you sharing?
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								{/* Suggestion */}
								<button
									type="button"
									onClick={() => setFeedbackType("suggestion")}
									className={`p-5 rounded-xl border-2 flex flex-col items-center transition-all duration-300 shadow-sm ${feedbackType === "suggestion"
										? "border-green-500 bg-green-50 dark:bg-green-900/30 scale-105"
										: "border-gray-200 dark:border-gray-700 hover:border-green-300 hover:shadow-md"
										}`}
								>
									<MdThumbUp className={`w-6 h-6 mb-2 ${feedbackType === "suggestion"
										? "text-green-600"
										: "text-gray-500 dark:text-gray-400"
										}`} />
									<span className={`font-medium ${feedbackType === "suggestion"
										? "text-green-700 dark:text-green-400"
										: "text-gray-700 dark:text-gray-300"
										}`}>
										Suggestion
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
										Idea to improve the tool
									</span>
								</button>

								{/* Issue */}
								<button
									type="button"
									onClick={() => setFeedbackType("issue")}
									className={`p-5 rounded-xl border-2 flex flex-col items-center transition-all duration-300 shadow-sm ${feedbackType === "issue"
										? "border-red-500 bg-red-50 dark:bg-red-900/30 scale-105"
										: "border-gray-200 dark:border-gray-700 hover:border-red-300 hover:shadow-md"
										}`}
								>
									<MdThumbDown className={`w-6 h-6 mb-2 ${feedbackType === "issue"
										? "text-red-500"
										: "text-gray-500 dark:text-gray-400"
										}`} />
									<span className={`font-medium ${feedbackType === "issue"
										? "text-red-700 dark:text-red-400"
										: "text-gray-700 dark:text-gray-300"
										}`}>
										Issue
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
										Problem you encountered
									</span>
								</button>
							</div>
						</div>

						{/* Message */}
						<div>
							<label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
								Your Feedback
							</label>
							<textarea
								id="message"
								rows={5}
								className="w-full px-4 py-3 border dark:border-gray-600 rounded-xl focus:ring-2 focus:outline-green-600 focus:border-none dark:focus:ring-green-500  bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-none shadow-inner"
								placeholder="Tell us what you think, what you'd like to see improved, or any issues you've encountered..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							></textarea>
						</div>

						{/* Email */}
						<div>
							<label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
								Email Address (Optional)
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-3 border dark:border-gray-600 rounded-xl focus:ring-2 focus:outline-green-600 focus:border-none dark:focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-inner"
								placeholder="your.email@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
								{`Provide your email if you'd like us to follow up with you.`}
							</p>
						</div>

						{/* Submit */}
						<button
							type="submit"
							disabled={isSubmitting || !message || !feedbackType}
							className="w-full flex items-center justify-center gap-2 px-5 py-3 
								bg-green-600 hover:bg-green-700 active:scale-[0.98]
								text-white font-semibold rounded-xl 
								dark:bg-green-500 dark:hover:bg-green-400 
								shadow-md hover:shadow-lg 
								disabled:opacity-50 disabled:cursor-not-allowed 
								transition-all duration-300 ease-in-out"
						>
							{isSubmitting ? (
								<>
									<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
									<span>Submitting...</span>
								</>
							) : (
								<>
									<MdSend className="w-5 h-5" />
									<span>Submit Feedback</span>
								</>
							)}
						</button>
					</form>
				</div>

				{/* Other Ways */}
				<div className="mt-16 text-center">
					<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
						Other Ways to Reach Us
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="https://github.com/GausAlMunirTushar/create-express-app/issues"
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
						>
							GitHub Issues
						</a>
						<a
							href="https://discord.gg/your-discord"
							target="_blank"
							rel="noopener noreferrer"
							className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
						>
							Discord Community
						</a>
						<a
							href="mailto:feedback@create-express-app.com"
							className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
						>
							Email Us
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackPage;
