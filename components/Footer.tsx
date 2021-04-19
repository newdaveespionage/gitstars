import { colors } from '../theme'

const Footer = (): JSX.Element => (
  <footer>
    <a
      href="https://github.com/newdaveespionage/gitstars"
      target="_blank"
      rel="noopener noreferrer"
    >
      Created by Dave Espionage
    </a>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid ${colors.border};
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </footer>
)

export default Footer
