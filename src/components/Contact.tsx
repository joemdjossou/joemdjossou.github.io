import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate and bring your mobile app ideas to life. Get in
            touch for project discussions or opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

              <Card className="card-shadow hover-lift transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
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
                        className="hover-lift"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover-lift"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover-lift"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 gradient-primary text-white hover-lift"
                    asChild
                  >
                    <a href="mailto:joemdjossou@outlook.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="card-shadow hover-lift transition-smooth">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send me a message
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

                <Button className="w-full gradient-primary text-white hover-lift">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to
                  hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto card-shadow hover-lift transition-smooth gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="mb-6 opacity-90">
                Let's work together to create amazing mobile applications that
                solve real-world problems and delight users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="hover-lift"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/15BxF9MYqgrbqbv1n_2ob3ybty83kgjM_/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover-lift"
                  asChild
                >
                  <a href="mailto:joemdjossou@outlook.com">
                    Start a Conversation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
