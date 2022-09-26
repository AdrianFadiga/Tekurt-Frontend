import { Link, useLocation } from 'react-router-dom';
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
  const showPendingTestimonial = !pending || pathname === '/testimonials/';
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
        pending && pathname === '/testimonials/' &&
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
    </div>
  );
};
  
export default TestimonialCard;