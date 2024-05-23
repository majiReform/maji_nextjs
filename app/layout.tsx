import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "@/styles/globals.css";
import styles from "@/styles/mainlayout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={styles.removedefault}>
          <main className={styles.removeoverflow}>
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}
