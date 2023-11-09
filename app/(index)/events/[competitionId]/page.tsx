import CompetitionDescription from "@/components/CompetitionDescription";
import MiningCompetitionDetail from "@/components/MiningCompetitionDetail";
import PosterContestDetail from "@/components/PosterContestDetail";
import { getCompetition } from "@/utils/registration";

async function CompetitionDetail({
  params,
}: {
  params: { competitionId: string };
}) {
  const competition: Competition[] = await getCompetition();
  if (!competition) return <div>Cannot get Competition!</div>;

  const selectedCompetition = competition.find(
    (comp) => comp.id === params.competitionId
  );

  if (!selectedCompetition) return <div>Competition ID not found!</div>;
  return (
    <>
      <CompetitionDescription
        competitionId={params.competitionId}
        competitionName={selectedCompetition?.name as string}
        competitionDescription={selectedCompetition?.description as string}
        openedAt={selectedCompetition?.openedAt as string}
        closedAt={selectedCompetition?.closedAt as string}
      />
      {selectedCompetition?.name === "Poster Contest" && (
        <PosterContestDetail />
      )}
      {selectedCompetition?.name === "Mining Competition" && (
        <MiningCompetitionDetail />
      )}
    </>
  );
}

export default CompetitionDetail;
