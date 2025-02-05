import Container from "@/app/components/ui/Container";
import { Button } from "@/components/ui/button";

function page() {
  const coachMessages = [
    {
      id: "1",
      date: "2025-01-27",
      time: "09:00",
      message: "תזכורת: אל תשכחו להביא את הגי' לאימון הערב!",
      author: "המאמן ג'ון",
      type: "תזכורת",
      priority: "רגיל",
      attachments: null,
      read: false,
    },
    {
      id: "2",
      date: "2025-01-26",
      time: "14:30",
      message: "ברכות לשרה על קבלת החגורה הכחולה!",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "רגיל",
      attachments: ["https://example.com/photo-of-sarah.jpg"],
      read: true,
    },
    {
      id: "3",
      date: "2025-01-25",
      time: "12:00",
      message: "הירשמו לסמינר ביום שבת הקרוב. מספר המקומות מוגבל!",
      author: "המאמן ג'ון",
      type: "תזכורת",
      priority: "גבוה",
      attachments: ["https://example.com/seminar-info.pdf"],
      read: false,
    },
    {
      id: "4",
      date: "2025-01-24",
      time: "18:00",
      message: "אימון ללא גי' מבוטל מחר עקב תחזוקה.",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "גבוה",
      attachments: null,
      read: true,
    },
    {
      id: "5",
      date: "2025-01-23",
      time: "10:30",
      message: "כל הכבוד לכולם שהתחרו בתחרות בסוף השבוע!",
      author: "המאמן ג'ון",
      type: "מוטיבציה",
      priority: "רגיל",
      attachments: null,
      read: false,
    },
    {
      id: "6",
      date: "2025-01-22",
      time: "15:00",
      message: "אנו מציגים שיעורים חדשים למתחילים החל מהחודש הבא.",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "רגיל",
      attachments: null,
      read: true,
    },
    {
      id: "7",
      date: "2025-01-21",
      time: "08:45",
      message: "תזכורת ידידותית: דמי המנוי החודשיים ישולמו עד ה-5 לחודש.",
      author: "המאמן ג'ון",
      type: "תזכורת",
      priority: "רגיל",
      attachments: null,
      read: false,
    },
    {
      id: "8",
      date: "2025-01-20",
      time: "16:00",
      message: "אימון פתוח ביום ראשון הקרוב בשעה 11:00. כולם מוזמנים!",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "רגיל",
      attachments: null,
      read: true,
    },
    {
      id: "9",
      date: "2025-01-19",
      time: "11:00",
      message: "ברכות לכל בעלי החגורות הלבנות שזכו בפסים היום!",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "רגיל",
      attachments: null,
      read: false,
    },
    {
      id: "10",
      date: "2025-01-18",
      time: "19:00",
      message: "תביאו את כל הכוח שלכם לאימון הספארינג הערב!",
      author: "המאמן ג'ון",
      type: "מוטיבציה",
      priority: "רגיל",
      attachments: null,
      read: true,
    },
    {
      id: "11",
      date: "2025-01-17",
      time: "09:30",
      message: "אימון למתקדמים מתחיל בשעה 19:00 הערב. אל תפספסו!",
      author: "המאמן ג'ון",
      type: "תזכורת",
      priority: "רגיל",
      attachments: null,
      read: false,
    },
    {
      id: "12",
      date: "2025-01-16",
      time: "13:00",
      message: "נא לזכור לנקות את המזרנים והציוד לאחר האימון.",
      author: "המאמן ג'ון",
      type: "תזכורת",
      priority: "נמוך",
      attachments: null,
      read: false,
    },
    {
      id: "13",
      date: "2025-01-15",
      time: "20:00",
      message: "המדריכה שרה תעביר שיעור לנשים בלבד בנושא הגנה עצמית ביום חמישי.",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "רגיל",
      attachments: null,
      read: true,
    },
    {
      id: "14",
      date: "2025-01-14",
      time: "14:15",
      message: "אנו מריצים אימון הכנה לתחרות בסוף השבוע בשעה 9:00.",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "גבוה",
      attachments: null,
      read: false,
    },
    {
      id: "15",
      date: "2025-01-13",
      time: "12:00",
      message: "בדקו את המגן-פרקים החדש שלנו, זמין בדלפק הקבלה!",
      author: "המאמן ג'ון",
      type: "הודעה",
      priority: "נמוך",
      attachments: ["https://example.com/rash-guard.jpg"],
      read: false,
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="text-2xl font-bold mb-10">הודעות מערכת</h1>
        {coachMessages.map((msg) => (
          <div
            className={`p-4 border relative border-stone-200 dark:bg-stone-800 bg-white rounded-md m-2 ${
              msg.read && "border-orange-400"
            } `}
          >
            <p className="mb-6">{msg.message}</p>
            <div className="flex gap-1">
              <p className=" text-xs font-bold ">{msg.author} </p>
              <p className="text-xs text-slate-500">{msg.date}</p>
            </div>
            <div className="absolute left-2 bottom-2">
              {msg.read && <Button variant="outline">Mark as read</Button>}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default page;
