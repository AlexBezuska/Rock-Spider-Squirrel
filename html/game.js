$('.choice').click(function() {
	// Reset the stuff
	$('.you').text('You');
	$('.cpu').text('Computer');
	$('.stageCPU').empty();
	$('.stageUser').empty();
	$('.outcome').empty();



	var userPick = $(this).text();
	$(this).addClass('picked');
	$(this).siblings('.choice').removeClass('picked');
	$('.you').append(" chose: " + userPick);
	$('.stageUser').append('<div class="battler ' + userPick + '"><br></div>');


	var cpuPick = Math.floor(Math.random() * 3);


	if (cpuPick === 2) { /* CPU ROCK */
		$('.cpu').append(' chose: Rock');
		cpuPick = 'Rock';
		$('.stageCPU').append('<div class="battler Rock"></div>');

		if (userPick == 'Rock') {
			$('.outcome').append('Clack clack, It\'s a tie!');
			$('.outcome').show();
		}
		if (userPick == 'Spider') {
			$('.outcome').append('Rock crushes spider, you loose!');
			$('.outcome').show();
		}
		if (userPick == 'Squirrel') {
			$('.outcome').append('Squirrel steals rock, you win!');
			$('.outcome').show();
		}
	} // end rock


	if (cpuPick === 1) { /* CPU SPIDER */
		$('.cpu').append(' chose: Spider');
		cpuPick = 'Spider';
		$('.stageCPU').append('<div class="battler Spider"></div>');
		if (userPick == 'Rock') {
			$('.outcome').append('Rock crushes spider, you win!');
			$('.outcome').show();
		}
		if (userPick == 'Spider') {
			$('.outcome').append('Spider Pals, It\'s a tie!');
			$('.outcome').show();
		}
		if (userPick == 'Squirrel') {
			$('.outcome').append('Spider scares squirrel, you loose!');
			$('.outcome').show();
		}
	} // end spider



	if (cpuPick === 0) { /* CPU SQUIRREL */
		$('.cpu').append(' chose: Squirrel');
		cpuPick = 'Squirrel';
		$('.stageCPU').append('<div class="battler Squirrel"></div>');
		if (userPick == 'Rock') {
			$('.outcome').append('Squirrel steals rock, you loose!');
			$('.outcome').show();
		}
		if (userPick == 'Spider') {
			$('.outcome').append('Spider scares squirrel, you win!');
			$('.outcome').show();
		}
		if (userPick == 'Squirrel') {
			$('.outcome').append('Two Squirrels have party, It\'s a tie!');
			$('.outcome').show();
		}
	} // end squirrel 

}); // end click function



$('.reset').click(function() {
	// Reset the stuff
	$('.you').text('You');
	$('.cpu').text('Computer');
	$('.stageCPU').empty();
	$('.stageUser').empty();
	$('.outcome').empty();
	$('.outcome').hide();
});