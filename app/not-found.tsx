import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "404 | Nirmaan UI",
};

export default function NotFound() {
  return (
    <div className="h-[80vh]  flex flex-col items-center justify-center gap-4">
      <PageHeader title="404" className="mb-0 ">
        The page you&apos;re looking for does not exist or is no longer here.
      </PageHeader>
      <div className="text-center">
        <Button asChild className="rounded-full bg-[#4871FF]">
          <Link href="/">Browse components</Link>
        </Button>
      </div>
    </div>
  );
}
