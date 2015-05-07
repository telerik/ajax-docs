---
title: Design Time Support for RadMultiPage
page_title: Design Time Support for RadMultiPage | RadTabStrip for ASP.NET AJAX Documentation
description: Design Time Support for RadMultiPage
slug: tabstrip/design-time/design-time-support-for-radmultipage
tags: design,time,support,for,radmultipage
published: True
position: 4
---

# Design Time Support for RadMultiPage

## 

To create a **RadMultiPage** control at design time:

1. Drag and drop an instance of **RadMultiPage** from the toolbox onto the web form.

1. To add PageViews, do one of the following:

1. Drag and drop instances of the **RadPageView** control from the toolbox onto the multi-page.

1. Click the **Add RadPageView** link in the **RadMultiPage** [Smart Tag]({%slug tabstrip/design-time/smart-tag%}).

![Multipage Design time](images/tabstrip_multipage_design_time2.gif)



You can also declare the **RadPageView** controls declaratively in the ASPX file:

````ASPNET
<telerik:RadMultiPage ID="RadMultiPage1" runat="server" >
 <telerik:RadPageView ID="RadPageView1" runat="server">
   ...
 </telerik:RadPageView>
 <telerik:RadPageView ID="RadPageView2" runat="server">
   ...
 </telerik:RadPageView>
 <telerik:RadPageView ID="RadPageView3" runat="server">
   ...
 </telerik:RadPageView>
 <telerik:RadPageView ID="RadPageView4" runat="server">
   ...
 </telerik:RadPageView>
</telerik:RadMultiPage> 
````




