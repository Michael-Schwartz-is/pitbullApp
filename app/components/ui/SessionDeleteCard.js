import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

function SessionDeleteCard({ session }) {
  return (
    <div dir="rtl">
      <Card className="flex flex-col gap-2 p-2">
        <div className="flex gap-2 p-2">
          <p>{session.english_name}</p>
          <p>{session.heb_name}</p>
          <p>{session.day}</p>
          <p>{session.time}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button>
            <Trash />
            <span className="ml-2">למחוק</span>
          </Button>
          <Button>
            <Edit />
            <span className="ml-2">לערוך</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default SessionDeleteCard;
