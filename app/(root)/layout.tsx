

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
          sidebar_here
          {children}
    </main>
  );
}
