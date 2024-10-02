---
title: Migration from ASP.NET (Classic) to ASP.NET AJAX
description: Migration from ASP.NET (Classic) to ASP.NET AJAX
type: how-to
page_title: Migration from ASP.NET (Classic) to ASP.NET AJAX - RadGrid
slug: grid-migration-from-aspnet-classic-to-aspnet-ajax
res_type: kb
---


To migrate a Web application from **RadGrid** "Classic" to **RadGrid** for ASP.NET AJAX you need to follow these steps:

- Make sure you have installed ASP.NET AJAX.

- Add a [ScriptManager](https://msdn.microsoft.com/en-us/library/bb398863.aspx) or [RadScriptManager](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/overview) control to the page (or user control) in which you want to add any UI control for ASP.NET AJAX.

    ````XML
    <asp:ScriptManager ID="ScriptManager1" runat="server" />
    ````

    If your page is a content page, add the ScriptManager control in your master page.

- Drag and drop a control from the UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

- Replace the classic **RadGrid** directive

    ````XML
    <%@ Register TagPrefix="rad" Namespace="Telerik.WebControls" Assembly="RadGrid.Net2" %>
    ````

with the new one of RadGrid for ASP.NET AJAX:

    ````XML
    <%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
    ````

- Replace the classic **RadGrid** controls declarations:

    ````XML
    <rad:RadGrid ID="RadGrid1" runat="server" ...
    ````

with the new RadGrid declarations:

    ````XML
    <telerik:RadGrid ID="RadGrid1" runat="server" ...
    ````

- In the code behind, update the **using** (C#) or **Imports** (VB) statements. Replace "Telerik.WebControls" with the new "Telerik.Web.UI" namespace.


**Differences between RadGrid "classic" and RadGrid for ASP.NET AJAX**

We have done our best to leave Classic --&gt; RadGrid for ASP.NET AJAX migration as easy as possible. However, there are still several changes you may need to perform. Find the list below:

#### 1) Telerik.Web.UI Namespace

RadGrid for ASP.NET AJAX Server-Side API is fully compatible with the Classic RadGrid!  
However, since all Telerik controls for ASP.NET AJAX are embedded in a single assembly, you need to use the same Register directive for the assembly in your RadGrid application:  

````XML
<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
````

You need to change the namespace in the code-behind as well:

````C#
using Telerik.Web.UI;
````
````VB
Imports Telerik.Web.UI
````

**2) RadGrid AJAX built-in support is removed**

This is done in order to avoid any conflicts with the ASP.NET AJAX, which the UI controls for ASP.NET AJAX are based on.

Properties like **EnableAJAX**, **EnableAJAXLoadingTemplate** and **LoadingTemplateTransparency** as well as the **AJAXLoadingTemplate** Grid sub-tag no longer exist and will throw errors on compiling. The AJAX functionality was actually taken from RadAjax and everything should be achieved with RadAjax controls now: **RadAjaxManager**, **RadAjaxPanel** and **RadAjaxLoadingPanel** (refer to RadAjax section).

Find below a sample RadAjaxManager and RadAjaxLoadingPanel markup which ajaxifies "RadGrid1" displaying loading panel with transparency while updating:

**Ajaxified RadGrid**

````XML
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
     <telerik:AjaxSetting AjaxControlID="RadGrid1">
        <UpdatedControls>
           <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1"/>
        </UpdatedControls>
     </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
 
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Height="75px" Width="75px" Transparency="25">
     <img alt="Loading..." src='<%= RadAjaxLoadingPanel.GetWebResourceUrl(Page, "Telerik.Web.UI.Skins.Default.Ajax.loading.gif") %>' style="border:0;" />
</telerik:RadAjaxLoadingPanel>
````

All calls of **AjaxRequest** method should be performed by the RadAjax controls (see the RadAjax section of the documentation for more details).

The **OnRequestStart/OnRequestEnd** RadGrid client events can be replaced with RadAjax controls **OnRequestStart/OnResponseEnd**.

RadGrid's **ResponseScripts** collection is also removed. Use RadAjax controls **ResponseScripts** instead.

**3) Access RadGrid client-side object**

The following script should be replaced with $find() ASP.NET AJAX function (shortcut for the findComponent() function:

**Access client-side Grid object of Classic RadGrid**

````JavaScript
var grid = window["<%=RadGrid1.ClientID %>"];
````

Access client-side Grid object of RadGrid for ASP.NET AJAX**

````JavaScript
var grid = $find("<%=RadGrid1.ClientID %>");
````

However, keep in mind that any server-side code block like the above should be wrapped inside **RadCodeBlock**, otherwise an error will be thrown.

Access client-side object in RadCodeBlock**

````XML
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function MyFunction(){
            var grid = $find("<%=RadGrid1.ClientID %>");
            //more code..
        }
    </script>
</telerik:RadCodeBlock>
````


**4) DataNavigateUrlField of GridHyperLinkColumn**

The property is obsolete for a long time and is now removed. Instead, one can **use DataNavigateUrlField<u>s</u>** property.

**5) ClientSettings -&gt; EnableClientKeyValues property**

The old **ClientSettings -&gt; EnableClientKeyValues** property is replaced by **ClientDataKeyNames** for MasterTableView/GridTableView. Hence when you set fields for client serialization through the ClientDataKeyNames property of grid table the client key values will be automatically available client-side.

**6) ClientSettings -&gt; ActiveRowData property**

The old **ClientSettings -&gt; ActiveRowData** server property of the control is replaced by **ActiveRowIndex** property which serves the same purpose as the previous one.

**7) ClientSettings -&gt; ApplyStylesOnClient removed**

This property is removed from the Prometheus version of RadGrid. The styles applied to the grid elements client and server-side are now automatically synchronized and the presence of this property is not needed.

**8) Client-side API changes**

Classes/Namespaces changes

| **RadGrid Classic classes/namespaces** | **RadGrid for ASP.NET AJAX classes/namespaces** |
| --- | --- |
| RadGridNamespace | Telerik.Web.UI |
| RadGridNamespace.RadGrid | Telerik.Web.UI.RadGrid |
| RadGridNamespace.RadGridTable | Telerik.Web.UI.GridTableView |
| RadGridNamespace.RadGridTableColumn | Telerik.Web.UI.GridColumn |
| RadGridNamespace.RadGridTableRow | Telerik.Web.UI.GridDataItem |
| RadGridNamespace.ClientEvents | Telerik.Web.UI.ClientEvents |

Client properties changes:

| **RadGrid Classic client properties** | **RadGrid for ASP.NET AJAX client properties** |
| --- | --- |
| All properties start with capital letter.<br><br>**Example:**<br><br>window["&lt;%=RadGrid1.ClientID%&gt;"].MasterTableView | All properties start with *get\_* followed by the previous name of the property (starting with small letter instead of capital letter). The syntax for client properties follows the ASP.NET AJAX naming conventions (open and closed brackets)<br><br>**Example:**<br><br>$find("&lt;%=RadGrid1.ClientID%&gt;").get\_masterTableView() |
|  |  |  |

Client methods changes:

| **RadGrid Classic client methods** | **RadGrid for ASP.NET AJAX client methods** |
| --- | --- |
| All methods start with capital letter.<br><br>**Example:**<br><br>var grid = window["&lt;%=RadGrid1.ClientID%&gt;"];  <br>             grid.MasterTableView.resizeColumn(columnIndex, width) | All methods should start with small letter instead of capital letter.   <br>             The syntax for client methods follows the ASP.NET AJAX naming conventions.<br><br>**Example:**<br><br>var grid = $find("&lt;%=RadGrid1.ClientID%&gt;");  <br>             grid.get\_masterTableView().resizeColumn(  <br>             columnIndex, width); |

Client events changes:

| **RadGrid Classic client events** | **RadGrid for ASP.NET AJAX client events** |
| --- | --- |
| Different signature depending on the event purpose.<br><br>To cancel an event (which can be cancelled) you should invoke return false;<br><br>**Example:**<br><br>function ColumnResizing(index){<br><br>alert("Attempt to resize column with index " + index + ". Action cancelled");<br><br>return false;<br><br>} | Unified signature with sender/eventArgs arguments passed in the handler:<br><br>- the sender argument points to the grid client instance;<br><br>- the eventArgs argument is a holder for the old arguments passed in the respective handler.<br><br>To cancel an event (which can be cancelled) you should invoke args.set\_cancel(true);<br><br>**Example:**<br><br>function ColumnResizing(sender, args){<br><br>alert("Attempt to resize column with index " + args.get\_gridColumn().get\_element().cellIndex + ". Action cancelled");<br><br>args.set\_cancel(true);<br><br>} |

New properties/methods have been implemented for RadGrid for ASP.NET AJAX. Review the **Client-Side Programming** chapter from the documentation for further details.

**9) Skins migration**

The HTML rendering and CSS skins of RadGrid for ASP.NET AJAX (code name "Prometheus") are pretty much the same as of RadGrid for ASP.NET Classic. However, there are several differences worth mentioning.

**New CSS classes in RadGrid for ASP.NET AJAX**

- **DetailTable\_Skin** - applied to detail tables in hierarchy mode
- **PagerLeft\_Skin, PagerRight\_Skin, PagerCenter\_Skin** - applied to the different components of the pager
- **sliderPagerLabel\_Skin** - applied when using RadSlider as a pager
- **GridGroupFooter\_Vista** - applied to a group footer row
- RadGrid is now capable of using CSS sprites for all its image buttons and skin images. Please refer to the RadGrid CSS sprites help topic for further information. If you are migrating a "classic" RadGrid skin to "Prometheus", you are not required to create a CSS sprite, but you need to set the **ImagesPath** property instead, in order to specify the location of all RadGrid skin images and image buttons.

**Removed CSS classes from RadGrid for ASP.NET AJAX**

- All CSS classes related to RadGrid's native filtering menu (now replaced by RadMenu): **GridFilterMenu\_Skin, GridFilterMenuSelectColumn\_Skin, GridFilterMenuTextColumn\_Default, GridFilterMenuHover\_Default **

- **GridLoadingTemplate\_Skin** - RadGrid Prometheus has no native Ajax functionality any more, hence it has no native LoadingTemplate (loading panel). RadAjaxManager/RadAjaxPanel for ASP.NET AJAX along with RadAjaxLoadingPanel should be used instead.

 
