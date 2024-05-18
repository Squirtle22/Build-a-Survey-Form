import CompetitionForm from "@/components/forms/competitionForm";
import Image from "next/image";


export default function Home() {
  return (
    <div className="mobile-background md:background">
      <h1 id="title">Catch the pokemon if you can!</h1>
      <p className="header-title" id="description">Help us catch the pokemon of the month...</p>
      <CompetitionForm />
    </div>
  );
}
