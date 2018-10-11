---
title: ButtonClick
page_title: ButtonClick | RadToolBar for ASP.NET AJAX Documentation
description: ButtonClick
slug: toolbar/server-side-programming/buttonclick
tags: buttonclick
published: True
position: 1
---

# ButtonClick

## 

The server-side **ButtonClick** event occurs when the user clicks on a button, causing a postback.

The **ButtonClick** event handler receives two arguments:

1. The **RadToolBar** that contains the clicked button. This argument is of type object, but can be cast to the **RadToolBar** type.

1. A **RadToolBarEventArgs** object. This object has an **Item** property that you can use to access the button that was clicked.

Use the **ButtonClick** event handler to respond when the user clicks a button in the toolbar.

>tip  **e.Item** is of type **RadToolBarItem** . Therefore, you should first cast the **e.Item** object to **RadToolBarButton** type if you need to use the clickedbutton.
>


````ASPNET
<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" OnButtonClick="RadToolBar1_ButtonClick">
    <CollapseAnimation Type="OutQuint" Duration="200"></CollapseAnimation>
    <Items>
        <telerik:RadToolBarButton runat="server" Text="Bold" CommandName="Bold" CheckOnClick="true"
            AllowSelfUnCheck="true" />
        <telerik:RadToolBarButton runat="server" Text="Underline" CommandName="Underline"
            CheckOnClick="true" AllowSelfUnCheck="true" />
        <telerik:RadToolBarButton runat="server" Text="Italic" CommandName="Italic" CheckOnClick="true"
            AllowSelfUnCheck="true" />
    </Items>
</telerik:RadToolBar>
````

````C#
protected void RadToolBar1_ButtonClick(object sender, Telerik.Web.UI.RadToolBarEventArgs e)    
{                
    Literal1.Text += "Text: " + e.Item.Text + "<br/>";
   //To access the button properties, such as CommandName and Checked,        
   //cast e.Item to RadToolBarButton:        
    RadToolBarButton btn = e.Item as RadToolBarButton;        
    Literal1.Text += "Command name: " + btn.CommandName.ToString() + "<br/>";        
    Literal1.Text += "Checked: " + btn.Checked.ToString();    
}				
````
````VB.NET
Protected Sub RadToolBar1_ButtonClick(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadToolBarEventArgs)

    Literal1.Text += "Text: " + e.Item.Text + "<br/>"
    'To access the button properties, such as CommandName and Checked, 
    'cast e.Item to RadToolBarButton: 
    Dim btn As RadToolBarButton = TryCast(e.Item, RadToolBarButton)
    Literal1.Text += "Command name: " + btn.CommandName.ToString() + "<br/>" Literal1.Text += "Checked: " + btn.Checked.ToString()
End Sub	
````

# See Also

 * [OnClientButtonClicking]({%slug toolbar/client-side-programming/onclientbuttonclicking%})

 * [OnClientButtonClicked]({%slug toolbar/client-side-programming/onclientbuttonclicked%})
