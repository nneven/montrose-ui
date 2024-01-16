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
              <AvatarImage
                src="https://media.licdn.com/dms/image/C4E03AQECbcb08RljmQ/profile-displayphoto-shrink_800_800/0/1517688882275?e=1710979200&v=beta&t=SQzI77cJ-5_5HV3OQ9TFS10qdiYzhICYGCHFbt-2BHA"
                alt="Avatar"
              />
              <AvatarFallback className="text-lg">DA</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1 text-left">
              <p className="text-sm font-medium leading-none">Dario Amodei</p>
              <p className="text-sm text-muted-foreground">
                Co-Founder and CEO
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-auto">
          Dario Amodei is an Italian-American artificial intelligence researcher
          and entrepreneur. He is the co-founder of Anthropic. He is the former
          vice president of research at OpenAI. Amodei has an undergraduate
          degree from Stanford University and a PhD in physics from Princeton
          University. He was a postdoctoral scholar at the Stanford University
          School of Medicine. In 2016, Amodei joined OpenAI. In 2021, Amodei and
          his sister Daniela founded Anthropic along with other former senior
          members of OpenAI. The Amodei siblings were among those who left
          OpenAI due to directional differences, specifically regarding
          OpenAI&apos;s ventures with Microsoft in 2019. In July 2023, Amodei
          warned a United States Senate judiciary panel of the dangers of AI,
          including the risks it poses in the development and control of
          weaponry. In September 2023, Amodei and his sister Daniela were named
          as two of the TIME 100 Most Influential People in AI. In November
          2023, the board of directors of OpenAI approached Amodei about
          replacing Sam Altman and potentially merging the two startups. Amodei
          declined both offers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="pb-4">
          <div className="flex items-center">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src="https://pbs.twimg.com/profile_images/1395428793527848961/9j1XwL8p_400x400.jpg"
                alt="Avatar"
              />
              <AvatarFallback className="text-lg">DA</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1 text-left">
              <p className="text-sm font-medium leading-none">Daniela Amodei</p>
              <p className="text-sm text-muted-foreground">
                Co-Founder and President
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-auto">
          Daniela Amodei started her career in 2010. Daniela began to work as a
          Business Development at the IRIS Center, located at the University of
          Maryland, College Park. She worked there from January 2010 to August
          2011, one year and eight months. In her role, she managed grant
          processes and recruited key personnel for various international
          development projects related to poverty assessment, monitoring and
          evaluation, conflict mitigation, microfinance, and direct cash
          transfers. After her tenure at the IRIS Center, she joined
          Conservation Through Public Health as a fellow from September 2011 to
          January 2012. While there, she worked with the CEO to develop a
          strategic grant-making plan and delivered development training to
          senior staff. She also co-led training for over 50 community health
          workers at rural field sites in Kampala, Uganda. She then worked at
          Matt Cartwright for Congress for ten months as a Deputy Field Director
          from February 2012 to May 2012. She recruited over 80 volunteers and
          personally made 11,000 voter calls in key districts. Her efforts
          contributed to defeating a 20-year incumbent by 12 points in a
          nationally-covered primary.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
