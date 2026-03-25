"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsappButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
      }}
    >
      <FloatingWhatsApp
        phoneNumber="+39758329526"
        accountName="Sophia Isla"
        avatar="/badges/support.png" // optional: add your logo/avatar
        chatMessage="Hello 👋 How can we help you?"
        statusMessage="Online"
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}
