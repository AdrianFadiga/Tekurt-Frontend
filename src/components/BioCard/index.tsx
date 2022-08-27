import { IUser } from '../../interfaces/IUser';

interface Props {
  user: IUser
}

const BioCard: React.FC<Props> = ({user}) => {
  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td>Sobre mim:</td>
            <td>{user.biography}</td>
          </tr>
          <tr>
            <td>Relacionamento:</td>
            <td>{user.socialStatusId}</td>
          </tr>
          <tr>
            <td>Crianças:</td>
            <td>{user.children}</td>
          </tr>
          <tr>
            <td>Fuma?</td>
            <td>{user.smokes}</td>
          </tr>
          <tr>
            <td>Bebe?</td>
            <td>{user.drinkingId}</td>
          </tr>
          <tr>
            <td>Signo</td>
            <td>{user.signId}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default BioCard;