import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { AtSign, Github, Linkedin, Instagram } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import SEOManager from '@/components/SEOManager';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                toast({ title: "Success!", description: "Thanks for your submission!" });
                setName('');
                setEmail('');
                setMessage('');
                form.reset();
            } else {
                const result = await response.json();
                if (result.errors) {
                    throw new Error(result.errors.map((error: any) => error.message).join(", "));
                } else {
                    throw new Error("Oops! There was a problem submitting your form.");
                }
            }
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error!",
                description: `Failed to send message. ${error.message || 'Please try again.'}`,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen pt-16 relative bg-retro-black">
            <SEOManager title="Contact" description="Get in touch with me." />
            <Navigation />

            <main className="retro-container py-12">
                <h1 className="section-title mb-12">CONTACT TERMINAL</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Contact Info */}
                    <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
                        <h3 className="font-pixel text-xl text-retro-blue mb-6">GET IN TOUCH</h3>

                        <div className="space-y-4 font-retro">
                            <a href="mailto:rohitkshirsagar1904@gmail.com" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                                <AtSign className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                                <span>rohitkshirsagar1904@gmail.com</span>
                            </a>

                            <a href="https://linkedin.com/in/rohitkshirsagar19" target="_blank" rel="noopener noreferrer" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                                <Linkedin className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                                <span>linkedin.com/in/rohitkshirsagar19</span>
                            </a>

                            <a href="https://github.com/rohitkshirsagar19" target="_blank" rel="noopener noreferrer" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                                <Github className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                                <span>github.com/rohitkshirsagar19</span>
                            </a>

                            <a href="https://www.instagram.com/rohitkshirsagar19" target="_blank" rel="noopener noreferrer" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                                <Instagram className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                                <span>instagram.com/rohitkshirsagar19</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h3 className="font-pixel text-xl text-retro-purple mb-6">SEND MESSAGE</h3>

                        <form action="https://formspree.io/f/xblgwrab" method="POST" className="space-y-4" onSubmit={handleSendMessage}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full bg-retro-black border-2 border-retro-gray p-3 font-retro text-retro-light-gray focus:border-retro-purple outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="_replyto"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-retro-black border-2 border-retro-gray p-3 font-retro text-retro-light-gray focus:border-retro-purple outline-none"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full bg-retro-black border-2 border-retro-gray p-3 font-retro text-retro-light-gray focus:border-retro-purple outline-none resize-none"
                                ></textarea>
                            </div>

                            <input type="text" name="_gotcha" style={{ display: 'none' }} />
                            <button
                                type="submit"
                                className="pixel-button w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="py-8 bg-retro-black mt-auto">
                <div className="retro-container text-center">
                    <p className="font-pixel text-retro-light-gray text-sm">
                        © 2026 ROHIT KSHIRSAGAR • ALL RIGHTS RESERVED
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
