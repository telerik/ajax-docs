---
title: Load content on demand when expanding RadSlidingPane
description: Load content on demand when expanding RadSlidingPane. Check it now!
type: how-to
page_title: Load content on demand when expanding RadSlidingPane
slug: load-content-on-demand-when-expanding-radslidingpane
res_type: kb
---

   
  
 ## HOW TO:  

The scenario of loading content on demand when a RadSlidingPane is expanded is useful in cases when the content slows down the performance and it is not needed to render additional HTML. 

## SOLUTION

In order to implement it, you can hook up the RadSlidingPane's `OnClientExpanding` event and perform an AJAX request which loads the content e.g as shown below:  
   
```ASP.NET
<script type="text/javascript">

function OnClientExpanding()
{ 
   if(!sender._loaded)
   {
   $find("<%=RadAjaxPanel1.ClientID %>").ajaxRequest(); 
      sender._loaded = true;
   } 
   }
</script>
<telerik:RadSplitter ID="RadSplitter1" runat="server">
   <telerik:RadPane ID="RadPane1" runat="server" Width="22">
      <telerik:RadSlidingZone ID="RadSlidingZone1" runat="server">
            <telerik:RadSlidingPane ID="RadSlidingPane1" runat="server" Title="LOD" OnClientExpanding="OnClientExpanding">
               <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" OnAjaxRequest="OnAjaxRequest">
               </telerik:RadAjaxPanel>
            </telerik:RadSlidingPane>
      </telerik:RadSlidingZone>
   </telerik:RadPane>
   <telerik:RadPane ID="RadPane2" runat="server">
   </telerik:RadPane>
</telerik:RadSplitter>
```
 
```C#
protected void OnAjaxRequest(object sender, AjaxRequestEventArgs e)
{
    RadAjaxPanel1.Controls.Add(Page.LoadControl("~/WebUserControl.ascx"));
}
```
```VB
Protected Sub OnAjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
    RadAjaxPanel1.Controls.Add(Page.LoadControl("~/WebUserControl.ascx"))
End Sub
```
   

You can find a sample running demo attached to the article.


