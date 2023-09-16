"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Class name required.",
  }),
  section: z.string().optional(),
  subject: z.string().optional(),
  room: z.number().optional(),
});

export const CreateClassModal = () => {
  const { isOpen, type, onClose } = useModal();
  const { toast } = useToast();
  const router = useRouter();

  const isModalOpen = isOpen && type === "createClass";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const handleClose = () => {
    onClose();
    form.reset();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/class", values);

      router.refresh();
      router.push(`/class/${response.data.id}`);
      handleClose();
    } catch (error) {
      toast({
        description: "Something went wrong.",
        variant: "destructive",
        duration: 3000,
      });
      onClose();
      form.reset();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md md:max-w-xl rounded-[10px] pb-[10px] pt-[18px]">
        <DialogHeader className="text-left ">
          <DialogTitle className="text-md text-[#515151]">
            Create Class
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Class name (required)"
                      className="focus-visible:ring-0 bg-[#f1f3f4] text-[#515151] rounded-none rounded-t-sm h-14 placeholder:font-medium text-lg placeholder:text-base placeholder:backdrop:leading-8 border-b focus:border-b-2 border-b-black/60 focus:border-b-blue-700 hover:bg-gray-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="section"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Section"
                      className="focus-visible:ring-0 bg-[#f1f3f4] text-[#515151] rounded-none rounded-t-sm h-14 placeholder:font-medium text-lg placeholder:text-base placeholder:backdrop:leading-8 border-b focus:border-b-2 border-b-black/60 focus:border-b-blue-700 hover:bg-gray-200"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="subject"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Subject"
                      className="focus-visible:ring-0 bg-[#f1f3f4] text-[#515151] rounded-none rounded-t-sm h-14 placeholder:font-medium text-lg placeholder:text-base placeholder:backdrop:leading-8 border-b focus:border-b-2 border-b-black/60 focus:border-b-blue-700 hover:bg-gray-200"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="room"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Room"
                      className="focus-visible:ring-0 bg-[#f1f3f4] hover:bg-gray-200  text-[#515151] rounded-none rounded-t-sm h-14 placeholder:font-medium text-lg placeholder:text-base placeholder:backdrop:leading-8 border-b focus:border-b-2 border-b-black/60 focus:border-b-blue-700 "
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="w-full pt-3 flex items-center gap-1 justify-end s">
              <Button
                type="reset"
                variant="link"
                onClick={handleClose}
                disabled={isLoading}
                className="hover:bg-blue-100/20 decoration-transparent hover:decoration-transparent text-muted-foreground px-2 h-8"
              >
                Cancel
              </Button>
              <Button
                disabled={isLoading}
                type="submit"
                variant="link"
                className="hover:bg-blue-100/20 decoration-transparent px-2 h-8 hover:decoration-transparent  text-blue-700 "
              >
                Create
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
