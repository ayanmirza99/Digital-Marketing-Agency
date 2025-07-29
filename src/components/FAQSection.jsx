// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for building a website depends on its complexity and specific requirements. On average, we'll provide a detailed timeline during the initial consultation to ensure clear expectations.",
    },
    {
      question: "Do you offer custom websites or use templates?",
      answer:
        "We offer both custom-built websites tailored to your specific needs and template-based solutions for faster deployment. The choice depends on your budget, timeline, and requirements.",
    },
    {
      question: "What's included in your SEO services?",
      answer:
        "Our SEO services include keyword research, on-page optimization, technical SEO audits, content optimization, local SEO setup, and monthly performance reporting.",
    },
    {
      question: "How does the monthly subscription model work?",
      answer:
        "Our monthly subscription includes ongoing maintenance, security updates, content updates, hosting, and technical support. You can cancel anytime with 30 days notice.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we can completely redesign your existing website while preserving your content and SEO rankings. We'll analyze your current site and propose improvements.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply contact us for a free consultation where we'll discuss your needs, timeline, and budget. We'll then provide a detailed proposal and project timeline.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - FAQ heading */}
          <div className="lg:sticky lg:top-16">
            <h1 className="text-8xl lg:text-9xl font-extralight selection:bg-[#383838] selection:text-white tracking-[-0.05em] text-black mb-6">
              FAQ.
            </h1>
            <p className="text-gray-600 selection:bg-[#848484] selection:text-white text-lg leading-[1.1] max-w-md">
              Got questions? We've got answers. Here's everything you need to
              know about working with us.
            </p>
          </div>

          {/* Right side - FAQ items */}
          <div className="space-y-4 md:pt-8">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white selection:bg-[#383838] selection:text-white rounded-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 md:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-[16px] md:text-lg text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center transition-transform duration-200 ${
                        openItems.includes(index) ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer with animation */}
                <AnimatePresence initial={false}>
                  {openItems.includes(index) && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-5">
                        <p className="text-gray-600 text-[14px] md:text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
