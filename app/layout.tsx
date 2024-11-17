import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["hebrew"] });

export const metadata = {
  title: "אירועים מושלמים - מתכננת אירועים מקצועית",
  description: "תכנון וארגון חתונות ואירועים פרטיים בישראל",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
