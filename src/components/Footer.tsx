export const Footer = () => {
  const locations = [
    "Sydney",
    "Melbourne", 
    "Brisbane",
    "Adelaide",
    "Perth",
    "Canberra"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">Australia-Wide Business Valuations Coverage</h3>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg">
            {locations.map((location, index) => (
              <span key={location} className="flex items-center">
                {location}
                {index < locations.length - 1 && (
                  <span className="mx-2 sm:mx-4 text-primary-light">|</span>
                )}
              </span>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-light/20">
            <p className="text-primary-foreground/80 text-sm sm:text-base">
              © 2025 Xcllusive Business Valuations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};