import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 animate-fade-in">
          <p className="section-label mb-2">Let's connect</p>
          <h2 className="section-heading mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-xl">
            Open to project discussions, talks, and new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="relative">
                <img
                  src="/linkedin-banner.png"
                  alt="Josué Djossou workspace"
                  className="w-full h-64 object-cover rounded-2xl card-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>

              <Card className="card-shadow hover-lift transition-smooth border border-border rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Josué Emmanuel Yaovi Djossou
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm">+228 93 14 27 33</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm">joemdjossou@outlook.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm">Available for Remote Work</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with me:
                    </p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-lg hover-lift"
                        asChild
                      >
                        <a
                          href="https://github.com/joemdjossou"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-lg hover-lift"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/joemdjossou"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 gradient-primary text-primary-foreground hover:opacity-90 hover-lift rounded-lg"
                    asChild
                  >
                    <a href="mailto:joemdjossou@outlook.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="card-shadow hover-lift transition-smooth border border-border rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Send a message
                </CardTitle>
                <p className="text-muted-foreground">
                  If you prefer, you can also contact me using the form below!
                  I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                  />
                </div>

                <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90 hover-lift rounded-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to
                  hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Prefer email?{" "}
            <a
              href="mailto:joemdjossou@outlook.com"
              className="text-primary hover:underline"
            >
              joemdjossou@outlook.com
            </a>
          </p>
          <Button variant="outline" className="rounded-lg hover-lift" asChild>
            <a
              href="/resume.pdf"
              download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
            >
              Download resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
