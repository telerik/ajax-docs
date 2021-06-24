---
title: Show Loading Sign on Page View with RadTabStrip
description: Show Loading Sign on Page View  with RadTabStrip. Check it now!
type: how-to
page_title: Show Loading Sign on Page View with RadTabStrip
slug: tabstrip-show-loading-sign-on-page-view
res_type: kb
---

## How to

Show a loading panel / sign during the time it takes a RadMultiPage to load an external page in one of the tabs.

## Solution

Follow these steps:
 1. Add a [RadAjaxLoadingPanel]({%slug ajaxloadingpanel/overview%}) to the page.
    - Optionally, configure it as desired (the example below makes it[show up over the entire page](https://www.telerik.com/support/code-library/how-to-make-a-radajaxloadingpanel-span-over-the-whole-page) so the user cannot change the tab while the page is loading).
 
 2. Hook to the [OnClientTabSelecting event]({%slug tabstrip/client-side-programming/onclienttabselecting%}) of the RadTabStrip to [show the loading panel]({%slug ajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%}) explicitly when the user changes tabs.
    - Check if the iframe inside the pageview already has a src attribute (i.e., it has already been loaded).
    - If you do not use a tab strip, hook to the appropriate place in your code.
 
 3. Hook to the Sys.Application.Load event to show the loading panel while the first page view loads initially.
 
 4. Hook to the Sys.Application.Load event in the content pages so that when they finish loading on the client they will hide the loading panel.

Here is an example with two ASPX pages:

 - In WebForm1

 ````ASPX
 <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Default"></telerik:RadAjaxLoadingPanel>
 
 <div>
 <telerik:RadTabStrip ID="RadTabStrip1" MultiPageID="RadMultiPage1" runat="server" OnClientTabSelecting="showLoadingPanel">
     <Tabs>
         <telerik:RadTab Text="Tab1" CssClass="rtab" Selected="True"></telerik:RadTab>
         <telerik:RadTab Text="Tab2" CssClass="rtab"></telerik:RadTab>
         <telerik:RadTab Text="Tab3" CssClass="rtab"></telerik:RadTab>
     </Tabs>
 </telerik:RadTabStrip>
 
 <telerik:RadMultiPage ID="RadMultiPage1" runat="server">
     <telerik:RadPageView ID="RadPageView5" runat="server" ContentUrl="WebForm2.aspx" Selected="true"></telerik:RadPageView>
     <telerik:RadPageView ID="RadPageView2" runat="server" ContentUrl="WebForm2.aspx"></telerik:RadPageView>
     <telerik:RadPageView ID="RadPageView4" runat="server" ContentUrl="WebForm2.aspx"></telerik:RadPageView>
 
 </telerik:RadMultiPage>
 
 <script>
     function showLoadingPanel(sender, args) {
         //if you want to show the loading panel over the entire page in order to prevent the user from changing the tab while its page is loading 
         //if you want to show it over the pageview only, pass the ID of the multipage to show() and hide()
         //for example, use .show("<%=RadMultiPage1.ClientID%>")
 
         //check if the iframe has already had its SRC attribute set (i.e., the tab has already been opened and thus the page inside will not load
         //because in such a case the loading panel will never hide
         if (args && args.get_tab && args.get_tab()) {
             var iframeSrc = $telerik.$(args.get_tab().get_pageView().get_element()).find("iframe").first().attr("src");
             if (!iframeSrc) {
                 showLoadingPanelOverForm();
             }
         }
         else {
             showLoadingPanelOverForm();
         }
     }
 
     function showLoadingPanelOverForm() {
         $find("<%=RadAjaxLoadingPanel1.ClientID%>").show(document.forms[0].getAttribute("id"));
     }
 
     function hideLoadingPanel() {
         $find("<%=RadAjaxLoadingPanel1.ClientID%>").hide(document.forms[0].getAttribute("id"));
     }
 
     //used for showing the loading panel while the first page view content is loading
     Sys.Application.add_load(showLoadingPanel);
 </script>
 ````
 
 ````CSS
 /* if you want to show the loading panel over the entire page in order to prevent the user from changing the tab while its page is loading */
 html, body, form {
     margin: 0;
     padding: 0;
     height: 100%;
     overflow: hidden;
 }
 ````

 - In WebForm2

 ````ASPX
 <telerik:RadGrid ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" runat="server"></telerik:RadGrid>
 <script>
     Sys.Application.add_load(function () {
         if (window.parent.hideLoadingPanel) {
             window.parent.hideLoadingPanel();
         }
     });
 </script>
 ````

 ````VB
 Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    Threading.Thread.Sleep(2000) 'Simulate delay in the page loading
 End Sub

 Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = "abcdef" 'a bad data source, but it will suffice for the sake of an example
 End Sub
 ````

  