import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry from portfolio");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:joemdjossou@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 md:px-10 lg:px-14 py-20 md:py-28">

      {/* / label */}
      <p className="section-label mb-8">Inquiries</p>

      {/* Split headline */}
      <h2
        className="font-bold leading-[0.88] tracking-tight text-foreground mb-16"
        style={{ fontSize: "clamp(3rem, 9vw, 11rem)" }}
      >
        Let's
        <br />
        <span className="text-muted-foreground">Connect.</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left — info */}
        <div className="space-y-10">
          <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
            Open to project discussions, speaking opportunities, and new roles.
            I typically respond within 24 hours.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:joemdjossou@outlook.com"
              className="flex items-center justify-between group border-b border-border py-4 hover:border-foreground/40 transition-smooth"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">Email</p>
                <p className="text-sm text-foreground">joemdjossou@outlook.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth" />
            </a>

            <a
              href="https://github.com/joemdjossou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group border-b border-border py-4 hover:border-foreground/40 transition-smooth"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">GitHub</p>
                <p className="text-sm text-foreground flex items-center gap-2">
                  <Github className="w-4 h-4" /> joemdjossou
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth" />
            </a>

            <a
              href="https://www.linkedin.com/in/joemdjossou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group border-b border-border py-4 hover:border-foreground/40 transition-smooth"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-sm text-foreground flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> joemdjossou
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth" />
            </a>

            <a
              href="/resume.pdf"
              download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
              className="flex items-center justify-between group border-b border-border py-4 hover:border-foreground/40 transition-smooth"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-1">Resume</p>
                <p className="text-sm text-foreground">Download PDF</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth" />
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="flex flex-col items-start justify-center h-full space-y-4 py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                / Message sent
              </p>
              <p className="text-2xl font-bold text-foreground">
                Thank you. Talk soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground block mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="Your full name"
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground/60 placeholder:text-muted-foreground/40 transition-smooth"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground block mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground/60 placeholder:text-muted-foreground/40 transition-smooth"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground block mb-2">
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell me about your project or how I can help..."
                  className="rounded-none border-0 border-b border-border bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground/60 placeholder:text-muted-foreground/40 transition-smooth resize-none"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="gradient-primary text-primary-foreground rounded-none text-xs font-semibold uppercase tracking-[0.18em] px-8 py-5 hover:opacity-90 hover-lift"
              >
                Send Inquiry
                <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
