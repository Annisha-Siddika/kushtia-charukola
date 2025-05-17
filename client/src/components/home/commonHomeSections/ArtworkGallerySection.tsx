'use client';

import Image from 'next/image';

export default function ArtworkGallerySection() {
  // Placeholder image list – replace with actual artwork URLs
  const artworks = [
    { src: '/images/art1.jpg', width: 300, height: 400 },
    { src: '/images/art2.jpg', width: 400, height: 300 },
    { src: '/images/art3.jpg', width: 350, height: 500 },
    { src: '/images/art4.jpg', width: 500, height: 350 },
    { src: '/images/art5.jpg', width: 450, height: 450 },
    { src: '/images/art6.jpg', width: 300, height: 350 },
    { src: '/images/art7.jpg', width: 350, height: 300 },
    { src: '/images/art8.jpg', width: 400, height: 400 },
    { src: '/images/art9.jpg', width: 300, height: 300 },
  ];

  return (
    <section className="bg-[#f8f4f2] py-12 px-4 text-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#511944] text-center mb-10">
          আমাদের কিছু শিল্পকর্ম
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {artworks.map((art, i) => (
            <div
              key={i}
              className="relative"
              style={{
                width: `${art.width / 2}px`,
                height: `${art.height / 2}px`,
              }}
            >
              <Image
                src={art.src}
                alt={`Artwork ${i + 1}`}
                fill
                className="object-cover rounded shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
