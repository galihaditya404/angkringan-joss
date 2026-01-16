import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Angkringan Joss',
  description: 'Get in touch with us. We love to hear from our community.',
};

export default function ContactPage() {
  return (
    <div className="bg-cream-100 min-h-screen">
      <div className="bg-earth-900 text-cream-100 py-20 px-4">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Get in Touch</h1>
          <p className="text-earth-100/70 max-w-2xl mx-auto">
            Questions, feedback, or just want to say hello? We're all ears.
          </p>
        </div>
      </div>

      <div className="container-custom px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                   <h2 className="text-2xl font-bold font-heading text-earth-900 mb-4">Chat with Us</h2>
                   <p className="text-charcoal-500 mb-6">The fastest way to reach us is via WhatsApp or Email.</p>
                   
                   <div className="space-y-4">
                      <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-earth-100 hover:border-secondary transition-colors group">
                         <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <MessageCircle size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-earth-900 group-hover:text-secondary">WhatsApp</p>
                            <p className="text-sm text-charcoal-500">+62 812 3456 7890</p>
                         </div>
                      </a>
                      
                      <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-earth-100 hover:border-secondary transition-colors group">
                         <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <Mail size={20} />
                         </div>
                         <div>
                            <p className="font-bold text-earth-900 group-hover:text-secondary">Email</p>
                            <p className="text-sm text-charcoal-500">hello@angkringanjoss.com</p>
                         </div>
                      </a>
                   </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl border border-earth-100 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-earth-900 mb-6">Send a Message</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-charcoal-500">First Name</label>
                            <input type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-charcoal-500">Last Name</label>
                            <input type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-charcoal-500">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-charcoal-500">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="Tell us what's on your mind..."></textarea>
                    </div>

                    <Button fullWidth className="mt-4">
                        Send Message
                        <Send size={16} className="ml-2" />
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
