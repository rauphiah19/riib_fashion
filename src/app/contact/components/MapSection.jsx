export default function MapSection() {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-warm">
      <div className="aspect-video md:aspect-[21/9] w-full">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="RIIB Fashion Location - Lagos, Nigeria"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=6.5244,3.3792&z=14&output=embed"
          className="border-0"
        />
      </div>
      <div className="p-24 md:p-32">
        <h3 className="font-heading text-h5 md:text-h4 font-semibold text-text-primary mb-12">
          Visit Our Showroom
        </h3>
        <p className="text-text-secondary text-sm md:text-base font-body mb-18">
          123 Fashion Avenue, Victoria Island, Lagos, Nigeria
        </p>
        <div className="flex flex-wrap gap-12 text-sm md:text-base">
          <div className="flex items-center gap-6 text-text-secondary">
            <span className="font-caption font-medium">Mon - Sat:</span>
            <span className="font-body">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex items-center gap-6 text-text-secondary">
            <span className="font-caption font-medium">Sunday:</span>
            <span className="font-body">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}