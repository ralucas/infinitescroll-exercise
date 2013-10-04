$(document).ready(function(){

	var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var fulldate = {};

	var today = new Date();

	var day = today.getDay();
	var month = today.getMonth();
	var date = today.getDate();
	var year = today.getFullYear();

	var daysArr = [
		{
			dayOfWeek: day,
			month: month,
			date: date,
			year: year,
	}];

	var today = new Date();
	var tomorrow = new Date();
	tomorrow.setDate(today.getDate()+1);

	var dateArr = [];

	var populateWeek = function(date, numDays){
		var newDate;
		for(var i = 0; i < numDays; i++){
			newDate = date.setDate((date.getDate()+i));
			dateArr.push(new Date(newDate));
			$('#calendar').append(divEachDay);
		}
	}

	$('#dateDisplay').text(today);

	$('#modalSave').on('click', function(){
		$('#agendaModal').modal('hide');
		var inputAgenda = $('#agendaInfo').val();
		var time = $('#time').val();
		console.log('input',inputAgenda, 'time', time);
		$('.list-group').append('<a href="#agendaModal" class="list-group-item agendaItem">'+
			'<span class="pull-left">'+time+'</span><span class="span-align">'+inputAgenda+
			'</span><span class="glyphicon glyphicon-edit pull-right"></span></a>');

		$('#agendaInfo').val('');
		$('#time').val('');
	});

	var divEachDay = $('#appendDay').html();

	//$('#calendar').append(divEachDay);


	populateWeek(today, 7);
	

	$(window).scroll(function(){
		console.log($(window).scrollTop());

		//how far it gets
		// if((window).scrollTop ==== 75){
		// 	$('#eachDay').append(+populateWeek(newDate, 7)+);
		// }
		// $(this).append(week);
	});

});

