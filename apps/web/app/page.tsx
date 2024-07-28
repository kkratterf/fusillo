"use client";

import { Button } from "@fusillo/ui/components/button";
import { toast } from "@fusillo/ui/components/toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <Button
        variant="secondary"
        onClick={() => {
          toast("Let's start", {
            description: "Build your fantastic webapp",
          });
        }}>
        Hello world
      </Button>
    </main>
  );
}
