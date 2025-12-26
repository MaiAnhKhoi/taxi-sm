export const PopularRoutes = () => {
  const routes = [
    {
      from: "Quảng Ngãi",
      to: "Đà Nẵng",
      distance: "~130 km",
      time: "~2.5 giờ",
      price: "Từ 1.500.000 VNĐ",
      popular: true
    },
    {
      from: "Quảng Ngãi",
      to: "Quảng Nam",
      distance: "~100 km",
      time: "~2 giờ",
      price: "Từ 1.200.000 VNĐ",
      popular: true
    },
    {
      from: "Quảng Ngãi",
      to: "Bình Định",
      distance: "~150 km",
      time: "~3 giờ",
      price: "Từ 1.800.000 VNĐ",
      popular: false
    },
    {
      from: "Quảng Ngãi",
      to: "Phú Yên",
      distance: "~200 km",
      time: "~4 giờ",
      price: "Từ 2.400.000 VNĐ",
      popular: false
    },
    {
      from: "Quảng Ngãi",
      to: "Kon Tum",
      distance: "~180 km",
      time: "~4 giờ",
      price: "Từ 2.200.000 VNĐ",
      popular: false
    },
    {
      from: "Quảng Ngãi",
      to: "Gia Lai",
      distance: "~220 km",
      time: "~5 giờ",
      price: "Từ 2.600.000 VNĐ",
      popular: false
    }
  ];

  return (
    <section id="tuyen-duong-pho-bien" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Các Tuyến Đường Phổ Biến
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            Dịch vụ taxi liên tỉnh từ <strong className="text-blue-600">Quảng Ngãi</strong> đến các tỉnh thành lân cận
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                route.popular ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
            >
              {route.popular && (
                <div className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  ⭐ Tuyến Phổ Biến
                </div>
              )}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900">{route.from}</span>
                  </div>
                  <div className="ml-6 mb-2 flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-100 p-2">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900">{route.to}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Khoảng cách:</span>
                  <span className="font-semibold text-gray-900">{route.distance}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Thời gian:</span>
                  <span className="font-semibold text-gray-900">{route.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Giá tham khảo:</span>
                  <span className="font-bold text-blue-600">{route.price}</span>
                </div>
              </div>

              <a
                href="tel:0905418433"
                className="mt-4 block w-full rounded-lg bg-gradient-to-r from-blue-600 to-green-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                Đặt xe ngay
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 p-6 sm:p-8 text-center text-white">
          <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-semibold">
            🚗 Bạn cần đi tuyến khác?
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            Chúng tôi phục vụ tất cả các tuyến đường từ Quảng Ngãi đến các tỉnh thành trong khu vực miền Trung và Tây Nguyên
          </p>
          <p className="text-sm sm:text-base">
            Gọi ngay: <a href="tel:0905418433" className="font-bold underline hover:text-yellow-300">0905418433</a> để được báo giá chính xác
          </p>
        </div>
      </div>
    </section>
  );
};

