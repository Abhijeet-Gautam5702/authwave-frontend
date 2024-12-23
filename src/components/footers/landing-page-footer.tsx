import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AUTHWAVE_DOCS_BASE_URL } from "@/constants";

export default function LandingPageFooter() {
  return (
    <footer className="w-full px-10 py-20 lg:px-20 lg:pt-80 2xl:px-40 2xl:pt-100 flex flex-col justify-between items-center text-white text-14 2xl:text-20 bg-bg-1">
      <div className="w-full flex flex-col justify-between items-stretch gap-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-30 lg:gap-80 2xl:gap-100 mb-12">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-10 2xl:gap-20">
            <Link
              href="/"
              className="flex flex-row justify-start items-center gap-4"
            >
              <Image
                src={"/assets/images/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="2xl:w-[70px] 2xl:h-[70px]"
              />
              <p className="text-white text-20 2xl:text-26 font-bold">
                Auth Wave
              </p>
            </Link>
            <p className="text-white/60">
              Empowering Your Applications with Seamless and Secure User
              Authentication.
            </p>
            <div className="flex gap-12 2xl:gap-20 mt-2">
              <Link
                href="https://github.com/Auth-Wave"
                target="_blank"
                className="text-white/60 hover:text-white"
              >
                <FaGithub className="w-5 h-5 2xl:w-7 2xl:h-7" />
              </Link>
              <Link
                href="https://x.com/abhijeet_gautam"
                target="_blank"
                className="text-white/60 hover:text-white"
              >
                <FaXTwitter className="w-5 h-5 2xl:w-7 2xl:h-7" />
              </Link>
            </div>
          </div>
          {/* Footer Columns */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-start items-start gap-16 lg:gap-20 2xl:gap-50">
            <FooterColumn
              title="Resources"
              items={[
                {
                  title: "Documentation",
                  href: AUTHWAVE_DOCS_BASE_URL,
                },
                {
                  title: "API Reference",
                  href: `${AUTHWAVE_DOCS_BASE_URL}/docs/API%20Reference`,
                },
              ]}
            />
            <FooterColumn
              title="Product"
              items={[
                { title: "Features", href: "#features" },
                { title: "Pricing", href: "#pricing" },
                { title: "Security", href: "#security" },
              ]}
            />
            <FooterColumn
              title="Software"
              items={[
                { title: "About", href: "#hero" },
                { title: "Contact", href: "https://x.com/abhijeet_gautam" },
              ]}
            />
          </div>
        </div>
        {/* Copyright and Links */}
        <div className="w-full px-10 py-10 lg:px-20 lg:py-16 2xl:px-40 2xl:py-32 flex flex-col lg:flex-row justify-between items-center text-white/60 text-14 2xl:text-20 border-t-[0.5px] border-white/15 2xl:border-t-[1px] 2xl:border-t-white/25">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-12 2xl:gap-30">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            {/* GitHub Logo */}
            <Link href="https://github.com/Auth-Wave" target="_blank">
              <FaGithub className="w-4 h-4 2xl:w-8 2xl:h-8 hover:text-white" />
            </Link>
          </div>
          {/* Links */}
          <div className="flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-20 2xl:gap-40 mt-4 lg:mt-0">
            <p>{`Version 1.0.2`}</p>
            {/* <Link href="/docs">Docs</Link> */}
            <div className="flex flex-row justify-start items-center gap-12 2xl:gap-30">
              <p>Developer</p>
              {/* GitHub Logo */}
              <Link
                href="https://github.com/Abhijeet-Gautam5702"
                target="_blank"
              >
                <FaGithub className="w-4 h-4 2xl:w-8 2xl:h-8 hover:text-white" />
              </Link>
              <Link href="https://x.com/abhijeet_gautam" target="_blank">
                <FaXTwitter className="w-4 h-4 2xl:w-8 2xl:h-8 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="w-full lg:w-1/3">
      <h3 className="text-14 2xl:text-20 font-semibold mb-1 lg:mb-3">{title}</h3>
      <ul className="space-y-1 lg:space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              target={item.href.includes("#") ? "_self" : "_blank"}
              className="text-white/60 hover:text-white"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
