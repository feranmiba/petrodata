import Gideon from '@/assests/icons/gideon.svg?url'
import David from '@/assests/icons/david.svg?url'
import Report from '@/assests/icons/report.svg?url'
import PriceAlert from '@/assests/icons/pricealert.svg?url'
import Document from '@/assests/document.svg?url';
import NewPicture from '@/assests/News widget.png';
import Oando from '@/assests/Images/oando.png';
import Enegies from '@/assests/Images/energy.png';
import Dangote from '@/assests/Images/dangote.png';


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



  export const NewsData = [
    {
      title: "Shareholders Enjoy a Massive Windfall as BP Expands Global Operations",
      img: NewPicture,
      brand: "Vanguard",
      tags: ["ICE",],
      description: "BP’s shareholders can expect a multibillion-dollar payout this year after the oil giant reported better than expected quarterly profits of almost $2.8 billion and set out plans to develop a new oil hub in the Gulf of Mexico.",
    },
    {
      title: "Eni granted regulator consent for NAOC sales to Oando",
      img: Oando,
      brand: "Vanguard",
      tags: ["ICE"],
      description: "Eni received formal consent from the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) for the sale of Nigerian Agip Oil Co. (NAOC) Ltd. to Oando Plc. Having already obtained all other relevant local and regulatory authorities’ authorizations, the consent allows Eni to proceed to the completion of the deal, the company said in a release July 24.",
    },
    {
      title: "Chappal Energies to acquire SPDC JV interest in Nigeria from TotalEnergies",
      img: Enegies,
      brand: "Vanguard",
      tags: ["PMS", "AGO"],
      description: "Chappal Energies Mauritius Ltd. has agreed to acquire from TotalEnergies EP Nigeria its 10% interest in SPDC joint venture licenses in Nigeria for $860 million. SPDC JV is an unincorporated joint venture between Nigerian National Petroleum Corp. Ltd. (55%), Shell Petroleum Development Co. of Nigeria (30%, operator), TotalEnergies EP Nigeria (10%), and NAOC (5%), which holds 18 licenses in the Niger Delta.",
    },
    {
      title: "Dangote Refinery Products Inferior To Imported Ones; Nigeria Can't Rely On Them Alone To Avoid Monopoly – Nigerian Agency, NMDPRA",
      img: Dangote,
      brand: "Vanguard",
      tags: ["PMS", "AGO", "ICE"],
      description: "Frouk Ahmed, the Chief Executive of the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) has cautioned Nigerians against over-dependence on products from the Dangote refinery. Ahmed highlighted concerns over the consistency and standardisation of the refinery's output, stating that the quality of its products was inferior compared to the imported quality products.",
    },
  ];
  
  