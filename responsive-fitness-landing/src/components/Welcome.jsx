import { constants } from '../constants/constants';

const { welcomeSection } = constants;

const Welcome = () => {
  return (
    <div className="flex justify-center items-center flex-col py-12 px-6 gap-10">
      <h2 className="text-[32px] font-semibold">{welcomeSection.title}</h2>
      <div className="h-[3px] bg-primary w-[45px]"></div>
      <ul className="flex sm:gap-20 gap-10 md:flex-row flex-col">
        {welcomeSection.cards.map((card, index) => {
          return (
            <li
              key={index}
              className="flex flex-col flex-1 items-center justify-center gap-4 max-w-[300px]"
            >
              <img src={card.logo} alt="sport icon" className="w-[80px] h-[80px]" />
              <h3 className="text-primary font-semibold">{card.title}</h3>
              <p className="text-center">{card.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Welcome;
