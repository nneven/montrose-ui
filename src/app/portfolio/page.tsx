import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { CalendarDateRangePicker } from "@/components/examples/date-range-picker";
import { MainNav } from "@/components/examples/main-nav";
import { Search } from "@/components/examples/search";
import TeamSwitcher from "@/components/examples/team-switcher";
import { UserNav } from "@/components/examples/user-nav";

import { DataTable } from "@/components/custom/holdings-table-v2";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            {/* <img
              src="https://www.blackrockbkcc.com/sites/g/files/knoqqb54001/themes/site/nir_pid76/dist/images/resizelogo.png"
              alt="Fund Banner"
              className="w-64"
            /> */}
            <h2 className="text-3xl font-bold tracking-tight">
              Portfolio Holdings
            </h2>
            <div className="flex items-center ml-auto space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <DataTable />
        </div>
      </div>
    </>
  );
}
