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

	//show agenda form
	$('#calendar').on('click', '.add-agenda', function(){
		$(this).parent().parent().find('.form-inline').css('display', 'block');
	});

	//add agenda item
	$('#calendar').on('click', '.add-btn', function(e){
		event.preventDefault();
		var inputAgenda = $(this).parent().parent().find('#agendaInfo').val();
		$(this).parent().parent().parent().find('.list-group').append(
			'<li class="list-group-item agendaItem">'
			+inputAgenda+'<span class="glyphicon glyphicon-edit pull-right">'+
			'</span></li>');
		$(this).parent().parent().find('#agendaInfo').val('');
		$(this).parent().css('display', 'none');
	});

	//click on edit button and make text editable
	$('#calendar').on('click', '.glyphicon-edit', function(){
		var editText = $(this).parent().text();
		$(this).parent().css('display', 'none');
		$(this).parent().parent().parent().find('.form-inline').css('display', 'block');
		$(this).parent().parent().parent().find('.agenda-input').val(editText);
	});

	//initial load function
	populateWeek(today, 7);
	
	//hide the first div
	$('#appendDay').hide();

	//first day display
	$('#dateDisplay').text(days[today.getDay()]+'\n '+months[today.getMonth()]+' '
		+today.getDate()+', '+today.getFullYear());

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

