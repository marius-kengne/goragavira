import React, { useState, useEffect } from 'react';
import './Test.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function TestApp() {
  const [courses, setCourses] = useState([]);
  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');

  useEffect(() => {
    // Effectuez une requête GET vers votre API pour récupérer les produits
    fetch('votre_url_de_l_api')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Erreur:', error));
  }, []); // Utilisez une dépendance vide pour exécuter l'effet une seule fois lors du montage

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item =>
        item.product.id === GFGcourse.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses.filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name && course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent searchCourse={searchCourse} courseSearchUserFunction={courseSearchUserFunction} />
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />
        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
        />
      </main>
    </div>
  );
}

export default TestApp;
