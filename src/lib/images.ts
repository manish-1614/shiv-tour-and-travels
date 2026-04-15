/**
 * Centralized image utility for Shiv Tour & Travels.
 * Manages responsive variants for all processed .webp images.
 */

export interface ResponsiveImage {
  desktop: string;
  tablet: string;
  mobile: string;
  thumbnail: string;
  alt: string;
}

const createImageUrl = (category: string, name: string, size: 'desktop' | 'tablet' | 'mobile' | 'thumbnail') => {
  return `/images/${category}/${name}-${size}.webp`;
};

const imageSet = (category: string, name: string, alt: string): ResponsiveImage => ({
  desktop: createImageUrl(category, name, 'desktop'),
  tablet: createImageUrl(category, name, 'tablet'),
  mobile: createImageUrl(category, name, 'mobile'),
  thumbnail: createImageUrl(category, name, 'thumbnail'),
  alt,
});

export const SITE_IMAGES = {
  car: {
    dzire: imageSet('car', 'white-suzuki-dzire-car', 'White Maruti Suzuki Dzire sedan for premium travel'),
    dzireAlt: imageSet('car', 'white-suzuki-dzire-car-1', 'Clean White Suzuki Dzire - Shiv Tour Travels'),
    innova: imageSet('car', 'innova-travel-india-fort', 'Toyota Innova Crysta parked with a majestic Indian fort background'),
    family: imageSet('car', 'family-car-service', 'Spacious SUV perfect for family trips across India'),
    mountainRoad: imageSet('car', 'mountain-road-car-view', 'Scenic mountain view from a traveling cab'),
    scenicDrive: imageSet('car', 'scenic-mountain-road-trip', 'A cab driving through breathtaking mountain passes'),
    luggage: imageSet('car', 'road-trip-car-luggage', 'Ample boot space for all your travel luggage'),
    suvPacked: imageSet('car', 'suv-packed-for-road-trip', 'Fully loaded SUV ready for an adventure'),
    interiorAmenities: imageSet('car', 'car-rental-interior-amenities', 'Clean car interior with water and tissue amenities'),
  },
  driver: {
    landmark: imageSet('driver', 'smiling-man-indian-landmark', 'Friendly driver guide at an Indian heritage site'),
    mountains: imageSet('driver', 'smiling-man-mountains', 'Experienced mountain route driver specialist'),
  },
  interior: {
    clean: imageSet('interior', 'clean-car-interior-amenities', 'Spotlessly clean vehicle interior for passenger comfort'),
  },
  landmark: {
    highway: imageSet('landmark', 'taj-mahal-highway-drive', 'Driving on the modern highway towards the Taj Mahal'),
    sunset: imageSet('landmark', 'taj-mahal-sunset-drive', 'Cinematic sunset view of the Taj Mahal from the road'),
  },
  tour: {
    lake: imageSet('tour', 'scenic-mountain-lake-tour', 'Pristine mountain lake destination reachable with Shiv Tours'),
  },
};

/**
 * Returns a standard 'sizes' string for Next.js Image component
 * @param type The context where the image is used
 */
export const getImageSizes = (type: 'hero' | 'card' | 'gallery' | 'avatar') => {
  switch (type) {
    case 'hero':
      return '100vw';
    case 'card':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    case 'gallery':
      return '(max-width: 768px) 50vw, 25vw';
    case 'avatar':
      return '120px';
    default:
      return '100vw';
  }
};
