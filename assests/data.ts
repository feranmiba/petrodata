import Gideon from '@/assests/icons/gideon.svg?url'
import David from '@/assests/icons/david.svg?url'
import Report from '@/assests/icons/report.svg?url'
import PriceAlert from '@/assests/icons/pricealert.svg?url'
import Document from '@/assests/document.svg?url';


export const Reports = [
  {
    id: '1',
    title: 'Report Week 1',
    docs : [
      {
        id: '1',
        name: 'PMS - Aug 12-17',
        type: 'PMS',
        image: Document,
      },
      {
        id: '2',
        name: 'DPK - Aug 12-17',
        type: 'DPK',
        image: Document,
      },
      {
        id: '3',
        name: 'AGO - Aug 12-17',
        type: 'AGO',
        image: Document,
      },
      {
        id: '4',
        name: 'ICE - Aug 12-17',
        type: 'ICE',
        image: Document,
      }
    ]  
  },
  {
    id: '2',
    title: 'Report Week 2',
    docs : [
      {
        id: '1',
        name: 'PMS - Aug 12-17',
        type: 'PMS',
        image: Document,
      },
      {
        id: '2',
        name: 'DPK - Aug 12-17',
        type: 'DPK',
        image: Document,
      },
      {
        id: '3',
        name: 'AGO - Aug 12-17',
        type: 'AGO',
        image: Document,
      },
      {
        id: '4',
        name: 'ICE - Aug 12-17',
        type: 'ICE',
        image: Document,
      }
    ]  
  },
  {
    id: '3',
    title: 'Report Week 3',
    docs : [
      {
        id: '1',
        name: 'PMS - Aug 12-17',
        type: 'PMS',
        image: Document,
      },
      {
        id: '2',
        name: 'DPK - Aug 12-17',
        type: 'DPK',
        image: Document,
      },
      {
        id: '3',
        name: 'AGO - Aug 12-17',
        type: 'AGO',
        image: Document,
      },
      {
        id: '4',
        name: 'ICE - Aug 12-17',
        type: 'ICE',
        image: Document,
      }
    ]  
  }, 
  {
    id: '4',
    title: 'Report Week 4',
    docs : [
      {
        id: '1',
        name: 'PMS - Aug 12-17',
        type: 'PMS',
        image: Document,
      },
      {
        id: '2',
        name: 'DPK - Aug 12-17',
        type: 'DPK',
        image: Document,
      },
      {
        id: '3',
        name: 'AGO - Aug 12-17',
        type: 'AGO',
        image: Document,
      },
      {
        id: '4',
        name: 'ICE - Aug 12-17',
        type: 'ICE',
        image: Document,
      }
    ]  
  }
]

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
  