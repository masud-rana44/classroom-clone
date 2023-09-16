import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogContent } from "../ui/dialog";

export const ClassCodeModal = () => {
  const { isOpen, type, onClose, data } = useModal();

  const isModalOpen = isOpen && type === "classCode";

  console.log(data);

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>Hello class code</DialogContent>
    </Dialog>
  );
};
