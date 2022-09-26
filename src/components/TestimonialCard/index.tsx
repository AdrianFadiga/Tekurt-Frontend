import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IContext, MyContext } from '../../context/MyContext';
import { ITestimonial } from '../../interfaces/ITestimonial';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';
import TestimonialBtn from '../TestimonialBtn/TestimonialBtn';

interface Props {
    testimonial: ITestimonial
    pending: boolean
}

const TestimonialCard: React.FC<Props> = ({testimonial, pending}) => {
  const {pathname} = useLocation();
  const { profileImg } = useContext(MyContext) as IContext;
  console.log(profileImg?.id);
  const showAcceptAndRefuse = pending && pathname === '/testimonials/';
  const showDeleteButton = testimonial.senderId === profileImg?.id;
  const showPendingTestimonial = !pending || pathname === '/testimonials/' 
  || testimonial.senderId === profileImg?.id;
  const acceptTestimonial = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('PATCH', {}, `testimonials/${testimonial.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };
  const refuseTestimonial = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('DELETE', {}, `testimonials/${testimonial.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };

  return (
    <div>
      {
        showPendingTestimonial &&
          <div className='testimonial-sender'>
            <Link 
              to={`/user/${testimonial.sender.username}`}>
              <img src={testimonial.sender.imageUrl} />
              <p>{testimonial.sender.username}</p>
            </Link>
            <p>{testimonial.content}</p>
          </div>
      }      
      {
        showAcceptAndRefuse &&
        <div>
          <TestimonialBtn
            content={'Aceitar'}
            action={() => acceptTestimonial()}>
          </TestimonialBtn>
          <TestimonialBtn
            content={'Recusar'}
            action={() => refuseTestimonial()}>
          </TestimonialBtn>
        </div>
      }
      {
        showDeleteButton &&
          <TestimonialBtn 
            content={testimonial.status === 'accepted' ? 'Deletar' : 'Cancelar Envio'}
            action={() => refuseTestimonial()}
          />
      }
    </div>
  );
};
  
export default TestimonialCard;