import '@styles/global.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
  title: "EduPath",
  description: "An Recommendation AI web"
}

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout