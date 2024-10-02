import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { animals } from "../data/data";

const Activity = ({ isOpen, index, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Activity {index + 1}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" className="w-full" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Input id="description" className="w-full" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Search a place" />
              </SelectTrigger>
              <SelectContent>
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="images">Images</Label>
            <Input id="images" type="file" className="w-full" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onOpenChange}>
            Close
          </Button>
          <Button onClick={onOpenChange}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Activity;
