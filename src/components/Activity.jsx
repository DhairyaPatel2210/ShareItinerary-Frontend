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
import { useEffect, useState } from "react";
import { AutoComplete } from "./ui/autocomplete";

const Activity = ({ isOpen, index, onOpenChange, initialData, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || name);
      setDescription(initialData.description || description);
      setLocation(initialData.location || location);
      setImage(initialData.image || image);
    }
  }, [initialData]);

  const handleSave = () => {
    const activityData = {
      name: name,
      description: description,
      location: location,
      image: image,
    };
    onSave(activityData);
    onOpenChange();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTitle />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Activity {index + 1}</DialogTitle>
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
            <AutoComplete value={location} setLocation={setLocation} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="images">Images</Label>
            <Input
              id="images"
              type="file"
              className="w-full"
              onChange={(event) => setImage(event.target.files[0].name)}
            />
            <Label htmlFor="images">{image && `Uploaded: ${image}`}</Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onOpenChange}>
            Close
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Activity;
