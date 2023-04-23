import { Suspense } from "react";
import { NoteList } from "./NoteList";

const Home = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <NoteList />
      </Suspense>
    </main>
  );
};

export default Home;
