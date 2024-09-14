import React, { useState } from "react";
import { Card, CardBody, Input, Button, Divider } from "@nextui-org/react";

export default function CreateItinerary() {
    const PlusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    );
    
    const [startPoint, setStartPoint] = useState('');
    const [destination, setDestination] = useState('');

    const handleCreateItinerary = () => {
        console.log('Creating itinerary for:', startPoint, 'to', destination);
        // Add your itinerary creation logic here
    };

    return (
        <div className="flex sm:flex-col h-full w-full max-w-6xl mx-auto p-4 gap-4">
            <Card className="flex-1 justify-center align-center p-4">
                <div className="flex flex-col gap-4">
                    <Input
                        label="Start Point"
                        placeholder="Enter start point"
                        value={startPoint}
                        onChange={(e) => setStartPoint(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <Button isIconOnly color="primary" aria-label="Add destination" className="rounded-full">
                            <PlusIcon />
                        </Button>
                    </div>
                    <Input
                        label="Destination"
                        placeholder="Enter destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <Button color="primary" onClick={handleCreateItinerary}>
                        Create Itinerary
                    </Button>
                </div>
            </Card>
            <Card className="flex-1 p-4">
                <div className="h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                    Map
                </div>
            </Card>
        </div>
    );
}