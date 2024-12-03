export default function Newsletter() {
  return (
    <section className="bg-primary py-16" style={{ backgroundImage: 'url(https://i.hizliresim.com/4zvzha0.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-white font-semibold mb-6">Join To Our Newsletter</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Stay updated with our latest developments and skincare tips. Subscribe to our newsletter for exclusive content.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 rounded-md border border-secondary/20 focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
} 