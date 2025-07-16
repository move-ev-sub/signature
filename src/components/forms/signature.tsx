"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod/v4";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EMAIL_DOMAIN } from "@/lib/consts";
import type { SignatureProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { signatureSchema } from "@/lib/validations";
import React from "react";
import { useSignatureStore } from "../stores/signature-provider";

export function SignatureForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const store = useSignatureStore((store) => store);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signatureSchema>>({
    resolver: zodResolver(signatureSchema),
    defaultValues: {
      name: store.name,
      username: store.username,
      position: store.position,
      phone: store.phone,
    },
  });

  // Efficient form watching with useCallback to prevent unnecessary re-renders
  const updateStore = React.useCallback(
    (values: Partial<SignatureProps>) => {
      if (values.name !== undefined) store.setName(values.name);
      if (values.phone !== undefined) store.setPhone(values.phone ?? "");
      if (values.position !== undefined) store.setPosition(values.position);
      if (values.username !== undefined) store.setUsername(values.username);
    },
    [store],
  );

  // Single useEffect with proper dependency management
  React.useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name) {
        // Update only the changed field
        updateStore({ [name]: (value as Record<string, unknown>)[name] });
      } else {
        // Update all fields
        updateStore(value);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, updateStore]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signatureSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid grid-cols-2 gap-8", className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Max Mustermann"
                  type="name"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormDescription>Dein Vor- und Nachname</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Benutzername</FormLabel>
              <div className="flex items-center justify-start gap-2.5">
                <FormControl>
                  <Input
                    placeholder="max.mustermann"
                    autoComplete="username"
                    {...field}
                  />
                </FormControl>
                <span className="text-muted-foreground shrink-0 text-sm">
                  @{EMAIL_DOMAIN}
                </span>
              </div>
              <FormDescription>
                Dein Benutzername im Format{" "}
                <span className="font-medium">vorname.nachname</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input
                  placeholder="+49 123 456789"
                  autoComplete="mobile tel"
                  type="tel"
                  pattern="[0-9]{2,3} [0-9]{2} [0-9]{4}"
                  {...field}
                />
              </FormControl>

              <FormDescription>
                Deine Mobil-Nummer im Format{" "}
                <span className="font-medium">+49 123 456789</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Vorstand für IT und QM" {...field} />
              </FormControl>

              <FormDescription>
                Nur für Vorstand oder Ressortleitung; sonst leer lassen
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
