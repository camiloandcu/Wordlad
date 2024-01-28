import WordleAlert from "@/components/wordle/WordleAlert";
import WordleBoard from "@/components/wordle/WordleBoard";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center">
      <WordleBoard />
      <WordleAlert />
    </main>
  );
}
