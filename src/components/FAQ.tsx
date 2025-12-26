export const FAQ = () => {
  const faqs = [
    {
      question: "Taxi Xanh SM Quảng Ngãi phục vụ những khu vực nào?",
      answer: "Chúng tôi phục vụ tại Quảng Ngãi và các tỉnh lân cận: Đà Nẵng, Quảng Nam, Bình Định, Phú Yên, Kon Tum, Gia Lai. Dịch vụ bao gồm taxi nội thành, ngoại thành và liên tỉnh."
    },
    {
      question: "Giá taxi từ Quảng Ngãi đi Đà Nẵng là bao nhiêu?",
      answer: "Giá taxi từ Quảng Ngãi đi Đà Nẵng (khoảng 130km) tham khảo từ 1.500.000 VNĐ. Giá có thể thay đổi tùy theo thời điểm và quãng đường cụ thể. Vui lòng gọi 0905418433 để được báo giá chính xác."
    },
    {
      question: "Có thể đặt taxi 24/7 không?",
      answer: "Có, chúng tôi phục vụ 24/7, sẵn sàng đưa đón bạn mọi lúc, mọi nơi. Chỉ cần gọi hotline 0905418433 hoặc chat Zalo để đặt xe."
    },
    {
      question: "Taxi có sạch sẽ và an toàn không?",
      answer: "Xe của chúng tôi được bảo dưỡng thường xuyên, sạch sẽ, thơm tho, đầy đủ tiện nghi. Tài xế nhiều năm kinh nghiệm, lái xe an toàn, chuyên nghiệp."
    },
    {
      question: "Có dịch vụ đưa đón sân bay không?",
      answer: "Có, chúng tôi cung cấp dịch vụ đưa đón sân bay chuyên nghiệp, đúng giờ, an toàn. Đặc biệt phục vụ tuyến sân bay Đà Nẵng, sân bay Chu Lai."
    },
    {
      question: "Có thể thuê xe theo giờ hoặc theo ngày không?",
      answer: "Có, chúng tôi cung cấp dịch vụ thuê xe theo giờ (từ 200.000 VNĐ/giờ) và theo ngày (từ 1.500.000 VNĐ/ngày) linh hoạt theo nhu cầu của khách hàng."
    },
    {
      question: "Thanh toán bằng cách nào?",
      answer: "Chúng tôi chấp nhận thanh toán bằng tiền mặt hoặc chuyển khoản. Giá cả minh bạch, không phát sinh phí ẩn."
    },
    {
      question: "Có dịch vụ taxi cho sự kiện, tiệc cưới không?",
      answer: "Có, chúng tôi phục vụ các sự kiện, tiệc cưới, hội nghị với xe sạch sẽ, sang trọng. Vui lòng liên hệ trước để được tư vấn và báo giá tốt nhất."
    }
  ];

  return (
    <section id="faq" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
            Giải đáp các thắc mắc về dịch vụ taxi của chúng tôi
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-gray-900">
                <span>{faq.question}</span>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-blue-600 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

