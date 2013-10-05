$(document).ready(function(){


	//variables
	var today = new Date();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dateArr = [];
	var divEachDay = $('#appendDay');

	//populate funnction
	var populateWeek = function(date, numDays){
		for(var i = 86400000; i < numDays*86400000; i+=86400000){
			var tomorrow = new Date();
			var dg = date.getTime();
			
			tomorrow.setTime(dg+i);

			var day = days[tomorrow.getDay()];
			var month = months[tomorrow.getMonth()];
			var numDate = tomorrow.getDate();
			var year = tomorrow.getFullYear();

			divEachDay.find('.dateDisplay').text(day+'\n '
				+month+' '+numDate+', '+year);
			$('#calendar').append(divEachDay.html());
			dateArr.push(tomorrow);
		}
		return dateArr;
	};

	//emptyArray
	var emptyArray = function(arr){
		arr.length = 0;
		return arr;
	};

	//modal event
	// $('#modalSave').on('click', function(){
	// 	$('#agendaModal').modal('hide');
	// 	var inputAgenda = $('#agendaInfo').val();
	// 	var time = $('#time').val();
	// 	console.log('input',inputAgenda, 'time', time);
	// 	$(this).closest('.day').find('.list-group').append('<a href='+
	// 		'"#agendaModal" class="list-group-item agendaItem">'+
	// 		'<span class="pull-left">'+time+'</span><span class="span-align">'+
	// 		inputAgenda+'</span><span class="glyphicon glyphicon-edit pull-right">'+
	// 		'</span></a>');
	// 	$('#agendaInfo').val('');
	// 	$('#time').val('');
	// 	console.log($(this).closest('.day').find('.list-group').html());
	// });

	//add agenda item
	$('#calendar').on('click', '.add-btn', function(){
		console.log('test');
		var inputAgenda = $('#agendaInfo').val();
		console.log('input',inputAgenda);
		$(this).parent().parent().parent().find('.list-group').append(+
			'<li class="list-group-item agendaItem">'
			+inputAgenda+'<span class="glyphicon glyphicon-edit pull-right">'+
			'</span></li>');
		$('#agendaInfo').val('');
	});

	//initial load function
	populateWeek(today, 7);
	
	//hide the first div
	$('#eachDay:first-of-type').hide();

	$('#dateDisplay').text(today);

	//scroll append
	$(window).on('scroll', function(){
		var winHeight = $(window).height();
		var docHeight = $(document).height();
		var scrollTop = $(window).scrollTop();

		if((scrollTop + winHeight) === docHeight){
			var lastDate = dateArr.pop();
			console.log(lastDate);
			emptyArray(dateArr);
			populateWeek(lastDate, 7);
		}
	});
});

