import { LogoInstagram } from "@carbon/icons-react";

export default function FooterComponent() {
  return (
    <div className="mb-8 flex flex-col justify-center items-center">
      <div className="text-2xl">Kim Euntae</div>
      <div className="text-gray-400">
        Thank You for Visiting, Have a Good Day 😍
      </div>
      <a
        href="https://www.instagram.com/kiimtaeee_foto"
        target="_blank"
        rel="noopener noreferrer"
        className="flex mt-4 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <LogoInstagram size={36} />
      </a>
      <div className="text-gray-400">
        © 2025 Developed and Designed by Kim Euntae
      </div>
    </div>
  );
}
