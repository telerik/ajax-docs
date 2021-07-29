---
title: Retaining the RadPanelBar state after URL navigation
description: Retaining the RadPanelBar state after URL navigation. Check it now!
type: how-to
page_title: Retaining the RadPanelBar state after URL navigation
slug: panelbar-retaining-the-radpanelbar-state-after-url-navigation
res_type: kb
---

## How to

Retain the RadPanelBar state after URL navigation.  
   
## Solution

Here are the basic steps you need to perform:

 1. Pass the ID of the clicked item in the query string of the page 
 
 2. Locate the panel item on the page to which you redirect
 
 3. Mark the item as selected
 
 4. Expand its parent items
   
Below are the code snippets of a simple example which represents the approach:  

````ASPX
<telerik:RadPanelBar ID="RadPanelbar1" runat="server"> 
    <Items> 
        <telerik:RadPanelItem Text="Products" Value="Panel1" Expanded="True"> 
            <Items> 
                <telerik:RadPanelItem Value="Panel1_1" Text="RadEditor" /> 
                <telerik:RadPanelItem Value="Panel1_2" NavigateUrl="Default.aspx?SelectedValue=Panel1_2" Text="RadPanelBar" /> 
            </Items> 
        </telerik:RadPanelItem> 
        <telerik:RadPanelItem Value="Panel1_3" Text="RadMenu" ></telerik:RadPanelItem> 
        <telerik:RadPanelItem Value="Panel2" Text="Support"> 
            <Items> 
                <telerik:RadPanelItem Value="Panel2_1" Text="Knowledge Base" /> 
                <telerik:RadPanelItem Value="Panel2_2" Text="Forums" /> 
                <telerik:RadPanelItem Value="Panel2_3" Text="Articles" /> 
            </Items> 
        </telerik:RadPanelItem> 
        <telerik:RadPanelItem Value="Panel3" Text="Client.net"> 
            <Items> 
                <telerik:RadPanelItem Value="Panel3_1" Text="My Client.net" /> 
                <telerik:RadPanelItem Value="Panel3_2" Text="My Profile" /> 
                <telerik:RadPanelItem Value="Panel3_4" Text="My Licenses" /> 
            </Items> 
        </telerik:RadPanelItem> 
    </Items> 
</telerik:RadPanelBar>
````

````C#
protected void Page_Load(object sender, EventArgs e) 
{ 
    string selectedItemValue = Request.QueryString["SelectedValue"]; 

    RadPanelItem selectedItem = RadPanelbar1.FindItemByValue(selectedItemValue); 

    if (selectedItem != null) 
    { 
        if (selectedItem.Items.Count > 0) 
        { 
            selectedItem.Expanded = true; 
        } 
        else 
        { 
            selectedItem.Selected = true; 

            while ((selectedItem != null) && 
                    (selectedItem.Parent.GetType() == typeof(RadPanelItem))) 
            { 
                selectedItem = (RadPanelItem)selectedItem.Parent; 

                selectedItem.Expanded = true; 
            } 
        } 
    } 
} 
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) 
    Dim selectedItemValue As String = Request.QueryString("SelectedValue") 

    Dim selectedItem As RadPanelItem = RadPanelbar1.FindItemByValue(selectedItemValue) 

    If selectedItem IsNot Nothing Then 
        If selectedItem.Items.Count > 0 Then 
            selectedItem.Expanded = True 
        Else 
            selectedItem.Selected = True 

            While (selectedItem IsNot Nothing) AndAlso (TypeOf (selectedItem.Parent) Is RadPanelItem) 
                selectedItem = DirectCast(selectedItem.Parent, RadPanelItem) 

                selectedItem.Expanded = True 
            End While 
        End If 
    End If 
End Sub
````

 