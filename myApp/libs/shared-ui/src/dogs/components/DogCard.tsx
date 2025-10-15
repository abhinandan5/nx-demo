import { DogImage } from "../types/types";

interface Props {
  dog: DogImage;
}

export function DogCard({ dog }: Props) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-200">
        <img 
          src={dog.url} 
          alt={dog.breed}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <p className="font-medium capitalize">{dog.breed}</p>
      </div>
    </div>
  );
}