import { hind } from "@/fonts/font";
import { CreateCard, memberCard } from "@/components/dashboard/micro/teamCard";
import React, { Component, lazy, Suspense, ComponentType } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CompetitionList from "@/app/(index)/register/CompetitionList";
const CreateCardLazy = React.lazy(() =>
  import("./micro/teamCard").then(({ CreateCard }) => ({ default: CreateCard }))
);

const MemberCardLazy = React.lazy(() =>
  import("./micro/teamCard").then(({ memberCard }) => ({ default: memberCard }))
);

interface teamProps {
  team: Member[] | null;
  teamId: string;
  accessToken?: string;
}

export default function Team({ team, teamId, accessToken }: teamProps) {
  return (
    <>
      {/* Content */}
      <div className={`${hind.className} flex-1 px-2 sm:px-0`}>
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold text-slate-100">Groups</h3>
          {/*<div className="inline-flex items-center space-x-2">*/}
          {/*    <a className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"*/}
          {/*       href="#">*/}
          {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*/}
          {/*             viewBox="0 0 24 24" stroke="currentColor">*/}
          {/*            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
          {/*                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>*/}
          {/*        </svg>*/}
          {/*    </a>*/}
          {/*    <a className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"*/}
          {/*       href="#">*/}
          {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*/}
          {/*             viewBox="0 0 24 24" stroke="currentColor">*/}
          {/*            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
          {/*                  d="M4 6h16M4 10h16M4 14h16M4 18h16"/>*/}
          {/*        </svg>*/}
          {/*    </a>*/}
          {/*</div>*/}
        </div>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Suspense fallback={<Skeleton className="w-64 h-64 rounded-md" />}>
            <CreateCardLazy teamId={teamId} />
          </Suspense>
          {team ? (
            team.map((obj, index) => (
              <Suspense
                key={index}
                fallback={<Skeleton className="w-64 h-64 rounded-md" />}
              >
                <MemberCardLazy
                  teamMemberId={obj.id}
                  teamId={teamId}
                  name={obj.name}
                  image={obj?.ktm!}
                  roleId={parseInt(obj.role)}
                />
              </Suspense>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}
