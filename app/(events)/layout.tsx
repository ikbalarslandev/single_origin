export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-nigga-brown flex flex-col">
      {children}
      {/* Footer */}
      <p className="text-center text-black text-xs py-4">
        © {new Date().getFullYear()} Single Origin Istanbul
      </p>
    </main>
  );
}
