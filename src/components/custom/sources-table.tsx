import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const sources = [
  {
    title: "iShares Robotics and AI Multisector ETF Homepage",
    date: "2023-12-14",
    format: "Web Page",
    url: "https://www.blackrock.com/us/individual/products/297905/ishares-robotics-and-artificial-intelligence-multisector-etf",
  },
  {
    title: "Product Brief",
    date: "2023-09-01",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/product-brief/ishares-robotics-and-artificial-intelligence-irbo-etf-product-brief-en-us.pdf",
  },
  {
    title: "Megatrends Product Brief",
    date: "2023-09-01",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/product-brief/megatrends-product-brief.pdf",
  },
  {
    title: "Fact Sheet",
    date: "2023-09-30",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/fact-sheet/irbo-ishares-robotics-and-artificial-intelligence-multisector-etf-fund-fact-sheet-en-us.pdf",
  },
  {
    title: "Prospectus",
    date: "2023-12-01",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/prospectus/p-ishares-robotics-and-artificial-intelligence-etf-7-31.pdf?stream=reg&product=IUS-IRBO&shareClass=NA&documentId=1568661%7E1568660%7E926300%7E1595236%7E1686316&iframeUrlOverride=%2Fus%2Findividual%2Fliterature%2Fprospectus%2Fp-ishares-robotics-and-artificial-intelligence-etf-7-31.pdf",
  },
  {
    title: "Summary Prospectus",
    date: "2023-12-01",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/summary-prospectus/sp-ishares-robotics-and-artificial-intelligence-etf-7-31.pdf?stream=reg&product=IUS-IRBO&shareClass=NA&documentId=1568661%7E1568660%7E926300%7E1595236%7E1686316&iframeUrlOverride=%2Fus%2Findividual%2Fliterature%2Fsummary-prospectus%2Fsp-ishares-robotics-and-artificial-intelligence-etf-7-31.pdf",
  },
  {
    title: "Statement of Additional Information",
    date: "2023-12-01",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/sai/sai-ishares-trust-7-31-eo.pdf?stream=reg&product=IUS-IRBO&shareClass=NA&documentId=1568661%7E1568660%7E926300%7E1595236%7E1686316%7E1871367%7E1871364&iframeUrlOverride=%2Fus%2Findividual%2Fliterature%2Fsai%2Fsai-ishares-trust-7-31-eo.pdf",
  },
  {
    title: "Annual Report",
    date: "2023-07-31",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/annual-report/ar-ishares-exponential-technologies-etfs-07-31.pdf?stream=reg&product=IUS-IRBO&shareClass=NA&documentId=1568661%7E1568660%7E926300%7E1595236%7E1686316&iframeUrlOverride=%2Fus%2Findividual%2Fliterature%2Fannual-report%2Far-ishares-exponential-technologies-etfs-07-31.pdf",
  },
  {
    title: "Semi-Annual Report",
    date: "2023-01-31",
    format: "PDF",
    url: "https://www.blackrock.com/us/individual/literature/semi-annual-report/sar-ishares-exponential-technologies-etfs-01-31.pdf?stream=reg&product=IUS-IRBO&shareClass=NA&documentId=1568661%7E1568660%7E926300%7E1595236%7E1686316&iframeUrlOverride=%2Fus%2Findividual%2Fliterature%2Fsemi-annual-report%2Fsar-ishares-exponential-technologies-etfs-01-31.pdf",
  },
  {
    title: "Holdings, Historical, Performance, Distributions",
    date: "2023-12-05",
    format: "Excel",
    url: "https://www.blackrock.com/us/individual/products/297905/fund/1515394931018.ajax?fileType=xls&fileName=iShares-Robotics-and-Artificial-Intelligence-Multisector-ETF_fund&dataType=fund",
  },
  {
    title: "Jennifer Hsui LinkedIn Profile",
    date: "2023-12-14",
    format: "LinkedIn",
    url: "https://www.linkedin.com/in/jenniferhsui",
  },
  {
    title: "Greg Savage LinkedIn Profile",
    date: "2023-12-14",
    format: "LinkedIn",
    url: "https://www.linkedin.com/in/greg-savage-cfa-723337",
  },
  {
    title: "Paul Whitehead LinkedIn Profile",
    date: "2023-12-14",
    format: "LinkedIn",
    url: "https://www.linkedin.com/in/paul-whitehead-7ba26a22",
  },
  {
    title: "AI-focused ETFs spread risk as fears grow of bubble.",
    date: "2023-10-25",
    format: "News Article",
    url: "https://www.ft.com/content/02053c2f-613d-49de-a2a8-2400d53b1c20",
  },
  {
    title:
      "AI and Other “Mega-Forces” Are Reshaping Markets. How to Play them with ETFs.",
    date: "2023-07-29",
    format: "News Article",
    url: "https://www.barrons.com/articles/ai-mega-forces-blackrock-etfs-670dc368",
  },
  {
    title: "BlackRock PitchBook",
    date: "2023-12-14",
    format: "PitchBook",
    url: "https://my.pitchbook.com/profile/10768-06",
  },
];

export function SourceTable() {
  return (
    <Table>
      <TableCaption>
        A list of data sources used to generate the dashboard and reports.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Format</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>URL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sources.map((source) => (
          <TableRow key={source.title}>
            <TableCell>
              {source.format === "PDF" && (
                <div className="flex items-center space-between">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="https://images.assetsdelivery.com/compings_v2/123vector/123vector1710/123vector171000360.jpg"
                      alt="Avatar"
                    />
                    <AvatarFallback>{source.format}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{source.format}</span>
                </div>
              )}
              {source.format === "Excel" && (
                <div className="flex items-center space-between">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="https://gwcareercampus.com/wp-content/uploads/sites/40/Microsoft-Excel.png"
                      alt="Avatar"
                    />
                    <AvatarFallback>{source.format}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{source.format}</span>
                </div>
              )}
              {source.format === "Web Page" && (
                <div className="flex items-center space-between">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="data:image/png;base64,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"
                      alt="Avatar"
                    />
                    <AvatarFallback>{source.format}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{source.format}</span>
                </div>
              )}
              {source.format === "LinkedIn" && (
                <div className="flex items-center space-between">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
                      alt="Avatar"
                    />
                    <AvatarFallback>{source.format}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{source.format}</span>
                </div>
              )}
              {source.format === "News Article" && (
                <div className="flex items-center space-between">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="https://cdn.pixabay.com/photo/2017/06/10/07/22/news-2389226_960_720.png"
                      alt="Avatar"
                    />
                    <AvatarFallback>{source.format}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{source.format}</span>
                </div>
              )}
              {source.format === "PitchBook" && (
                <div className="flex items-center space-between">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="https://pbs.twimg.com/profile_images/1590838725537562624/tWHfcC8b_400x400.jpg"
                      alt="Avatar"
                    />
                    <AvatarFallback>{source.format}</AvatarFallback>
                  </Avatar>
                  <span className="ml-2">{source.format}</span>
                </div>
              )}
            </TableCell>
            <TableCell>{source.date}</TableCell>
            <TableCell className="font-medium">{source.title}</TableCell>
            <TableCell className="truncate max-w-xs">
              <a href={source.url} target="_blank">
                {source.url}
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
