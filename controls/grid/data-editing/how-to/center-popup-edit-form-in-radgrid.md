---
title: Center PopUp Edit Form in RadGrid
page_title: Center PopUp Edit Form in RadGrid | UI for ASP.NET AJAX Documentation
description: Center PopUp Edit Form in RadGrid
slug: grid/data-editing/how-to/center-popup-edit-form-in-radgrid
tags: center,popup,edit,form,in,radgrid
published: True
position: 17
---

# Center PopUp Edit Form in RadGrid



## 

In some case where __RadGrid__ uses __PopUp__ edit forms for inserting/updating records, you may want to specify the pop-up form position on the page. For that purpose hook up the __OnPopUpShowing__ client-side event of RadGrid to change the default position of the __PopUp__ edit form.

Below is an example showing how to center the edit form in RadGrid:

````ASPNET
	  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	      var popUp;
	      function PopUpShowing(sender, eventArgs) {
	        popUp = eventArgs.get_popUp();
	        var gridWidth = sender.get_element().offsetWidth;
	        var gridHeight = sender.get_element().offsetHeight;
	        var popUpWidth = popUp.style.width.substr(0, popUp.style.width.indexOf("px"));
	        var popUpHeight = popUp.style.height.substr(0, popUp.style.height.indexOf("px"));
	        popUp.style.left = ((gridWidth - popUpWidth) / 2 + sender.get_element().offsetLeft).toString() + "px";
	        popUp.style.top = ((gridHeight - popUpHeight) / 2 + sender.get_element().offsetTop).toString() + "px";
	      } 
	    </script>
	  </telerik:RadCodeBlock>
	  <telerik:RadGrid ID="RadGrid1" AutoGenerateEditColumn="true" runat="server" AllowAutomaticDeletes="True"
	    AllowAutomaticInserts="True" AllowAutomaticUpdates="True" DataSourceID="SqlDataSource1"
	    AllowSorting="true" Skin="Silk" AllowPaging="true">
	    <MasterTableView EditMode="PopUp" CommandItemDisplay="Top" DataKeyNames="ProductID">
	      <EditFormSettings CaptionFormatString="Edit ProductID: {0}" CaptionDataField="ProductID"
	        PopUpSettings-Height="260px" PopUpSettings-Width="400px" />
	    </MasterTableView>
	    <ClientSettings>
	      <ClientEvents OnPopUpShowing="PopUpShowing" />
	      <Selecting AllowRowSelect="true" />
	    </ClientSettings>
	  </telerik:RadGrid>
````


