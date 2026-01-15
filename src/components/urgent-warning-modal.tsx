"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X, Square, MessageSquareOff, UserX, CreditCard, LogOut } from "lucide-react";

const warningItems = [
  {
    icon: Square,
    title: "Stop all apps and tools",
    description:
      "If you use any software to send automatic messages or apply for jobs, turn it off immediately. LinkedIn's system will keep flagging you as a \"bot\" if these keep running.",
  },
  {
    icon: MessageSquareOff,
    title: "Don't send more appeals",
    description:
      "If LinkedIn said \"No\" to your first appeal, do not send a second one yet. Sending too many messages makes them ignore your case or mark it as \"spam.\"",
  },
  {
    icon: UserX,
    title: "Don't start a new account",
    description:
      "Do not try to make a \"backup\" account. LinkedIn can see your computer's ID and your internet address. If they catch you making a new profile while restricted, they may ban you permanently.",
  },
  {
    icon: CreditCard,
    title: "Be careful with your ID",
    description:
      "If LinkedIn asks for a photo of your ID, do not rush. If the photo is blurry or the ID is expired, you might lose your only chance to prove who you are.",
  },
  {
    icon: LogOut,
    title: "Log out and clear your history",
    description:
      "Log out of LinkedIn on your phone and computer. Clear your browser \"cookies\" and \"cache.\" This stops your computer from sending \"error\" signals to LinkedIn while you wait for help.",
  },
];

export function UrgentWarningModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the warning before
    const hasSeenWarning = localStorage.getItem("linkedinRecoveryWarningSeen");
    if (!hasSeenWarning) {
      // Small delay to let the page load first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("linkedinRecoveryWarningSeen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-5 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Stop! Read This First</h2>
              <p className="text-red-100 text-sm">Before you do anything else</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5 overflow-y-auto max-h-[60vh]">
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            If your LinkedIn account is restricted, <span className="font-semibold text-red-600">taking the wrong step right now could make you lose your account forever.</span> Please follow these simple rules:
          </p>

          <div className="space-y-4">
            {warningItems.map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <Button 
            onClick={handleClose}
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
          >
            I Understand, Show Me How to Recover My Account
          </Button>
          <p className="text-xs text-center text-gray-500 mt-3">
            This warning will only show once. You can focus on recovery now.
          </p>
        </div>
      </div>
    </div>
  );
}
