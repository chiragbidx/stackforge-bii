"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <section className="py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-2">Welcome to SignPilot</h1>
      <p className="mb-4 text-lg text-muted-foreground">{greeting}, {firstName}!</p>
      <p className="mb-6 text-muted-foreground text-md">
        No documents yet. Upload your first document to get started.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="#">Upload Document</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#">Send Document for Signature</Link>
        </Button>
      </div>
    </section>
  );
}