import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Studying GA4 and GTM",
  description: "Learn and pratice GA4 and GTM",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main"></div>
          <main className="app bg-gray-50">
            <Nav />
            <div className="container mx-auto w-full h-auto my-10 flex flex-row itens-center">
              {children}
            </div>
          </main>
        </Provider>
      </body>
      <GoogleTagManager gtmId="GTM-WSTNF4VS" />
    </html>
  );
};

export default RootLayout;
