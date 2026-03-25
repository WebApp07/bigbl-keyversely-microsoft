"use client";

import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { paymentMethodSchema } from "@/lib/validators";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_PAYMENT_METHOD, PAYMENT_METHODS } from "@/lib/constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { updateUserPaymentMethod } from "@/lib/actions/user.actions";

// Removed Stripe icons from iconMap and PAYMENT_METHODS
const iconMap: Record<string, JSX.Element> = {
  PayPal: <FaPaypal size={24} color="#003087" />,
  Card: <FaCreditCard size={24} color="#4CAF50" />, // or another suitable icon
};

const PaymentMethodForm = ({
  preferredPaymentMethod,
}: {
  preferredPaymentMethod: string | null;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof paymentMethodSchema>>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: {
      type: preferredPaymentMethod || DEFAULT_PAYMENT_METHOD,
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: z.infer<typeof paymentMethodSchema>) => {
    startTransition(async () => {
      const res = await updateUserPaymentMethod(values);

      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
        return;
      }

      router.push("/place-order");
    });
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Payment Method
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Please select your preferred payment method
      </p>

      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-4"
                >
                  {PAYMENT_METHODS.map((method) => (
                    <FormItem
                      key={method}
                      className="flex items-center space-x-3 cursor-pointer rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 p-3 hover:border-blue-500 dark:hover:border-blue-400 transition"
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={method}
                          checked={field.value === method}
                          className="dark:ring-offset-gray-900"
                        />
                      </FormControl>
                      <FormLabel className="font-medium cursor-pointer flex items-center space-x-3 text-gray-900 dark:text-gray-100">
                        {iconMap[method]}
                        <span>{method}</span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
                <FormMessage className="text-red-600 mt-1" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex items-center justify-center gap-2"
            disabled={isPending}
          >
            {isPending ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentMethodForm;