import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const servicesData = [
  {
    id: "001",
    title: "Web design and development",
    description:
      "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    image: "/images/powell.jpg",
    categories: ["UI/UX Design", "WordPress", "Scalable Web", "6+"],
    isExpanded: true,
  },
  {
    id: "002",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and reach your target audience effectively.",
    image: "/images/funny.jpg",
    categories: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    isExpanded: false,
  },
  {
    id: "003",
    title: "Google Ads",
    description:
      "Strategic Google Ads campaigns designed to maximize your ROI and drive qualified traffic to your business.",
    image: "/images/panda.jpg",
    categories: ["PPC", "Campaign Management", "Optimization", "Reporting"],
    isExpanded: false,
  },
  {
    id: "004",
    title: "Brand Identity",
    description:
      "Complete brand identity solutions including logo design, brand guidelines, and visual identity systems.",
    image: "/images/wix.jpg",
    categories: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Print Design",
    ],
    isExpanded: false,
  },
];

const Services = () => {
  const [services, setServices] = useState(servicesData);

  const toggleService = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, isExpanded: !service.isExpanded }
          : { ...service, isExpanded: false }
      )
    );
  };
  return (
    <div className="h-full w-full flex justify-center items-center p-1">
      <div className="text-gray-200 servicesContainer min-h-[120vh] rounded-xl p-8">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-medium">+ What we do</span>
            </div>
            <div className="flex justify-center items-baseline gap-4">
              <h1 className="text-6xl md:text-8xl tracking-[-0.4rem] font-extralight">
                Services.
              </h1>
              <span className="text-2xl text-gray-500">
                ({services.length})
              </span>
            </div>
          </div>

          {/* Accordion Items */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="first:border-t-0 border-t border-gray-800 last:border-b"
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-8 flex items-center"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="text-gray-500 font-bold text-lg">
                      ({service.id})
                    </div>
                    <div className="ml-auto w-full md:w-[70%]">
                      <h2 className="text-2xl justify-end md:text-4xl font-extralight text-left">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {service.isExpanded ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden ml-auto w-full md:w-[70%] transition-all duration-300 ease-in-out ${
                    service.isExpanded
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-8">
                    <div className="flex flex-wrap gap-8 items-start">
                      {/* Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-48 h-32 object-cover rounded-lg"
                        />
                      </div>

                      {/* Description */}
                      <div className="flex-1">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Categories */}
                      <div className="flex-shrink-0">
                        <div className="text-right">
                          <p className="text-gray-500 text-sm mb-3">
                            Categories
                          </p>
                          <div className="flex flex-wrap gap-2 justify-end">
                            {service.categories.map((category, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
