import "./globals.css";

export const metadata = {
  title: "Engr. Mikailu Nadro | COREN Registered Structural Engineer",
  description:
    "Professional CV of Engr. Mikailu Samuel Nadro, COREN-registered Civil/Structural Engineer specialising in estate developments & structural design in Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Mono:wght@300;400;500&family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
