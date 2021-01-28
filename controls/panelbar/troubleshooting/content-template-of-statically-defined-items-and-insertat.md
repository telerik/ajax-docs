---
title: Content Template of Statically Defined Items and InsertAt
page_title: Content Template of Statically Defined Items and InsertAt - RadPanelBar
description: Check our Web Forms article about Cannot Collapse Root Items.
slug: panelbar/troubleshooting/content-template-of-statically-defined-items-and-insertat
tags: content,template,statically,defined,items,insertat
published: True
position: 1
---

# Content Template of Statically Defined Items and InsertAt



## 

Dynamically adding Items to the PanelBar with the **InsertAt()** server-side method may cause the ContentTemplate of a statically defined Item (as shown below) to be lost after a subsequent postback.

````ASPNET
<telerik:RadPanelBar RenderMode="Lightweight" ID="RadPanelBar1" runat="server" ExpandMode="SingleExpandedItem">
    <Items>
        <telerik:RadPanelItem Text="Item1">
            <ContentTemplate>
                <asp:Button runat="server" ID="Button1" Text="TemplateButton" OnClick="Button1_Click" />
            </ContentTemplate>
        </telerik:RadPanelItem>
    </Items>
</telerik:RadPanelBar> 
````

In order to avoid the issue with the ContentTemplate not instantiating properly, the insertion of the new PanelItem with **InsertAt()** must be performed in the **PreInit** event. 

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadPanelItem newItem = new RadPanelItem();
    newItem.Text = "New Item added in code-behind";

    RadPanelBar1.Items.Insert(0, newItem);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs)
	Dim newItem As New RadPanelItem()
	newItem.Text = "New Item added in code-behind"

	RadPanelBar1.Items.Insert(0, newItem)
End Sub
````

