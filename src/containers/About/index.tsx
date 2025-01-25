import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph pattern="primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis iusto
      soluta mollitia quis dolores dignissimos perferendis laudantium provident
      maiores sint, aliquam esse debitis ad id consectetur illo! Ullam,
      aspernatur.
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=ystanz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ystanz&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
