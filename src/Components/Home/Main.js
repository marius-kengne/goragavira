import React from 'react';

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
    <div>
        <h2>WordPress Home Page</h2>
        <div>
        <div dangerouslySetInnerHTML={{ __html: posts }} />
        
        </div>
    </div>
    );

    /*
    return (
        <div>
            Bienvenu sur la page d'accueil
        </div>
    );
    */
};

export default Main;


