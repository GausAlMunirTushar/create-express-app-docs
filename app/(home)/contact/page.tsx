"use client";

import { useState } from "react";
import { MdEmail, MdChat, MdBusiness, MdSend } from "react-icons/md";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		}, 1500);
	};

	const contactMethods = [
		{
			icon: MdEmail,
			title: "Email Us",
			description: "Send us an email and we'll respond within 24 hours.",
			contact: "gausalmunirtushar@gmail.com",
			link: "mailto:gausalmunirtushar@gmail.com",
			color: "text-blue-500",
		},
		{
			icon: MdChat,
			title: "Community",
			description: "Join our Discord community for real-time discussions.",
			contact: "Join Discord Server",
			link: "https://discord.gg/kfMbZHfSx7",
			color: "text-purple-500",
		},
		{
			icon: MdBusiness,
			title: "GitHub",
			description: "Report issues or contribute to the project.",
			contact: "GitHub Repository",
			link: "https://github.com/gausalmunirtushar/create-express-app",
			color: "text-gray-800 dark:text-gray-300",
		},
	];

	if (isSubmitted) {
		return (
			<div className="min-h-screen flex items-center justify-center px-4">
				<div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 text-center">
					<div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
						<MdSend className="w-8 h-8 text-green-600 dark:text-green-400" />
					</div>
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
						Message Sent!
					</h2>
					<p className="text-gray-600 dark:text-gray-400 mb-6">
						{`Thank you for reaching out. We'll get back to you as soon as
						possible.`}
					</p>
					<button
						onClick={() => setIsSubmitted(false)}
						className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
					>
						Send Another Message
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
						Get In Touch
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Have questions about{" "}
						<span className="text-green-600 dark:text-green-400 font-medium">
							Create Express App
						</span>
						? We’re here to help! Reach out to us through any of the
						channels below.
					</p>
				</div>

				{/* Grid Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
					{/* Contact Form */}
					<div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
						<h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
							Send Us a Message
						</h2>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Name */}
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
									>
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										placeholder="John Doe"
										className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 focus:border-transparent transition"
									/>
								</div>

								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										placeholder="john@example.com"
										className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 focus:border-transparent transition"
									/>
								</div>
							</div>

							{/* Subject */}
							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									placeholder="What is this regarding?"
									className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 focus:border-transparent transition"
								/>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
								>
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									value={formData.message}
									onChange={handleChange}
									required
									placeholder="Tell us how we can help you..."
									className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-green-600 dark:focus:ring-green-500 focus:border-transparent resize-none shadow-inner transition"
								/>
							</div>

							{/* Submit */}
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
							>
								{isSubmitting ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
										<span>Sending...</span>
									</>
								) : (
									<>
										<MdSend className="w-5 h-5" />
										<span>Send Message</span>
									</>
								)}
							</button>
						</form>
					</div>

					{/* Contact Info */}
					<div className="space-y-6">
						<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
								Contact Information
							</h3>
							<div className="space-y-5">
								{contactMethods.map((method, i) => (
									<div
										key={i}
										className="flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-2 transition-all"
									>
										<div className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm">
											<method.icon className={`w-5 h-5 ${method.color}`} />
										</div>
										<div>
											<h4 className="font-medium text-gray-800 dark:text-white">
												{method.title}
											</h4>
											<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
												{method.description}
											</p>
											<a
												href={method.link}
												target={
													method.link.startsWith("http") ? "_blank" : "_self"
												}
												rel={
													method.link.startsWith("http")
														? "noopener noreferrer"
														: ""
												}
												className="text-sm text-green-600 dark:text-green-400 hover:underline"
											>
												{method.contact}
											</a>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
						Frequently Asked Questions
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								q: "How quickly do you respond to messages?",
								a: "We typically respond within 24 hours. For urgent issues, please use our GitHub Issues page.",
							},
							{
								q: "Can I request a new feature?",
								a: "Absolutely! We welcome feature requests through GitHub issues or our feedback form.",
							},
							{
								q: "Is Create Express App free to use?",
								a: "Yes, it's 100% free and open-source under the MIT license.",
							},
							{
								q: "Where can I find documentation?",
								a: "You can explore full documentation on our Docs site — covering setup, usage, and advanced guides.",
							},
						].map((item, i) => (
							<div key={i}>
								<h4 className="font-semibold text-gray-800 dark:text-white mb-2">
									{item.q}
								</h4>
								<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
									{item.a}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
