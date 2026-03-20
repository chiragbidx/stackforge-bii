import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OverviewPage() {
  return (
    <section className="py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-2">Your Signature Activity at a Glance</h1>
      <p className="mb-6 text-muted-foreground text-lg">No signature activity to display.</p>
      <Button asChild size="lg">
        <Link href="#">Upload Document</Link>
      </Button>
    </section>
  );
}