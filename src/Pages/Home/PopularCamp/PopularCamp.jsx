import PopularCard from './PopularCard';
import useCamp from '../../Hooks/useCamp';

const PopularCamp = () => {
  const [camps] = useCamp();
  const sortedCamps = [...camps].sort((a, b) => b.participant - a.participant);


  const top8Camps = sortedCamps.slice(0, 8);

  return (
    <div>
      <h1 className='text-4xl font-bold text-white text-center underline mb-5'>Popular Camp</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {top8Camps.map((camp) => (
          <PopularCard key={camp._id} camp={camp}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCamp;
