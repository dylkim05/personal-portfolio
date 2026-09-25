import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-8 items-start w-full text-left">
      <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black">
        Dylan Kim
      </h1>

      <div className="flex flex-col gap-6 items-start max-w-3xl">
        <p className="text-xl md:text-3xl lg:text-4xl text-gray-800 tracking-tight">
          Hello! I&apos;m a Computer Science student at Northeastern University
          specializing in full-stack software development.
        </p>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/dylan-j-kim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8" />
          </Link>
          <Link
            href="mailto:me@dylankim.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="w-8 h-8" />
          </Link>
          <Link
            href="https://github.com/dylkim05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
