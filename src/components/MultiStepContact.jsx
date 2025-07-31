// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FramerMagnetic from "./FramerMagnetic";
import { Check } from "lucide-react";

export default function MultiStepContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    industry: "",
    revenue: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const stepTransition = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -10, opacity: 0 },
    transition: { duration: 0.3 },
  };

  const formTransition = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3 },
  };

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "E-commerce",
    "Manufacturing",
    "Real Estate",
    "Education",
    "Non-profit",
    "Other",
  ];

  const revenueRanges = [
    "Under $100K",
    "$100K - $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M+",
  ];

  const handleIndustrySelect = (industry) => {
    setFormData({ ...formData, industry });
    if (formData.industry !== industry) {
      setCurrentStep(2);
    }
  };

  const handleRevenueSelect = (revenue) => {
    setFormData({ ...formData, revenue });
    if (formData.revenue !== revenue) {
      setCurrentStep(3);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({
      industry: "",
      revenue: "",
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen w-full p-2 flex flex-col justify-center items-center">
      <div className="flex-grow flex items-center contactContainer w-full py-16 px-6 relative rounded-xl overflow-hidden">
        {/* Background Video */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <source
            src="https://res.cloudinary.com/dyzgzqw8z/video/upload/v1753912260/Drip_in_water_Black_01_-_Free_Stock_Footage_fkmqr9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </motion.video>

        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        />

        <div className="max-w-7xl h-full mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Heading and Description */}
            <motion.div
              className={`${isVisible ? "lg:sticky" : ""} lg:top-16`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8">
                {isVisible ? (
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm font-medium text-gray-300">
                      Step {currentStep} of 3
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-2 h-2 rounded-full ${
                            step <= currentStep ? "bg-white" : "bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-4xl lg:text-6xl tracking-[-0.1rem] text-white mb-6">
                      Schedule your free Digital Audit.
                    </h1>
                    <p className="text-gray-300 text-lg leading-[1.4]">
                      Let us know a bit about your business so we can uncover
                      growth opportunities, spot performance gaps, and tailor
                      strategic solutions just for you.
                    </p>
                    <div className="w-full my-6">
                      <FramerMagnetic>
                        <button
                          onClick={() => {
                            setIsVisible(true);
                            setCurrentStep(1);
                          }}
                          className="w-max px-6 py-2 bg-white text-black text-lg rounded-full"
                        >
                          Get Started
                        </button>
                      </FramerMagnetic>
                    </div>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    <h1 className="text-4xl lg:text-6xl tracking-[-0.1rem] text-white mb-6">
                      Schedule your free Digital Audit.
                    </h1>
                    <p className="text-gray-300 md:max-w-md text-lg leading-[1.4]">
                      First, tell us about your industry so we can better
                      understand your needs and provide tailored solutions.
                    </p>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <h1 className="text-4xl lg:text-6xl tracking-[-0.1rem] text-white mb-6">
                      Revenue range.
                    </h1>
                    <p className="text-gray-300 md:max-w-md text-lg leading-[1.4]">
                      Help us understand the scale of your business to recommend
                      the most suitable services and pricing options.
                    </p>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <h1 className="text-4xl lg:text-6xl tracking-[-0.1rem] text-white mb-6">
                      Almost done.
                    </h1>
                    <p className="text-gray-300 md:max-w-md text-lg leading-[1.4]">
                      Finally, provide your contact details and tell us about
                      your project. We'll get back to you within 24 hours.
                    </p>
                  </>
                )}
              </div>
            </motion.div>

            {isVisible ? (
              <motion.div
                className="bg-white rounded-lg border border-gray-200 p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={stepTransition}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Select your industry
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industries.map((industry) => (
                          <button
                            key={industry}
                            onClick={() => handleIndustrySelect(industry)}
                            className={`p-4 text-left border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                              formData.industry === industry
                                ? "border-black bg-black text-white"
                                : "border-gray-200 hover:border-black hover:bg-gray-50"
                            }`}
                          >
                            <span className="font-medium">{industry}</span>
                          </button>
                        ))}
                      </div>
                      <div className="w-full flex justify-end">
                        {formData.revenue && (
                          <button
                            onClick={() => setCurrentStep(3)}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            Next →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={stepTransition}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Monthly revenue
                        </h2>
                      </div>
                      <div className="space-y-3">
                        {revenueRanges.map((revenue) => (
                          <button
                            key={revenue}
                            onClick={() => handleRevenueSelect(revenue)}
                            className={`w-full p-4 text-left border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
                              formData.revenue === revenue
                                ? "border-black bg-black text-white"
                                : "border-gray-200 hover:border-black hover:bg-gray-50"
                            }`}
                          >
                            <span className="font-medium">{revenue}</span>
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={goBack}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          ← Back
                        </button>
                        {formData.revenue && (
                          <button
                            onClick={() => setCurrentStep(3)}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            Next →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={formTransition}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Contact information
                        </h2>
                        <button
                          onClick={goBack}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          ← Back
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Tell us about your project *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                            placeholder="Describe your project, goals, and any specific requirements..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                          Submit Application
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="bg-white shadow-lg rounded-2xl p-6 space-y-6"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Right column content */}
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3 text-gray-700"
                  >
                    {[
                      "Website performance analysis",
                      "Campaign efficiency check",
                      "Custom strategy recommendations",
                      "Quick wins to boost ROI",
                      "Industry benchmark comparison",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="flex items-start"
                      >
                        <span className="text-green-500 mr-2">
                          <Check />
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
