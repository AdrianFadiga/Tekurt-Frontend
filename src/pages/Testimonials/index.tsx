import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TestimonialBtn from '../../components/TestimonialBtn/TestimonialBtn';
import TestimonialCard from '../../components/TestimonialCard';
import { IContext, MyContext } from '../../context/MyContext';
import { createOptionsRequest } from '../../services/createOptionsRequest';
import { requestAPI } from '../../services/requestAPI';

const Testimonials = () => {
  const { username } = useParams();
  const [testimonialContent, setTestimonialContent] = useState<string>('');
  const { getProfileInfo, profileInfo } = useContext(MyContext) as IContext;
  const navigate = useNavigate();
  const pendingTestimonials = profileInfo?.testimonials.filter((f) => f.status === 'pending');
  const acceptedTestimonials = profileInfo?.testimonials.filter((f) => f.status === 'accepted');
  useEffect(() => {
    getProfileInfo(username)
      .catch(() => navigate('/not-found'));
  }, [username]);

  const createTestimonial = async () => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('POST', {
      content: testimonialContent
    }, `testimonials/${profileInfo?.id}`, {authorization: `Bearer ${token}`});
    await requestAPI(options);
    window.location.reload();
  };

  return (
    <section>
      <Navbar />
      <h1>Depoimentos:</h1>
      {username &&
      <div>
        <input
          type="text"
          value={testimonialContent}
          onChange={({target}) => setTestimonialContent(target.value)}>
        </input>
        <TestimonialBtn 
          content={'Enviar'}
          action={() => createTestimonial()}
        />
      </div>      
      }
      <div>
        {
          pendingTestimonials?.map((testimonial, i) => (
            <TestimonialCard 
              key={`${testimonial}...${i}`}
              testimonial={testimonial}
              pending={true}
            />
          ))
        }    
        {
          acceptedTestimonials?.map((testimonial, i) => (
            <TestimonialCard 
              key={`${i}..${testimonial}`}
              testimonial={testimonial}
              pending={false}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Testimonials;