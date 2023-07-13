export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="mx-auto lg:mx-[8%] xl:mx-[14%] 2xl:mx-auto
     2xl:max-w-[1800px] min-h-screen text-text flex flex-col
     font-dm-sans">{children}</body>
      </html>
    )
  }