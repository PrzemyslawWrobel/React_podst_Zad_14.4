
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

var MovieTitle = React.createClass({
  propTypes: {
      title: React.PropTypes.string.isRequired,
  },

    render: function() {
      return (
        React.createElement('h2', {}, this.props.title)
      );
    },

});


var MovieDescription = React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
    },

    render: function() {
      return (
        React.createElement('p', {}, this.props.desc)
      );
    },
});

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

var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },

    render: function() {
      return (
        React.createElement('li', {key: this.props.movie.id},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDescription, {desc: this.props.movie.desc}),
          React.createElement(MovieImage, {img: this.props.movie.img})
        ));

    },

});

var moviesElements = movies.map(function(movie){
  return React.createElement(Movie, {key: movie.id, movie: movie});
});

var moviesList = React.createClass({
  render: function() {
    return (React.createElement('ul', {}, moviesElements));
  }
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista Filmów'),
  React.createElement(moviesList, {})
);


ReactDOM.render(element, document.getElementById('app'));

/*
var GalleryItem = React.createClass({
    render: function() {
      return (
        React.createElement('div', {},
            React.createElement('h2', {}, this.props.image.name),
            React.createElement('img', {src: this.props.image.src})
        )
      );
    },
});

var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});

ReactDOM.render(element, document.getElementById('app'));



/*var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img, width: 200})
    );
});


var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

/*	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
   		React.createElement('ul', {},
			React.createElement('li', {},
		        React.createElement('h2', {}, 'Harry Potter'),
		        React.createElement('p', {}, 'Film o czarodzieju')
		    ),
			React.createElement('li', {},
		        React.createElement('h2', {}, 'Król Lew'),
		        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
			)
		)

	);
*/
