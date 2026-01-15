import { DiagnosticForm } from "@/components/diagnostic-form";
import { HandDrawnArrowCurved } from "@/components/hand-drawn-arrow";
import { AlertTriangle, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Urgency Warning Banner */}
      <div className="relative z-10 bg-amber-500 text-white py-3 px-4">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-3 text-center">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">Time is critical:</span> The first 7 days after restriction offer the highest chance of recovery. 
            <span className="hidden sm:inline"> Acting quickly can make the difference between getting your account back or losing it permanently.</span>
            <Clock className="w-4 h-4 inline ml-2 mb-0.5" />
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline - H1 with main keyword */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              LinkedIn Account Permanently Restricted?{" "}
              <span className="text-primary">Get Recovery Help For $50</span>
            </h1>

            {/* Subtext with keywords */}
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Don&apos;t lose years of work and connections. We help you even if LinkedIn already said &quot;no.&quot; 
              Our experts have fixed over 500 accounts. Get started now for just <span className="font-semibold text-gray-900">$50</span>.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-5 py-3 rounded-full text-sm font-medium border border-green-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Successfully recovered over 500 accounts since 2020</span>
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

    </section>
  );
}
