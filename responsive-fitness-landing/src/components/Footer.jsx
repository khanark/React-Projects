import { constants } from '../constants/constants';

const { footer } = constants;

const Footer = () => {
  return (
    <div className="flex bg-primary h-10 justify-center items-center text-dimWhite">
      {footer.text}
    </div>
  );
};

export default Footer;
