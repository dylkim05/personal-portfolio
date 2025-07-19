import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", () => setIsLoaded(true));
      return () => window.removeEventListener("load", () => setIsLoaded(true));
    }
  }, []);

  return (
    <section className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-4 p-4 sm:justify-between sm:p-8 md:p-20">
      {isLoaded ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Dylan Kim
          </motion.h1>
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="aspect-square h-48 w-48 rounded-full object-cover object-center sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[300px] lg:w-[300px]"
            >
              <Image
                src="/headshot.jpg"
                alt="headshot"
                width={300}
                height={300}
                className="aspect-square h-48 w-48 rounded-full object-cover object-center sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-[300px] lg:w-[300px]"
              />
            </motion.div>
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="max-w-md text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
              >
                <div>
                  Hello! I&apos;m a Computer Science student at{" "}
                  <span className="bg-linear-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text font-bold text-transparent">
                    Northeastern University
                  </span>{" "}
                  interested in full-stack software development and machine
                  learning.
                </div>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center justify-center gap-4 lg:justify-start"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 1.6 }}
                >
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/dylan-j-kim/"
                  >
                    <FaLinkedinIn className="h-8 w-8 sm:h-10 sm:w-10" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 1.8 }}
                >
                  <Link target="_blank" href="mailto:me@dylanjkim.com">
                    <IoMdMail className="h-8 w-8 sm:h-10 sm:w-10" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 2 }}
                >
                  <Link target="_blank" href="https://github.com/dylkim05">
                    <FaGithub className="h-8 w-8 sm:h-10 sm:w-10" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 0.25,
              delay: 2.5,
              y: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex items-center justify-center"
          >
            <ArrowDownIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          </motion.div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-2xl font-bold"></div>
      )}
    </section>
  );
}
