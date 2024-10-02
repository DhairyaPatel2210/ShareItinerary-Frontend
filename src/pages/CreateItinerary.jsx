import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DayDropdown from "../components/DayDropdown";

export default function CreateItinerary() {
  const [startPoint, setStartPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(1);

  const handleCreateItinerary = () => {
    console.log("Creating itinerary for:", startPoint, "to", destination);
    // Add your itinerary creation logic here
  };

  const handleDaysChange = (e) => {
    setNumDays(Number(e.target.value) || 1); // Ensure it's a number and default to 1
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex-1 p-4">
        <Card className="h-full overflow-auto" id="input">
          <CardContent className="flex flex-col gap-4 p-4">
            <Input
              placeholder="Name"
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
            />
            <Input
              placeholder="Summary"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Input
              type="number"
              placeholder="No. of days"
              value={numDays}
              onChange={handleDaysChange}
            />
            <Accordion type="single" collapsible className="w-full">
              {Array.from({ length: numDays }, (_, index) => (
                <AccordionItem key={index + 1} value={`day-${index + 1}`}>
                  <AccordionTrigger>{`Day ${index + 1}`}</AccordionTrigger>
                  <AccordionContent>
                    <DayDropdown />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button onClick={handleCreateItinerary}>Create Itinerary</Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex-1 p-4">
        <Card className="h-full" id="map">
          <CardContent className="h-full flex items-center justify-center text-2xl font-bold text-gray-400">
            Map
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
