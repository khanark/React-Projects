import { constants } from '../constants/constants';

const { coachesSection } = constants;

const Coaches = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col  gap-10 py-12 px-6">
      <h3 className="text-[32px] font-semibold">{coachesSection.title}</h3>
      <div className="h-[3px] bg-primary w-[45px]"></div>
      <ul className="flex md:flex-row w-full flex-col md:justify-evenly gap-10">
        {coachesSection.cards.map((card, index) => {
          return (
            <li key={index} className="flex flex-col justify-center items-center sm:gap-4 gap-2">
              <img src={card.logo} alt="coarch photo" className="rounded-[8px]" />
              <p className="mt-2 font-semibold text-[18px] ">{card.name}</p>
              <p className="text-primary text-[14px] font-semibold">{card.sport}</p>
              <p className="text-[#555] max-w-[300px] text-center">{card.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Coaches;
