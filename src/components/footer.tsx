import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Success Stories", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <svg
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-auto"
              >
                <circle cx="10" cy="8" r="6" stroke="#2563eb" strokeWidth="2.5" fill="none" />
                <circle cx="30" cy="8" r="6" stroke="#2563eb" strokeWidth="2.5" fill="none" />
                <path
                  d="M10 14 Q20 24 30 14"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-bold text-lg text-gray-900">
                LinkedIn<span className="text-primary">Recovery</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-sm">
              Professional LinkedIn account recovery service. Is your LinkedIn account restricted? 
              We help professionals recover their restricted LinkedIn accounts and get back to networking.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Email:</strong>{" "}
              <a href="mailto:linkedemergency@protonmail.com" className="text-primary hover:underline">
                linkedemergency@protonmail.com
              </a>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LinkedIn Recovery. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center md:text-right max-w-md">
            Disclaimer: This service is not affiliated with, endorsed by, or connected to LinkedIn Corporation. 
            LinkedIn is a registered trademark of LinkedIn Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
