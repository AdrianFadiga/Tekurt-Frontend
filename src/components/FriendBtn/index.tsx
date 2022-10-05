import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    action(): void
    content: string 
}

const FriendBtn: React.FC<Props> = ({action, content}) => {
  return (
    <button
      className={ content === 'Desfazer Convite' ? 'undo-invite' : 'send-invite' }
      onClick={action}>
      {content}
    </button>
  );
};

export default FriendBtn;