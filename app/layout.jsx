import '@styles/global.css';

export const metadata = {
  title: "EduPath",
  description: "An Recommendation AI web"
}

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout