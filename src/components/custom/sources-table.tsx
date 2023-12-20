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

const sources = [
  {
    title: "iShares Robotics and AI Multisector ETF Homepage",
    date: "2023-12-14",
    format: "Web Page",
    url: "https://example.com/ishares-homepage",
  },
  {
    title: "Product Brief",
    date: "2023-09-01",
    format: "PDF",
    url: "https://example.com/product-brief",
  },
  {
    title: "Megatrends Product Brief",
    date: "2023-09-01",
    format: "PDF",
    url: "https://example.com/megatrends-product-brief",
  },
  {
    title: "Fact Sheet",
    date: "2023-09-30",
    format: "PDF",
    url: "https://example.com/fact-sheet",
  },
  {
    title: "Prospectus",
    date: "2023-12-01",
    format: "PDF",
    url: "https://example.com/prospectus",
  },
  {
    title: "Summary Prospectus",
    date: "2023-12-01",
    format: "PDF",
    url: "https://example.com/summary-prospectus",
  },
  {
    title: "Statement of Additional Information",
    date: "2023-12-01",
    format: "PDF",
    url: "https://example.com/statement-additional-info",
  },
  {
    title: "Annual Report",
    date: "2023-07-31",
    format: "PDF",
    url: "https://example.com/annual-report",
  },
  {
    title: "Semi-Annual Report",
    date: "2023-01-31",
    format: "PDF",
    url: "https://example.com/semi-annual-report",
  },
  {
    title: "Holdings, Historical, Performance, Distributions",
    date: "2023-12-05",
    format: "Excel",
    url: "https://example.com/holdings-historical-data",
  },
  {
    title: "Jennifer Hsui LinkedIn Profile",
    date: "2023-12-14",
    format: "LinkedIn",
    url: "https://linkedin.com/in/jennifer-hsui",
  },
  {
    title: "Greg Savage LinkedIn Profile",
    date: "2023-12-14",
    format: "LinkedIn",
    url: "https://linkedin.com/in/greg-savage",
  },
];

export function SourceTable() {
  return (
    <Table>
      <TableCaption>A list of your data sources.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/4">Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Format</TableHead>
          <TableHead className="">URL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sources.map((source) => (
          <TableRow key={source.title}>
            <TableCell className="font-medium">{source.title}</TableCell>
            <TableCell>{source.date}</TableCell>
            <TableCell>{source.format}</TableCell>
            <TableCell className="">{source.url}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
