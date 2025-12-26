import { useState, useEffect } from "react";

export const Header = () => {
  const phoneNumber = "0905418433";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Trang chủ", action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsMenuOpen(false); } },
    { label: "Bảng giá", action: () => scrollToSection("bang-gia") },
    { label: "Dịch vụ", action: () => scrollToSection("dich-vu") },
    { label: "Tuyến đường", action: () => scrollToSection("tuyen-duong-pho-bien") },
    { label: "Khu vực", action: () => scrollToSection("khu-vuc-phuc-vu") },
    { label: "FAQ", action: () => scrollToSection("faq") },
    { label: "Giới thiệu", action: () => scrollToSection("gioi-thieu") },
    { label: "Liên hệ", action: () => scrollToSection("lien-he") },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-white shadow-md"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Taxi Xanh SM Quảng Ngãi - Trang chủ">
            <img
              src="/logo.png"
              alt="Taxi Xanh SM Quảng Ngãi - Mai Khoa Logo - Dịch vụ taxi chuyên nghiệp tại Quảng Ngãi"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-26 md:w-26 rounded-full object-cover"
              width="96"
              height="96"
              loading="eager"
            />
            <span className="text-lg sm:text-xl font-bold text-slate-800">
              Taxi<span className="text-blue-600">Khoa</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8 text-[15px] xl:text-[16px] font-medium text-slate-700">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  onClick={item.action}
                  className="group relative cursor-pointer transition-colors hover:text-blue-600"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="hidden sm:flex rounded-lg bg-gradient-to-r from-blue-600 to-green-600 px-4 py-2 text-sm sm:px-5 sm:py-2 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              <span className="hidden md:inline">Đặt xe ngay</span>
              <span className="md:hidden">Gọi</span>
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Taxi Xanh SM - Mai Khoa Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold text-slate-800">
                Taxi<span className="text-blue-600">Khoa</span>
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex-1 overflow-y-auto py-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={item.action}
                  className="w-full px-6 py-4 text-left text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-3"
                >
                  <span className="flex-1">{item.label}</span>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <a
              href={`tel:${phoneNumber}`}
              className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 text-center text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Gọi ngay: {phoneNumber}
            </a>
            <a
              href={`https://zalo.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-blue-400 px-6 py-3 text-center text-white font-semibold transition-all hover:bg-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Chat Zalo
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
