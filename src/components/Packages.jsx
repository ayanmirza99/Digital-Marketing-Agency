import { Link } from "react-router-dom";

export function PackagesSection() {
  const packages = [
    {
      name: "SEO Starter",
      price: 300,
      features: [
        "15 keywords tracked",
        "Google Search Console setup",
        "Google Analytics setup",
        "Google Business Profile setup/optimization",
        "4 on-page fixes (titles/meta)",
        "4 blog posts (500 words)",
        "Web content optimization",
        "Monthly traffic & ranking report",
        "10 off-page high traffic backlinks",
        "30-minute monthly call",
      ],
    },
    {
      name: "SEO Growth",
      price: 500,
      popular: true,
      features: [
        "25 keywords tracked",
        "Technical audit + fixes",
        "Google Search Console setup",
        "Google Analytics setup",
        "Google Business Profile setup/optimization",
        "Internal linking & schema setup",
        "4 on-page fixes (titles/meta)",
        "8 blog posts (600 words)",
        "Web content optimization",
        "Monthly traffic & ranking report",
        "15 off-page outreach high traffic backlinks",
        "30-minute monthly call",
      ],
    },
    {
      name: "SEO Pro",
      price: 700,
      features: [
        "Full technical SEO (speed, crawl fixes)",
        "Content strategy",
        "Link acquisition (quality placements)",
        "CRO recommendations",
        "Weekly optimizations",
        "Dedicated account manager",
        "Weekly snapshots",
        "Technical audit + fixes",
        "Google Search Console setup",
        "Google Analytics setup",
        "Google Business Profile setup/optimization",
        "Internal linking & schema setup",
        "6 on-page fixes (titles/meta)",
        "10 blog posts (600 words)",
        "Web content optimization",
        "Monthly traffic & ranking report",
        "20 off-page outreach high traffic backlinks",
        "30-minute monthly call",
      ],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            SEO Monthly Packages
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan to grow your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.popular
                  ? "border-blue-500 ring-2 ring-blue-500 ring-opacity-20"
                  : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">/ mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={"/contact"}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    pkg.popular
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
