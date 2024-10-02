import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 shadow-lg min-h-[60vh] sm:min-h-[50vh]">
        <CardContent className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-8">
          <Input type="email" placeholder="Email" className="w-full" />
          <div className="relative w-full">
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full pr-10"
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={toggleVisibility}
              type="button"
            >
              {isVisible ? (
                <EyeOffIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <Button className="w-full h-10 sm:h-12 text-md font-semibold">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
