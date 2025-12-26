import { ContactButtons } from "./ContactButtons";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-green-500 to-blue-700 py-12 sm:py-16 md:py-20 text-white" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" itemProp="name">
            Taxi Xanh SM
            <br />
            <span className="text-yellow-300">Mai Khoa</span>
          </h1>
          <p className="mb-3 text-lg sm:text-xl md:text-2xl text-blue-100">
            Dịch vụ taxi chuyên nghiệp, uy tín tại <span className="text-yellow-300 font-semibold">Quảng Ngãi</span>
          </p>
          <p className="mb-6 text-base sm:text-lg md:text-xl text-blue-50">
            Phục vụ nội thành, ngoại thành Quảng Ngãi và các tỉnh lân cận: Đà Nẵng, Quảng Nam, Bình Định, Phú Yên
          </p>

          {/* Contact Buttons */}
          <div className="mb-8 sm:mb-12">
            <ContactButtons />
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 transition-all hover:bg-white/15">
              <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl">🚗</div>
              <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Xe Mới</h3>
              <p className="text-xs sm:text-sm text-blue-100">Xe sạch sẽ, đầy đủ tiện nghi</p>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 transition-all hover:bg-white/15">
              <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl">⏰</div>
              <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Đúng Giờ</h3>
              <p className="text-xs sm:text-sm text-blue-100">Luôn đúng giờ, không chờ đợi</p>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 transition-all hover:bg-white/15">
              <div className="mb-2 sm:mb-3 text-3xl sm:text-4xl">💰</div>
              <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Giá Rẻ</h3>
              <p className="text-xs sm:text-sm text-blue-100">Bảng giá minh bạch, hợp lý</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-8 w-8 text-white"
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
    </section>
  );
};

