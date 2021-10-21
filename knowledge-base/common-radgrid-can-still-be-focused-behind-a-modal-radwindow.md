---
title: RadGrid Can still be Focused Behind a Modal RadWindow
description: RadGrid Can still be Focused Behind a Modal RadWindow - Common
type: how-to
page_title: RadGrid Can still be Focused Behind a Modal RadWindow
slug: common-radgrid-can-still-be-focused-behind-a-modal-radwindow
res_type: kb
---

## DESCRIPTION

RadGrid can be focused behind a modal RadWindow by using the Tab key.  

Prevent the end user from focusing and operating with RadGrid when modal RadWindow is opened.

The modal functionality can prevent inputs in the page to be focused by tabbing out. When RadGrid's keyboard navigation is enabled (`<ClientSettings AllowKeyboardNavigation="true">`), however, RadGrid adds a tabIndex attribute to its wrapping `<div>` element and RadWindow cannot detect that because div elements do not generally provide tabIndex attributes.  
  
## SOLUTION

The solution is to remove the tabIndex attribute of the grid when the modal dialog is shown and restore it when the popup closes.

#### The Grid and RadWindow Configuration

````XML
<telerik:RadWindow runat="server" ID="RadWindow1" Modal="true" VisibleOnPageLoad="true" OnClientShow="OnClientShow" OnClientClose="OnClientClose">
    <ContentTemplate>
        <input type="text" name="name" value="" />
    </ContentTemplate>
</telerik:RadWindow>

<RadGrid runat="server" ID="RadGrid1">
    <ClientSettings AllowKeyboardNavigation="true">
        <Selecting AllowRowSelect="true"></Selecting>
        <KeyboardNavigationSettings EnableKeyboardShortcuts="true" AllowSubmitOnEnter="true"
            AllowActiveRowCycle="true" CollapseDetailTableKey="LeftArrow" ExpandDetailTableKey="RightArrow">
        </KeyboardNavigationSettings>
        </ClientSettings>
</RadGrid>
````

#### Example 1: Remove and restore the tabIndex attribute of a RadGrid while a modal RadWindow is shown.

Shows how you can use RadIWindow's client-side events to implement your own functionality that will disable the keyboard navigation of RadGrid when RadWindow is open and bring it back when closed.  


The **OnClientShow** and **OnClientClose** Client-Side events of the RadWindow

````JavaScript
<script>
    var _gridsTabIndex;
    function OnClientShow() {
        var grid = $find("<%= RadGrid1.ClientID %>");
        _gridsTabIndex = $telerik.$(grid.get_element()).attr("tabindex");
        $telerik.$(grid.get_element()).removeAttr("tabindex");
    }
    function OnClientClose() {
        var grid = $find("<%= RadGrid1.ClientID %>");
        $telerik.$(grid.get_element()).attr("tabindex", _gridsTabIndex || 0);
    }
</script>
````
  
#### Example 2: A generic function that can remove and restore the RadGrid tabIndex for multiple controls.  

Shows a more generic function that can work for multiple RadGrid controls.

````JavaScript
function OnClientShow() {
    processTabindex("tabindex", "back_tabindex");
}
function OnClientClose() {
    processTabindex("back_tabindex", "tabindex");
}
function processTabindex(attr, backAttr){
    var $ = $telerik.$;
    var grids = $(".RadGrid");
    for (var i = 0; i < grids.length; i++) {
        var tabindex = $(grids[i]).attr(attr);
        $(grids[i]).attr(backAttr, tabindex);
        $(grids[i]).removeAttr(attr);
    }
}
````
 
 