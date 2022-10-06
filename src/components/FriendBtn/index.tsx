import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    action(): void
    content: string
    typeBtn: string
}

const FriendBtn: React.FC<Props> = ({action, content, typeBtn}) => {
  return (
    <button
      className={ typeBtn }
      onClick={action}>
      {content}
    </button>
  );
};

export default FriendBtn;