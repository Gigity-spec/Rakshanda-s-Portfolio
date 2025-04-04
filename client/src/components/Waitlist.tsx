import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const waitlistSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an area of interest")
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      interest: "efl"
    }
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/waitlist', data);
      
      form.reset();
      toast({
        title: "Thank you for joining!",
        description: "You've been added to the waitlist. I'll contact you soon.",
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#f2c0DD] opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A3886b] opacity-10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-soria text-3xl lg:text-4xl text-[#A3886b] mb-4">Join My Teaching Waitlist</h2>
          <p className="text-lg text-[#25092e] opacity-80">
            Be the first to know when I'm accepting new students for private English tutoring, 
            literature analysis, or academic writing courses.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 gradient-border hover-grow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#25092e]">First Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#25092e]">Last Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#25092e]">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#25092e]">Area of Interest</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-2 rounded-lg border border-gray-300 form-input bg-white">
                          <SelectValue placeholder="Select an area of interest" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="efl">English as Foreign Language</SelectItem>
                        <SelectItem value="literature">Literature Studies</SelectItem>
                        <SelectItem value="academic">Academic Writing</SelectItem>
                        <SelectItem value="private">Private Tutoring</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#f2c0DD] hover:bg-opacity-90 text-[#25092e] font-semibold rounded-lg px-6 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Processing...
                    </>
                  ) : "Join Waitlist"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
