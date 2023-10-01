import { NoteProvider } from "@/app/contexts/noteContext";

export default function MyApp({Component, pageProps}) {
  return (
    <NoteProvider>
      <Component {...pageProps}/>
    </NoteProvider>
  );
}