import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>About This...</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            This is the Prototype for Frontend projects using Vite, Tailwind CSS, and Shadcn UI.
          </p>
          <p>
            It is ready to use and all the required setup is already done.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What requires</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            This is ready to use with Vite, Tailwind CSS, and Shadcn UI.
          </p>
          <p>
            Just need to clone the repository and run the development server.
          </p>
          <p>
            Import/install the components as needed.
            And you are good to go!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <div className="w-full max-w-4xl p-4">
        <AccordionDemo />
      </div>
    </div>
  )
}

export default App