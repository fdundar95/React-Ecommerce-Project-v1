import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.svg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title={'about'} />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Our story begins with a passion for fusing history's charm with
            futuristic marvels. AeonArtifacts emerged as a haven where time
            travel aficionados can explore an array of imaginative gadgets that
            transcend eras. Each creation is a testament to our commitment to
            crafting wonders that spark awe and curiosity. Join us on this
            journey, where every artifact tells a unique tale of innovation and
            adventure.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
