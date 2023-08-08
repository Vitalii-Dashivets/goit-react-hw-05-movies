import { Overlay } from './Loader.styled';
import { ScaleLoader } from 'react-spinners';
export const Loader = () => {
  return (
    <Overlay>
      <ScaleLoader color="#d77136" />
    </Overlay>
  );
};
