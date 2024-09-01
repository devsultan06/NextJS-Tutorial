
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Authentication</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
