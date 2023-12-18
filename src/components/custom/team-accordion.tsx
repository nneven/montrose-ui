import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TeamAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-2 w-full">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque elit eget justo interdum, et ullamcorper velit
          consectetur. Sed in ultrices nunc. In hac habitasse platea dictumst.
          Sed vitae purus euismod, aliquet tortor sit amet, consequat augue.
          Donec ut nisl in nisl aliquet aliquam. Donec id quam at velit
          imperdiet consequat. Sed sed mi sed nisl aliquet aliquam. Donec id
          quam at velit imperdiet consequat. Sed sed mi sed nisl aliquet
          aliquam. Donec id quam at velit imperdiet consequat. Sed sed mi sed
          nisl aliquet aliquam. Donec id quam at velit imperdiet consequat.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque elit eget justo interdum, et ullamcorper velit
          consectetur. Sed in ultrices nunc. In hac habitasse platea dictumst.
          Sed vitae purus euismod, aliquet tortor sit amet, consequat augue.
          Donec ut nisl in nisl aliquet aliquam. Donec id quam at velit
          imperdiet consequat. Sed sed mi sed nisl aliquet aliquam. Donec id
          quam at velit imperdiet consequat. Sed sed mi sed nisl aliquet
          aliquam. Donec id quam at velit imperdiet consequat. Sed sed mi sed
          nisl aliquet aliquam. Donec id quam at velit imperdiet consequat.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque elit eget justo interdum, et ullamcorper velit
          consectetur. Sed in ultrices nunc. In hac habitasse platea dictumst.
          Sed vitae purus euismod, aliquet tortor sit amet, consequat augue.
          Donec ut nisl in nisl aliquet aliquam. Donec id quam at velit
          imperdiet consequat. Sed sed mi sed nisl aliquet aliquam. Donec id
          quam at velit imperdiet consequat. Sed sed mi sed nisl aliquet
          aliquam. Donec id quam at velit imperdiet consequat. Sed sed mi sed
          nisl aliquet aliquam. Donec id quam at velit imperdiet consequat.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
