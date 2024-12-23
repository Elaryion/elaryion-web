interface NewsletterProps {
  showBackground?: boolean;
}

export default function Newsletter({ showBackground = true }: NewsletterProps) {
  const backgroundStyle = showBackground
    ? {
        backgroundImage: 'url(https://i.hizliresim.com/4zvzha0.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section className="bg-[#799DBC] py-12 sm:py-20 lg:py-32" style={backgroundStyle}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl tracking-tight text-white  lg:col-span-7">
          <h2 className="inline text-3xl sm:text-4xl font-bold sm:block lg:inline xl:block">Stay in the Glow!</h2>
          <p className="inline text-sm text-gray-300 sm:block lg:inline xl:block">Be the first to know about the latest skincare innovations, expert tips, and exclusive updates from
          Elaryion. Sign up for our newsletter and keep your skin in the spotlight.</p>
        </div>
        
        <form action="https://formsubmit.co/b3772544f822d13a3e68f77b0878bec8" method="POST" className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:text-white"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#799DBD] shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-300">
          We prioritize your privacy. Read our{' '}
            <a href="/privacy-policy" className="font-semibold text-white">
              privacy&nbsp;policy
            </a>
            {' '}for details.
          </p>
          <input type="hidden" name="_subject" value="New Newsletter Subscription!"></input>
          <input type="hidden" name="_next" value="https://elaryion.vercel.app/thanks"></input>
          <input type="hidden" name="_template" value="table"></input>
          <input type="text" name="_honey" style={{display: 'none'}}></input>
        </form>
      </div>
    </section>
  );
} 