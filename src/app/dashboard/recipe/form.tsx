"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/app/_component/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_component/form";
import { Input } from "@/app/_component/input";

const formSchema = z.object({
  name: z.string().min(2).max(50),
});

export function RecipeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>レシピ名</FormLabel>
              <FormControl>
                <Input placeholder="例：肉じゃが" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">作成する</Button>
      </form>
    </Form>
  );
}
