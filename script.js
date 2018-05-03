
var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lew.jpg'
  },
  {
  	id: 3,
  	title: 'Gwiezdne Wojny',
  	desc: 'Film o rycerzach Jedi',
  	img: 'images/gwiezdne.jpg'
  },
  {
  	id: 4,
  	title: 'Before I Fall',
  	desc: 'film o młodzieży',
  	img: 'images/before.jpg'
  }
];






var MovieImage = React.createClass({
    propTypes: {
      img: React.PropTypes.string.isRequired,
    },

    render: function() {
      return (
        React.createElement('img', {src: this.props.img, width: 200})
      );
    },
});


var moviesElements = movies.map(function(movie){
  return React.createElement(Movie, {key: movie.id, movie: movie});
});


var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista Filmów'),
  React.createElement(moviesList, {})
);


ReactDOM.render(element, document.getElementById('app'));
