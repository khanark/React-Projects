import { constants } from '../constants/constants';

const { hero } = constants;

const Button = () => {
  return (
    <button className="bg-primary text-white uppercase px-6 py-2 rounded-[4px] font-semibold hover:bg-red-500 button-shadow">
      {hero.button}
    </button>
  );
};

export default Button;
