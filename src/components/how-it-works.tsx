import { ClipboardList, Search, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Details",
    description:
      "Fill out our quick diagnostic form with your LinkedIn URL and basic information about your restriction. Takes less than 2 minutes.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "We Review & Strategize",
    description:
      "Our team analyzes your case within 24 hours. We identify the best recovery approach and contact you with a personalized plan.",
    icon: Search,
  },
  {
    number: "03",
    title: "Get Your Account Back",
    description:
      "We execute the recovery strategy, handle all communication with LinkedIn, and keep you updated until your account is restored.",
    icon: PartyPopper,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve streamlined the recovery process so you can focus on what matters most.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mt-2">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Start Recovery Process
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
