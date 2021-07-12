---
title: RadToolTip for RadComboBox
description: Tooltipify each element of a RadComboBox with RadToolTip. Check it now!
type: how-to
page_title: RadToolTip for RadComboBox
slug: tooltip-radtooltip-for-radcombobox
res_type: kb
---

 
 ## HOW-TO
  

Tooltipify each element of a RadComboBox  
  
## SOLUTION
The standard asp DropDownList control cannot be configured to display even the plain [browser] tooltip due to having OPTION elements in its HTML representation and the OPTION element is not a real HTML object.  
  

Tooltipifying a **RadComboBox**, however, is possible and pretty easy. In order to achieve the desired behavior you should simply pu a** RadToolTip** control in the Item Template of the **RadComboBox** as shown below:  
  
````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" DataSourceID="AccessDataSource1" 
            DataTextField="ContactName">  
    <ItemTemplate> 
        <asp:Label runat="server" ID="Label1" Text='<%# Eval("ContactName")%> '></asp:Label> 
        <telerik:RadToolTip ID="RadToolTip1" runat="server" Width="100" Height="10" TargetControlID="Label1" 
            Position="BottomRight" Text='<%# Eval("ContactName")%>'>  
        </telerik:RadToolTip> 
    </ItemTemplate> 
    <CollapseAnimation Duration="200" Type="OutQuint" /> 
</telerik:RadComboBox> 
````
  

In case you want to have a single **RadToolTip** for the whole **RadComboBox** control, you should simply set its ID as a TargetControlID of the **RadToolTip**:  
  

````ASP.NET
<telerik:RadToolTip ID="RadToolTip1" runat="server" Width="100" Height="10" Position="BottomRight" 
    Text='This is a single tooltip for the whole RadComboBox control' TargetControlID="RadComboBox1">  
</telerik:RadToolTip>
````


**NOTE**: If you are using **load-on-demand**, adding RadToolTip control instances to the items will not work. The load-on-demand mechanism is either a web service or a page callback, and neither of them can return IScriptControl instances and the MS AJAX-generated scripts ($create() statement) needed for them to work.  
**When using load-on-demand, you can add a mouseover DOM event handler for the items that will show a tooltip with JavaScript** (see the [Dynamic Tooltip Creation](https://demos.telerik.com/aspnet-ajax/tooltip/examples/radtooltipmanagerclientapi/defaultcs.aspx) demo). If you do not need or want to fetch the data for the tooltips dynamically, you can use a single tooltip instance outside of the combo box and its [client-side API]({%slug tooltip/client-side-programming/radtooltip-object%}) (see the set_text() method) to provide a text that can be rendered in the DOM of the item and obtained by the mouseover handler.
 

   