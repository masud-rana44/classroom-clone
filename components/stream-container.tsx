import { ClassWithMembersWithProfile } from "@/types";
import Image from "next/image";
import ClassCode from "@/components/classcode/classcode";

interface StreamContainerProps {
  data: ClassWithMembersWithProfile;
}

export const StreamContainer = ({ data }: StreamContainerProps) => {
  const { bannerUrl, name, defaultColor, classCode } = data;

  return (
    <div className="px-7 py-6 flex flex-col space-y-6">
      <figure className="h-240 w-full">
        <Image
          src={bannerUrl}
          alt={`Image of ${name} class`}
          layout="responsive"
          height={240}
          width={480}
          className="w-full h-full object-contain rounded-md"
        />
      </figure>
      <div className="flex gap-6">
        <div className="flex flex-col space-y-6 w-[200px]">
          <ClassCode data={data} />
          <div>Upcomming</div>
        </div>
        <div>
          <div>Announce</div>
          <div>Talk</div>
        </div>
      </div>
    </div>
  );
};
