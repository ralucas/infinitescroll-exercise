Infinite Agenda
===============
######Objective
Create an infinite-scroll agenda which uses delegated events to handle events on agenda items even as new ones are added.

Resources
----------
[Events Order - Quirksmode](http://www.quirksmode.org/js/events_order.html)
[jQuery .on() - Direct and delegated events](http://api.jquery.com/on/#direct-and-delegated-events)
[Continuous Scrolling - ui-patterns](http://ui-patterns.com/patterns/ContinuousScrolling)
[Infinite Scrolling: Let’s Get To The Bottom Of This - smashingmag](http://uxdesign.smashingmagazine.com/2013/05/03/infinite-scrolling-get-bottom/)
[Infinite Scrolling Best Practices - uxmastery](http://uxmovement.com/navigation/infinite-scrolling-best-practices/)
[Infinite Scrolling that Works](http://eviltrout.com/2013/02/16/infinite-scrolling-that-works.html)

Requirements
------------
1. Write a calendar app that displays the user’s appointments in an agenda format (that is, a linear list of days, not a calendar grid). Today should be at the top, tomorrow below, and so on.
1. The user can click on a day to add a new appointment.
1. The form will appear inline when the user clicks an add button and disappear again after the user submits.
1. The form should be empty again each time the user adds a new appointment.
1. The user should be able to hit enter to submit the form.
1. The user can click on an appointment to edit it. Convert the appointment into a form with the fields prefilled for the user to edit. Convert it back to non-editable text when they are done editing.
1. The page should load with one week shown, but as the user scrolls down, new days should be added dynamically.
1. All events for adding/removing appointments should be functional for newly added days without re-adding event handlers (delegation!).

More:
------

1. Save the user's appointments to localStorage.
1. Create a calendar view.


