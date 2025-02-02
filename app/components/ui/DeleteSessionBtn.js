import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DeleteSessionBtn({ session }) {
  <Dialog>
    <DialogTrigger>thing</DialogTrigger>
    <DialogContent className="text-center p-10 max-w-[20rem]">
      <DialogHeader className="flex flex-col gap-3">
        <DialogTitle>להרשם לאימון {}</DialogTitle>
        <DialogDescription>
          בוא נוודא שאתה מתכוון באמת לבוא ורק אם כן, תרשם. אל תתפוס מקומות של אחרים...
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button type="submit">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>;
}
export default DeleteSessionBtn;
