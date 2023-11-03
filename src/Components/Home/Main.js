import React , {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../Assets/homeimg1.png';
import image2 from '../../Assets/homeimg2.png';
import image3 from '../../Assets/homeimg3.png';
import './Home.css';



const Main = () => {

    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
    const fetchPosts = async () => {
        try {
        const response = await fetch('https://eisee-it.o3creative.fr/2023/groupe5/wp-json/wp/v2/pages');
        const data = await response.json();
        
        for (let donn of data) {
            if (donn.id ==141 && donn.slug == "accueil") {
                console.log(donn);
                console.log(donn.content.rendered);
                setPosts(donn.content.rendered);
            }
        }
        
        } catch (error) {
        console.error('Error fetching posts: ', error);
        }
    };
    fetchPosts();
    }, []);

    return (
    <div className='main'>
        <div className='bienvenue'>Bienvenue !</div>
        {/* <div>
            <div dangerouslySetInnerHTML={{ __html: posts }} />
        </div> */}
        <div className='texthome'>Découvrez l'élégance à chaque pas avec nos magnifiques robes pour toutes les occasions. Notre collection variée vous offre un large éventail de styles, de coupes et de couleurs pour répondre à toutes vos envies. Que ce soit pour une soirée spéciale, une sortie décontractée ou un événement formel, nous avons la robe parfaite pour chaque moment de votre vie.</div>

        
        <div className="carousel-container">
        <Carousel showThumbs={true} infiniteLoop autoPlay>
        
        <div>
            <img className='homeImage' src={image2} alt="Image 2" />
        </div>
        <div>
            <img className='homeImage' src={image3} alt="Image 3" />
        </div>
        <div>
            <img className='homeImage' src={image1} alt="Image 1" />
        </div>
        
        </Carousel>        
        

        </div>


    </div>




    );
};

export default Main;


