import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, MessageSquare, CheckCircle, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Audit Your Case",
    subtitle: "We Can...",
    description:
      "Getting restricted feels overwhelming. LinkedIn's automated systems make mistakes. We dig deep to understand exactly why your account was flagged and build the strongest possible case for recovery.",
    points: [
      "Analyze your account history and activity patterns",
      "Identify the specific restriction triggers",
      "Review LinkedIn's terms to find your best angle",
      "Assess your recovery probability and timeline",
    ],
    icon: Search,
    visual: "audit",
  },
  {
    title: "Craft Your Appeal",
    subtitle: "We Can...",
    description:
      "Generic appeals get ignored. Our team has learned what works through hundreds of successful recoveries. We create personalized, professional appeals that get real human attention at LinkedIn.",
    points: [
      "Write a compelling appeal letter tailored to your case",
      "Include the right documentation and evidence",
      "Use proven language that resonates with LinkedIn reviewers",
      "Submit through the most effective channels",
    ],
    icon: FileText,
    visual: "appeal",
  },
  {
    title: "Handle Communication",
    subtitle: "We Can...",
    description:
      "Dealing with LinkedIn support is frustrating. Automated responses, long wait times, and unclear processes. We manage all communication so you can focus on your business while we get results.",
    points: [
      "Track and respond to all LinkedIn correspondence",
      "Escalate your case when necessary",
      "Navigate the appeals process efficiently",
      "Keep you updated with regular progress reports",
    ],
    icon: MessageSquare,
    visual: "communication",
  },
];

function FeatureVisual({ type }: { type: string }) {
  const visuals = {
    audit: (
      <div className="relative">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Case Analysis</div>
              <div className="text-sm text-gray-500">In Progress</div>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Account History", status: "complete" },
              { label: "Activity Patterns", status: "complete" },
              { label: "Restriction Triggers", status: "active" },
              { label: "Recovery Strategy", status: "pending" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    item.status === "complete"
                      ? "bg-green-100 text-green-600"
                      : item.status === "active"
                      ? "bg-blue-100 text-primary"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {item.status === "complete" ? (
                    <CheckCircle className="w-3.5 h-3.5" />
                  ) : item.status === "active" ? (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  )}
                </div>
                <span
                  className={`text-sm ${
                    item.status === "pending" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Floating badge */}
        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          Live Analysis
        </div>
      </div>
    ),
    appeal: (
      <div className="relative">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-gray-900">Appeal Draft</div>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Ready
            </span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
            <div className="h-3 bg-gray-200 rounded w-4/5" />
            <div className="h-3 bg-gray-100 rounded w-3/4" />
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-500">Professional Language</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-xs text-gray-500">Optimized</span>
            </div>
          </div>
        </div>
        {/* Floating attachment */}
        <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-xs text-gray-600">evidence.pdf</span>
          </div>
        </div>
      </div>
    ),
    communication: (
      <div className="relative">
        <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
          <div className="space-y-3">
            {[
              { from: "LinkedIn", msg: "We received your appeal...", time: "2d ago" },
              { from: "Our Team", msg: "Escalation submitted...", time: "1d ago" },
              { from: "LinkedIn", msg: "Your account has been...", time: "4h ago", highlight: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  item.highlight
                    ? "bg-green-50 border border-green-200"
                    : item.from === "Our Team"
                    ? "bg-blue-50 border border-blue-100"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-900">{item.from}</span>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{item.msg}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Notification badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
          3
        </div>
      </div>
    ),
  };

  return visuals[type as keyof typeof visuals] || null;
}

export function Features() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
            What Can We Do For You?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Professional Recovery Services
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="font-[family-name:var(--font-playfair)] italic text-primary text-lg mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>

                <Card className="border-l-4 border-l-primary bg-blue-50/50">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-gray-900 mb-3">
                      With our {feature.title.toLowerCase()} service, you get:
                    </p>
                    <ul className="space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative z-10">
                  <FeatureVisual type={feature.visual} />
                </div>
                {/* Background decoration */}
                <div
                  className={`absolute w-64 h-64 rounded-full blur-3xl opacity-20 ${
                    index % 2 === 0
                      ? "bg-blue-300 -right-8 -bottom-8"
                      : "bg-blue-200 -left-8 -top-8"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
