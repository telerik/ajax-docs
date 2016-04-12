---
title: SplitButtonClick
page_title: SplitButtonClick | RadRibbonBar for ASP.NET AJAX Documentation
description: SplitButtonClick
slug: ribbonbar/server-side-programming/events/splitbuttonclick
tags: splitbuttonclick
published: True
position: 7
---

# SplitButtonClick



## 

The server-side **SplitButtonClick** event occurs when the user clicks on a SplitButton item, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar type**.

1. An EventArgs object with the following properties:

	* **Button** - the button that has been clicked.

	* **SplitButton** - the parent split button of the clicked button.

	* **Group** - the group of the clicked button parent's group.

	* **Index** - the index of the clicked button in its containing group.

````ASPNET
<telerik:RadRibbonBar RenderMode="Lightweight" ID="RadRibbonBar1" runat="server" OnSplitButtonClick="RadRibbonBar1_SplitButtonClick">
    <telerik:RibbonBarTab Text="Home">
        <telerik:RibbonBarGroup Text="Image">
            <Items>
                <telerik:RibbonBarSplitButton Size="Large" Text="Select" ImageUrl="icons/Select.png">
                    <Buttons>
                        <telerik:RibbonBarButton Text="Rectangular Selection" ImageUrl="icons/Select.png" />
                        <telerik:RibbonBarButton Text="Free-form Selection" ImageUrl="icons/FreeSelect.png" />
                        <telerik:RibbonBarButton Text="Select All" ImageUrl="icons/SelectAll.png" />
                    </Buttons>
                </telerik:RibbonBarSplitButton>
            </Items>
        </telerik:RibbonBarGroup>
    </telerik:RibbonBarTab>
</telerik:RadRibbonBar>
<asp:Literal runat="server" ID="Literal1"></asp:Literal>
````





````C#
	
protected void RadRibbonBar1_SplitButtonClick(object sender, RibbonBarSplitButtonClickEventArgs e)
{
    Literal1.Text += "Text: " + e.Button.Text + "<br/>";
}
	
````
````VB.NET
	
Protected Sub RadRibbonBar1_SplitButtonClick(sender As Object, e As RibbonBarSplitButtonClickEventArgs)
    Literal1.Text += "Text: " + e.Button.Text + "<br/>"
End Sub	
	
````


# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Server-side Events Overview]({%slug ribbonbar/server-side-programming/events/overview%})
