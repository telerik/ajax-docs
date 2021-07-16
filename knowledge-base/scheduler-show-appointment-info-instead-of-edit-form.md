---
title: Show Appointment Info Instead of Edit Form in RadScheduler
description: Show Appointment Info Instead of Edit Form RadScheduler. Check it now!
type: how-to
page_title: Show Appointment Info Instead of Edit Form RadScheduler
slug: scheduler-show-appointment-info-instead-of-edit-form
res_type: kb
---

## Question

How to have the user double click an appointment, but get an event with the appointment instead of show the edit form?

## Issue

Setting `ReadOnly `property of the Scheduler to `false `will prevent the `AppointmentClick `event, and so will the `AllowEdit `property of the appointment, because this event is designed for use with appointment editing.

## Solutions

You can use the various events and methods the scheduler provides to change this behavior. There are three ways to do that which result in slightly different behavior. Bellow you can find a sample that illustrates them. Make sure to comment/uncomment all relevant lines from each.
 
 - Use the [OnClientAppointmentEditing]({%slug scheduler/client-side-programming/events/onclientappointmentediting%}) event to invoke an AJAX request with the appointment ID. Then, cancel the event and use the `FindByID `method of the scheduler appointments.
 
 - Use the [ClientAppointmentDoubleClick]({%slug scheduler/client-side-programming/events/onclientappointmentdoubleclick%}) event to invoke the AJAX request. Cancel the `OnClientAppointmentEditing `event, and use the `FindByID `method to get the appointment. Similar logic can be employed in the [OnClientAppointmentClick]({%slug scheduler/client-side-programming/events/onclientappointmentclick%}) event.

 - Use the server [AppointmentClick]({%slug scheduler/server-side-programming/server-events/appointmentclick%}) event to get the appointment, hide the edit form via the [HideEditForm](http://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadScheduler#methods-HideEditForm) method in the `Page_PreRender` event.


````ASPX
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" OnAjaxRequest="RadAjaxManager1_AjaxRequest" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="RadScheduler1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="RadScheduler1"></telerik:AjaxUpdatedControl>
				<telerik:AjaxUpdatedControl ControlID="Label1"></telerik:AjaxUpdatedControl>
			</UpdatedControls>
		</telerik:AjaxSetting>
		<telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="RadScheduler1" />
				<telerik:AjaxUpdatedControl ControlID="Label1" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" ZIndex="2500">
</telerik:RadAjaxLoadingPanel>

<asp:Label ID="Label1" Text="clicked appointment info will go here" runat="server" />
<telerik:RadScheduler RenderMode="Lightweight" runat="server" ID="RadScheduler1" StartInsertingInAdvancedForm="true"
						SelectedDate="2012-04-16" EnableDescriptionField="true" OverflowBehavior="Auto"
						OnAppointmentClick="RadScheduler1_AppointmentClick"
						OnClientAppointmentEditing="OnClientAppointmentEditing"
						OnClientAppointmentDoubleClick="ClientAppointmentDoubleClick">
	<AdvancedForm Modal="true"></AdvancedForm>
</telerik:RadScheduler>

<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
	<script type="text/javascript">
		OnClientAppointmentEditing = function (sender, args) {
			//Approach 1: cancel the AppoitmentEditing event and pass the Appointment ID to the server
			args.set_cancel(true);
			var appt = args.get_appointment();
			invokeRequest(appt);
		}

		ClientAppointmentDoubleClick = function (sender, args) {
			//Approach 2: use the AppointmentDoubleClick event to get the appointment, and pass its ID to the server
			//Note, you must still cancel the AppointmentEditing event
			//var appt = args.get_appointment();
			//invokeRequest(appt);
		}

		invokeRequest = function (appointment) {
			//Note, it requires specific AJAX setup, which can be achieved in numerous ways, this example uses RadAjaxManager
			$find("<%=RadAjaxManager.GetCurrent(Page).ClientID%>").ajaxRequest("apptEdit|" + appointment.get_id());
		}
	</script>
</telerik:RadScriptBlock>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadScheduler1.Provider = new XmlSchedulerProvider(Server.MapPath("Appointments.xml"), false);
}

protected void RadScheduler1_AppointmentClick(object sender, SchedulerEventArgs e)
{
	//Approach 3: show the appointment info from this event
	//Note, you must hide the edit form in the Page PreRender event
	//ShowAppointmentInfo(e.Appointment);
}

protected void Page_PreRender(object sender, EventArgs e)
{
	//Approach 3: hide the edit form so it never shows up. Adds some overhead for its creation
	//RadScheduler1.HideEditForm();
}

protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
	if (e.Argument.IndexOf("apptEdit") > -1)
	{
		string apptId = e.Argument.Split('|')[1];
		Appointment appt = RadScheduler1.Appointments.FindByID(Int32.Parse(apptId));
		ShowAppointmentInfo(appt);
	}
}

protected void ShowAppointmentInfo(Appointment appt)
{
	Label1.Text = appt.Subject;
}
````

````Appointments.xml
<?xml version="1.0" encoding="utf-8"?>
<Appointments>
  <NextID>23</NextID>
  <Resources>
    <Room>
      <Key>1</Key>
      <Text>Meeting room 101</Text>
    </Room>
    <Room>
      <Key>2</Key>
      <Text>Meeting room 201</Text>
    </Room>
    <User>
      <Key>1</Key>
      <Text>Alex</Text>
    </User>
    <User>
      <Key>2</Key>
      <Text>Bob</Text>
    </User>
    <User>
      <Key>3</Key>
      <Text>Charlie</Text>
    </User>
  </Resources>
  <Appointment>
    <ID>1</ID>
    <Subject>Breakfast</Subject>
    <Start>2012-04-16T08:30Z</Start>
    <End>2012-04-16T10:00Z</End>
    <Resources>
      <User Key="1" />
    </Resources>
  </Appointment>
  <Appointment>
    <ID>2</ID>
    <Subject>Technical meeting</Subject>
    <Start>2012-04-16T10:30Z</Start>
    <End>2012-04-16T12:00Z</End>
    <RecurrenceRule><![CDATA[
			DTSTART:20120416T103000Z
			DTEND:20120416T120000Z
			RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20120506T210000Z;BYDAY=MO,TU,WE,TH,FR;
			]]></RecurrenceRule>
    <Resources>
      <Room Key="1" />
      <User Key="2" />
    </Resources>
    <Attribute Key="CustomAttribute" Value="1" />
  </Appointment>
  <Appointment>
    <ID>3</ID>
    <Subject>Appointment with the dentist</Subject>
    <Description>Last one, for now</Description>
    <Start>2012-04-17T08:30Z</Start>
    <End>2012-04-17T10:00Z</End>
    <Resources>
      <User Key="1" />
    </Resources>
  </Appointment>
  <Appointment>
    <ID>4</ID>
    <Subject>Lunch</Subject>
    <Description>Make a hotel reservation</Description>
    <Start>2012-04-18T08:00Z</Start>
    <End>2012-04-18T09:30Z</End>
    <Resources>
      <User Key="3" />
    </Resources>
  </Appointment>
  <Appointment>
    <ID>5</ID>
    <Subject>Bob's birthday</Subject>
    <Start>2012-04-13T00:00Z</Start>
    <End>2012-04-14T00:00Z</End>
  </Appointment>
  <Appointment>
    <ID>6</ID>
    <Subject>Call Charlie about the Project</Subject>
    <Start>2012-04-14T18:30Z</Start>
    <End>2012-04-14T19:00Z</End>
  </Appointment>
  <Appointment>
    <ID>7</ID>
    <Subject>Meeting with Alex</Subject>
    <Start>2012-04-18T14:00Z</Start>
    <End>2012-04-18T16:00Z</End>
  </Appointment>
  <Appointment>
    <ID>8</ID>
    <Subject>Alex's Birthday</Subject>
    <Start>2012-04-15T00:00Z</Start>
    <End>2012-04-16T00:00Z</End>
  </Appointment>
  <Appointment>
    <ID>9</ID>
    <Subject>Take the car to the service</Subject>
    <Start>2012-04-19T08:30Z</Start>
    <End>2012-04-19T10:00Z</End>
    <Resources>
      <User Key="1" />
    </Resources>
  </Appointment>
  <Appointment>
    <ID>10</ID>
    <Subject>Math exam</Subject>
    <Start>2012-04-06T10:00Z</Start>
    <End>2012-04-06T13:00Z</End>
  </Appointment>
  <Appointment>
    <ID>11</ID>
    <Subject>History exam</Subject>
    <Start>2012-04-07T10:00Z</Start>
    <End>2012-04-07T12:00Z</End>
  </Appointment>
  <Appointment>
    <ID>12</ID>
    <Subject>Bowling tournament</Subject>
    <Start>2012-04-17T16:00Z</Start>
    <End>2012-04-17T19:00Z</End>
  </Appointment>
  <Appointment>
    <ID>13</ID>
    <Subject>Grand Canyon tour</Subject>
    <Start>2012-04-20T08:00Z</Start>
    <End>2012-04-20T10:00Z</End>
  </Appointment>
  <Appointment>
    <ID>108</ID>
    <Subject>
    </Subject>
    <Description>
    </Description>
    <Start>2013-11-16T00:00Z</Start>
    <End>2013-11-16T01:00Z</End>
    <Attribute Key="Weather" Value="Snowy" />
  </Appointment>
  <Appointment>
    <ID>16</ID>
    <Subject>Reseach PDF export functionality for RadScheduler</Subject>
    <Start>2013-12-06T10:00Z</Start>
    <End>2013-12-06T12:30Z</End>
    <Resources>
      <User Key="1" />
    </Resources>
    <Attribute Key="Completed" Value="False" />
  </Appointment>
  <Appointment>
    <ID>17</ID>
    <Subject>Implement Client Side methods for RadScheduler for Web Service binding mode. </Subject>
    <Start>2013-12-07T09:30Z</Start>
    <End>2013-12-07T17:30Z</End>
    <Resources>
      <User Key="2" />
    </Resources>
    <Attribute Key="Completed" Value="False" />
  </Appointment>
  <Appointment>
    <ID>19</ID>
    <Subject>Conduct daily scrum meeting.</Subject>
    <Start>2013-12-05T08:00Z</Start>
    <End>2013-12-05T09:30Z</End>
    <RecurrenceRule><![CDATA[DTSTART:20131205T080000Z
DTEND:20131205T093000Z
RRULE:FREQ=DAILY;COUNT=5;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR,SA,SU
]]></RecurrenceRule>
    <Resources>
      <User Key="3" />
    </Resources>
    <Attribute Key="Completed" Value="False" />
  </Appointment>
</Appointments>
````

 