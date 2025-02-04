$(document).ready(function () {
    $(".moon").click(function () {
        $(".main-navbar,.side-bar,.main-area").toggleClass("sun");
    }) ; 
    $(".dropdown-1").click(function () {
        $(".dropdown-menu-1").toggle();
    });
    $(".dropdown-2").click(function () {
        $(".dropdown-menu-2").toggle();
    });
    $(".dropdown-3").click(function () {
        $(".dropdown-menu-3").toggle();
    });
    $(".dropdown-4").click(function () {
        $(".dropdown-menu-4").toggle();
    });
    $(".dot").click(function () {
        $(".dot-menu").toggle();
    });
    $(".side-up").click(function () {
        $(this).next('.side-down').toggle(); 
        $(this).siblings('.side-up').next('.side-down').slideUp();
    });
});






var options = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
        height: 300,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
   
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


//  Calendar 


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('mycal');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function(arg) {
      // is the "remove after drop" checkbox checked?
      if (document.getElementById('drop-remove').checked) {
        // if so, remove the element from the "Draggable Events" list
        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
      }
    }
  });
  calendar.render();

});


document.addEventListener('DOMContentLoaded', function() {
var calendarEl1 = document.getElementById('mycal1');

var calendar = new FullCalendar.Calendar(calendarEl1, {
initialDate: '2023-01-12',
initialView: 'timeGridWeek',
nowIndicator: true,
headerToolbar: {
left: 'prev,next today',
center: 'title',
right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
},
navLinks: true, // can click day/week names to navigate views
editable: true,
selectable: true,
selectMirror: true,
dayMaxEvents: true, // allow "more" link when too many events
events: [
{
  title: 'All Day Event',
  start: '2023-01-01',
},
{
  title: 'Long Event',
  start: '2023-01-07',
  end: '2023-01-10'
},
{
  groupId: 999,
  title: 'Repeating Event',
  start: '2023-01-09T16:00:00'
},
{
  groupId: 999,
  title: 'Repeating Event',
  start: '2023-01-16T16:00:00'
},
{
  title: 'Conference',
  start: '2023-01-11',
  end: '2023-01-13'
},
{
  title: 'Meeting',
  start: '2023-01-12T10:30:00',
  end: '2023-01-12T12:30:00'
},
{
  title: 'Lunch',
  start: '2023-01-12T12:00:00'
},
{
  title: 'Meeting',
  start: '2023-01-12T14:30:00'
},
{
  title: 'Happy Hour',
  start: '2023-01-12T17:30:00'
},
{
  title: 'Dinner',
  start: '2023-01-12T20:00:00'
},
{
  title: 'Birthday Party',
  start: '2023-01-13T07:00:00'
},
{
  title: 'Click for Google',
  url: 'http://google.com/',
  start: '2023-01-28'
}
]
});

calendar.render();
});
