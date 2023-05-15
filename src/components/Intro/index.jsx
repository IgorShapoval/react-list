import { Box } from '../Box';
import { IntroImg, IntroText, IntroTitle } from './Intro.styled';

export const Intro = () => {
  return (
    <Box width="intro" boxShadow="1px 1px 10px 1px rgba(0, 0, 0, 0.5)">
      <IntroImg>
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/42/53/47/1000_F_242534750_iSrJStH1JEAkGkJtBjcVAb6hZOcALwUt.jpg"
          alt="intro"
        />
      </IntroImg>
      <Box p="4">
        <IntroTitle>Welcome!</IntroTitle>
        <IntroText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores
          commodi sit, voluptatum repudiandae impedit cupiditate quia corporis
          rem molestias deserunt repellat quaerat adipisci.
        </IntroText>
      </Box>
    </Box>
  );
};
