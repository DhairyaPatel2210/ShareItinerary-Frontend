"use client";

import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { locations } from "@/data/data";

export function AutoComplete({ value, setLocation }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? locations.find((location) => location.value === value)?.label
            : "Search Location..."}
          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full">
        <Command>
          <CommandInput
            placeholder="Search Location..."
            className="h-9 w-full"
          />
          <CommandList>
            <CommandEmpty>No Location found.</CommandEmpty>
            <CommandGroup className="max-h-[200px]">
              {locations.map((location) => (
                <CommandItem
                  key={location.value}
                  value={location.value}
                  onSelect={(currentValue) => {
                    setLocation(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    setLocation(currentValue);
                  }}
                >
                  {location.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === location.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
