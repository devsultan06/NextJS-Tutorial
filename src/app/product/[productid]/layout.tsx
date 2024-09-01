
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h2>Features Products</h2>
        {children}
      </body>
    </html>
  );
}
