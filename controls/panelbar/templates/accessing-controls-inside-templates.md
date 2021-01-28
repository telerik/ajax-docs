---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates - RadPanelBar
description: Check our Web Forms article about Accessing Controls Inside Templates.
slug: panelbar/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 3
---

# Accessing Controls Inside Templates



## Header Template

In order to access a control (a CheckBox in the particular example) embedded in a **HeaderTemplate** of a RadPanelBar control using server-side you can use the following code:

````ASPNET
<telerik:RadButton RenderMode="Lightweight" runat="server" ID="button0" Text="UncheckCheckBox" OnClick="button0_Click">
    </telerik:RadButton> 
    <telerik:RadPanelBar RenderMode="Lightweight" ID="RadPanelBar0" runat="server">
    <Items>
        <telerik:RadPanelItem Text="PanleItem1">
            <HeaderTemplate>
                <asp:CheckBox runat="server" ID="checkBox1" Text="CheckBox1" Checked="true" />
            </HeaderTemplate>
            <ContentTemplate>
            </ContentTemplate>
        </telerik:RadPanelItem>
    </Items>
</telerik:RadPanelBar>
````



**Server-side access**



````C#
	
protected void button0_Click(object sender, EventArgs e)
{
    RadPanelItem item = RadPanelBar0.Items[0];
    CheckBox CheckItem = item.Header.FindControl("checkBox1") as CheckBox;
    CheckItem.Checked = false;
}
	
````
````VB.NET

Protected Sub button0_Click(sender As Object, e As EventArgs)
    Dim item As RadPanelItem = RadPanelBar0.Items(0)
    Dim CheckItem As CheckBox = TryCast(item.Header.FindControl("checkBox1"), CheckBox)
    CheckItem.Checked = False
End Sub
	
````


## Content Template

If your **RadPanelBar** has items with content templates you can access the controls embedded in the content templates directly by ID, regardless of the level of the template itself (it can be on a grand grand child of the root item). Please note that in this way you need to specify unique IDs for controls in content templates.

For example, use the following panel bar:

````ASPNET
<telerik:radpanelbar id="RadPanelBar1" runat="server">    
<Items>        
    <telerik:RadPanelItem Text="Color Picker" runat="server">            
    <ContentTemplate>                
        <telerik:RadColorPicker RenderMode="Lightweight" ID="RadColorPicker1" runat="server" AutoPostBack="True" Preset="Standard" OnColorChanged="RadColorPicker1_ColorChanged">              
         </telerik:RadColorPicker>    
         <asp:Label ID="Label1" runat="server" BackColor="White"> Example</asp:Label>            
      </ContentTemplate>        
     </telerik:RadPanelItem>    
</Items>
</telerik:radpanelbar>
````



Now in the **ColorChanged** event handler, the following code locates and updates the label:

**Server-side access**



````C#
	
protected void RadColorPicker1_ColorChanged(object sender, EventArgs e)
{
    Label1.ForeColor = RadColorPicker1.SelectedColor;
}
	
````
````VB.NET
	
Protected Sub RadColorPicker1_ColorChanged(ByVal sender As Object, ByVal e As EventArgs)
    Label1.ForeColor = RadColorPicker1.SelectedColor
End Sub
	
````


**Client-side access**

````JavaScript
	     
var datePicker = $find("<%= RadColorPicker1.ClientID %>");
				
````



## Item Template

If your **RadPanelBar** has items with item templates that have embedded controls, you may want to access the properties of those embedded controls. To get a reference to the embedded control, locate the **RadPanelBarItem** that has the item template, and use its **FindControl** method.

For example, consider the following panel bar:

````ASPNET
<telerik:radpanelbar id="RadPanelBar1" runat="server">  
<Items >    
    <telerik:RadPanelItem Text="Color Picker" runat="server">      
    <Items>        
        <telerik:RadPanelItem runat="server" >            
        <ItemTemplate>                
            <telerik:RadColorPicker RenderMode="Lightweight" ID="RadColorPicker1" runat="server" AutoPostBack="True" Preset="Standard" OnColorChanged="RadColorPicker1_ColorChanged">               
             </telerik:RadColorPicker>                
             <asp:Label ID="Label1" runat="server" BackColor="White"> Example </asp:Label>            
         </ItemTemplate>        
         </telerik:RadPanelItem>      
     </Items>   
     </telerik:RadPanelItem> 
</Items >
</telerik:radpanelbar>
````



In the **ColorChanged** event handler, the following code locates and updates the label:

**Server-side access**



````C#
	
protected void RadColorPicker1_ColorChanged(object sender, EventArgs e)
{
    RadColorPicker picker = sender as RadColorPicker;
    Label label = picker.Parent.FindControl("Label1") as Label;
    label.ForeColor = picker.SelectedColor;
}
	
````
````VB.NET
	
Protected Sub RadColorPicker1_ColorChanged(ByVal sender As Object, ByVal e As EventArgs) Handles RadColorPicker1.ColorChanged
    Dim picker As RadColorPicker = CType(sender, RadColorPicker)
    Dim label As Label = CType(picker.Parent.FindControl("Label1"), Label)
    label.ForeColor = picker.SelectedColor
End Sub
	
````


**Client-side access**

````JavaScript
	     
var panelbar = $find("<%= RadPanelBar1.ClientID %>");
var item = panelbar.findItemByText("ColorPicker");
var datePicker = item.findControl("RadColorPicker1");
				
````



or

````JavaScript
		   
var datePicker = $find('<%= RadPanelBar1.FindItemByText("ColorPicker").FindControl("RadColorPicker1").ClientID %>');
	          
````



# See Also

 * [Templates Overview]({%slug panelbar/templates/overview%})

 * [Adding Templates at Designtime]({%slug panelbar/templates/adding-templates-at-designtime%})
