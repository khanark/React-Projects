import { constants } from '../constants/constants';
import styles from '../style';

const {
  header: {
    topNav: { phoneNumber, address, contactIcons },
  },
} = constants;

const TopNav = () => {
  return (
    <div
      className={`flex md:flex-row flex-col bg-primary md:h-10 h-auto md:justify-between items-center gap-2 py-2 ${styles.paddingX}`}
    >
      <div className={`${styles.flexCenter} gap-2`}>
        <phoneNumber.icon className="svg-icon" />
        <p className="font-ptSans text-[14px] text-dimWhite">{phoneNumber.text}</p>
      </div>

      <div className={`${styles.flexCenter} gap-2`}>
        <address.icon className="svg-icon" />
        <p className="font-ptSans text-[14px] text-dimWhite">{address.text}</p>
      </div>

      <div className="flex items-center gap-2">
        {contactIcons.map((ContactIcon, index) => {
          return (
            <ContactIcon
              key={index}
              className="w-[24px] h-[24px] cursor-pointer svg-icon hover:fill-dimWhite"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopNav;
