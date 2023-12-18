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
import { RecentSales } from "@/components/examples/recent-sales";

import { SimplePieChart } from "@/components/custom/pie-chart";
import { SimpleBarChart } from "@/components/custom/bar-chart";
import { DataTable } from "@/components/custom/holdings-table";
import { DataSources } from "@/components/custom/data-sources";

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
              src="https://www.blackrockbkcc.com/sites/g/files/knoqqb54001/themes/site/nir_pid76/dist/images/resizelogo.png"
              alt="Fund Banner"
              className="w-64"
            /> */}
            <h2 className="text-3xl font-bold tracking-tight">
              BlackRock iShares Robotics and AI Multisector ETF (IRBO)
            </h2>
            <div className="flex items-center ml-auto space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      NAV (Net Asset Value)
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
                    <div className="text-2xl font-bold">$34.20</div>
                    <p className="text-xs text-muted-foreground">
                      52 WK: $24.76 - $35.00
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      1 Day NAV Change
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
                    <div className="text-2xl font-bold">-0.12 (-0.36%)</div>
                    <p className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      NAV Total Return
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
                    <div className="text-2xl font-bold">34.82%</div>
                    <p className="text-xs text-muted-foreground">
                      YTD (year to date)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Expense Ratio
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
                    <div className="text-2xl font-bold">0.47%</div>
                    <p className="text-xs text-muted-foreground">
                      Fees as stated in the prospectus
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Objective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      The iShares Robotics and Artificial Intelligence
                      Multisector ETF seeks to track the investment results of
                      an index composed of developed and emerging market
                      companies that could benefit from the long-term growth and
                      innovation in robotics technologies and artificial
                      intelligence. Lorum ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed scelerisque elit eget justo interdum,
                      et ullamcorper velit consectetur. Sed in ultrices nunc. In
                      hac habitasse platea dictumst. Sed vitae purus euismod,
                      aliquet tortor sit amet, consequat augue. Donec ut nisl in
                      nisl aliquet aliquam. Donec id quam at velit imperdiet
                      consequat. Sed sed mi sed nisl aliquet aliquam. Donec id
                      quam at velit imperdiet consequat. Sed sed mi sed nisl
                      aliquet aliquam. Donec id quam at velit imperdiet
                      consequat. Sed sed mi sed nisl aliquet aliquam. Donec id
                      quam at velit imperdiet consequat.
                    </p>
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Why IRBO?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      1. Exposure to companies at the forefront of robotics and
                      artificial intelligence innovation
                    </p>
                    <p>
                      2. Exposure to an equal-weighted index composed of global
                      companies across the robotics and AI value chain
                    </p>
                    <p>
                      3. Seek long-term growth with companies that can shape the
                      global economic future
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                <Card>
                  <CardHeader className="-mb-4">
                    <CardTitle>Portfolio Managers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Sector Exposure</CardTitle>
                    <CardDescription>
                      <p className="text-xs text-muted-foreground">
                        as of Dec 15, 2023
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SimpleBarChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Geographic Exposure</CardTitle>
                    <CardDescription>
                      <p className="text-xs text-muted-foreground">
                        as of Dec 15, 2023
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SimplePieChart />
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-muted-foreground">
                      Geographic exposure relates principally to the domicile of
                      the issuers of the securities held in the product, added
                      together and then expressed as a percentage of the
                      product&apos;s total holdings, excluding currency
                      holdings.
                    </p>
                  </CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Holdings</CardTitle>
                    <CardDescription>
                      <p className="text-xs text-muted-foreground">
                        as of Dec 15, 2023
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataTable />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card className="h-[120vh]">
                <CardHeader>
                  <CardTitle>December 12, 2023</CardTitle>
                </CardHeader>
                <CardContent className="h-[calc(100%-4rem)]">
                  <iframe
                    className="w-full h-full"
                    src="blackrock_report_jeff_demo.pdf"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="downloads" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataSources />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
