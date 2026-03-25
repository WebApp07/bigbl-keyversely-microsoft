"use client";

import { useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { approveStripePayment } from "@/lib/actions/order.actions";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function StripeSuccessPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const orderId = params.id as string;
  const clientSecret = searchParams.get("payment_intent_client_secret");

  useEffect(() => {
    const confirmStripePayment = async () => {
      const stripe = await stripePromise;
      if (!stripe || !clientSecret) return;

      const { paymentIntent } =
        await stripe.retrievePaymentIntent(clientSecret);
      if (!paymentIntent) return;

      await approveStripePayment({
        orderId,
        paymentIntent: {
          id: paymentIntent.id,
          status: paymentIntent.status,
          amount: paymentIntent.amount,
          receipt_email: paymentIntent.receipt_email || "",
        },
      });
    };

    confirmStripePayment();
  }, [clientSecret, orderId]);

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full text-center p-6 border rounded-2xl shadow-md bg-white dark:bg-gray-900">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Thank you! Your payment was successful.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your order has been placed and is now being processed.
        </p>
        <Link
          href={`/order/${orderId}`}
          className="inline-block px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          View Your Order
        </Link>
      </div>
    </div>
  );
}
