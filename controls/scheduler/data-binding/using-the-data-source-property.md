---
title: Using the Data Source Property
page_title: Using the Data Source Property | UI for ASP.NET AJAX Documentation
description: Using the Data Source Property
slug: scheduler/data-binding/using-the-data-source-property
tags: using,the,data,source,property
published: True
position: 5
---

# Using the Data Source Property



RadScheduler has a __DataSource__ property that lets you bind it to any object that implements the IListSource or IEnumerable interface. Thus, you can bind the scheduler directly to a DataTable or DataView (IListSource), or to various List objects (IEnumerable). When using the __DataSource__ property to bind the scheduler, you must also implement the code for inserting, updating, and deleting appointments using the __RadScheduler__ server-side events.

## Example

The following example demonstrates binding to a generic list of objects, which represents appointment information, including a custom resource for room. It implements __AppointmentInsert__, __AppointmentUpdate__, and __AppointmentDelete__ event handlers to allow the scheduler to insert, update, and delete appointments.

1. Drag a __RadScheduler__ control from the toolbox onto your page.

1. Move to the code-behind page for your web page, and add two lines to the __using__ section (C#) or __Imports__ section (VB).

>tabbedCode

````C#
	     
		using Telerik.Web.UI;
	    using System.Collections.Generic;
				
````
````VB.NET
	
	
	Imports Telerik.Web.UI
	Imports System.Collections.Generic
	
````
>end

1. In the definition of the class for your Web page, add two class definitions, one to hold information aboutappointments, and another to hold information about the custom resource (rooms):

>tabbedCode

````C#
	     class AppointmentInfo
	        {
	            private string id;
	            private string subject;
	            private DateTime start;
	            private DateTime end;
	            private string recurParentID;
	            private string recurData;
	            private int room;
	
	            public string ID
	            {
	                get { return id; }
	                set { id = value; }
	            }
	            public string Subject
	            {
	                get { return subject; }
	                set { subject = value; }
	            }
	            public DateTime Start
	            {
	                get { return start; }
	                set { start = value; }
	            }
	            public DateTime End
	            {
	                get { return end; }
	                set { end = value; }
	            }
	            public string RecurrenceRule
	            {
	                get { return recurData; }
	                set { recurData = value; }
	            }
	            public string RecurrenceParentID
	            {
	                get { return recurParentID; }
	                set { recurParentID = value; }
	            }
	            public int RoomNo
	            {
	                get { return room; }
	                set { room = value; }
	            }
	            private AppointmentInfo()
	            {
	                this.id = Guid.NewGuid().ToString();
	            }
	            public AppointmentInfo(string subject, DateTime start, DateTime end)
	                : this()
	            {
	                this.subject = subject;
	                this.start = start;
	                this.end = end;
	            }
	            public AppointmentInfo(Appointment source)
	                : this()
	            {
	                CopyInfo(source);
	            }
	            public void CopyInfo(Appointment source)
	            {
	                subject = source.Subject;
	                start = source.Start;
	                end = source.End;
	                recurData = source.RecurrenceRule;
	                if (source.RecurrenceParentID != null)
	                   recurParentID = source.RecurrenceParentID.ToString();
	                Resource r = source.Resources.GetResourceByType("Room");
	                if (r != null)
	                    room = (int) r.Key;
	            }
	        }
	        class RoomInfo
	        {
	            private int id;
	            private string name;
	            public int RoomNo
	            {
	                get { return id; }
	            }
	            public string RoomName
	            {
	                get { return name; }
	            }
	            public RoomInfo(int id, string name)
	            {
	                this.id = id;
	                this.name = name;
	            }
	        } 
				
````
````VB.NET
	
	    Class AppointmentInfo
	        Private id As String
	        Private subject As String
	        Private start As DateTime
	        Private [end] As DateTime
	        Private recurParentID As String
	        Private recurData As String
	        Private room As Integer
	        Public Property ID() As String
	            Get
	                Return id
	            End Get
	            Set(ByVal value As String)
	                id = value
	            End Set
	        End Property
	        Public Property Subject() As String
	            Get
	                Return subject
	            End Get
	            Set(ByVal value As String)
	                subject = value
	            End Set
	        End Property
	        Public Property Start() As DateTime
	            Get
	                Return start
	            End Get
	            Set(ByVal value As DateTime)
	                start = value
	            End Set
	        End Property
	        Public Property [End]() As DateTime
	            Get
	                Return [end]
	            End Get
	            Set(ByVal value As DateTime)
	                [end] = value
	            End Set
	        End Property
	        Public Property RecurrenceRule() As String
	            Get
	                Return recurData
	            End Get
	            Set(ByVal value As String)
	                recurData = value
	            End Set
	        End Property
	        Public Property RecurrenceParentID() As String
	            Get
	                Return recurParentID
	            End Get
	            Set(ByVal value As String)
	                recurParentID = value
	            End Set
	        End Property
	        Public Property RoomNo() As Integer
	            Get
	                Return room
	            End Get
	            Set(ByVal value As Integer)
	                room = value
	            End Set
	        End Property
	        Private Sub New()
	            Me.id = Guid.NewGuid().ToString()
	        End Sub
	        Public Sub New(ByVal subject As String, ByVal start As DateTime, _
	                       ByVal [end] As DateTime)
	            Me.New()
	            Me.subject = subject
	            Me.start = start
	            Me.[end] = [end]
	        End Sub
	        Public Sub New(ByVal source As Appointment)
	            Me.New()
	            CopyInfo(source)
	        End Sub
	        Public Sub CopyInfo(ByVal source As Appointment)
	            subject = source.Subject
	            start = source.Start
	            [end] = source.[End]
	            recurData = source.RecurrenceRule
	            If source.RecurrenceParentID <> Nothing Then
	                recurParentID = source.RecurrenceParentID.ToString()
	            End If
	            Dim r As Resource = source.Resources.GetResourceByType("Room")
	            If r <> Nothing Then
	                room = DirectCast(r.Key, Integer)
	            End If
	        End Sub
	    End Class
	    Class RoomInfo
	        Private id As Integer
	        Private name As String
	        Public ReadOnly Property RoomNo() As Integer
	            Get
	                Return id
	            End Get
	        End Property
	        Public ReadOnly Property RoomName() As String
	            Get
	                Return name
	            End Get
	        End Property
	        Public Sub New(ByVal id As Integer, ByVal name As String)
	            Me.id = id
	            Me.name = name
	        End Sub
	    End Class
	
````
>end

1. Add two private properties to the class for your Web page whose values are the current listof appointments and the list of rooms. The appointments list needs to persist, so we save thatone in the session state:

>tabbedCode

````C#
	     
	    private const string AppointmentsKey =
	                    "Telerik.Examples.Scheduler.BindToList_Apts" ;
	    private List<AppointmentInfo> Appointments
	    {
	      get
	      {
	         List<AppointmentInfo> sessApts =
	                   Session[AppointmentsKey] as List<AppointmentInfo>;
	         if (sessApts == null)
	         {
	            sessApts = new List<AppointmentInfo>();
	            Session[AppointmentsKey] = sessApts;
	         }
	         return sessApts;
	      }
	    }
	    private List<RoomInfo> Rooms
	    {
	      get
	      {
	         List<RoomInfo> roomList = new List<RoomInfo>();
	         roomList.Add(new RoomInfo(1, "Margaret Morrison Main Room"));
	         roomList.Add(new RoomInfo(2, "Black Auditorium"));
	         roomList.Add(new RoomInfo(3, "Doherty Auditorium"));
	         return roomList;
	      }
	    } 
				
````
````VB.NET
	
	    Private Const AppointmentsKey As String = _
	                        "Telerik.Examples.Scheduler.BindToList_Apts"
	    Private ReadOnly Property Appointments() As List(Of AppointmentInfo)
	        Get
	            Dim sessApts As List(Of AppointmentInfo) = _
	                  TryCast(Session(AppointmentsKey), List(Of AppointmentInfo))
	            If sessApts = Nothing Then
	                sessApts = New List(Of AppointmentInfo)()
	                Session(AppointmentsKey) = sessApts
	            End If
	            Return sessApts
	        End Get
	    End Property
	    Private ReadOnly Property Rooms() As List(Of RoomInfo)
	        Get
	            Dim roomList As New List(Of RoomInfo)()
	            roomList.Add(New RoomInfo(1, "Margaret Morrison Main Room"))
	            roomList.Add(New RoomInfo(2, "Black Auditorium"))
	            roomList.Add(New RoomInfo(3, "Doherty Auditorium"))
	            Return roomList
	        End Get
	    End Property
````
>end

1. Add the __FindById__ helper function to the class for your Web page:

>tabbedCode

````C#
	     
	    private AppointmentInfo FindById(string ID)
	    {
	       foreach (AppointmentInfo ai in Appointments)
	       {
	           if (ai.ID == ID)
	           {
	               return ai;
	           }
	       }
	       return null;
	    } 
				
````
````VB.NET
	
	    Private Function FindById(ByVal ID As String) As AppointmentInfo
	        For Each ai As AppointmentInfo In Appointments
	            If ai.ID = ID Then
	                Return ai
	            End If
	        Next
	        Return Nothing
	    End Function
````
>end

1. In the Page_Load event handler, add code to initialize the RadScheduler so that it can read theappointment information, define the custom resource type for rooms, and set the DataSource propertyto bind the scheduler to the data.

>tabbedCode

````C#
	     
	    protected void Page_Load(object sender, EventArgs e)
	    {
	      if (!IsPostBack)
	      {
	          Session.Remove(AppointmentsKey);
	          RadScheduler1.DataKeyField = "ID";
	          RadScheduler1.DataStartField = "Start";
	          RadScheduler1.DataEndField = "End";
	          RadScheduler1.DataSubjectField = "Subject";
	          RadScheduler1.DataRecurrenceField = "RecurrenceRule";
	          RadScheduler1.DataRecurrenceParentKeyField = "RecurrenceParentID";
	          ResourceType rt = new ResourceType("Room");
	          rt.DataSource = Rooms;
	          rt.KeyField = "RoomNo";
	          rt.ForeignKeyField = "RoomNo";
	          rt.TextField = "RoomName";
	          RadScheduler1.ResourceTypes.Add(rt);
	      }
	      RadScheduler1.DataSource = Appointments;
	    } 
				
````
````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, _
	                            ByVal e As EventArgs) _
	                                   Handles MyPage.Load
	        If Not IsPostBack Then
	            Session.Remove(AppointmentsKey)
	            RadScheduler1.DataKeyField = "ID"
	            RadScheduler1.DataStartField = "Start"
	            RadScheduler1.DataEndField = "End"
	            RadScheduler1.DataSubjectField = "Subject"
	            RadScheduler1.DataRecurrenceField = "RecurrenceRule"
	            RadScheduler1.DataRecurrenceParentKeyField = "RecurrenceParentID"
	            Dim rt As New ResourceType("Room")
	            rt.DataSource = Rooms
	            rt.KeyField = "RoomNo"
	            rt.ForeignKeyField = "RoomNo"
	            rt.TextField = "RoomName"
	            RadScheduler1.ResourceTypes.Add(rt)
	        End If
	        RadScheduler1.DataSource = Appointments
	    End Sub
````
>end

1. Return to the designer for Default.aspx and select the __RadScheduler__ control.

1. In the properties pane, double-click on the __AppointmentInsert__ event and add the following event handler:

>tabbedCode

````C#
	     
	    protected void RadScheduler1_AppointmentInsert(object sender, SchedulerCancelEventArgs e)
	    {
	      Appointments.Add(new AppointmentInfo(e.Appointment));
	    } 
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentInsert( _
	                          ByVal sender As Object, _
	                          ByVal e As SchedulerCancelEventArgs) _
	             Handles RadScheduler1.AppointmentInsert
	        Appointments.Add(New AppointmentInfo(e.Appointment))
	    End Sub
	
````
>end

1. Double-click on the __AppointmentUpdate__ event and add the following event handler:

>tabbedCode

````C#
	     
	    protected void RadScheduler1_AppointmentUpdate(object sender, AppointmentUpdateEventArgs e)
	    {
	      AppointmentInfo ai = FindById(e.ModifiedAppointment.ID.ToString());
	      ai.CopyInfo(e.ModifiedAppointment);
	    } 
				
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentUpdate( _
	          ByVal sender As Object, _
	          ByVal e As AppointmentUpdateEventArgs) _
	                Handles RadScheduler1.AppointmentUpdate
	        Dim ai As AppointmentInfo = FindById(
	                                      e.ModifiedAppointment.ID.ToString())
	        ai.CopyInfo(e.ModifiedAppointment)
	    End Sub
````
>end

1. Double-click on the AppointmentDelete event and add the following event handler:

>tabbedCode

````C#
	     
	    protected void RadScheduler1_AppointmentDelete(object sender, SchedulerCancelEventArgs e)
	    {
	       Appointments.Remove(FindById(e.Appointment.ID.ToString()));
	    } 
				
````
````VB.NET
	
	    Protected Sub RadScheduler1_AppointmentDelete( _
	          ByVal sender As Object, _
	          ByVal e As SchedulerCancelEventArgs) _
	                 Handles RadScheduler1.AppointmentDelete
	        Appointments.Remove(FindById(e.Appointment.ID.ToString()))
	    End Sub
````
>end

You have now bound your scheduler using the __DataSource__ property. Run the application andnote the custom resource is available in the edit form.

# See Also

 * [Declarative Data Binding]({%slug scheduler/data-binding/declarative-data-binding%})

 * [Using a Data Provider]({%slug scheduler/data-binding/providers/using-a-data-provider%})

 * [AppointmentInsert]({%slug scheduler/server-side-programming/server-events/appointmentinsert%})

 * [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%})

 * [AppointmentDelete]({%slug scheduler/server-side-programming/server-events/appointmentdelete%})
