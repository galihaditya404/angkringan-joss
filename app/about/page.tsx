import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Angkringan Joss',
  description: 'From a humble street cart to a modern coffee sanctuary. Read our story.',
};

export default function AboutPage() {
  return (
    <div className="bg-cream-100 min-h-screen">
      <div className="bg-earth-900 text-cream-100 py-24 px-4">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Story</h1>
          <p className="text-earth-100/70 max-w-2xl mx-auto">
            Elevating the humble "Angkringan" spirit for the modern soul.
          </p>
        </div>
      </div>

      <div className="container-custom px-4 py-20 space-y-20">
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold text-earth-900">From Street to Sanctuary</h2>
                <div className="space-y-4 text-charcoal-500 leading-relaxed">
                    <p>
                        It started with a simple idea: why can't high-quality coffee be as accessible and friendly as the street-side angkringan we grew up with?
                    </p>
                    <p>
                        In 2026, we opened our first "Angkringan Joss" – a place where the precision of specialty coffee meets the warmth of communal seating. We kept the prices honest and the vibes grounded.
                    </p>
                </div>
            </div>
            <div className="bg-earth-200 h-[400px] rounded-2xl flex items-center justify-center text-earth-900/20 font-heading text-2xl">
                [Founders Image]
            </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-earth-100/50">
                <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h3 className="font-heading font-bold text-lg mb-2">Quality First</h3>
                <p className="text-sm text-charcoal-500">Sourcing the best local beans, roasted to highlight their natural sweetness.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-earth-100/50">
                <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h3 className="font-heading font-bold text-lg mb-2">Community Centered</h3>
                <p className="text-sm text-charcoal-500">A space built for connection. Come for the coffee, stay for the conversation.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-earth-100/50">
                <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h3 className="font-heading font-bold text-lg mb-2">Simply Honest</h3>
                <p className="text-sm text-charcoal-500">No pretenses, no complicated jargon. Just good things made well.</p>
            </div>
        </section>
      </div>
    </div>
  );
}
