---
title: ASP.NET AJAX Framework
page_title: ASP.NET AJAX Framework | RadGrid for ASP.NET AJAX Documentation
description: ASP.NET AJAX Framework
slug: grid/getting-started/asp.net-ajax-framework
tags: asp.net,ajax,framework
published: True
position: 2
---

# ASP.NET AJAX Framework



All Telerik for ASP.NET AJAX controls provide full support for ASP.NET AJAX Asynchronous JavaScript with XMLHttpRequests). These controls are built on top of the ASP.NET AJAX framework and provide seamless integration with it. The client object model follows the conventions of this framework.

The main idea of the AJAX framework is the elimination of full-page postbacks. In contrast, only the relevant parts of the page are updated, without a disturbing refresh The markup that is transferred between the client machine and the server is reduced dramatically, which results in a significant performance improvement.

To enable ASP.NET AJAX with **RadGrid** for ASP.NET AJAX:

1. Make sure you have the ASP.NET AJAX framework installed.

1. Add the instance of **RadGrid** to a **RadAjaxManager** control. You can optionally provide it with a loading panel, as shown below:

````ASPNET
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

>note ASP.NET AJAX is not a Telerik product.
>For further information about ASP.NET AJAX, refer to[ASP.NET AJAX Roadmap](http://msdn.microsoft.com/en-us/library/bb398822.aspx).
>


## Known problems related to ASP.NET AJAX interoperability

If you receive exceptions such as:

* System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks *

you need to the code block inside RadCodeBlock, i.e.:

**Incorrect:**

````ASPNET
<head runat="server">
  <script>
  var grid = $find(<%= RadGrid1.ClientID %>);
  ...
  </script>
</head>
<body>
  ...
</body>
````



**Correct:**

````ASPNET
<head runat="server">
  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script>
    var grid = $find(<%= RadGrid1.ClientID %>);
    ...
    </script>
  </telerik:RadCodeBlock>
</head>
<body>
  ...
</body>
or
<head runat="server">
</head>
<body>
  <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script>
    var grid = $find(<%= RadGrid1.ClientID %>);
    ...
    </script>
  </telerik:RadCodeBlock>
</body>
````






