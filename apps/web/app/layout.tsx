export const metadata = {
  title: "CourtFlow",
  description: "Public court booking platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 24 }}>
        {children}
      </body>
    </html>
  );
}
