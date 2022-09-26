import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import TestimonialCard from '../../components/TestimonialCard';
import { IContext, MyContext } from '../../context/MyContext';

const Testimonials = () => {
  const { username } = useParams();
  const { getProfileInfo, profileInfo } = useContext(MyContext) as IContext;
  const pendingTestimonials = profileInfo?.testimonials.filter((f) => f.status === 'pending');
  const acceptedTestimonials = profileInfo?.testimonials.filter((f) => f.status === 'accepted');
  const navigate = useNavigate();
  useEffect(() => {
    getProfileInfo(username)
      .catch(() => navigate('/not-found'));
  }, [username]);

  return (
    <section>
      <Navbar />
      <h1>Depoimentos:</h1>
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