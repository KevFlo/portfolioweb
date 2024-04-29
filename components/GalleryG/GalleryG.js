
const GalleryG= ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 over:auto-cols-min">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden">
            <img src={image.url} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default GalleryG;