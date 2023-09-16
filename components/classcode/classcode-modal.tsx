"use modal";

import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Copy, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

export const ClassCodeModal = () => {
  const { isOpen, type, onClose, data } = useModal();

  if (!data.class) return null;

  const {
    class: { classCode, defaultColor, name, section },
  } = data;

  const isModalOpen = isOpen && type === "classCode";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[620px] p-6 rounded-xl"
        style={{ color: defaultColor }}
      >
        <div className="text-[120px] font-medium text-center pb-4 mt-10 leading-[106px] tracking-[-2px]">
          {classCode}
        </div>
        <Separator
          style={{
            backgroundColor: defaultColor,
            height: "2px",
            borderRadius: "10px",
          }}
        />
        <div className="flex items-center justify-between font-semibold">
          <div>
            <p>{name}</p>
            <p>{section}</p>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <button
              className={cn(
                `flex items-center gap-2 px-2 py-1 hover:bg-[${defaultColor}]`
              )}
            >
              <Copy className="h-4 w-4 font-semibold" />
              <span>Copy invite link</span>
            </button>
            <button>
              <Maximize className="h-4 w-4 font-semibold" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
