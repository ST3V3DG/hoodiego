"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    Label: "Email",
    value: "contact@hoodiego.store",
    href: "mailto:contact@hoodiego.store",
  },
  {
    icon: Phone,
    Label: "Phone",
    value: "+0 (000) 123-4567",
    href: "tel:+00001234567",
  },
  {
    icon: MapPin,
    Label: "Address",
    value: "12 Fashion Street, 75001 City",
    href: "#",
  },
];

export function Contact() {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                  Get in Touch
                </span>
                <div className="h-px w-12 bg-zinc-200" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  Contact
                </span>
              </div>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-none text-balance text-primary mb-6">
                Let&apos;s <br />
                <span className="italic">talk</span>.
              </h2>
              <p className="text-primary-foreground text-lg text-pretty leading-relaxed max-w-md">
                Have a question about our hoodies or your order? We&apos;d love
                to hear from you. Drop us a message and we&apos;ll get back to
                you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {contactInfo.map((item) => (
                <Link
                  key={item.Label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="size-12 rounded-sm bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {item.Label}
                    </p>
                    <p className="text-sm font-medium text-primary-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={(event) => event.preventDefault()}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto text-xs font-bold uppercase tracking-[0.2em] px-8 rounded-sm"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
