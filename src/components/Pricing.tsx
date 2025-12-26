export const Pricing = () => {
  const pricingData = {
    noiThanh: [
      { km: "0 - 5 km", price: "15.000 - 20.000 VNĐ/km", description: "Quãng đường ngắn" },
      { km: "5 - 10 km", price: "12.000 - 15.000 VNĐ/km", description: "Quãng đường trung bình" },
      { km: "Trên 10 km", price: "10.000 - 12.000 VNĐ/km", description: "Quãng đường dài" },
      { km: "Theo giờ", price: "200.000 - 250.000 VNĐ/giờ", description: "Thuê xe theo giờ" },
    ],
    ngoaiThanh: [
      { km: "20 - 50 km", price: "12.000 - 15.000 VNĐ/km", description: "Quãng đường trung bình" },
      { km: "Trên 50 km", price: "10.000 - 12.000 VNĐ/km", description: "Quãng đường dài" },
      { km: "Theo ngày", price: "1.500.000 - 2.000.000 VNĐ/ngày", description: "Thuê xe theo ngày" },
    ],
  };

  return (
    <section id="bang-gia" className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Bảng Giá Dịch Vụ
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            Giá cả minh bạch, hợp lý. Liên hệ ngay để được tư vấn và báo giá chi tiết!
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Nội Thành */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2 sm:p-3">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600"
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Taxi Nội Thành</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {pricingData.noiThanh.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-gray-100 pb-3 sm:pb-4 last:border-0"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-sm sm:text-base text-gray-900">{item.km}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{item.description}</p>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-blue-600 sm:text-right sm:ml-4">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ngoại Thành */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="mb-4 sm:mb-6 flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2 sm:p-3">
                <svg
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Taxi Ngoại Thành</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {pricingData.ngoaiThanh.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-gray-100 pb-3 sm:pb-4 last:border-0"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-sm sm:text-base text-gray-900">{item.km}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{item.description}</p>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-green-600 sm:text-right sm:ml-4">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 p-6 sm:p-8 text-center text-white">
          <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-semibold">
            💡 Lưu ý: Giá có thể thay đổi tùy theo thời điểm và quãng đường cụ thể
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Vui lòng liên hệ trực tiếp để được báo giá chính xác và ưu đãi tốt nhất!
          </p>
        </div>
      </div>
    </section>
  );
};

