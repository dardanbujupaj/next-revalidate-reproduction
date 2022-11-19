import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Static</Link> | <Link href="/dynamic">Dynamic</Link>
        </nav>
        <section>{children}</section>
      </body>
    </html>
  );
}
