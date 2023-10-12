import { NoteProvider } from "../src/app/contexts/noteContext";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../src/app/contexts/cartContext/CartContext";
import { ThemeProvider } from "../src/app/contexts/theme/ThemeContext";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <CartProvider>
          <NoteProvider>
            <Component {...pageProps} />
          </NoteProvider>
        </CartProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
