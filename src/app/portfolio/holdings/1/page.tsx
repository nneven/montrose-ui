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
        <div className="flex-1 space-y-2 p-8 pt-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://yt3.googleusercontent.com/mam4P3OD2amI1rA1EHmr35AvN4wM6OEqOcyG_X1bHj59FHj1j0E2wj04E_MCSA9zIFcJaMM5kQ=s900-c-k-c0x00ffffff-no-rj"
              alt="Fund Banner"
              className="w-10 rounded-md mr-3"
            />
            <h2 className="text-3xl font-bold tracking-tight pb-1">
              Anthropic
            </h2>
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
                  <CardContent className="-mb-4">
                    <p className="text-sm">
                      Anthropic PBC is an American artificial intelligence (AI)
                      startup company, founded by former members of OpenAI.
                      Anthropic develops general AI systems and large language
                      models. It is a public-benefit corporation, and has been
                      connected to the effective altruism movement. As of July
                      2023, Anthropic had raised US$1.5 billion in funding. In
                      September, Amazon announced an investment of up to US$4
                      billion, followed by a $2 billion commitment from Google
                      the following month.
                    </p>
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Anthropic, comprised of former researchers from
                      OpenAI&apos;s GPT-2 and GPT-3 teams, developed its own AI
                      chatbot named Claude, with a messaging interface similar
                      to ChatGPT for detailed responses. Initially available
                      through Slack, Claude is now accessible via claude.ai. Its
                      name, either a nod to Claude Shannon or a departure from
                      typically female-gendered AI assistant names, was chosen
                      for its friendly and male-gendered connotation. Claude 2,
                      launched in July 2023, was initially restricted to the US
                      and UK, focusing heavily on safety during its model
                      training. Dubbed &quot;Constitutional AI&quot;, this
                      approach trains the chatbot on principles from the
                      Universal Declaration of Human Rights and modern documents
                      like Apple&apos;s terms of service, emphasizing values
                      like freedom and equality.
                      <br /> <br />
                      In November 2023, Patronus AI&apos;s research compared
                      Claude 2, OpenAI&apos;s GPT-4 and GPT-4-Turbo, and Meta
                      AI&apos;s LLaMA-2 using a 150-question test based on SEC
                      filings. The test had two versions: one requiring AI
                      models to use a retrieval system to find relevant SEC
                      filings and another providing specific filings for
                      reference. The results showed that GPT-4-Turbo and LLaMA-2
                      struggled in the retrieval test, failing 81% of questions,
                      while in the long context window test, GPT-4-Turbo and
                      Claude-2 missed 21% and 24% of the questions,
                      respectively. Claude 2.1 was also released in November
                      2023.
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
                        <span>$750 Million</span>
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
                    <CardTitle>History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Founded in 2021 by former OpenAI senior members and
                      siblings Daniela and Dario Amodei, Anthropic quickly
                      diverged from OpenAI&apos;s direction, notably after
                      OpenAI&apos;s collaboration with Microsoft in 2019. By May
                      2023, the company had raised significant funding, totaling
                      $1.15 billion, with major contributions from Alameda
                      Research, Google Cloud, and Spark Capital. Google
                      Cloud&apos;s investment included a 10% stake and a
                      stipulation for Anthropic to utilize Google Cloud
                      resources.
                      <br />
                      <br />
                      Anthropic faced a lawsuit in February 2023 from Anthrop
                      LLC over trademark issues and was characterized by The New
                      York Times&apos; Kevin Roose as the &quot;Center of A.I.
                      Doomerism.&quot; The company&apos;s association with the
                      effective altruism movement and ties to notable figures
                      like Sam Bankman-Fried of FTX have been highlighted by
                      journalists. In a strategic shift towards cloud services,
                      Amazon and Google made substantial investments in
                      Anthropic in late 2023, with Amazon becoming a minority
                      stakeholder and Google committing an additional $1.5
                      billion over time, alongside using Amazon Web Services as
                      its primary cloud provider.
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
