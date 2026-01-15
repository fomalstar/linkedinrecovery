import { DiagnosticForm } from "@/components/diagnostic-form";
import { Mail, MessageSquare, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              LinkedIn Account Restricted? Let&apos;s Fix It
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form and our team will review your case within 24 hours.
              We&apos;ll reach out with a personalized recovery plan and next steps.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Response</h3>
                  <p className="text-gray-600">
                    We respond to all inquiries within 24 hours, often much sooner.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Support</h3>
                  <p className="text-gray-600">
                    Prefer email? Reach us at{" "}
                    <a
                      href="mailto:linkedrecoveryhelp@gmail.com"
                      className="text-primary hover:underline"
                    >
                      linkedrecoveryhelp@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Assessment</h3>
                  <p className="text-gray-600">
                    Your initial case review is completely free. No obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <DiagnosticForm />
          </div>
        </div>
      </div>
    </section>
  );
}
