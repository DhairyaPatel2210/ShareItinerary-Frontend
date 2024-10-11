import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DayDropdown from "../components/DayDropdown";

import {
  addDay,
  updateItineraryName,
  updateItinerarySummary,
} from "@/redux/itinerarySlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function CreateItinerary() {
  const itineraries = useSelector((state) => state.itineraries);
  const { days, summary, name } = itineraries[0];

  const dispatch = useDispatch();

  // state for accordian - this is to handle delete functionality
  const [currentAccordion, setCurrentAccordion] = useState("");

  const handleAddDay = () => {
    dispatch(addDay(itineraries[0].id));
  };

  const handleCreateItinerary = () => {
    console.log("Current Itinerary value", itineraries[0]);
  };

  const handleDeleteDay = () => {
    setCurrentAccordion("");
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex-1 p-4">
        <Card className="h-full overflow-auto" id="input">
          <CardContent className="flex flex-col gap-4 p-4">
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) =>
                dispatch(
                  updateItineraryName({
                    itineraryId: itineraries[0].id,
                    name: e.target.value,
                  })
                )
              }
            />
            <Input
              placeholder="Summary"
              value={summary}
              onChange={(e) =>
                dispatch(
                  updateItinerarySummary({
                    itineraryId: itineraries[0].id,
                    summary: e.target.value,
                  })
                )
              }
            />
            {/* Add Day button now increments the number of days */}
            <Button className="max-w-[10rem]" onClick={handleAddDay}>
              Add Day
            </Button>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={currentAccordion}
              onValueChange={setCurrentAccordion}
            >
              {Array.from({ length: days.length }, (_, index) => (
                <AccordionItem key={index + 1} value={`day-${index + 1}`}>
                  <AccordionTrigger>{`Day ${index + 1}`} </AccordionTrigger>
                  <AccordionContent>
                    <DayDropdown
                      itineraryId={itineraries[0].id}
                      dayId={days[index].id}
                      deleteDayHandler={handleDeleteDay}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button onClick={handleCreateItinerary}>Create Itinerary</Button>
          </CardContent>
        </Card>
      </div>
      <div className="hidden lg:flex lg:flex-1 p-4">
        <Card className="h-full w-full" id="map">
          <CardContent className="h-full flex items-center justify-center text-2xl font-bold text-gray-400">
            Map
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
