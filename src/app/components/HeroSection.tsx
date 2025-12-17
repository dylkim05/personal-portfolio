import Image from "next/image";
import { quintessential, caudex } from "../lib/fonts";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-4 md:gap-10 items-start md:items-center justify-center p-25 mx-auto">
      <h1
        className={`text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black ${quintessential.className} select-none transition-all duration-300`}
      >
        Dylan Kim
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-center md:gap-10 w-full max-w-6xl mx-auto transition-all duration-300">
        <Image
          src="/headshot.jpg"
          alt="headshot"
          width={300}
          height={300}
          draggable={false}
          className="aspect-square rounded-md object-cover object-center draggable-none hidden md:block w-full md:w-1/2 lg:w-full"
        />
        <div className="flex flex-col gap-4 items-start justify-center max-w-sm md:max-w-xl lg:max-w-sm">
          <p
            className={`text-2xl lg:text-4xl text-gray-900 leading-tight tracking-tighter text-left font-bold ${caudex.className} select-none`}
          >
            Hello! I&apos;m a Computer Science student at{" "}
            <span className="text-rose-600 font-bold overflow-visible">
              Northeastern University
            </span>{" "}
            interested in full-stack software development and machine learning.
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
      </div>
    </section>
  );
}
