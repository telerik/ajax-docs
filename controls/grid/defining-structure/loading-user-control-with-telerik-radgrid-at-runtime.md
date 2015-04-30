---
title: Loading User Control with Telerik RadGrid at Runtime
page_title: Loading User Control with Telerik RadGrid at Runtime | RadGrid for ASP.NET AJAX Documentation
description: Loading User Control with Telerik RadGrid at Runtime
slug: grid/defining-structure/loading-user-control-with-telerik-radgrid-at-runtime
tags: loading,user,control,with,telerik,radgrid,at,runtime
published: True
position: 4
---

# Loading User Control with Telerik RadGrid at Runtime



## 

When adding a user control that contains a **RadGrid** instance into a panel at runtime (by calling the **LoadControl** method), the events for the user control may not fire on postback unless you load the control in the **Page_Load** event of the main page. This is the reason the designers of ASP.NET made the **Page_Load** event execute before postback events: to give you a chance to reload controls so that their events can fire.

The problem with loading a user control at a later time (for example inside the server-side event handler of another control on the page) is that the browser cannot send your page events for controls that don't exist. Even if the controls are added at runtime the last time the code ran, at a later stage they're gone, and their events can't fire.

In a nutshell - you need to recreate (in the page load event) the state of the page exactly as it was the last time you output it to the browser. In this way, user controls exist and ASP.NET can fire their events appropriately. This involves reloading a user control that was loaded earlier. You must ensure that it gets the same ID, name, and so on:



````C#	
protected void Page_Load(object sender, EventArgs e)
{
    if (Page.FindControl("myUC") == null)
    {
        Control myControl = this.LoadControl("gridUC.ascx");
        myControl.ID = "myUC";
        this.Panel1.Controls.Add(myControl);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Page.FindControl("myUC") = Nothing Then
        Dim myControl As Control = Me.LoadControl("gridUC.ascx")
        myControl.ID = "myUC"
        Me.Panel1.Controls.Add(myControl)
    End If
End Sub
````


Note that the example above checks whether the control already exists. This is because when using the **Page_Load** event, you only need to load the user control the first time the **Page_Load** event occurs after the control is added.

As an alternate approach, you can load user controls in the **Page_Init** event handler rather than the **Page_Load** event handler. When you do this, you must load the user control every time the event occurs (not just the first time):



````C#
protected void Page_Init(object sender, EventArgs e)
{
    this.Panel1.Controls.Clear();
    Control myControl = this.LoadControl("gridUC.ascx");
    myControl.ID = "myUC";
    this.Panel1.Controls.Add(myControl);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Me.Panel1.Controls.Clear()
    Dim myControl As Control = Me.LoadControl("gridUC.ascx")
    myControl.ID = "myUC"
    Me.Panel1.Controls.Add(myControl)
End Sub
````


For more information on loading user controls dynamically, see [Load UserControls](http://www.telerik.com/help/aspnet-ajax/ajxLoadUserControls.html).
