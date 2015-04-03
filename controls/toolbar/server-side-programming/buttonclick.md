---
title: ButtonClick
page_title: ButtonClick | UI for ASP.NET AJAX Documentation
description: ButtonClick
slug: toolbar/server-side-programming/buttonclick
tags: buttonclick
published: True
position: 1
---

# ButtonClick



## 

The server-side __ButtonClick__event occurs when the user clicks on a button, causing a postback.

The __ButtonClick__ event handler receives two arguments:

1. The __RadToolBar__ that contains the clicked button. This argument is of type object, but can be cast to the __RadToolBar__ type.

1. A __RadToolBarEventArgs__ object. This object has an __Item__ property that you can use to access the button that was clicked.

Use the __ButtonClick__ event handler to respond when the user clicks a button in the toolbar.

>note  __e.Item__ is of type __RadToolBarItem__ . Therefore, you should first cast the __e.Item__ object to __RadToolBarButton__ type if you need to use the clickedbutton.
>


````ASPNET
	    <telerik:RadToolBar ID="RadToolBar1" runat="server" OnButtonClick="RadToolBar1_ButtonClick">
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



>tabbedCode

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


>end

# See Also

 * [OnClientButtonClicking]({%slug toolbar/client-side-programming/onclientbuttonclicking%})

 * [OnClientButtonClicked]({%slug toolbar/client-side-programming/onclientbuttonclicked%})
