import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield } from "lucide-react";

const features = [
  "Full case audit and analysis",
  "Professional appeal letter",
  "LinkedIn communication handling",
  "Email support throughout process",
  "Progress updates throughout recovery",
  "We help even after a Permanent Restriction",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
            Simple, Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            LinkedIn Account Recovery: $50
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. One flat fee to get your account back.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-lg mx-auto">
          <Card className="relative border-2 border-primary shadow-xl shadow-primary/10">
            <CardHeader className="pb-4 text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Recovery</h3>
                <p className="text-sm text-gray-500 mt-1">For all restricted accounts</p>
              </div>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$50</span>
                <span className="text-gray-500 ml-2">one-time fee</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#contact">Get Started for $50</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Commitment Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-5 py-3 rounded-full text-sm font-medium border border-blue-200">
            <Shield className="w-5 h-5" />
            <span>We don&apos;t stop until your account is back. Most accounts are recovered within 2 to 4 weeks.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
