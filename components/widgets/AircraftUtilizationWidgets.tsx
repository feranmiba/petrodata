import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Pictures from '@/assests/News widget.png';
import Image from "next/image";


const data = [
  { name: "A320", hours: 30 },
  { name: "B737", hours: 45 },
  { name: "CRJ", hours: 20 },
];

const AircraftUtilizationWidget = () => {
  return (
    <section className="w-full h-full md:max-w-sm">
      <Image
        src={Pictures}
        alt="Aircraft Utilization"
        className="w-full h-full object-cover rounded-t-lg"
        width={500}
        height={500}
        />
    
    </section>
  );
};

export default AircraftUtilizationWidget;