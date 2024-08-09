// Movie constructor function
function Movie(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
}

// Method to display movie information
Movie.prototype.displayInfo = function() {
    return `${this.title} directed by ${this.director} with a rating of ${this.rating}`;
};

// Closure to create private properties and methods
function createMovie(title, director, rating) {
    let _rating = rating; // private property
    
    return {
        title: title,
        director: director,
        getRating: function() {
            return _rating;
        },
        setRating: function(newRating) {
            if (newRating >= 1 && newRating <= 10) {
                _rating = newRating;
            }
        },
        displayInfo: function() {
            return `${this.title} directed by ${this.director} with a rating of ${_rating}`;
        }
    };
}

// Initialize an empty array to hold movies
const movies = [];

// Function to add movie to the list
function addMovie(title, director, rating) {
    // Create a movie object
    const movie = createMovie(title, director, rating);
    movies.push(movie);
    displayMovies();
}

// Function to display all movies
function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // Clear existing list

    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = movie.displayInfo();
        movieList.appendChild(listItem);
    });
}

// Event listener for form submission
document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const rating = parseInt(document.getElementById('rating').value, 10);

    // Add movie and reset form
    addMovie(title, director, rating);
    this.reset();
});
