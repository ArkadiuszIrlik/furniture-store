import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="mx-auto flex min-h-screen flex-col
     font-dm-sans text-text lg:mx-[8%] xl:mx-[14%]
     2xl:mx-auto 2xl:max-w-[1800px]"
      >
        {children}
      </body>
    </html>
  );
}
