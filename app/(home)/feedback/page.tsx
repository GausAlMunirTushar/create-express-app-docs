"use client";

import { useState } from "react";
import { MdFeedback, MdThumbUp, MdThumbDown, MdSend } from "react-icons/md";

const FeedbackPage = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <MdThumbUp className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your feedback has been received. We appreciate you taking the time to help improve Create Express App.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg dark:bg-white dark:text-gray-800 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300"
          >
            Submit Another Feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gray-800 dark:bg-white rounded-full flex items-center justify-center">
              <MdFeedback className="w-8 h-8 text-white dark:text-gray-800" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Share Your Feedback
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            We're constantly working to improve Create Express App. Your thoughts and suggestions help us make it better for everyone.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                What type of feedback are you sharing?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFeedbackType("suggestion")}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all duration-300 ${
                    feedbackType === "suggestion"
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <MdThumbUp className={`w-6 h-6 mb-2 ${
                    feedbackType === "suggestion" 
                      ? "text-green-500" 
                      : "text-gray-500 dark:text-gray-400"
                  }`} />
                  <span className={`font-medium ${
                    feedbackType === "suggestion" 
                      ? "text-green-700 dark:text-green-400" 
                      : "text-gray-700 dark:text-gray-300"
                  }`}>
                    Suggestion
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Idea to improve the tool
                  </span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setFeedbackType("issue")}
                  className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all duration-300 ${
                    feedbackType === "issue"
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <MdThumbDown className={`w-6 h-6 mb-2 ${
                    feedbackType === "issue" 
                      ? "text-red-500" 
                      : "text-gray-500 dark:text-gray-400"
                  }`} />
                  <span className={`font-medium ${
                    feedbackType === "issue" 
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

            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Feedback
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none"
                placeholder="Tell us what you think, what you'd like to see improved, or any issues you've encountered..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-8">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-800 dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Provide your email if you'd like us to follow up with you.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !message || !feedbackType}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg dark:bg-white dark:text-gray-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white dark:border-gray-800 border-t-transparent rounded-full animate-spin"></div>
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

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Other Ways to Provide Feedback
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/your-username/create-express-app/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              GitHub Issues
            </a>
            <a 
              href="https://discord.gg/your-discord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Discord Community
            </a>
            <a 
              href="mailto:feedback@create-express-app.com" 
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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