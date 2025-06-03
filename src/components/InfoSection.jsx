const InfoSection = ({
  title,
  imageUrl,
  imageAlt,
  children,
  imageLeft = false,
}) => {
  const textOrder = imageLeft ? "lg:order-2" : "lg:order-1";
  const imageOrder = imageLeft ? "lg:order-1" : "lg:order-2";

  return (
    <section className="py-5 px-4 bg-gray-50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className={`p-8 lg:p-12 ${textOrder}`}>
          <h2 className="text-4xl font-extrabold text-red-600 mb-8 uppercase tracking-wider">
            {title}
          </h2>
          <div className="text-gray-700 space-y-6 text-lg leading-relaxed">
            {children}
          </div>
        </div>
        <div
          className={`relative h-72 lg:h-[500px] overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ${imageOrder}`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-lg">
                Immagine non disponibile
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
