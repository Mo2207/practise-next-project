
'use client';

const FaqsSection = () => {
  return (
    <section className="py-10">
      <h2 className="font-bold text-3l mb-6 text-center">Frequently asked questions:</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <details className="border rounded-lg p-4 hover:bg-orange-600 duration-300">
        <summary className="cursor-pointer font-semibold">How long does a detailing session take?</summary>
        <p className="mt-2">The duration depends on the service. Typically, it takes 2-4 hours.</p>
        </details>
        <details className="border rounded-lg p-4 hover:bg-orange-600 duration-300">
        <summary className="cursor-pointer font-semibold">Do you offer mobile detailing services?</summary>
        <p className="mt-2">Yes, we can detail your car at your location for an additional fee.</p>
        </details>
        <details className="border rounded-lg p-4 hover:bg-orange-600 duration-300">
        <summary className="cursor-pointer font-semibold">How can I book an appointment?</summary>
        <p className="mt-2">You can call us, email us, or use the contact form on this page.</p>
        </details>
      </div>
    </section>
  )
}

export default FaqsSection;