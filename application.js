$(document).ready(function(){
	createGrid(16);
	draw();

	$("#new").click(function(){
		getInput();
		draw();
	})

	$("#outline").click(function(){
		toggleGridLines();
	})

	$("#trail").click(function(){
		trail();

	})

	$('#clear').click(function(){
		clearGrid();
	})

	
})


function createGrid(cells){

	var totalCells = cells*cells;
	for(i=0; i<totalCells; i++){
		$('.container').append('<div class="cell"></div>');
	}

	var size = Math.round(640 / cells);
	$('.cell').css('height', size);
	$('.cell').css('width', size);

}

function draw(){


	$('.cell').mouseover(function(){
		$(this).addClass('color');
	})
}

function getInput(){
	clearGrid();
	var input = prompt("Choose the size of the grid (1-100)?", 20);
	createGrid(input);
}

function clearGrid(){
	$('.container').empty();
}

function toggleGridLines(){
	$('.cell').toggleClass('outline');
}

function trail(){
	getInput();
	$('.cell').mouseenter(function(){
		$(this).css('background', '#7e7e7e');
		$(this).fadeTo('slow', 0);
	})

	$('.cell').mouseleave(function(){
		$(this).css('background', '#bdbdbd');
		$(this).fateTo(700, .5);
	})
}

/*
function shade(){
	getInput();
	$('.cell').mouseenter(function(){
		$(this).css('opacity', '-= .01')
	})
}

function colorSelect(){
	var sel = document.getElementById("colors");
	color = sel.options[sel.selectedIndex].className;
	sel.className = color;
	sel.blur()

	return sel.className;
}
*/

