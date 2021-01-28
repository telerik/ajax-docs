---
title: Working With Items at the Server
page_title: Working With Items at the Server - RadToolBar
description: Check our Web Forms article about Working With Items at the Server.
slug: toolbar/radtoolbar-items/working-with-items-at-the-server
tags: working,with,items,at,the,server
published: True
position: 2
---

# Working With Items at the Server


Using the server-side API, you can programmatically add, remove, disable, or select items in **RadToolBar**.

## Adding items

Use the **Add** method of the **RadToolBarItemCollection** object to add items programmatically. To add buttons to the **RadToolBarDropDown** or **RadToolBarSplitButton**, use the **Buttons** collections of these objects as shown below:



````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadToolBarButton button = new RadToolBarButton();
        button.Text = "Button1"; 
        button.Value = "1"; 
        RadToolBar1.Items.Add(button);
        RadToolBarDropDown dropDown = new RadToolBarDropDown();
        dropDown.Text = "DropDown1"; 
        dropDown.Buttons.Add(new RadToolBarButton("Child Button1")); 
        RadToolBar1.Items.Add(dropDown);
        RadToolBarSplitButton splitButton = new RadToolBarSplitButton(); 
        splitButton.Text = "SplitButton1"; splitButton.Value = "1"; 
        splitButton.Buttons.Add(new RadToolBarButton("Child Button1"));
        RadToolBar1.Items.Add(splitButton);
    }
}	
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)

    If Not Page.IsPostBack Then
        Dim button As New RadToolBarButton()
        button.Text = "Button1"
        button.Value = "1"
        RadToolBar1.Items.Add(button)
        Dim dropDown As New RadToolBarDropDown()
        dropDown.Text = "DropDown1"
        dropDown.Buttons.Add(New RadToolBarButton("Child Button1"))
        RadToolBar1.Items.Add(dropDown)
        Dim splitButton As New RadToolBarSplitButton()
        splitButton.Text = "SplitButton1"
        splitButton.Value = "1"
        splitButton.Buttons.Add(New RadToolBarButton("Child Button1"))
        RadToolBar1.Items.Add(splitButton)
    End If

End Sub	
````

## Removing items

Use the **Remove** method of the **RadToolBarItemCollection** or the **Buttons** collections of the **RadToolBarDropDown** or the **RadToolBarSplitButton** objects to remove items:


````C#
//find the item by text. The item could either be a button, dropdown or splitbutton
RadToolBarItem itemToRemove = RadToolBar1.FindItemByText("Button1");
//remove the item from the RadToolBarItemCollection
RadToolBar1.Items.Remove(itemToRemove);
//to remove a button from the Buttons collection of dropdown or a splitbutton use:
splitButton.Buttons.Remove(childButton);
dropDown.Buttons.Remove(childButton);	
````
````VB.NET	
'find the item by text. The item could either be a button, dropdown or splitbutton
Dim itemToRemove As RadToolBarItem = RadToolBar1.FindItemByText("Button1")
'remove the item from the RadToolBarItemCollection
RadToolBar1.Items.Remove(itemToRemove)
'to remove a button from the Buttons collection of dropdown or a splitbutton use:
splitButton.Buttons.Remove(childButton)
dropDown.Buttons.Remove(childButton)	
````

## Disabling items

Use the **Enable** property of the **RadToolBarItem** object to enable or disable an item:


````C#	
//find the item by text. The item could either be a button, dropdown or splitbutton
RadToolBarItem itemToDisable = RadToolBar1.FindItemByText("Button1");
itemToDisable.Enabled = false;
````
````VB.NET	
'find the item by text. The item could either be a button, dropdown or splitbutton
Dim itemToDisable As RadToolBarItem = RadToolBar1.FindItemByText("Button1")
itemToDisable.Enabled = False	
````

# See Also

 * [Working With Items at the Client]({%slug toolbar/radtoolbar-items/working-with-items-at-the-client%})

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})
