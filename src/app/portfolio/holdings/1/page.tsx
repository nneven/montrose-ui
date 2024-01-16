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
import { Separator } from "@/components/ui/separator";

import { CalendarDateRangePicker } from "@/components/examples/date-range-picker";
import { MainNav } from "@/components/examples/main-nav";
import { Search } from "@/components/examples/search";
import TeamSwitcher from "@/components/examples/team-switcher";
import { UserNav } from "@/components/examples/user-nav";

import { DataTable } from "@/components/custom/holdings-table";
import { DataSources } from "@/components/custom/data-sources";
import { PanBarChart } from "@/components/custom/pan-bar-chart";
import { SimpleLineChart } from "@/components/custom/line-chart";
import { SimpleBarChart } from "@/components/custom/bar-chart";
import { SimplePieChart } from "@/components/custom/pie-chart";
import { SourceTable } from "@/components/custom/sources-table";
import { TeamAccordion } from "@/components/custom/team-accordion-v2";

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
        <div className="flex-1 space-y-4 p-8 pt-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
              src="https://www.blackrockbkcc.com/sites/g/files/knoqqb54001/themes/site/nir_pid76/dist/images/resizelogo.png"
              alt="Fund Banner"
              className="w-64"
            /> */}
            <h2 className="text-3xl font-bold tracking-tight">Anthropic</h2>
            <div className="flex items-center ml-auto space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            {/* <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="downloads">Data Room</TabsTrigger>
            </TabsList> */}
            <TabsContent value="overview" className="space-y-4">
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                    <div className="text-2xl font-bold text-red-600">
                      -0.12 (-0.36%)
                    </div>
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
                    <div className="text-2xl font-bold text-green-600">
                      +34.82%
                    </div>
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
              </div> */}
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Anthropic AI is an artificial intelligence research and
                      deployment company founded in 2021 by former OpenAI
                      employees, including siblings Dario and Daniela Amodei. It
                      focuses on developing large-scale AI systems with a keen
                      emphasis on safety and interpretability. The
                      company&apos;s mission is to build reliable,
                      interpretable, and steerable AI systems, with an
                      overarching goal of ensuring that AI technologies are
                      aligned with human values and can be trusted to act in
                      humanity&apos;s best interest. One of their notable
                      projects is the development of a language model named
                      Claude, designed to be more transparent and easier to
                      control than existing models. Anthropic AI has attracted
                      significant attention and investment, including a $580
                      million funding round led by Sam Bankman-Fried&apos;s
                      Alameda Research. This funding highlights the
                      industry&apos;s confidence in Anthropic&apos;s approach to
                      AI safety and governance. The company is pioneering in the
                      field of AI ethics and alignment, setting itself apart by
                      focusing not just on the capabilities of AI, but also on
                      the broader implications of its deployment in society.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Facts</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Company Founding Year</span>
                        <span>2021</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Latest Funding Round</span>
                        <span>$580 Million</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Lead Investor</span>
                        <span>Alameda Research</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Key Project</span>
                        <span>Claude Language Model</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Number of Employees</span>
                        <span>Approx. 100</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Headquarters Location</span>
                        <span>San Francisco, CA</span>
                      </li>
                      <Separator />
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Founders</span>
                        <span>Dario and Daniela Amodei</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Company Mission</span>
                        <span>Developing Safe and Interpretable AI</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Primary Focus Area</span>
                        <span>AI Safety and Interpretability</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Notable Collaborations</span>
                        <span>TBD</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Research Publications</span>
                        <span>Multiple (Exact Number TBD)</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Global Impact</span>
                        <span>Industry Influence in AI Ethics</span>
                      </li>
                      <Separator />
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader className="-mb-4">
                    <CardTitle>Leadership Team</CardTitle>
                    <CardDescription>
                      This team comprises key individuals leading Anthropic,
                      focusing on developing safe and interpretable AI
                      technologies. Each plays a critical role in guiding the
                      company&apos;s research, policy, and operational
                      strategies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TeamAccordion />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Principal Investment Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The iShares Robotics and Artificial Intelligence ETF
                      (IRBO) tracks the NYSE® FactSet® Global Robotics and
                      Artificial Intelligence Index. This index selects
                      companies based on their involvement in 22 relevant
                      robotics and AI sub-industries, with eligibility criteria
                      including a minimum of 50% revenue generation or
                      significant market share in these areas. <br /> <br />
                      The Index, reviewed annually and rebalanced semi-annually,
                      includes firms from 19 countries, representing industries
                      like communication services and information technology.
                      Companies must meet a $500 million float-adjusted market
                      cap and a $2 million three-month average daily trading
                      value for inclusion. <br /> <br />
                      The Fund generally will invest at least 80% of its assets
                      in the component securities of its Underlying Index and
                      may invest up to 20% of its assets in certain futures,
                      options and swap contracts, cash and cash equivalents.
                    </p>
                  </CardContent>
                </Card>
              </div>
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>
                      Calendar Year by Year Returns vs. Benchmark
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PanBarChart />
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Historical NAV per Share</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SimpleLineChart />
                  </CardContent>
                </Card>
              </div> */}
              {/* <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Characteristics</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Number of Holdings</span>
                        <span>111</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>30 Day SEC Yield</span>
                        <span>0.38%</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Standard Deviation (3y)</span>
                        <span>25.33%</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>P/B Ratio</span>
                        <span>2.23</span>
                      </li>
                      <Separator />
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Equity Beta (3y)</span>
                        <span>1.11</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>12m Trailing Yield</span>
                        <span>0.64%</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>P/E Ratio</span>
                        <span>24.05</span>
                      </li>
                      <Separator />
                    </ul>
                  </CardContent>
                </Card>
              </div> */}
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Sector Exposure</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SimpleBarChart />
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Geographic Exposure</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SimplePieChart />
                  </CardContent>
                  <CardFooter className="text-xs text-muted-foreground">
                    Geographic exposure relates principally to the domicile of
                    the issuers of the securities held in the product, added
                    together and then expressed as a percentage of the
                    product&apos;s total holdings, excluding currency holdings.
                  </CardFooter>
                </Card>
              </div> */}
              {/* <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Holdings</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Dec 15, 2023
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DataTable />
                  </CardContent>
                </Card>
              </div> */}
              {/* <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainability Characteristics</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      as of Oct 25, 2023. This fund does not seek to follow a
                      sustainable, impact or ESG investment strategy. The
                      metrics do not change the fund&apos;s investment objective
                      or constrain the fund&apos;s investable universe, and
                      there is no indication that a sustainable, impact or ESG
                      investment strategy will be adopted by the fund. For more
                      information regarding the fund&apos;s investment strategy,
                      please see the fund&apos;s prospectus.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>MSCI ESG Fund Rating (AAA-CCC)</span>
                        <span>A</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>MSCI ESG Quality Score (0-10)</span>
                        <span>5.8</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Fund Lipper Global Classification</span>
                        <span>Equity Sector Information Tech</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>
                          MSCI Weighted Average Carbon Intensity (Tons CO2E/$M
                          SALES)
                        </span>
                        <span>29.68</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>MSCI Implied Temperature Rise (0-3.0+ °C)</span>
                        <span>&gt; 2.0° - 2.5° C</span>
                      </li>
                      <Separator />
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>MSCI ESG % Coverage</span>
                        <span>93.29%</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>MSCI ESG Quality Score - Peer Percentile</span>
                        <span>29.34%</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>Funds in Peer Group</span>
                        <span>961</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>
                          MSCI Weighted Average Carbon Intensity % Coverage
                        </span>
                        <span>96.07%</span>
                      </li>
                      <Separator />
                      <li className="flex justify-between">
                        <span>MSCI Implied Temperature Rise % Coverage</span>
                        <span>96.07%</span>
                      </li>
                      <Separator />
                    </ul>
                  </CardContent>
                </Card>
              </div> */}
            </TabsContent>
            {/* <TabsContent value="analytics" className="space-y-4"></TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card className="h-[120vh]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center justify-between">
                    <span>December 12, 2023</span>
                    <Button>Download</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[calc(100%-4rem)]">
                  <iframe
                    className="w-full h-full"
                    src="blackrock_irbo_etf_report.pdf"
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
                  <SourceTable />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataSources />
                </CardContent>
              </Card>
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </>
  );
}
