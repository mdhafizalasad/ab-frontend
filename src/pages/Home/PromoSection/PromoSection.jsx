import React from "react";

const PromoSection = () => {
  // Array containing data for images
  const promoData = [
    {
      src: "/image/promo1.jpg",
      alt: "XMART promo 1",
    },
    {
      src: "/image/promo2.jpg",
      alt: "XMART promo 2",
    },
    {
      src: "/image/promo3.jpg",
      alt: "XMART promo 3",
    },
    {
      src: "/image/promo3.jpg",
      alt: "XMART promo 4",
    },
    {
      src: "/image/promo4.jpg",
      alt: "XMART promo 5",
    },
    {
      src: "/image/promo4.jpg",
      alt: "XMART promo 6",
    },
  ];

  // Function to chunk the images into groups of 2
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Group images in pairs of 2
  const chunkedData = chunkArray(promoData, 2);

  return (
    <>
      {chunkedData.map((row, rowIndex) => (
        <div className="mb-4" key={rowIndex}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {row.map((image, imageIndex) => (
                <div key={imageIndex} className="w-full">
                  <div className="mb-3">
                    <a href="#" className="block">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-md shadow-md"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PromoSection;
