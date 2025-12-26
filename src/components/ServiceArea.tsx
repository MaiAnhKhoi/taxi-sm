export const ServiceArea = () => {
  const areas = [
    {
      name: "Quảng Ngãi",
      districts: [
        "TP. Quảng Ngãi",
        "Ba Tơ",
        "Bình Sơn",
        "Đức Phổ",
        "Lý Sơn",
        "Minh Long",
        "Mộ Đức",
        "Nghĩa Hành",
        "Sơn Hà",
        "Sơn Tịnh",
        "Sơn Tây",
        "Tây Trà",
        "Trà Bồng",
        "Tư Nghĩa"
      ]
    },
    {
      name: "Các Tỉnh Lân Cận",
      districts: [
        "Đà Nẵng",
        "Quảng Nam",
        "Bình Định",
        "Phú Yên",
        "Kon Tum",
        "Gia Lai"
      ]
    }
  ];

  return (
    <section id="khu-vuc-phuc-vu" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Khu Vực Phục Vụ
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            Chúng tôi phục vụ tại <strong className="text-blue-600">Quảng Ngãi</strong> và các tỉnh thành lân cận: <strong className="text-green-600">Đà Nẵng, Quảng Nam, Bình Định, Phú Yên, Kon Tum, Gia Lai</strong>
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {areas.map((area, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <div className={`rounded-full p-2 sm:p-3 ${
                  index === 0 ? "bg-blue-100" : "bg-green-100"
                }`}>
                  <svg
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${
                      index === 0 ? "text-blue-600" : "text-green-600"
                    }`}
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {area.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {area.districts.map((district, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm sm:text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-green-600"
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
                    <span>{district}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 p-6 sm:p-8 text-center text-white">
          <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-semibold">
            📍 Đặt xe ngay tại Quảng Ngãi
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            Chúng tôi sẵn sàng phục vụ bạn tại mọi điểm trong tỉnh Quảng Ngãi và các tỉnh thành lân cận: Đà Nẵng, Quảng Nam, Bình Định, Phú Yên, Kon Tum, Gia Lai. Dịch vụ taxi liên tỉnh chuyên nghiệp, an toàn.
          </p>
          <p className="text-sm sm:text-base">
            Hotline: <a href="tel:0905418433" className="font-bold underline hover:text-yellow-300">0905418433</a>
          </p>
        </div>
      </div>
    </section>
  );
};

