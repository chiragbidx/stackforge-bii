import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

// Purpose: Server route entry for /dashboard.
// SignPilot version: routes to dashboard welcome and CTAs.

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  return (
    <section className="py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-2">Welcome to SignPilot</h1>
      <p className="mb-4 text-lg text-muted-foreground">{getGreeting()}, {firstName}!</p>
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