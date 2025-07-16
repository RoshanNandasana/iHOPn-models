'use client'; // Required to support ModelGallery as a Client Component
import ModelGallery from '@/components/ModelGallery'; // Adjusted for Next.js src directory

export default function ModelGalleryPage() {
  return (
    <div className="container">
      <ModelGallery />
    </div>
  );
}