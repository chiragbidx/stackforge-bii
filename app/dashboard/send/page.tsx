import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SendPage() {
  return (
    <section className="py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Send Document for Signature</h1>
      <p className="mb-6 text-muted-foreground text-lg">Select a document to start the signature process.</p>
      <Button asChild size="lg">
        <Link href="#">Choose Document</Link>
      </Button>
    </section>
  );
}