import { ClassWithMembersWithProfile } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { StreamContainer } from "./stream-container";

interface ClassContainerProps {
  data: ClassWithMembersWithProfile;
}

export const ClassContainer = ({ data }: ClassContainerProps) => {
  return (
    <Tabs
      defaultValue="stream"
      className="w-full h-full  py-0 my-0 rounded-none"
    >
      <TabsList className="w-full bg-transparent border-b h-auto rounded-none flex items-center justify-start">
        <TabsTrigger
          value="stream"
          className="h-full px-4 hover:bg-zinc-100/80 text-[14px] font-semibold text-[#5f6368]"
        >
          Stream
        </TabsTrigger>
        <TabsTrigger value="classwork">Classwork</TabsTrigger>
        <TabsTrigger value="people">People</TabsTrigger>
        <TabsTrigger value="grade">Grade</TabsTrigger>
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
