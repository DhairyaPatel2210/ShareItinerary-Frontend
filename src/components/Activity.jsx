import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AutoComplete } from "./ui/autocomplete";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { DialogDescription } from "@radix-ui/react-dialog";

const Activity = ({ isOpen, index, onOpenChange, initialData, onSave }) => {
  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [location, setLocation] = useState(initialData.location || "");
  const [image, setImage] = useState(initialData.image || null);

  const handleSave = () => {
    const activityData = {
      name: name,
      description: description,
      location: location,
      image: image,
    };
    onSave(activityData);
  };

  const handleOpenChange = () => {
    // when the dialog is closed without saving, it should reset the internal state
    setName("");
    setDescription("");
    setLocation("");
    setImage(null);
    onOpenChange();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTitle />
      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Activity {index + 1}</DialogTitle>
          <VisuallyHidden.Root>
            <DialogDescription>
              Mandatory field, but will be hidden
            </DialogDescription>
          </VisuallyHidden.Root>
        </DialogHeader>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              className="w-full"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              className="w-full"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <AutoComplete
              id={"location"}
              value={location}
              setLocation={setLocation}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="images">Images</Label>
            <Input
              id="images"
              type="file"
              className="w-full"
              onChange={(event) => setImage(event.target.files[0].name)}
            />
            <Label>{image && `Uploaded: ${image}`}</Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleOpenChange}>
            Close
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Activity;
