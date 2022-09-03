import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    action(): void
    content: string 
}

const FriendBtn: React.FC<Props> = ({action, content}) => {
  return (
    <button
      onClick={action}>
      {content}
    </button>
  );
};

export default FriendBtn;