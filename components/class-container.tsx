import { Calendar, HardDrive, Settings } from "lucide-react";

import { ClassWithMembersWithProfile } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StreamContainer } from "@/components/stream-container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClassContainerProps {
  data: ClassWithMembersWithProfile;
}

export const ClassContainer = ({ data }: ClassContainerProps) => {
  const { defaultColor } = data;

  const className = `h-[48px] px-5 text-[13px] font-bold hover:bg-gray-100/80 transition text-[#454547ff] data-[state=active]:bg-border data-[state=active]:border-b-4 data-[state=active]:shadow-none rounded-none`;

  return (
    <Tabs
      defaultValue="stream"
      className="w-full h-full  py-0 my-0 rounded-none"
    >
      <TabsList className="w-full bg-transparent ata-[state=pending]:border-b border-b h-auto rounded-none flex items-center justify-between py-0 px-[26px]">
        <div className="h-[48px]">
          <TabsTrigger
            value="stream"
            style={{
              borderColor: defaultColor,
            }}
            className={className}
          >
            Stream
          </TabsTrigger>
          <TabsTrigger
            style={{
              borderColor: defaultColor,
            }}
            className={className}
            value="classwork"
          >
            Classwork
          </TabsTrigger>
          <TabsTrigger
            style={{
              borderColor: defaultColor,
            }}
            className={className}
            value="people"
          >
            People
          </TabsTrigger>
          <TabsTrigger
            style={{
              borderColor: defaultColor,
            }}
            className={className}
            value="grade"
          >
            Grade
          </TabsTrigger>
        </div>
        <div className="flex items-center my-1">
          <Button variant="icon" className="h-10 w-10 p-0">
            <Calendar className="h-5 w-5" />
          </Button>
          <Button variant="icon" className="h-10 w-10 p-0">
            {/* <GoogleDriveIcon /> */}
            <HardDrive className="h-5 w-5" />
          </Button>
          <Button variant="icon" className="h-10 w-10 p-0">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </TabsList>
      <TabsContent value="stream" className="mt-0">
        <StreamContainer data={data} />
      </TabsContent>
      <TabsContent value="classwork">classwork Container</TabsContent>
      <TabsContent value="people">people Container</TabsContent>
      <TabsContent value="grade">Grade Container</TabsContent>
    </Tabs>
  );
};
