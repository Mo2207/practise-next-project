
'use client';

const FaqsSection = () => {
  return (
    <section className="py-10 relative max-h-[60vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto gap-4 grid grid-cols-2">
        <details className="border rounded-lg p-4 bg-gray-800 bg-opacity-90 hover:bg-orange-600 duration-300 overflow-hidden h-[105px]">
        <summary className="cursor-pointer font-semibold">How long does a detailing session take?</summary>
        <p className="mt-2">The duration depends on the service. Typically, it takes 2-4 hours. But there was this one time it took 6 days.</p>
        </details>
        <details className="border rounded-lg p-4 bg-gray-800 bg-opacity-90 hover:bg-orange-600 duration-300 overflow-hidden h-[105px]">
        <summary className="cursor-pointer font-semibold">Do you offer mobile detailing services?</summary>
        <p className="mt-2">It really depends on if we&apos;re tired or not that day.</p>
        </details>
        <details className="border rounded-lg p-4 bg-gray-800 bg-opacity-90 hover:bg-orange-600 duration-300 overflow-hidden h-[105px]">
        <summary className="cursor-pointer font-semibold">How can I book an appointment?</summary>
        <p className="mt-2">You can call us, email us, or go to the booking page.</p>
        </details>
        <details className="border rounded-lg p-4 bg-gray-800 bg-opacity-90 hover:bg-orange-600 duration-300 overflow-hidden h-[105px]">
        <summary className="cursor-pointer font-semibold">What payment methods do you accept?</summary>
        <p className="mt-2">Small trinkets and cool rocks are best, but we&apos;ll take cash or debit/credit if we need to.</p>
        </details>
        <details className="border rounded-lg p-4 bg-gray-800 bg-opacity-90 hover:bg-orange-600 duration-300 overflow-hidden h-[105px]">
        <summary className="cursor-pointer font-semibold">Do I need to prepare my car before the appointment?</summary>
        <p className="mt-2">A quick removal of personal items is appreciated, because we hire convicted felons.</p>
        </details>
        <details className="border rounded-lg p-4 bg-gray-800 bg-opacity-90 hover:bg-orange-600 duration-300 overflow-hidden h-[105px]">
        <summary className="cursor-pointer font-semibold">What areas do you serve?</summary>
        <p className="mt-2">We serve wherever we feel like it that day. Contact us or book an appointment and find out.</p>
        </details>
      </div>
    </section>
  )
}

export default FaqsSection;