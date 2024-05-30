import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "@/styles/globals.css";
import styles from "@/styles/mainlayout.module.css";
// import 'react-alice-carousel/lib/alice-carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </head>
        <body className={styles.removedefault}>
          <main className={styles.removeoverflow}>
            {children}
          </main>
        </body>
      </html>
    </StoreProvider>
  );
}
