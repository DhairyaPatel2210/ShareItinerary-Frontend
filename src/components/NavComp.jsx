import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "./ThemeSwitch";
import ProfileDropdown from "./ProfileDropdown";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function NavComp() {
  const menuItems = ["Home", "CreateItinerary", "Explore"];

  const items = {
    Home: "/",
    Login: "/login",
    "Sign Up": "/signup",
    CreateItinerary: "/create-itinerary",
    Explore: "/",
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-9 h-9 mr-2" />
          <span className="font-bold text-lg">ShareItinerary</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        {menuItems.map((item) => (
          <Link
            key={item}
            to={items[item]}
            className="text-sm font-medium hover:underline"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <ThemeSwitch />
        <ProfileDropdown />

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden" // Show only on small screens
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          {/* Mobile Menu Content */}
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col gap-4 p-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={items[item]}
                  className="font-medium hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
