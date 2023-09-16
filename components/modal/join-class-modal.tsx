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
import { X } from "lucide-react";

const formSchema = z.object({
  code: z
    .string()
    .min(5, {
      message:
        "Class codes are 5-7 characters including letters and numbers, and no spaces or symbols",
    })
    .max(7, {
      message:
        "Class codes are 5-7 characters including letters and numbers, and no spaces or symbols",
    }),
});

export const JoinClassModal = () => {
  const { isOpen, type, onClose } = useModal();
  const { toast } = useToast();
  const router = useRouter();

  const isModalOpen = isOpen && type === "joinClass";

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
      const response = await axios.patch("/api/class", values);

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
      <DialogContent className="max-w-full h-screen rounded-none p-0">
        <DialogHeader className="text-left  h-[61px] rounded-none px-4 border-b">
          <div className="w-full my-auto flex items-center justify-between z-50 ">
            <div className="flex space-x-6  items-center">
              <button
                onClick={handleClose}
                className="h-12 w-12 hover:bg-zinc-100/70 rounded-full flex items-center justify-center p-2 transition "
              >
                <X className="h-6 w-6" />
              </button>
              <DialogTitle className="my-auto  text-[#606469]">
                <span className="text-xl font-medium">Join class</span>
              </DialogTitle>
            </div>
            <div>
              <button className="px-7 py-2 text-sm rounded-md bg-gray-100 font-medium text-center">
                Join
              </button>
            </div>
          </div>
        </DialogHeader>
        <div className="p-6 w-full h-[calc(100vh-50px)] mx-auto space-y-5 -mt-4">
          <div className="border-[1px] p-5 rounded-md">
            <p>You&apos;re currently signed in as</p>
            <div>Masud Rana</div>
          </div>

          <div className="border p-5 rounded-md">
            <p className="text-xl font-medium">Class code</p>
            <p className="text-md mb-5">
              Ask your teacher for the class code, then enter it here.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-[280px]"
              >
                <FormField
                  name="code"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Class code"
                          {...field}
                          className="focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none"
                        />
                      </FormControl>
                      <FormMessage className="text-[13px] pl-6" />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <div>
            <p>To sign in with a class code</p>
            <ul>
              <li>Use an authorized account</li>
              <li>
                Use a class code with 5-7 letters or numbers, and no spaces or
                symbols
              </li>
            </ul>
            <p>
              If you have trouble joining the class, go to the Help Center
              article
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
