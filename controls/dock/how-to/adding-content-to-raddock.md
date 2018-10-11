---
title: Adding Content to RadDock
page_title: Adding Content to RadDock | RadDock for ASP.NET AJAX Documentation
description: Adding Content to RadDock
slug: dock/how-to/adding-content-to-raddock
tags: adding,content,to,raddock
published: True
position: 0
---

# Adding Content to RadDock



There are several ways you can set the content inside a **RadDock** control:

## Creating a ContentTemplate at Design Time

You can add controls to the **ContentTemplate** property and **RadDock** will automatically display them runtime.

````ASP.NET
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



You can access the controls in the **ContentTemplate** at runtime to get or set their properties:



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


## Assigning the ContentTemplate at Runtime

You can create a class which implements the **ITemplate** interface and set its instance to the **ContentTemplate** property from the code-behind:



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


## Adding Controls Directly to the Content Container

Instead of creating a class which implements **ITemplate**, you can directly add controls to the ContentContainer.Controls collection. This is slightly easier to implement, but you cannot easily reuse the template in other controls.



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


>tip Note that when using the **ContentContainer** property, you should always execute the code, even on a postback. This is because controls you add this way are not persisted in the ViewState.
>


## Setting the Text Property

If the **RadDock** control only needs to display plain text, you can use the **Text** property.

````ASP.NET
<telerik:raddock id="RadDock1" runat="server" text="This text appears in the content area of the RadDock control when there is no template.">
</telerik:raddock>
````



# See Also

 * [Title Bar Template]({%slug dock/structure/dock/title-bar-template%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/how-to/adding-controls-inside-dynamically-created-docks%})
