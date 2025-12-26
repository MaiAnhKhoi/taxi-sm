export const FloatingContact = () => {
  const phoneNumber = "0905418433";
  const zaloLink = `https://zalo.me/${phoneNumber}`;
  const facebookLink = "https://www.facebook.com/khoa.mai.73345";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
        title="Gọi ngay"
        aria-label="Gọi điện thoại"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
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
      </a>

      {/* Zalo Button */}
      <a
        href={zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
        title="Chat Zalo"
        aria-label="Chat Zalo"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </a>

      {/* Facebook Button */}
      <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-600/50"
        title="Facebook"
        aria-label="Facebook"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
    </div>
  );
};

