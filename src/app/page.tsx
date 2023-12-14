import { Metadata } from "next";
import Image from "next/image";

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
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {/* <TabsTrigger value="analytics">Analytics</TabsTrigger> */}
              <TabsTrigger value="reports">Reports</TabsTrigger>
              {/* <TabsTrigger value="notifications">Notifications</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Portfolio Value
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$64.9B</div>
                    <p className="text-xs text-muted-foreground">
                      +5.4% YTD (Year-to-Date)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Annual Return
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+18.7%</div>
                    <p className="text-xs text-muted-foreground">
                      Compared to 10% market average
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Risk Exposure
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Moderate</div>
                    <p className="text-xs text-muted-foreground">
                      Balanced risk profile
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Top Performing Asset
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Entrepreneur First</div>
                    <p className="text-xs text-muted-foreground">
                      +34.2% growth this quarter
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.blackrockbkcc.com/sites/g/files/knoqqb54001/themes/site/nir_pid76/dist/images/resizelogo.png"
                      alt="Fund Banner"
                      className="w-full"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg">
                      Robotics and AI Multisector ETF
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Ticker</p>
                        <p>IRBO</p>
                      </div>
                      <div>
                        <p className="font-semibold">NAV</p>
                        <p>$33.87</p>
                      </div>
                      <div>
                        <p className="font-semibold">Expense Ratio</p>
                        <p>0.47%</p>
                      </div>
                      <div>
                        <p className="font-semibold">YTD Return</p>
                        <p>+33.05%</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 w-1/2">Fund Info</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://static.otta.com/uploads/images/company-logos/290-gVcazm4lefgPE2S5FbaxxMiWQzXBpqRnfnF3Go6nALU.png"
                      alt="Entrepreneur First Banner"
                      className="w-full py-8"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg mt-2">
                      Entrepreneur First
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 mb-2">
                      <div>
                        <p className="font-semibold">Investment Focus</p>
                        <p>Tech Startups</p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Collective Startup Value
                        </p>
                        <p>Over $10B</p>
                      </div>
                      <div>
                        <p className="font-semibold">Notable Backers</p>
                        <p>Reid Hoffman, Vitruvian</p>
                      </div>
                      <div>
                        <p className="font-semibold">Global Reach</p>
                        <p>New York, London, and Paris</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 w-1/2">Fund Info</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://ir.alti-global.com/sites/g/files/knoqqb87741/themes/site/dist/images/alvalogo.png"
                      alt="Alti Global Banner"
                      className="w-full py-8"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-bold text-lg mt-2">
                      AlTi Global
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm my-4">
                      <div>
                        <p className="font-semibold">Strategy</p>
                        <p>Diversified Multi-Strategy</p>
                      </div>
                      <div>
                        <p className="font-semibold">Fund Type</p>
                        <p>Fund of Funds</p>
                      </div>
                      <div>
                        <p className="font-semibold">Assets Under Management</p>
                        <p>$69B</p>
                      </div>
                      <div>
                        <p className="font-semibold">Investor Qualification</p>
                        <p>Accredited Investors</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center w-full">
                    <Button className="bg-green-600 w-1/2">Fund Info</Button>
                  </CardFooter>
                </Card>
              </div>
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
