import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the recovery process take?",
    answer:
      "Most accounts are recovered within 2 to 4 weeks. Complex cases involving identity verification or content violations may take longer. We provide regular updates throughout the process and don't stop until your account is back.",
  },
  {
    question: "What types of restrictions can you help with?",
    answer:
      "We handle all types of LinkedIn restrictions including automation suspicions, content violations, identity verification issues, connection request limits, and account security concerns. We help even after a Permanent Restriction.",
  },
  {
    question: "Do you need my LinkedIn password?",
    answer:
      "No, we never ask for your password. We work through official LinkedIn channels and guide you through any actions needed from your end. Your account security is paramount, and we use methods that don't compromise your credentials.",
  },
  {
    question: "What if LinkedIn already denied my appeal?",
    answer:
      "We help you even if LinkedIn already said 'no.' Many clients come to us after failed self-appeals. We don't stop until your account is back. Our experience and proven strategies often succeed where initial appeals failed.",
  },
  {
    question: "Why should I pay instead of appealing myself?",
    answer:
      "While self-appeals are possible, our success rate is significantly higher because we understand LinkedIn's review process, use proven appeal strategies, and know how to present your case effectively. Many clients come to us after failed self-appeals.",
  },
  {
    question: "Is this service affiliated with LinkedIn?",
    answer:
      "No, we are an independent service and not affiliated with LinkedIn Corporation. We are professionals who specialize in navigating LinkedIn's policies and appeals process to help users recover their accounts through legitimate channels.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "We need your LinkedIn profile URL, email address associated with the account, details about the restriction (if known), and your follower count. This helps us assess your case and create an effective recovery strategy.",
  },
  {
    question: "Can you help with permanently banned accounts?",
    answer:
      "Yes, we help even after a Permanent Restriction. Many accounts marked as 'permanently restricted' can still be recovered with the right approach. We evaluate each case and work persistently until your account is restored.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-playfair)] italic text-primary text-xl mb-4">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-200 px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact Us
            <svg
              className="w-4 h-4"
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
