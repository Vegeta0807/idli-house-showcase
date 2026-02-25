import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Sparkles } from "lucide-react";
import { z } from "zod";
import TextReveal from "./TextReveal";
import SmoothReveal from "./SmoothReveal";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000)
});

type FormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputClasses =
  "w-full bg-card border border-border rounded-2xl px-5 py-4 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-300 shadow-sm";

  return (
    <section id="contact" className="py-28 md:py-40 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-20">
          <SmoothReveal>
            <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          </SmoothReveal>

          <TextReveal
            as="h2"
            className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">

            Contact Us
          </TextReveal>
        </div>

        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ?
            <SmoothReveal delay={0.2}>
                <motion.form
                key="form"
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="bg-card rounded-[2rem] p-8 md:p-12 shadow-xl border border-border/50 space-y-5 bg-stone-100"
                noValidate>

                  {(["name", "phone", "email"] as const).map((field) =>
                <div key={field} className="">
                      <input
                    name={field}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    placeholder={field === "name" ? "Your Name" : field === "phone" ? "Phone Number" : "Email Address"}
                    value={form[field]}
                    onChange={handleChange}
                    className={inputClasses} />

                      {errors[field] && <p className="text-destructive text-xs font-body mt-2 ml-1">{errors[field]}</p>}
                    </div>
                )}
                  <div>
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClasses + " resize-none"} />

                    {errors.message && <p className="text-destructive text-xs font-body mt-2 ml-1">{errors.message}</p>}
                  </div>
                  <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-accent text-accent-foreground font-body font-semibold px-6 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_8px_25px_-4px] shadow-accent/30 hover:shadow-accent/50 transition-shadow duration-300 text-base">

                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.form>
              </SmoothReveal> :

            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="bg-card rounded-[2rem] p-10 md:p-14 text-center shadow-xl border border-border/50">

                <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}>

                  <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
                </motion.div>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", damping: 20 }}
                className="font-display text-3xl font-bold text-foreground mb-4">

                  Thank You!
                </motion.h3>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-body text-muted-foreground mb-8 text-lg">

                  We've received your message and will get back to you soon.
                </motion.p>
                <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.6, type: "spring", damping: 20 }}
                className="bg-accent/5 border border-accent/20 rounded-2xl p-8">

                  <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground mb-3">Your exclusive discount coupon:</p>
                  <motion.p
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 150, damping: 12 }}
                  className="font-display text-4xl font-bold text-accent tracking-widest mb-3">

                    IDLI10
                  </motion.p>
                  <p className="font-body text-sm text-muted-foreground">
                    Show this code to get <strong className="text-foreground">10% discount</strong> on your first order.
                  </p>
                </motion.div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </section>);

};

export default ContactSection;