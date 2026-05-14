// import React from 'react';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#334454] text-white pt-[96px] pb-[40px] px-[40px] md:px-[80px] lg:px-[143px] flex flex-col items-center justify-between">
//       <div className="w-full max-w-[1440px]  h-[433.89px] flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-[100px]">
//         {/* ── Logo ── */}
//         <div className="flex-shrink-0 ml-[143px]">
//           <Image
//             src="/dummyimages/logo (2).svg"
//             alt="Chameri Logo"
//             width={138}
//             height={183}
//             className="w-[100px] md:w-[138px] h-auto "
//           />
//         </div>

//         {/* ── Links Container ── */}
//         <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-[40px] md:gap-[89px] w-full lg:w-auto lg:pt-[46px]">

//           {/* Quick Links */}
//           <div className="flex flex-col gap-[25px] min-w-[179px]">
//             <h3 className="font-roundo font-medium text-[24px] leading-[24px] capitalize">
//               Quick Links
//             </h3>
//             <ul className="flex flex-col gap-[15px] font-sans font-normal text-[16px] leading-[12px] tracking-[-0.01em] text-[#EDE7DE]/80">
//               <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Project</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Address */}
//           <div className="flex flex-col gap-[20px] max-w-[200px]">
//             <h3 className="font-roundo font-medium text-[24px] leading-[24px] capitalize">
//               Address
//             </h3>
//             <p className="font-sans font-normal text-[18px] leading-[22px] text-[#EDE7DE]/80">
//               #27/205, Madapeedika, Paral (PO), Thalasserry, Kannur, Kerala, 670601
//             </p>
//           </div>

//           {/* Contact Us */}
//           <div className="flex flex-col gap-[20px] min-w-[200px]">
//             <h3 className="font-roundo font-medium text-[24px] leading-[24px] capitalize">
//               Contact Us
//             </h3>
//             <div className="flex flex-col gap-[7px] font-sans font-normal text-[18px] leading-[23px] text-[#EDE7DE]/80">
//               <a href="tel:+919188913114" className="hover:text-white transition-colors">+91 91889 13114</a>
//               <a href="tel:+919188913114" className="hover:text-white transition-colors">+91 91889 13114</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom Section (Copyright & Socials) ── */}
//       <div className="flex items-center justify-end gap-[10px] text-[#EDE7DE] bg-[#334454]">
//           {/* Instagram */}
//           <a href="#" className="hover:text- hover:scale-110 transition-all mb-4 cursor-pointer">
//             <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
//               <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
//             </svg>
//           </a>
//           {/* Facebook */}
//           <a href="#" className="hover:text-white hover:scale-110 transition-all">
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//             </svg>
//           </a>
//           {/* YouTube */}
//           <a href="#" className="hover:text-white hover:scale-110 transition-all">
//             <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//             </svg>
//           </a>
//           {/* Pinterest */}
//           <a href="#" className="hover:text-white hover:scale-110 transition-all">
//             <svg width="29" height="29" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" />
//             </svg>
//           </a>
//         </div>
//       <div className="w-full max-w-[1440px] md:flex-row justify-between  text-right gap-12 pt-[30px] border-t border-white/10">
//         <p className="font-sans font-normal text-[12px] leading-[8.4px] text-white">
//           © Chameri Builders pvt limited
//         </p>
//          </div>



//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#334454] text-white pt-[60px] pb-[40px] px-[40px] md:px-[80px] lg:px-[100px]">
      <div className="w-full max-w-[1440px] mx-auto">

        {/* ── Top Section ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 pb-[40px]">

          {/* Logo Column */}
          <div className="flex-shrink-0 flex items-start justify-center lg:justify-start lg:pr-[60px] lg:border-r lg:border-white/20">
            <Image
              src="/dummyimages/logo (2).svg"
              alt="Chameri Logo"
              width={138}
              height={183}
              className="w-[100px] md:w-[120px] h-auto"
            />
          </div>

          {/* Links Container */}
          <div className="flex flex-col md:flex-row flex-wrap gap-[40px] md:gap-[60px] lg:gap-[80px] lg:pl-[60px] lg:pt-[10px] w-full">

            {/* Quick Links */}
            <div className="flex flex-col gap-[20px] min-w-[140px]">
              <h3 className="font-roundo font-medium text-[20px] leading-[24px] capitalize text-white">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-[14px] font-sans font-normal text-[15px] leading-[1.4] text-[#EDE7DE]/80">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-[20px] max-w-[220px]">
              <h3 className="font-roundo font-medium text-[20px] leading-[24px] capitalize text-white">
                Address
              </h3>
              <p className="font-sans font-normal text-[15px] leading-[1.6] text-[#EDE7DE]/80">
                #27/205, Madapeedika, Paral (PO), Thalasserry, Kannur, Kerala, 670601
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-[20px] min-w-[180px]">
              <h3 className="font-roundo font-medium text-[20px] leading-[24px] capitalize text-white">
                Contact Us
              </h3>
              <div className="flex flex-col gap-[10px] font-sans font-normal text-[15px] leading-[1.5] text-[#EDE7DE]/80">
                <a href="tel:+919188913114" className="hover:text-white transition-colors">+91 91889 13114</a>
                <a href="tel:+919188913114" className="hover:text-white transition-colors">+91 91889 13114</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Section ── */}
        <div className="border-t border-white/10 pt-[24px] flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="font-sans font-normal text-[12px] text-white/80 order-2 md:order-1">
            © Chameri Builders pvt limited
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-[14px] text-[#EDE7DE] order-1 md:order-2">
            {/* Instagram */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" className="hover:text-white hover:scale-110 transition-all">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;