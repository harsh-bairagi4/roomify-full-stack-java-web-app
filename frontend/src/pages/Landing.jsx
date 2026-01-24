import Header from "@/components/Header";
import SectionCTA from "@/components/SectionCTA";
import SectionProblem from "@/components/SectionProblem";
import SectionSolution from "@/components/SectionSolution";
import SectionSteps from "@/components/SectionSteps";


export default function Landing() {

  return (
    <>
    <Header/>
    <SectionProblem/>
    <SectionSolution/>
    <SectionSteps/>
    <SectionCTA/>
    </>
  );
}
