---
title: Customizing Row Appearance
page_title: Customizing Row Appearance - RadGrid
description: Learn how to customize Telerik UI for ASP.NET AJAX RadGrid row styles for normal, alternating, selected, and edited rows.
slug: grid/appearance-and-styling/customizing-row-appearance
components: ["grid"]
tags: customizing,row,appearance
published: True
position: 4
---

# Customizing Row Appearance



>note When you apply an external grid skin, alter the corresponding classes in the `Skins/[SkinName]/[Control].[SkinName].css` file. See [Modifying Existing Skins]({%slug grid/appearance-and-styling/modifying-existing-skins%}) for more information. The examples in this article apply when you do not use the **RadGrid** skinning mechanism by setting **Skin** to an empty string.


## Normal Item

The normal rows are the odd-numbered rows in the image below. Their appearance is controlled by the **ItemStyle** property.

## Alternating Item

The alternating rows are the even-numbered rows in the image below. Their appearance is controlled by the **AlternatingItemStyle** property.

> caption Figure 1: Normal and alternating RadGrid rows

![Normal and alternating RadGrid rows](images/grd_normal_alternating_styles.png)

You can set the appearance of the normal and alternating rows programmatically or in the grid declaration:

> caption Example: Setting normal and alternating row styles



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ... />
<AlternatingItemStyle BackColor="Orange" ... />
<ItemStyle BackColor="White" ... />
````
````C#
RadGrid RadGrid1 = new RadGrid();
RadGrid1.AlternatingItemStyle.BackColor = Color.Orange;
RadGrid1.ItemStyle.BackColor = Color.White;
````
````VB
Dim RadGrid1 As RadGrid = New RadGrid()
RadGrid1.AlternatingItemStyle.BackColor = Color.Orange
RadGrid1.ItemStyle.BackColor = Color.White
````


## Selected Item

You can customize the appearance of the selected row by using the **SelectedItemStyle** property:

> caption Example: Applying a selected-row style

````ASP.NET
<style type="text/css">
 .SelectedItem
 {
  background-image: url(img/SelectedRow.gif);
  background-repeat: no-repeat;
  background-position: top right;
 }
</style>

<telerik:radgrid id="RadGrid1" cssclass="RadGrid" runat="server" allowpaging="True" allowsorting="True"
 pagesize="10" width="95%" showfooter="True" allowmultirowselection="True">
...
 <selecteditemstyle CssClass="SelectedItem"></selecteditemstyle>
 <mastertableview Width="100%" CssClass="MasterTable" style="border-collapse:separate;">
  <rowindicatorcolumn uniquename="RowIndicator">
   <headerstyle width="20px"></headerstyle>
  </rowindicatorcolumn>
  <columns>
   <telerik:gridtemplatecolumn groupable="False" uniquename="TemplateColumn">
    <headerstyle width="20px"></headerstyle>
    <ItemStyle CssClass="ResizeItem"></ItemStyle>
    <itemtemplate>
     <asp:checkbox id="CheckBox1" autopostback="False" runat="server"></asp:checkbox>
    </itemtemplate>
   </telerik:gridtemplatecolumn>
  </columns>
  <expandcollapsecolumn buttontype="ImageButton" visible="False" uniquename="ExpandColumn">
   <headerstyle width="19px"></headerstyle>
  </expandcollapsecolumn>
 </mastertableview>
</telerik:radgrid>         
````



> caption Figure 2: Selected row style

![Selected row style](images/grd_SelectedItemStyle.png)

## Edit Item

You can customize the appearance of the edited row by using the **EditItemStyle** property:

> caption Example: Applying an edited-row style

````ASP.NET
	        <style type="text/css">
	 .EditedItem, .EditedItem TABLE TR
	 {
	  background-color: #ffffe1;
	  background-image: none;
	 }
	 .EditRow TD
	 {
	  border-bottom: 1px solid #d9d6cf;
	 }
	</style>
	
	<telerik:RadGrid RenderMode="Lightweight" id="RadGrid1" CssClass="RadGrid" runat="server" AllowPaging="True" AllowSorting="True" PageSize="10" Width="95%" ShowFooter="True" GridLines="None">
	 <Columns>
	  <telerik:GridEditCommandColumn ButtonType="LinkButton" UpdateText="Update" CancelText="Cancel" EditText="Edit">
	   <HeaderStyle Width="37px"></HeaderStyle>
	   <ItemStyle CssClass="ResizeItem"></ItemStyle>
	  </telerik:GridEditCommandColumn>
	 </Columns>
	 <EditItemStyle CssClass="EditedItem" Height="25px"></EditItemStyle>
	 <MasterTableView>
	  <EditFormSettings CaptionFormatString='<img src="img/editRowBg.gif" alt="" />'>
	   <FormMainTableStyle GridLines="None" CellSpacing="0" CellPadding="3" Width="100%" CssClass="none"/>
	    <FormTableStyle CssClass="EditRow" CellSpacing="0" BorderColor="#c4c0b5" CellPadding="2" Width="100%"/>
	    <FormStyle Width="100%" BackColor="#ffffe1"></FormStyle>
	  </EditFormSettings>
	 </MasterTableView>
	</telerik:RadGrid>
	         
````



> caption Figure 3: Edited row style

![Edited row style](images/grd_EditItemStyle_thumb.png)

## See Also

* [RadGrid Skins]({%slug grid/appearance-and-styling/skins%})
* [Modifying Existing Skins]({%slug grid/appearance-and-styling/modifying-existing-skins%})
