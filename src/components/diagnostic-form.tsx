"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2, Shield, Clock, Users } from "lucide-react";

// Web3Forms - sends emails directly to your address
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your .env file
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
const RECIPIENT_EMAIL = "linkedemergency@protonmail.com";

const followerRanges = [
  { value: "0-1000", label: "0 - 1,000 followers" },
  { value: "1000-5000", label: "1,000 - 5,000 followers" },
  { value: "5000-10000", label: "5,000 - 10,000 followers" },
  { value: "10000+", label: "10,000+ followers (High Priority)" },
];

const restrictionReasons = [
  { value: "unknown", label: "I don't know why" },
  { value: "automation", label: "Suspected automation" },
  { value: "content", label: "Content violation" },
  { value: "connection-requests", label: "Too many connection requests" },
  { value: "identity", label: "Identity verification" },
  { value: "hacked", label: "Account was hacked" },
  { value: "other", label: "Other reason" },
];

export function DiagnosticForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [followers, setFollowers] = useState("");
  const [reason, setReason] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Determine priority level
    const isHighPriority = followers === "10000+";
    const priorityLabel = isHighPriority ? "[HIGH PRIORITY - 10k+ followers]" : "[Standard]";
    
    // Build the submission data for Web3Forms
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `${priorityLabel} New LinkedIn Recovery Request - ${firstName} ${lastName}`,
      from_name: "LinkedIn Recovery Website",
      to: RECIPIENT_EMAIL,
      first_name: firstName,
      last_name: lastName,
      email: formData.get("email"),
      linkedin_url: formData.get("linkedinUrl") || "Not provided",
      follower_count: followers,
      restriction_reason: restrictionReasons.find(r => r.value === reason)?.label || reason,
      priority: isHighPriority ? "HIGH PRIORITY" : "Standard",
      submitted_at: new Date().toLocaleString(),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset();
        setFollowers("");
        setReason("");
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Request Received!
          </h3>
          <p className="text-gray-600 mb-4">
            We&apos;ll review your case and contact you within 24 hours with next steps.
          </p>
          <p className="text-sm text-gray-500">
            Check your email for a confirmation message.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            Free Case Assessment
          </span>
          <p className="text-sm font-normal text-gray-500 mt-1">
            Tell us about your situation
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                required
                className="h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL <span className="text-gray-400 font-normal">(optional)</span></Label>
            <Input
              id="linkedinUrl"
              name="linkedinUrl"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="followers">Follower Count</Label>
            <Select 
              name="followers" 
              required 
              value={followers}
              onValueChange={setFollowers}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select follower range" />
              </SelectTrigger>
              <SelectContent>
                {followerRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Restriction</Label>
            <Select 
              name="reason" 
              required
              value={reason}
              onValueChange={setReason}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select reason" />
              </SelectTrigger>
              <SelectContent>
                {restrictionReasons.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
            disabled={isSubmitting || !followers || !reason}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Start My Recovery"
            )}
          </Button>

          <div className="flex items-center justify-center gap-6 pt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>24hr Response</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>500+ Recovered</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
