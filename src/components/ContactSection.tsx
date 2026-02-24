import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Gift } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
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
    "w-full bg-muted/50 border border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200";

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body font-semibold text-sm uppercase tracking-[0.15em] mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Contact Us</h2>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {(["name", "phone", "email"] as const).map((field) => (
                  <div key={field}>
                    <input
                      name={field}
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={field === "name" ? "Your Name" : field === "phone" ? "Phone Number" : "Email Address"}
                      value={form[field]}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {errors[field] && <p className="text-destructive text-xs font-body mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClasses + " resize-none"}
                  />
                  {errors.message && <p className="text-destructive text-xs font-body mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground font-body font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-10 text-center shadow-lg"
              >
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                <p className="font-body text-muted-foreground mb-6">
                  We've received your message and will get back to you soon.
                </p>
                <div className="bg-accent/10 rounded-2xl p-6 inline-block">
                  <Gift className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-body text-sm text-muted-foreground mb-2">Your exclusive discount coupon:</p>
                  <p className="font-display text-3xl font-bold text-accent tracking-wider">IDLI10</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    Show this code to get <strong>10% discount</strong> on your first order.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
