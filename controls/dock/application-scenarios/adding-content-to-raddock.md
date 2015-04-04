---
title: Adding Content to RadDock
page_title: Adding Content to RadDock | UI for ASP.NET AJAX Documentation
description: Adding Content to RadDock
slug: dock/application-scenarios/adding-content-to-raddock
tags: adding,content,to,raddock
published: True
position: 0
---

# Adding Content to RadDock



There are several ways you can set the content inside a __RadDock__ control:

## Creating a ContentTemplate at design time

You can add controls to the __ContentTemplate__ property and __RadDock__ will automatically display them runtime.

````ASPNET
	<telerik:raddock runat="server" id="RadDock3" title="ContentTemplate">
	 <ContentTemplate>
	   <div style="margin:10px;">
	     <asp:Label runat="server" id="Label1">You can put text and controls in the ContentTemplate.</asp:Label>
	   </div>
	   <div style="margin:10px;">
	     <asp:Calendar runat="server" id="Calendar1" />
	   </div>
	 </ContentTemplate>
	</telerik:raddock>
````



You can access the controls in the __ContentTemplate__ at runtime to get or set their properties:



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            Calendar1.SelectedDate = DateTime.Today;
	        }
	    } 
				
````
````VB
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            Calendar1.SelectedDate = DateTime.Today
	        End If
	    End Sub
	
````


## Assigning the ContentTemplate at runtime

You can create a class which implements the __ITemplate__ interface and set its instance to the __ContentTemplate__ property from the code-behind:



````C#
	
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            RadDock1.ContentTemplate = new CalendarTemplate();
	        }
	    }
	    class CalendarTemplate : ITemplate
	    {
	        public void InstantiateIn(Control container)
	        {
	            Calendar calendar1 = new Calendar();
	            calendar1.ID = "Calendar1";
	            calendar1.SelectedDate = DateTime.Today;
	            container.Controls.Add(calendar1);
	        }
	    } 
				
````
````VB
	
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            RadDock1.ContentTemplate = New CalendarTemplate
	        End If
	    End Sub
	    Class CalendarTemplate
	        Implements ITemplate
	        Public Sub InstantiateIn(ByVal container As Control)
	            Dim calendar1 As New Calendar()
	            calendar1.ID = "Calendar1"
	            calendar1.SelectedDate = DateTime.Today
	            container.Controls.Add(calendar1)
	        End Sub
	    End Class
	
````


## Adding controls directly to the content container

Instead of creating a class which implements __ITemplate__, you can directly add controls to the ContentContainer.Controls collection. This is slightly easier to implement, but you cannot easily reuse the template in other controls.



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        Calendar calendar1 = new Calendar();
	        calendar1.ID = "Calendar1";
	        RadDock1.ContentContainer.Controls.Add(calendar1);
	    } 
				
````
````VB
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        Dim calendar1 As New Calendar()
	        calendar1.ID = "Calendar1"
	        RadDock1.ContentContainer.Controls.Add(calendar1)
	    End Sub
	
````


>note Note that when using the __ContentContainer__ property, you should always execute the code, even on a postback. This is because controls you add this way are not persisted in the ViewState.
>


## Setting the Text property

If the __RadDock__ control only needs to display plain text, you can use the __Text__ property.

````ASPNET
	    <telerik:raddock id="RadDock1" runat="server" text="This text appears in the content area of the RadDock control when there is no template.">
	    </telerik:raddock>
````



# See Also

 * [Title Bar Template]({%slug dock/structure/dock/title-bar-template%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/application-scenarios/adding-controls-inside-dynamically-created-docks%})
