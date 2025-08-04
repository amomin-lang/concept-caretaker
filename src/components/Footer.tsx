export const Footer = () => {
  const locations = [
    "Sydney",
    "Melbourne", 
    "Brisbane",
    "Adelaide",
    "Perth",
    "ACT"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Australia-Wide Coverage</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
            {locations.map((location, index) => (
              <span key={location} className="flex items-center">
                {location}
                {index < locations.length - 1 && (
                  <span className="mx-4 text-primary-light">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-primary-light/20">
            <p className="text-primary-foreground/80">
              © 2024 Xcllusive Business Valuations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};