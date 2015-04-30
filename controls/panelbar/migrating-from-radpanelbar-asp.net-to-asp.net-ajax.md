---
title: Migrating From RadPanelBar ASP.NET to ASP.NET AJAX
page_title: Migrating From RadPanelBar ASP.NET to ASP.NET AJAX | RadPanelBar for ASP.NET AJAX Documentation
description: Migrating From RadPanelBar ASP.NET to ASP.NET AJAX
slug: panelbar/migrating-from-radpanelbar-asp.net-to-asp.net-ajax
tags: migrating,from,radpanelbar,asp.net,to,asp.net,ajax
published: True
position: 3
---

# Migrating From RadPanelBar ASP.NET to ASP.NET AJAX



To migrate a Web application from **RadPanelBar** "Classic" to **RadPanelBar** for ASP.NET Ajax you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

2. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

3. Add a ScriptManager control to the page (or user control) in which you want to add any RadControls "for ASP.NET Ajax": `<asp:ScriptManager ID="ScriptManager1" runat="server" />` If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

4. Drag and drop a control from the RadControls for ASP.NET Ajax package or manually copy the Telerik.Web.UI.dll in the Bin folder.

5. Replace the classic **RadPanelBar** directive <%@ Register TagPrefix="rad" Namespace="Telerik.WebControls" Assembly="RadPanelbar.NET2" %> with the new one of **RadPanelBar** "for ASP.NET Ajax": <%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

## Differences between RadPanelBar "classic" and RadPanelBar for ASP.NET Ajax

**RadPanelBar** for ASP.NET AJAX contains a number of changes because of moving from the ASP.NET to the Ajax framework of the Telerik.Web.UI suite. These changes are listed below:

## Server-side API changes

In the server-side API, some properties and methods have been removed and a few have changed their names. Some of the type names have changed as well. These changes are described below:

## RadPanelBar

The following table lists the changes to the **RadPanelBar** class:


>caption  

| RadPanelBar "Classic" | RadPanelBar for ASP.NET Ajax |
| ------ | ------ |
| **Properties** ||
|AutoPostBack|Removed. Postback is fired as soon as a server event is wired.|
|ImageOverUrl|Renamed to **HoveredImageUrl** .|
|PanelbarAnimationType|Removed. Use **AnimationType** instead.|
|PanelbarAnimationSettings|Removed. Use **AnimationSettings** instead.|
| **Methods** ||
|FindItemByClientID|Removed.|
|GetAllItems|Return type changed to **IList`<RadPanelItem>`** |

## Renamed Types

The following table lists the changes to the type names that **RadPanelBar** uses:


>caption  

| RadPanelBar "Classic" | RadPanelBar for ASP.NET Ajax |
| ------ | ------ |
|RadPanelbar|Renamed to **RadPanelBar** to comply with the naming convention of the other navigation controls.|
|PanelbarExpandMode|Renamed to **PanelBarExpandMode** |

## XML structure changes

The [XML structure]({%slug panelbar/radpanelbar-items/loading-items-from-xml%}) of the **RadPanelBar** has changed:

````XML
<panelitems>    
    <PanelItem Text="Products" Expanded="True" >        
        <PanelItem Text="RadEditor" />        
        <PanelItem Text="RadPanelBar" />        
        <PanelItem Text="RadMenu" />        
        <PanelItem Text="RadTabStrip" />    
    </PanelItem>    
    <PanelItem Text="Support">        
        <PanelItem Text="Knowledge Base" />        
        <PanelItem Text="Forums" />        
        <PanelItem Text="Articles" />        
        <PanelItem Text="FAQ" />    
    </PanelItem>
</panelitems>
````



````ASPNET
<panelbar> 
<Item Text="Products" Expanded="True" >  
    <Item Text="RadEditor" />  
    <Item Text="RadPanelBar" /> 
    <Item Text="RadMenu" />  
    <Item Text="RadTabStrip" /> 
</Item> 
<Item Text="Support" >  
    <Item Text="Knowledge Base" />  
    <Item Text="Forums" />  
    <Item Text="Articles" />  
    <Item Text="FAQ" /> 
</Item>
</panelbar>
````



## Client-side API changes

The [client-side API]({%slug panelbar/client-side-programming/overview%}) has been changed to follow the MS AJAX naming convention. The control's client-side API is not backward-compatible with **RadPanelBar Classic** edition. In order to migrate from **RadPanelBar** "Classic", the method calls and property accessors should use the new convention. A reference table is included below.

## RadPanelBar class

The following table lists the changes to the **RadPanelBar** client-side object:


>caption  

| RadPanelBar "Classic" | RadPanelBar for ASP.NET Ajax |
| ------ | ------ |
| **Methods** ||
|Disable()|disable()|
|Enable()|enable()|
|FindItemByID()|Removed.|
|FindItemByUrl()|findItemByUrl()|
|FindItemByValue()|findItemByValue()|
|FindItemByText()|findItemByText()|
|AttachEvent|use **get_events().addHandler()** or **add_[eventName]()** instead.|
|DetachEvent|use **get_events().removeHandler()** or **remove_[eventName]()** instead.|
|GetAttribute()|use **get_attributes().getAttribute()**| 
|SetAttribute()|use **get_attributes().setAttribute()**|

````JavaScript
	
var panelBar = $find("<%=RadPanelBar1.ClientID%>"); 
alert(panelBar.get_attributes().getAttribute("AttributeName"));
	
````

````JavaScript
	
var panelBar = $find("<%=RadPanelBar1.ClientID%>"); 
panelBar.get_attributes().setAttribute("AttributeName", "AttributeValue");
	
````

| RadPanelBar "Classic" | RadPanelBar for ASP.NET Ajax |
| ------ | ------ |
| **Properties** ||
|ID|get_id()|
|DomElement|get_element()|
|Items|get_items()|
|Enabled|get_enabled()|
|AllItems|get_allItems()|
|ExpandedItem|get_expandedItem()|
|SelectedItem|get_selectedItem()|
|FocusedItem|get_focusedItem()|

## RadPanelItem class

The following table lists the changes to the **RadPanelItem** client-side object:


>caption  

| RadPanelBar "Classic" | RadPanelBar for ASP.NET Ajax |
| ------ | ------ |
| **Methods** ||
|Disable()|disable()|
|Enable()|enable()|
|Focus()|focus()|
|Blur()|blur()|
|Select()|select()|
|SetText()|set_text()|
|GetText()|get_text()|
|SetValue()|set_value()|
|GetAttribute()|use **get_attributes().getAttribute()** instead.|
|SetAttribute()|use **get_attributes().setAttribute()** instead.|
|FocusPreviousItem()|focusPreviousItem()|
|FocusNextItem()|focusNextItem()|
|FocusFirstChild()|focusFirstChild()|
|FocusLastChild()|focusLastChild()|
|GetNextItem()|getNextSibling()|
|GetPreviousItem()|getPreviousSibling()|
|Expand()|expand()|
|Collapse()|collapse()|
|UnSelect()|unSelect()|
| **Properties** ||
|Enabled|get_enabled(), set_enabled()|
|Index|get_index()|
|PanelBar|get_panelBar()|
|Text|get_text(), set_text()|
|Value|get_value(), set_value()|
|DomElement|get_element()|
|Items|get_items()|
|FocusedItem|get_focusedItem()|
|ExpandedItem|get_expandedItem()|
|Parent|get_parent()|
|LinkElement|get_linkElement()|
|ImageElement|get_imageElement()|
|TextElement|get_textElement()|
|Level|get_level()|
|Focused|get_focused(), set_focused()|

## CSS Class Names changes

The following table lists the changes to CSS classes used in **RadPanelBar** skins:


>caption  

| RadPanelBar "Classic" | RadPanelBar for ASP.NET Ajax |
| ------ | ------ |
|disabled|rpDisabled|
|first|rpFirst|
|group|rpGroup|
|item|rpItem|
|last|rpLast|
|level|rpLevel|
|link|rpLink|
|rootGroup|rpRootGroup|
|selected|rpSelected|
|slide|rpSlide|
|text|rpText|
|template|rpTemplate|
|image|rpImage|

# See Also

 * [RadPanelBar Object]({%slug panelbar/client-side-programming/radpanelbar-object%})

 * [RadPanelItemCollection Object]({%slug panelbar/client-side-programming/radpanelitemcollection-object%})

 * [RadPanelItem Object]({%slug panelbar/client-side-programming/radpanelitem-object%})

 * [CSS Skin File Selectors]({%slug panelbar/appearance-and-styling/css-skin-file-selectors%})
