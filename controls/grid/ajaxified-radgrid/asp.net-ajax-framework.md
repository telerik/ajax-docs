---
title: ASP.NET AJAX Framework
page_title: ASP.NET AJAX Framework - RadGrid
description: Check our Web Forms article about ASP.NET AJAX Framework.
slug: grid/ajaxified-radgrid/asp.net-ajax-framework
components: ["grid"]
previous_url: controls/grid/getting-started/asp.net-ajax-framework
tags: asp.net,ajax,framework
published: True
position: 2
---

# ASP.NET AJAX Framework



All Telerik UI for ASP.NET AJAX controls support ASP.NET AJAX, which uses asynchronous JavaScript and XMLHttpRequests. These controls are built on the ASP.NET AJAX framework and integrate with it. The client-side object model follows the conventions of this framework.

The main idea of the AJAX framework is to eliminate full-page postbacks. Instead, only the relevant parts of the page are updated without a full-page refresh. The markup transferred between the client and the server is reduced, which can improve performance.

To enable ASP.NET AJAX with **RadGrid** for ASP.NET AJAX:

1. Make sure that ASP.NET AJAX is installed and configured for the Web Forms application.

1. Add the instance of **RadGrid** to a **RadAjaxManager** control. You can optionally provide it with a loading panel, as shown below:

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Height="75px"
  Width="75px" Transparency="25">
  <img alt="Loading..." src='<%= RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Ajax.loading.gif") %>'
    style="border: 0;" /></telerik:RadAjaxLoadingPanel>
````



To enable or disable ASP.NET AJAX with the **RadAjaxManager**, set its **EnableAJAX** property to **True** or **False** accordingly.

>note ASP.NET AJAX is not a Telerik product. For more information, see the [ASP.NET AJAX Roadmap](https://msdn.microsoft.com/en-us/library/bb398822.aspx).
>


## Known problems related to ASP.NET AJAX interoperability

If you receive exceptions such as:

* System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks *

wrap the code block inside `RadCodeBlock`, as shown in the following examples:

**Incorrect:**

````ASP.NET
<head runat="server">
  <script>
  var grid = $find("<%= RadGrid1.ClientID %>");
  </script>
</head>
<body>
  <!-- page content -->
</body>
````



**Correct:**

````ASP.NET
<head runat="server">
  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script>
    var grid = $find("<%= RadGrid1.ClientID %>");
    </script>
  </telerik:RadCodeBlock>
</head>
<body>
  <!-- page content -->
</body>
````

Alternatively, place the `RadCodeBlock` in the body:

````ASP.NET
<head runat="server">
</head>
<body>
  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script>
    var grid = $find("<%= RadGrid1.ClientID %>");
    </script>
  </telerik:RadCodeBlock>
</body>
````






