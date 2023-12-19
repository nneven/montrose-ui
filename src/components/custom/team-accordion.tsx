import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TeamAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-2 w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="pb-4">
          <div className="flex items-center">
            <Avatar className="h-14 w-14">
              <AvatarImage src="" alt="Avatar" />
              <AvatarFallback className="text-lg">JH</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1 text-left">
              <p className="text-sm font-medium leading-none">Jennifer Hsui</p>
              <p className="text-sm text-muted-foreground">
                Co-Head of Index Equity
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-auto">
          Jennifer Hsui is a Portfolio Manager and has been with BlackRock since
          2008, initially joining Barclays Global Investors (which merged with
          BlackRock in 2009). She holds a Bachelor’s degree in Biology and
          Economics from the University of California, Berkeley. Hsui has
          extensive experience in portfolio management and currently serves as
          the Co-Head of Index Equity at BlackRock. Her tenure at BlackRock
          includes roles as Managing Director, Portfolio Manager, and earlier as
          an Associate, Portfolio Manager. Prior to BlackRock, she was an Equity
          Research Analyst at RBC Capital Markets and a Research Assistant at
          Salomon Smith Barney.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="pb-4">
          <div className="flex items-center">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src="https://media.licdn.com/dms/image/C4E03AQEN4_9urKdlhA/profile-displayphoto-shrink_800_800/0/1516239061812?e=1708560000&v=beta&t=HDg-Kkq9oBNlPrLtoQ31e51d0Hu9v-Mi_e1pcUVaha4"
                alt="Avatar"
              />
              <AvatarFallback className="text-lg">GS</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1 text-left">
              <p className="text-sm font-medium leading-none">Greg Savage</p>
              <p className="text-sm text-muted-foreground">Managing Director</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-auto">
          Greg Savage is also a Portfolio Manager at BlackRock and has been with
          the firm for over 24 years. He holds a B.S. in Business, with a focus
          on Accounting, from the University of Colorado at Boulder. Savage’s
          current role is Head of Index Asset Allocation within the ETF and
          Index Investment Group, where he is responsible for the investment
          implementation of LifePath target date funds and various asset
          allocation funds. His previous positions include Co-Head of Americas
          Equity iShares ETFs Portfolio Management and Senior Portfolio Manager
          for iShares ETFs. Before joining BlackRock, Savage was an Associate at
          PIMCO.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="pb-4">
          <div className="flex items-center">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src="https://media.licdn.com/dms/image/C4D03AQHniGzE57dr1Q/profile-displayphoto-shrink_400_400/0/1516967857467?e=1708560000&v=beta&t=heXIupFrSoMNsRjv4-q5pTv3e40SDQ9952yjpCkMOcc"
                alt="Avatar"
              />
              <AvatarFallback className="text-lg">JH</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1 text-left">
              <p className="text-sm font-medium leading-none">Jennifer Hsui</p>
              <p className="text-sm text-muted-foreground">
                Co-Head of Index Equity
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-auto">
          Paul Whitehead is also a Portfolio Manager at BlackRock, with a tenure
          of over 27 years. He is the Co-Head of Index Equity and has held the
          position of Global Head of Equity Trading. Whitehead attended the
          University of Colorado Boulder from 1988 to 1993. His long-standing
          presence at BlackRock indicates a deep familiarity with the firm’s
          trading operations and index equity strategies.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
