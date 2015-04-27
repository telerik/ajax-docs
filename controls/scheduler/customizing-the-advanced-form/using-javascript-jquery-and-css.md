---
title: Using Javascript jQuery and CSS
page_title: Using Javascript jQuery and CSS | RadScheduler for ASP.NET AJAX Documentation
description: Using Javascript jQuery and CSS
slug: scheduler/customizing-the-advanced-form/using-javascript-jquery-and-css
tags: using,javascript,jquery,and,css
published: True
position: 2
---

# Using Javascript jQuery and CSS



The advanced form renders specific css classes and unique IDs for the elements inside it. This makes it easy to customize it using JavaScript/jQuery and CSS.This topic shows a few common scenarios. A sample can be donwloaded from[here](http://www.telerik.com/community/code-library/aspnet-ajax/scheduler/customize-the-avanced-form-using-javascript-and-css.aspx).

## Hide the all day checkbox

````ASPNET
	<style type="text/css">
		ul li.rsAllDayWrapper 
		{
			visibility: hidden;
		}
	</style>
````



## Color the text of the labels in the advanced form

````ASPNET
	<style type="text/css">
		.rsAdvOptions label, div.RadInput .riLabel
		{
			color: Green;
		}
				
		div.RecurrenceEditor ul li label, .RecurrenceEditor ul li, .RecurrenceEditor label
		{
			color: Orange;
		}	
	</style>
````



## Hide the recurrence panel and adjusts the height of the advanced options panel

````ASPNET
	<style type="text/css">
		.RecurrenceEditor 
		{
			visibility:hidden;
		}
		.rsAdvOptionsScroll
		{
			height: auto !important;   
		}		
	</style>
````



## Find the description client object and set its empty message

````JavaScript
	<script type="text/javascript">
		function clientFormCreated(sender, args) {
			var mode = args.get_mode();
			if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
				mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
				var descriptionJQueryObject = $telerik.$("[id$='Form_Description']");
				var descriptionRadTextBoxObject = $find(descriptionJQueryObject.attr("id"));
				descriptionRadTextBoxObject.set_emptyMessage("Add more details about the appointment here.");
			}
		}		
	</script>
````



## Change end date/time automatically when start date/time changes

````JavaScript
	    
	    <script type="text/javascript">
	        function clientFormCreated(sender, args) {
	            var $ = $telerik.$;
	
	            var mode = args.get_mode();
	            if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
						mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
	                var startDatejQueryObject = $("[id$='Form_StartDate']");
	                var startDatePicker = $find(startDatejQueryObject.attr("id"));
	
	                var startTimejQueryObject = $("[id$='Form_StartTime']");
	                var startTimePicker = $find(startTimejQueryObject.attr("id"));
	
	                startDatePicker.add_dateSelected(StartDateSelected);
	                startTimePicker.add_dateSelected(StartTimeSelected);
	            }
	        }
	        function StartDateSelected(sender, args) {
	            var $ = $telerik.$;
	            var endDatejQueryObject = $("[id$='Form_EndDate']");
	            var endDatePicker = $find(endDatejQueryObject.attr("id"));
	            var newDate = new Date(args.get_newValue());
	            endDatePicker.set_selectedDate(newDate);
	        }
	        function StartTimeSelected(sender, args) {
	            var $ = $telerik.$;
	
	            var endTimejQueryObject = $("[id$='Form_EndTime']");
	            var endTimePicker = $find(endTimejQueryObject.attr("id"));
	
	            var newTime = new Date(args.get_newDate());
	            newTime.setHours(newTime.getHours() + 1);
	
	            endTimePicker.get_dateInput().set_value(newTime.format('HH:mm'))
	        }
	    </script>
	    
	     <%--Web Service Binding--%>
	     
	     <script type="text/javascript">
			function clientFormCreated(sender, args) {
				var $ = $telerik.$;
	
				var mode = args.get_mode();
	
				var startDateJQueryObject,
					startDatePicker,
					startTimejQueryObject,
					startTimePicker;
	
				if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert) {
	
					startDateJQueryObject = $("[id$='AdvancedInsertForm_StartDate']");
					startDatePicker = $find(startDateJQueryObject.attr("id"));
	
					startTimejQueryObject = $("[id$='AdvancedInsertForm_StartTime']");
					startTimePicker = $find(startTimejQueryObject.attr("id"));
	
					startDatePicker.add_dateSelected(StartDateSelected_AdvancedInsert);
					startTimePicker.add_dateSelected(StartTimeSelected_AdvancedInsert);
	
				} else if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
					startDatejQueryObject = $("[id$='AdvancedEditForm_StartDate']");
					startDatePicker = $find(startDatejQueryObject.attr("id"));
	
					startTimejQueryObject = $("[id$='AdvancedEditForm_StartTime']");
					startTimePicker = $find(startTimejQueryObject.attr("id"));
	
					startDatePicker.add_dateSelected(StartDateSelected_AdvancedEdit);
					startTimePicker.add_dateSelected(StartTimeSelected_AdvancedEdit);
				}
			}
			function StartDateSelected_AdvancedInsert(sender, args) {
				var $ = $telerik.$;
				var endDatejQueryObject = $("[id$='AdvancedInsertForm_EndDate']");
				var endDatePicker = $find(endDatejQueryObject.attr("id"));
				var newDate = new Date(args.get_newValue());
				endDatePicker.set_selectedDate(newDate);
			}
			function StartDateSelected_AdvancedEdit(sender, args) {
				var $ = $telerik.$;
				var endDatejQueryObject = $("[id$='AdvancedEditForm_EndDate']");
				var endDatePicker = $find(endDatejQueryObject.attr("id"));
				var newDate = new Date(args.get_newValue());
				endDatePicker.set_selectedDate(newDate);
			}
			function StartTimeSelected_AdvancedInsert(sender, args) {
				var $ = $telerik.$;
	
				var endTimejQueryObject = $("[id$='AdvancedInsertForm_EndTime']");
				var endTimePicker = $find(endTimejQueryObject.attr("id"));
	
				var newTime = new Date(args.get_newDate());
				newTime.setHours(newTime.getHours() + 1);
	
				endTimePicker.get_dateInput().set_value(newTime.format('HH:mm'))
			}
			function StartTimeSelected_AdvancedEdit(sender, args) {
				var $ = $telerik.$;
	
				var endTimejQueryObject = $("[id$='AdvancedEditForm_EndTime']");
				var endTimePicker = $find(endTimejQueryObject.attr("id"));
	
				var newTime = new Date(args.get_newDate());
				newTime.setHours(newTime.getHours() + 1);
	
				endTimePicker.get_dateInput().set_value(newTime.format('HH:mm'))
			}
	     
````



## Clear selection for the user combobox if no room is selected

````JavaScript
	    <script type="text/javascript">
	        function clientFormCreated(sender, args) {
	            var $ = $telerik.$;
	            var mode = args.get_mode();
	            if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
							mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
	                var RoomComboBox = $find($("[id$='Form_ResRoom']").attr("id"));
	                RoomComboBox.add_selectedIndexChanged(SelectedIndexChangedHandler);
	            }
	        }
	        function SelectedIndexChangedHandler(sender, args) {
	            var $ = $telerik.$;
	            if (args.get_item().get_value() == "NULL") {
	                var UserComboBox = $find($("[id$='Form_ResUser']").attr("id"));
	                var emptyItem = UserComboBox.findItemByValue("NULL");
	                emptyItem.select();
	            }
	        }
	    </script>
````



## Hide the "no end date" option in the recurrence panel

````JavaScript
	    <script type="text/javascript">
				function clientFormCreated(sender, args) {
					var $ = $telerik.$;
					var mode = args.get_mode();
					if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
						mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
						$(".rsAdvRecurrenceRangePanel li:eq(0)").hide();
						$(".rsAdvRecurrenceRangePanel li:eq(1) span input").attr("checked", "checked");
					}
				}
		</script>
		
		 <%--Web Service Binding--%>
		 
		 <script type="text/javascript">
			function clientFormCreated(sender, args) {
				var $ = $telerik.$;
				var mode = args.get_mode();
				if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert) {
					var recurrencePanelInsertJQueryObject = $("[id$='AdvancedInsertForm_RecurrencePanel']");
					recurrencePanelInsertJQueryObject.find(".rsAdvRecurrenceRangePanel li:eq(0)").hide();
					recurrencePanelInsertJQueryObject.find(".rsAdvRecurrenceRangePanel li:eq(1) span input").attr("checked", "checked");
				} else if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
					if (args.get_appointment().get_recurrenceState() == 0) {
						var recurrencePanelEditJQueryObject = $("[id$='AdvancedEditForm_RecurrencePanel']");
						recurrencePanelEditJQueryObject.find(".rsAdvRecurrenceRangePanel li:eq(0)").hide();
						recurrencePanelEditJQueryObject.find(".rsAdvRecurrenceRangePanel li:eq(1) span input").attr("checked", "checked");
					}
				}
			}
		</script>
````



## Hide the "hourly" option and the first two days for the "weekly" option in the recurrence panel

````JavaScript
	   <script type="text/javascript">
			function clientFormCreated(sender, args) {
				var $ = $telerik.$;
				var mode = args.get_mode();
				if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
					mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
	
					$(".rsRecurrenceOptionList li:eq(0)").hide();
					$("[id$='RadScheduler1_Form_RecurrencePatternPanel']").css("height", "80px");
					$(".rsAdvWeekly_WeekDays li:eq(0)").hide();
					$(".rsAdvWeekly_WeekDays li:eq(1)").hide();
				}
			}
		</script>
		
		<%--Web Service Binding--%>
		
		<script type="text/javascript">
			function clientFormCreated(sender, args) {
				var $ = $telerik.$;
				var mode = args.get_mode();
				if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert) {
					var recurrencePanelInsertJQueryObject = $("[id$='AdvancedInsertForm_RecurrencePanel']");
					recurrencePanelInsertJQueryObject.find(".rsRecurrenceOptionList li:eq(0)").hide();
					recurrencePanelInsertJQueryObject.find("[id$='RadScheduler1_Form_RecurrencePatternPanel']").css("height", "80px");
					recurrencePanelInsertJQueryObject.find(".rsAdvWeekly_WeekDays li:eq(0)").hide();
					recurrencePanelInsertJQueryObject.find(".rsAdvWeekly_WeekDays li:eq(1)").hide();
				} else if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
					var recurrencePanelEditJQueryObject = $("[id$='AdvancedEditForm_RecurrencePanel']");
					recurrencePanelEditJQueryObject.find(".rsRecurrenceOptionList li:eq(0)").hide();
					recurrencePanelEditJQueryObject.find("[id$='RadScheduler1_Form_RecurrencePatternPanel']").css("height", "80px");
					recurrencePanelEditJQueryObject.find(".rsAdvWeekly_WeekDays li:eq(0)").hide();
					recurrencePanelEditJQueryObject.find(".rsAdvWeekly_WeekDays li:eq(1)").hide();
				}
			}
		</script>
````



>note When handling the OnClientFormCreated event, in order to check if the RadScheduler is bound to a web service the following code could be used:
>


````JavaScript
			<script type="text/javascript">
				function clientFormCreated(sender, args) {
					if (sender.get_webServiceSettings().get_path() == null) {
						//Server-Side Binding 
					}else {
						//Web Service Binding
					}
				}
			</script>
````



# See Also

 * [Code library sample](http://www.telerik.com/community/code-library/aspnet-ajax/scheduler/customize-the-avanced-form-using-javascript-and-css.aspx)
