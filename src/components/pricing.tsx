import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Zap } from "lucide-react";

const features = [
  "Full case audit and analysis",
  "Professional appeal letter",
  "LinkedIn communication handling",
  "Email support throughout process",
  "Progress updates every 48 hours",
  "14-day money-back guarantee",
];

const premiumFeatures = [
  "Everything in Starter, plus:",
  "Priority case handling",
  "Direct phone support",
  "Expedited review process",
  "Account security audit",
  "Connection backup assistance",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. Just professional recovery service at a fair price.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <Card className="relative border-2 border-gray-200 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Recovery Starter</h3>
                  <p className="text-sm text-gray-500">For standard accounts</p>
                </div>
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$50</span>
                <span className="text-gray-500 ml-2">one-time</span>
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
                className="w-full h-12 text-base bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Ideal for accounts with less than 5,000 followers
              </p>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary shadow-xl shadow-primary/10">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              Most Popular
            </div>
            <CardHeader className="pb-4 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Priority Recovery</h3>
                  <p className="text-sm text-gray-500">For high-value accounts</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$199</span>
                <span className="text-gray-500 ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        i === 0 ? "text-primary" : "text-green-500"
                      }`}
                    />
                    <span className={`${i === 0 ? "text-primary font-medium" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full h-12 text-base bg-gradient-to-r from-primary to-blue-700 hover:from-primary/90 hover:to-blue-700/90"
                asChild
              >
                <a href="#contact">Get Priority Support</a>
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Recommended for accounts with 5,000+ followers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>14-day money-back guarantee if we can&apos;t help your case</span>
          </div>
        </div>
      </div>
    </section>
  );
}
