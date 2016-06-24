---
title: Center PopUp Edit Form in RadGrid
page_title: Center PopUp Edit Form in RadGrid | RadGrid for ASP.NET AJAX Documentation
description: Center PopUp Edit Form in RadGrid
slug: grid/data-editing/how-to/center-popup-edit-form-in-radgrid
tags: center,popup,edit,form,in,radgrid
published: True
position: 17
---

# Center PopUp Edit Form in RadGrid


By default the popup window is shown under the edit button or insert button. In case you need to center the window you need to manually calculate the position and set it to the window. 


````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
  <script type="text/javascript">
    var popUp;
    function popUpShowing(sender, eventArgs) {
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
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" AutoGenerateEditColumn="true" runat="server" AllowAutomaticDeletes="True"
  AllowAutomaticInserts="True" AllowAutomaticUpdates="True" DataSourceID="SqlDataSource1"
  AllowSorting="true" Skin="Silk" AllowPaging="true">
  <MasterTableView EditMode="PopUp" CommandItemDisplay="Top" DataKeyNames="ProductID">
    <EditFormSettings CaptionFormatString="Edit ProductID: {0}" CaptionDataField="ProductID"
      PopUpSettings-Height="260px" PopUpSettings-Width="400px" />
  </MasterTableView>
  <ClientSettings>
    <ClientEvents OnPopUpShowing="popUpShowing" />
    <Selecting AllowRowSelect="true" />
  </ClientSettings>
</telerik:RadGrid>
````


