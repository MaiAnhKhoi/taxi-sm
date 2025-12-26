import { ContactButtons } from "./ContactButtons";

export const Footer = () => {
  const phoneNumber = "0905418433";
  const zaloLink = `https://zalo.me/${phoneNumber}`;
  const facebookLink = "https://www.facebook.com/khoa.mai.73345";

  return (
    <footer id="lien-he" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Taxi Xanh SM - Mai Khoa</h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-400">
              Dịch vụ taxi chuyên nghiệp, uy tín tại <strong className="text-white">Quảng Ngãi</strong> với nhiều năm kinh nghiệm. 
              Phục vụ nội thành và ngoại thành Quảng Ngãi với giá cả hợp lý.
            </p>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Taxi Xanh SM Quảng Ngãi - Logo dịch vụ taxi chuyên nghiệp"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
                width="80"
                height="80"
                loading="lazy"
              />
              <span className="text-base sm:text-lg font-semibold">
                Taxi<span className="text-blue-400">Khoa</span>
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Thông Tin Liên Hệ</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href={`tel:${phoneNumber}`} className="hover:text-white">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook: Mai Khoa
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <a
                  href={zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Zalo: {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-yellow-500"
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
                <span>Tỉnh Quảng Ngãi, Việt Nam</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Liên Kết Nhanh</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <a href="#bang-gia" className="hover:text-white transition">
                  Bảng Giá
                </a>
              </li>
              <li>
                <a href="#dich-vu" className="hover:text-white transition">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#tuyen-duong-pho-bien" className="hover:text-white transition">
                  Tuyến Đường
                </a>
              </li>
              <li>
                <a href="#khu-vuc-phuc-vu" className="hover:text-white transition">
                  Khu Vực Phục Vụ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
              <li>
                <a href="#gioi-thieu" className="hover:text-white transition">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-white transition">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-6 sm:mt-8 border-t border-gray-800 pt-6 sm:pt-8">
          <div className="mb-3 sm:mb-4 text-center">
            <p className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">
              Đặt xe ngay - Liên hệ với chúng tôi
            </p>
            <ContactButtons />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Taxi Xanh SM - Mai Khoa. Tất cả quyền được bảo lưu.
          </p>
          <p className="mt-2">
            Hotline: <a href={`tel:${phoneNumber}`} className="text-white hover:underline font-semibold">{phoneNumber}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

