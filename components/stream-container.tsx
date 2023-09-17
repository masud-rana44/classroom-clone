import { Info, Pencil } from "lucide-react";

import { ClassWithMembersWithProfile } from "@/types";
import { ClassCode } from "@/components/class-code";
import { Button } from "@/components/ui/button";
import { Upcoming } from "@/components/upcoming";

interface StreamContainerProps {
  data: ClassWithMembersWithProfile;
}

export const StreamContainer = ({ data }: StreamContainerProps) => {
  const { bannerUrl, name, section, defaultColor, classCode } = data;

  return (
    <div className="px-[26px] py-[23px] flex flex-col space-y-6">
      <div
        style={{ backgroundImage: `url(${bannerUrl})` }}
        className="relative h-[240px] w-full rounded-lg overflow-hidden text-white bg-cover bg-center"
      >
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <Button
          style={{ color: defaultColor }}
          className="absolute top-4 right-4 bg-white flex items-center gap-[10px] font-medium shadow:md hover:bg-background py-0 px-4 tracking-wide h-9"
        >
          <Pencil className="h-5 w-5" />
          <span className="font-semibold">Customize</span>
        </Button>
        <Button
          variant="icon"
          className="absolute right-0 bottom-0 hover:bg-black/5 h-12 w-12 p-0"
        >
          <Info className="h-6 w-6" />
        </Button>
        <div className="absolute left-6 bottom-4">
          <p className="text-3xl font-semibold">{name}</p>
          <p className="text-xl text-medium">{section}</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col space-y-6 w-[200px] ">
          <ClassCode data={data} />
          <Upcoming data={data} />
        </div>
        <div>
          <div>Announce</div>
          <div>Talk</div>
        </div>
      </div>
    </div>
  );
};
