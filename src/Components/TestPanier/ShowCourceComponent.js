import React from 'react';

const ShowCourseComponent = ({ courses, filterCourseFunction, addCourseToCartFunction }) => {
  return (
    <div className='course-list'>
      {filterCourseFunction.length === 0 ? (
        <p className="no-results">
          Désolé, Le produit que vous cherchez n'est pas trouvé.
        </p>
      ) : (
        filterCourseFunction.map((course) => (
          <div className="course" key={course.id}>
            <img src={course.image} alt={course.name} />
            <h2>{course.name}</h2>
            <p>Prix: {course.price} €</p>
            <button
              className="btn-add-to-cart"
              onClick={() => addCourseToCartFunction(course)}
            >
              Ajouter au panier
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowCourseComponent;
