export const Services = () => {
  const services = [
    {
      icon: "🏙️",
      title: "Taxi Nội Thành",
      description: "Phục vụ các tuyến đường trong thành phố, quận, huyện với giá cả hợp lý",
      features: ["Đi lại trong thành phố", "Quãng đường ngắn", "Giá từ 10.000 VNĐ/km"],
    },
    {
      icon: "🛣️",
      title: "Taxi Ngoại Thành & Liên Tỉnh",
      description: "Đưa đón các tuyến đường liên tỉnh từ Quảng Ngãi đến Đà Nẵng, Quảng Nam, Bình Định, Phú Yên an toàn và tiện lợi",
      features: ["Đường liên tỉnh", "Quãng đường dài", "Giá từ 12.000 VNĐ/km"],
    },
    {
      icon: "⏰",
      title: "Thuê Xe Theo Giờ",
      description: "Dịch vụ thuê xe linh hoạt theo giờ phù hợp với nhu cầu của bạn",
      features: ["Thuê theo giờ", "Linh hoạt", "Giá từ 200.000 VNĐ/giờ"],
    },
    {
      icon: "✈️",
      title: "Đưa Đón Sân Bay",
      description: "Dịch vụ đưa đón sân bay chuyên nghiệp, đúng giờ, an toàn",
      features: ["Đúng giờ", "An toàn", "Giá cạnh tranh"],
    },
    {
      icon: "🎉",
      title: "Dịch Vụ Sự Kiện",
      description: "Phục vụ các sự kiện, tiệc cưới, hội nghị với xe sạch sẽ, sang trọng",
      features: ["Xe sang trọng", "Phục vụ tận tâm", "Giá ưu đãi"],
    },
    {
      icon: "🌙",
      title: "Dịch Vụ 24/7",
      description: "Phục vụ 24/7, sẵn sàng đưa đón bạn mọi lúc, mọi nơi",
      features: ["24/7", "Sẵn sàng", "Nhanh chóng"],
    },
  ];

  return (
    <section id="dich-vu" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            Đa dạng dịch vụ taxi đáp ứng mọi nhu cầu đi lại của quý khách
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-3 sm:mb-4 text-4xl sm:text-5xl">{service.icon}</div>
              <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <svg
                      className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

