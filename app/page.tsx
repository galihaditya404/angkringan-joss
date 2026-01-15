export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 gap-8">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary">
          Angkringan Joss
        </h1>
        <p className="text-lg md:text-xl text-olive-500 font-medium">
          Coffee. Comfort. Community.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 bg-primary text-cream-100 rounded-lg hover:bg-earth-900 transition-colors">
            Order Now
          </button>
          <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-earth-100 transition-colors">
            Locate Us
          </button>
        </div>
      </main>
      <footer className="text-sm text-gray-500 font-sans">
        Coming Soon
      </footer>
    </div>
  );
}
