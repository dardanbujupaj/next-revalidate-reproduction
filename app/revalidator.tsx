"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Revalidator() {
  const router = useRouter();
  const pathname = usePathname();

  const revalidate = useCallback(
    async () => {
      await fetch(`/api/revalidate?path=${pathname}`)
      router.refresh()
    },
    [pathname, router]
  );

  return <button onClick={revalidate}>revalidate</button>;
}
