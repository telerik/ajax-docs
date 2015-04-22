---
title: Customizing the Action Buttons in Telerik RadGrid
page_title: Customizing the Action Buttons in Telerik RadGrid | RadGrid for ASP.NET AJAX Documentation
description: Customizing the Action Buttons in Telerik RadGrid
slug: grid/data-editing/how-to/customizing-the-action-buttons-in-telerik-radgrid
tags: customizing,the,action,buttons,in,telerik,radgrid
published: True
position: 0
---

# Customizing the Action Buttons in Telerik RadGrid



## 

Customizing the presentation of Edit/Update/Cancel/Insert buttons in GridEditCommandColumn and a button in GridButtonColumn.

There are various situations in which you would like to change the buttons in GridEditCommandcolumn/GridButtonColumn. For simple modifications (like alternating the font size/font family) you can find the respective buttons (hooking the ItemDataBound event of the grid) and apply your preferences through the Style attribute of that button. You can also change the default link buttons to push buttons by simply changing the ButtonType of the GridEditCommandColumn/GridButtonColumn to PushButton.

If you would like to render image buttons in the place of the default Update/Cancel/Insert link buttons, you merely have to select ButtonType=”ImageButton” from the EditFormSettings -> EditForm section and assign proper UpdateImageUrl/CancelImageUrl/InsertImageUrl for them.For the Edit button or the button inside the GridButtonColumn the operation is pretty similar. You should change the ButtonType of the column to ImageButton and define EditImageUrl/ImageUrl which to point to the image which will be visualized.

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server">
	    <MasterTableView CommandItemDisplay="Top" AutoGenerateColumns="false">
	      <EditFormSettings>
	        <EditColumn UniqueName="EditCommandColumn" ButtonType="ImageButton" CancelImageUrl="~/RadControls/Grid/Skins/Default/Cancel.gif"
	          UpdateImageUrl="~/RadControls/Grid/Skins/Default/Update.gif" InsertImageUrl="~/RadControls/Grid/Skins/Default/Insert.gif">
	        </EditColumn>
	      </EditFormSettings>
	      <Columns>
	        <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact name" DataField="ContactName" />
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" ButtonType="ImageButton"
	          EditImageUrl="~/RadControls/Grid/Skins/Default/Edit.gif">
	        </telerik:GridEditCommandColumn>
	        <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="DeleteColumn"
	          ButtonType="ImageButton" ImageUrl="~/RadControls/Grid/Skins/Default/Delete.gif">
	        </telerik:GridButtonColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````


