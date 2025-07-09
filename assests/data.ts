import Gideon from '@/assests/icons/gideon.svg?url'
import David from '@/assests/icons/david.svg?url'
import Report from '@/assests/icons/report.svg?url'
import PriceAlert from '@/assests/icons/pricealert.svg?url'

export const Alert = [
    {
        alert: "PMS crossing 714.45",
        date: "Feb 14, 17:58",
        status: "Active"
    }, 
    {
        alert: "PMS crossing 714.45",
        date: "Feb 14, 18:32",
        status: "Stopped"
    }
]

export interface Notification {
    id: number;
    type: "Comments" | "Mentioned";
    title: string;
    subtitle?: string;
    message?: string;
    time: string;
    icon: string | null; 
  }
  
  export const mockNotifications: Notification[] = [
    { id: 1, type: "Comments", icon: David, title: "David Osapolo" , subtitle: 
        "Invited Aliyu Tosin to the La’organisation", 
    time: "5m ago"

},
     { id: 2, type: "Mentioned",  icon: Gideon , title: "Gideon Osama" , message: 
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.”", 
    time: "5m ago",
    subtitle: "Commented in PMS Price Analysis"
},
     { id: 3, type: "Comments",icon: PriceAlert, title: "Price Drop Alert" , message: 
        "The price of Premium Motor Spirit (PMS) has dropped to ₦495 per litre. This is a 3% decrease from last week.", 
    time: "35m ago",
    subtitle: "PMS Falls Below ₦500/Liter." },
     { id: 4, type: "Mentioned",  icon: Gideon, title: "Gideon Osama" , message: 
        "“@john Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.”", 
    time: "35m ago",
    subtitle: "Mentioned you in PMS Price Analysis"  },
    { id: 5, type: "Mentioned",  icon: Gideon , title: "Gideon Osama" , message: 
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.”", 
    time: "5m ago",
    subtitle: "Commented in PMS Price Analysis"
},
  ];
  