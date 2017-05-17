// replace images when the page loads
$('img').attr('src', 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/18033930_1503960909622616_5314688270552452047_n.jpg?oh=c19a649a3194f567b8d5f4088cb10d96&oe=599310AC');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'$') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('gradient');
});







