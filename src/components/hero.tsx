import { DiagnosticForm } from "@/components/diagnostic-form";
import { HandDrawnArrowCurved } from "@/components/hand-drawn-arrow";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Italic Accent Question */}
            <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl lg:text-2xl mb-4">
              Why Is My LinkedIn Account Restricted?
            </p>

            {/* Main Headline - H1 with main keyword */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              LinkedIn Account Restricted?{" "}
              <span className="text-primary">We Can Help</span>
            </h1>

            {/* Subtext with keywords */}
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Don&apos;t lose years of connections to an automated restriction. 
              Our LinkedIn account recovery experts have helped 500+ professionals 
              fix their restricted LinkedIn accounts. Starting at just <span className="font-semibold text-gray-900">$50</span>.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
              {/* Avatar Stack */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-medium shadow-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-green-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <span className="font-semibold">4.9</span>/5 from 200+ reviews
                </span>
              </div>
            </div>

            {/* Arrow pointing to form (visible on desktop) */}
            <div className="hidden lg:block relative">
              <HandDrawnArrowCurved className="w-32 h-auto absolute -right-8 top-0 rotate-12 opacity-70" />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />
            
            <div className="relative">
              <DiagnosticForm />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-gray-100 bg-gray-50/50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center font-[family-name:var(--font-playfair)] italic text-primary text-lg mb-6">
            Trusted LinkedIn Account Recovery Service
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"].map(
              (company) => (
                <span
                  key={company}
                  className="text-xl font-bold text-gray-400 tracking-tight"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
