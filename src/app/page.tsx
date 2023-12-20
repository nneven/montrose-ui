import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CalendarDateRangePicker } from "@/components/examples/date-range-picker";
import { MainNav } from "@/components/examples/main-nav";
import { Search } from "@/components/examples/search";
import TeamSwitcher from "@/components/examples/team-switcher";
import { UserNav } from "@/components/examples/user-nav";
// import { Overview } from "@/components/examples/overview";
// import { RecentSales } from "@/components/examples/recent-sales";

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
            <h2 className="text-3xl font-bold tracking-tight">
              Alternative Funds Dashboard
            </h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            {/* <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList> */}
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex justify-center items-center h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.blackrockbkcc.com/sites/g/files/knoqqb54001/themes/site/nir_pid76/dist/images/resizelogo.png"
                      alt="Fund Banner"
                      className="h-full object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      iShares Robotics and AI Multisector ETF
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>ETF</p>
                      </div>
                      <div>
                        <p className="font-semibold">AUM</p>
                        <p>$578 Million</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Profile</p>
                        <p>Medium</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Return</p>
                        <p>+33.05%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/blackrock-robotics-and-ai-etf"
                      className="w-full flex justify-center"
                    >
                      <Button className="bg-green-600 hover:bg-green-700 w-1/2">
                        Fund Info
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-center items-center h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://static.otta.com/uploads/images/company-logos/290-gVcazm4lefgPE2S5FbaxxMiWQzXBpqRnfnF3Go6nALU.png"
                      alt="Entrepreneur First Banner"
                      className="h-full object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      Entrepreneur First US Fund I
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>Venture Capital</p>
                      </div>
                      <div>
                        <p className="font-semibold">AUM</p>
                        <p>$10 Billion</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Profile</p>
                        <p>High</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Performance</p>
                        <p>+14.2%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 hover:bg-green-700 w-1/2">
                      Fund Info
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-center items-center h-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://ir.alti-global.com/sites/g/files/knoqqb87741/themes/site/dist/images/alvalogo.png"
                      alt="Alti Global Banner"
                      className="h-full object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      AlTi Global Fund VII
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm my-4">
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>Asset Management</p>
                      </div>
                      <div>
                        <p className="font-semibold">AUM</p>
                        <p>$69 Billion</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Profile</p>
                        <p>Low</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Performance</p>
                        <p>+12.34%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 hover:bg-green-700 w-1/2">
                      Fund Info
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-center items-center h-48">
                    <img
                      src="https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/Blackstone-PRESS-QUALITY-6312.png"
                      alt="Blackstone Fund Banner"
                      className="h-full object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      Blackstone Alternative Multi-Strategy I
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>Private Equity</p>
                      </div>
                      <div>
                        <p className="font-semibold">AUM</p>
                        <p>$85 Billion</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Profile</p>
                        <p>Moderate</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Performance</p>
                        <p>+5.12%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 hover:bg-green-700 w-1/2">
                      Fund Info
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-center items-center h-48">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sequoia_Capital_logo.svg/2560px-Sequoia_Capital_logo.svg.png"
                      alt="Sequoia Capital Banner"
                      className="h-full object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      Sequoia Capital Fund VI
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>Venture Capital</p>
                      </div>
                      <div>
                        <p className="font-semibold">AUM</p>
                        <p>$35 Billion</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Profile</p>
                        <p>High</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Performance</p>
                        <p>+8.91%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 hover:bg-green-700 w-1/2">
                      Fund Info
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex justify-center items-center h-48">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bridgewater_Associates.png/260px-Bridgewater_Associates.png"
                      alt="Bridgewater Associates Banner"
                      className="h-full object-contain"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      Bridgewater All Weather Fund
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>Hedge Fund</p>
                      </div>
                      <div>
                        <p className="font-semibold">AUM</p>
                        <p>$140 Billion</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Profile</p>
                        <p>Low</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Performance</p>
                        <p>+3.51%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 hover:bg-green-700 w-1/2">
                      Fund Info
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
