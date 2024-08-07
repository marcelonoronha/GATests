import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "GAtests",
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
            <div className="container w-full h-full my-10 ml-16 flex flex-row">
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
