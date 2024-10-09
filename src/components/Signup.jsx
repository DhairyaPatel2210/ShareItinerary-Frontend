import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
      <Card className="flex flex-col justify-center w-full rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 shadow-lg min-h-[65vh] sm:min-h-70vh">
        <CardContent className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-8">
          <Input
            type="text"
            placeholder="Name"
            className="w-full h-12 sm:h-11"
          />
          <Input
            type="email"
            placeholder="Email"
            className="w-full h-12 sm:h-11"
          />
          <div className="relative w-full">
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full pr-10 h-12 sm:h-11"
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
          <div className="relative w-full">
            <Input
              type={isVisibleConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full pr-10 h-12 sm:h-11"
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={toggleVisibilityConfirm}
              type="button"
            >
              {isVisibleConfirm ? (
                <EyeOffIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <Button className="w-full h-10 sm:h-11 text-md font-semibold">
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
