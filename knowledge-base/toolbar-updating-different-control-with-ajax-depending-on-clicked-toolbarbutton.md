---
title: Updating different control with AJAX depending on clicked ToolbarButton
description: Updating different control with AJAX depending on clicked ToolbarButton. Check it now!
type: how-to
page_title: Updating different control with AJAX depending on clicked ToolbarButton
slug: toolbar-updating-different-control-with-ajax-depending-on-clicked-toolbarbutton
res_type: kb
---


## HOW-TO  

Update different control with AJAX depending on clicked ToolbarButton

## DESCRIPTION
This article shows how a specific control can be updated depending on the clicked ToolbarButton (without the need of any JavaScript or Toolbar client-events handling)
 
## SOLUTION

Here is the code for Telerik's RadControls for Asp.Net AJAX:

````ASP.NET
<asp:ScriptManager ID="ScriptManager" runat="server"></asp:ScriptManager> 
<asp:Label ID="Label1" runat="server" Text="Click 'New' button as many times as you want to add new items and then click 'Save' to udpated the CheckBoxList"></asp:Label>     
<telerik:RadToolbar ID="RadToolbar1" runat="server" style="z-index: 103; left: 204px; position: absolute; top: 39px"  
 OnButtonClick="RadToolbar1_OnClick"> 
    <Items> 
        <telerik:RadToolbarButton runat="server" Text="New" CommandName="New"/> 
        <telerik:RadToolbarButton runat="server" Text="Save" CommandName="Save"/> 
    </Items> 
</telerik:RadToolbar> 
 
<asp:CheckBoxList ID="CheckBoxList1" runat="server" style="z-index: 101; left: 251px; position: absolute; top: 91px" Height="51px" Width="26px"> 
    <asp:ListItem>1</asp:ListItem> 
    <asp:ListItem>2</asp:ListItem> 
</asp:CheckBoxList> 
<asp:ListBox ID="ListBox1" runat="server" style="z-index: 102; left: 204px; position: absolute; top: 87px" Height="191px" Width="34px"> 
    <asp:ListItem>1</asp:ListItem> 
    <asp:ListItem>2</asp:ListItem> 
</asp:ListBox> 
 
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server"  > 
    <AjaxSettings> 
        <telerik:AjaxSetting AjaxControlID="RadToolbar1"> 
            <UpdatedControls> 
                <telerik:AjaxUpdatedControl ControlID="CheckBoxList1" /> 
            </UpdatedControls> 
        </telerik:AjaxSetting> 
        <telerik:AjaxSetting AjaxControlID="RadToolbar1"> 
            <UpdatedControls> 
                <telerik:AjaxUpdatedControl ControlID="ListBox1" /> 
            </UpdatedControls> 
        </telerik:AjaxSetting> 
    </AjaxSettings> 
</telerik:RadAjaxManager>
```` 

````C#
protected void RadToolbar1_OnClick(object sender, RadToolBarEventArgs e) 
{ 
    RadToolBarButton button = e.Item as RadToolBarButton; 
 
    switch (button.CommandName) 
    { 
        case "New": 
            { 
                ListBox1.Items.Add(new ListItem((ListBox1.Items.Count + 1).ToString())); 
                updateControlID = "ListBox1"; 
                break; 
            }; 
 
        case "Save": 
            { 
                for (int i = CheckBoxList1.Items.Count; i < ListBox1.Items.Count; i++) 
                { 
                    CheckBoxList1.Items.Add(new ListItem((i + 1).ToString())); 
                } 
                updateControlID = "CheckBoxList1"; 
                break; 
            } 
    } 
} 
````
````VB.NET
Private updateControlID As [String] 
 
Protected Sub RadToolbar1_OnClick(ByVal sender As Object, ByVal e As RadToolBarEventArgs) Handles RadToolbar1.ButtonClick 
    Dim button As RadToolBarButton = CType(e.Item, RadToolBarButton) 
    Select Case button.CommandName 
        Case "New" 
            ListBox1.Items.Add(New ListItem((ListBox1.Items.Count + 1).ToString())) 
            updateControlID = "ListBox1" 
            Exit Select 
        Case "Save" 
            Dim i As Integer 
            For i = CheckBoxList1.Items.Count To ListBox1.Items.Count - 1 
                CheckBoxList1.Items.Add(New ListItem((i + 1).ToString())) 
            Next i 
            updateControlID = "CheckBoxList1" 
            Exit Select 
    End Select 
End Sub 
````

