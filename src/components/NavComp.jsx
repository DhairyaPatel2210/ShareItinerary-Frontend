import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavComp({ toggleDarkMode }) {
  const menuItems = ["Home", "Login", "Sign Up", "CreateItinerary", "Explore"];

  const items = {
    Home: "/",
    Login: "/login",
    "Sign Up": "/signup",
    CreateItinerary: "/create-itinerary",
    Explore: "/explore",
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-9 h-9 mr-2" />
          <span className="font-bold text-lg">ShareItinerary</span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center space-x-4">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/create-itinerary" className="text-sm font-medium">
          CreateItinerary
        </Link>
        <Link href="#" className="text-sm font-medium">
          Explore
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href="/login"
          className="hidden lg:inline-block text-sm font-medium"
        >
          Login
        </Link>
        <Button asChild variant="outline" className="hidden lg:inline-flex">
          <Link href="/signup">Sign Up</Link>
        </Button>
        <Switch
          checked={true}
          onCheckedChange={toggleDarkMode}
          className="hidden sm:inline-flex"
        />
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4">
              {Object.entries(items).map(([item, link]) => (
                <Link key={item} href={link} className="text-sm font-medium">
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet> */}
      </div>
    </nav>
  );
}
