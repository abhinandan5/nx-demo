
import { DogCard } from './DogCard';
import { DogImage } from '../types/types';

interface Props {
  dogs: DogImage[];
}

export function DogGrid({ dogs }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dogs.map(dog => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}