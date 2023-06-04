import Button from './Button';
import { constants } from '../constants/constants';
import styles from '../style';

const { hero } = constants;

const Hero = () => {
  return (
    <div className={`${styles.flexCenter} flex-col flex-1 text-center px-6`}>
      <h1 className="font-ptSans text-white md:text-[64px] sm:text-[44px] text-[32px] uppercase tracking-widest line font-semibold mb-5">
        {hero.title}
      </h1>
      <p className="text-dimWhite md:text-[18px] text-[16px] mb-10 max-w-[500px]">
        {hero.subtitle}
      </p>
      <Button />
    </div>
  );
};

export default Hero;
