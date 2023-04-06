---
title: Disabling Embedded Resources
page_title: Disabling Embedded Resources
description: "Disable the embedded scripts or skins for a single control or globally for your whole project when working with Telerik UI for ASP.NET AJAX."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources
tags: disabling,embedded,resources
published: True
position: 1
---

# Disabling Embedded Resources

By default, the JavaScript files needed by the Telerik UI for ASP.NET AJAX controls are served as web resources, embedded in the `Telerik.Web.UI.dll` assembly.

To avoid using WebResources, apply either of the following approaches:

* Use the [Scripts CDN]({%slug scriptmanager/cdn-support/overview%}) and [Stylesheets CDN]({%slug stylesheetmanager/cdn-support/overview%}) providers Telerik offers out of the box.

* Disable the embedded scripts for the controls and add the script files as static `.js` files to your application as described in the following sections.

It is faster and easier to [create a custom CDN provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}). Doing so will still load the scripts from static files to allow better caching, yet no custom script references must be added in the ScriptManager, nor the `EnableEmbeddedScripts` property needs to be disabled for each control.

This article provides details on the following scenarios:

* [Disabling embedded scripts](#disabling-embedded-scripts)

* [Disabling embedded skins](#disabling-embedded-skins)

* [Disabling embedded scripts and skins globally](#disabling-embedded-scripts-and-skins-globally)

## Disabling Embedded Scripts

For custom deployment scenarios, you can specify an alternative location for JavaScript files by setting `EnableEmbeddedScripts` to `false`. Then, the JavaScript files will not be loaded from the assembly.

You will also need to add a script reference for each JavaScript file through the ScriptManager or the [ScriptManager]({%slug scriptmanager/overview%}).

The following is a complete list of the JavaScript files used by Telerik UI for ASP.NET AJAX. You need to register only the JavaScript files required by the controls you are currently using. Common JavaScript files (for example, `Core.js`) have to be registered only once. All JavaScript files are available in the distribution (`EXE`, `ZIP`, and `HOTFIX`) of the controls **Scripts** folder.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
        <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
        <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
        <asp:ScriptReference Path="~/Scripts/ListBox/RadListBoxScripts.js" />
		<asp:ScriptReference Path="~/Scripts/ListBox/Views/LiteView.js" />
		<asp:ScriptReference Path="~/Scripts/ListBox/Views/ClassicView.js" />
        <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
    </Scripts>
</telerik:RadScriptManager>
<telerik:RadListBox enableembeddedscripts="false" id="RadListBox1" runat="server"></telerik:RadListBox>
````

Note that the order of the JS files registered for most of Telerik controls is important since there are some dependencies between the JavaScript files of a single control. Therefore, it is recommended to follow the exact order of the script references from the table below.

To get the Ripple effect for the Material skin when you have disabled the embedded scripts, you need to add `<asp:ScriptReference Path="~/Scripts/Common/MaterialRippleScripts.js" />` after `<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />`. You also need to include the `Skins/Common/MaterialRipple.css` if you disable the embedded skins.

The following example demonstrates how to set the AjaxLoadingPanel.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
</scripts>
````

The following example demonstrates how to set the AjaxManager.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
</scripts>
````

The following example demonstrates how to set the AjaxPanel.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
</scripts>
````

The following example demonstrates how to set the AsyncUpload.

````ASP.NET
<Scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Upload/RadProgressManager.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Upload/RadUpload.js" />
    <asp:ScriptReference Path="~/Scripts/AsyncUpload/RadAsyncUploadScripts.js" />
    <asp:ScriptReference Path="~/Scripts/AsyncUpload/Views/LiteView.js" />
    <asp:ScriptReference Path="~/Scripts/AsyncUpload/Views/ClassicView.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Upload/RadProgressArea.js" />
</Scripts>
````

The following example demonstrates how to set the AutoCompleteBox.

````ASP.NET
<scripts>
   <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
   <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
   <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
   <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
   <asp:ScriptReference Path="~/Scripts/AutoCompleteBox/RadAutoCompleteBoxScripts.js" />
</scripts>
````

The following example demonstrates how to set the Barcode.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Barcode/RadBarcode.js " />
</scripts>
````

The following example demonstrates how to set the Button.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Button/RadButtonScripts.js" />
</scripts>
````

The following example demonstrates how to set the Calendar.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
</scripts>
````

The following example demonstrates how to set the Captcha.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Captcha/RadCaptcha.js" />
</scripts>
````

The following example demonstrates how to set the ClientExportManager.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryInclude.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/color.js" />
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/pdf.js" />
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/drawing.js" />
    <asp:ScriptReference Path="~/Scripts/ClientExportManager/RadClientExportManagerScripts.js" />
</scripts>
````

The following example demonstrates how to set the ColorPicker.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js"  />
	<asp:ScriptReference Path="~/Scripts/ColorPicker/RadColorPicker.js"  />
</scripts>
````

The following example demonstrates how to set the ComboBox.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ComboBox/RadComboBoxScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
</scripts>
````

The following example demonstrates how to set the ContextMenu. Note that as of the Q1 2014, the Menu scripts are modified. For more information, refer to the [Changes and Backward Compatibility of the Menu]({%slug menu/overview%}) article.

The `MobileMenuItem.js` is only needed when `RenderMode` is set to `"Auto"` or to `"Mobile"`.
The `RadMenuItem.js` is used when `RenderMode` is set to `"Auto"`, `"Classic"`, or `"Lightweight"`. It does work in cooperation with `ClassicView.js` if the current render mode is classic, and `LiteView.js` if the render mode is lightweight.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
    <!-- RadMenuItem script is used when RenderMode is set to Classic or Lightweight. It works in cooperation with ClassicView.js or LiteView.js/-->
    <asp:ScriptReference Path="~/Scripts/Menu/MenuItem/RadMenuItem.js" />
    <!-- MobileMenuItem script is required only when RenderMode is set to Mobile/-->
    <asp:ScriptReference Path="~/Scripts/Menu/MenuItem/MobileMenuItem.js" />
    <!-- ClassicView script is is used when RenderMode is set to Classic/-->
    <asp:ScriptReference Path="~/Scripts/Menu/Views/ClassicView.js" />
    <!-- LiteView script is is used when  RenderMode is set to Lightweight/-->
    <asp:ScriptReference Path="~/Scripts/Menu/Views/LiteView.js" />
</scripts>
````

The following example demonstrates how to set the CloudUpload.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/CloudUpload/RadCloudUploadScripts.js" />
</scripts>
````

The following example demonstrates how to set the DataPager.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/ListView/DataPager/RadDataPagerScripts.js" />
</scripts>
````

The following example demonstrates how to set the DateInput.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />             
	<asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />
</scripts>
````

The following example demonstrates how to set the DatePicker.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />                    
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />              
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadDatePicker.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadPickersPopupDirectionEnumeration.js" />
</scripts>
````

The following example demonstrates how to set the DateTimePicker.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />                    
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />              
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadDatePicker.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadDateTimePickerScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadTimeViewScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadPickersPopupDirectionEnumeration.js" />
</scripts>
````

The following example demonstrates how to set the Dock.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Dock/RadDockScripts.js" />
</scripts>
````

The following example demonstrates how to set the DropDownList.

````ASP.NET
<scripts>
   <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
   <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
   <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
   <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
   <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
   <asp:ScriptReference Path="~/Scripts/DropDownList/RadDropDownListScripts.js" />
</scripts>
````

The following example demonstrates how to set the DropDownTree.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
    <asp:ScriptReference Path="~/Scripts/DropDownTree/RadDropDownTreeScripts.js" />
    <asp:ScriptReference Path="~/Scripts/TreeView/RadTreeViewScripts.js" />
</scripts>
````

The following example demonstrates how to set the Editor.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/ShortCutManager/ShortCutManagerScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Polling.js" />
	<asp:ScriptReference Path="~/Scripts/Common/MaterialRipple/MaterialRippleScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/AnimationFramework/AnimationFramework.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Helpers/IETouchActionManager.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Editor/RadEditor.js" />
	<asp:ScriptReference Path="~/Scripts/Common/LayoutBuilder/LayoutBuilderEngine.js" />
	<asp:ScriptReference Path="~/Scripts/Spell/SpellCheckService.js" />
	<asp:ScriptReference Path="~/Scripts/Editor/Modules.js" />
	<asp:ScriptReference Path="~/Scripts/Dialogs/RadDialogOpenerScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Spell/RadSpell.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OData/OData.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/MenuItem/RadMenuItem.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/Views/LiteView.js" />
</scripts>
````

The following example demonstrates how to set the FileExplorer.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/FileExplorer/RadFileExplorer.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowManager.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OData/OData.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ToolBar/RadToolBarScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ToolTip/RadToolTipScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
	<asp:ScriptReference Path="~/Scripts/Splitter/RadSplitterScripts.js" />
	<asp:ScriptReference Path="~/Scripts/TreeView/RadTreeViewScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Grid/RadGridScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ListView/RadListViewScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ListView/RadListViewItemDragScript.js" />
</scripts>
````

The following example demonstrates how to set the Filter. Note that if you use the `datetime` or `numeric` filter fields, you will need to add the DatePicker or DateTimePicker and the NumericTextBox client scripts explicitly.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Filter/RadFilterScripts.js" />
</scripts>
````

The following example demonstrates how to set the FormDecorator.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/FormDecorator/RadFormDecorator.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
</scripts>
````

The following example demonstrates how to set the Gantt.

````ASP.NET
<Scripts>
	<asp:ScriptReference Path="~/Temp/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/core.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/dom.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/Data/html5/data.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/columnsorter.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/binder.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/validator.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/editable.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/calendar.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/popup.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/datepicker.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/timepicker.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/datetimepicker.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/userevents.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/touch.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/numerictextbox.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/draganddrop.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/resizable.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/window.js" />
	<!--Only needed when using resources-->
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/list.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/dropdownlist.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/filtermenu.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/grid.js" />
	<!--Only needed for pdf export-->
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/color.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/drawing.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/pdf.js" />

	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/gantt/timeline.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/gantt/list.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Common/HTML5UI/html5/gantt.js" />
	<asp:ScriptReference Path="~/Temp/Scripts/Gantt/RadGanttScripts.js" />
</Scripts>
````

The following example demonstrates how to set the Gauge.

````ASP.NET
<Scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/dataviz/core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/themes.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/gauge.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/svg.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/vml.js" />
	<asp:ScriptReference Path="~/Scripts/Gauge/Scripts/RadGaugeControl.js" />
</Scripts>
````

The following example demonstrates how to set the Grid. Note that if you use features like filtering, context menus, and so on that utilize other Telerik controls like ContextMenu, DatePicker, ComboBoxes, Input, and so on, you need to register their client scripts explicitly as well.

````ASP.NET
<asp:ScriptManager id="ScriptManager1" runat="server" EnableCdn="true">
    <Scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OData/OData.js" />
	<asp:ScriptReference Path="~/Scripts/Common/AnimationFramework/AnimationFramework.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/ComboBox/RadComboBoxScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ComboBox/Views/LiteView.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/MenuItem/RadMenuItem.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/Views/LiteView.js" />
	<asp:ScriptReference Path="~/Scripts/Grid/RadGridScripts.js" />
    </Scripts>
</asp:ScriptManager>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" EnableEmbeddedScripts="false" EnableHeaderContextMenu="true">
...
</telerik:RadGrid>
````

The following example demonstrates how to set the HtmlChart.

````ASP.NET
<Scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/Data/html5/data.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/userevents.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/color.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/popup.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/drawing.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/dataviz/core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/themes.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/chart.js" />
    <!--Only needed for a funnel chart type-->
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/chart/funnel.js" />
    <!--Only needed for a polar or radar chart type-->
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/chart/polar.js" />
    <!--Only needed for a sparkline layout -->
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/sparkline.js" />
    <!--Only needed for a stock layout -->
    <asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/stock.js" />
    <!--Only needed for a localized chart. Where kendo/js/cultures/ is the folder that stores the KendoUI JS culture files and the "fr-FR" string is the name of the desired culture -->
    <asp:ScriptReference Path="kendo/js/cultures/kendo.culture.fr-FR.min.js" />
    <asp:ScriptReference Path="~/Scripts/HtmlChart/RadHtmlChart.js" />
</Scripts>
````

The following example demonstrates how to set the InputManager.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Input/InputManager/RadInputManagerScript.js" />
</scripts>
````

The following example demonstrates how to set the ImageEditor.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/MouseScroll.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Widgets/MouseScroll.js" />
    <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
    <asp:ScriptReference Path="~/Scripts/ImageEditor/RadImageEditor.js" />
    <asp:ScriptReference Path="~/Scripts/Dock/RadDockScripts.js" />
    <asp:ScriptReference Path="~/Scripts/XmlHttpPanel/RadXmlHttpPanel.js" />
    <asp:ScriptReference Path="~/Scripts/FormDecorator/RadFormDecorator.js" />
    <asp:ScriptReference Path="~/Scripts/ToolBar/RadToolBarScripts.js" />
</scripts>
````

The following example demonstrates how to set the ListBox.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ListBox/RadListBoxScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ListBox/Views/LiteView.js" />
	<asp:ScriptReference Path="~/Scripts/ListBox/Views/ClassicView.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
</scripts>
````

The following example demonstrates how to set the ListView.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/ListView/RadListViewScripts.js" />
    <asp:ScriptReference Path="~/Scripts/ListView/RadListViewDragScript.js" />
</scripts>
````

The following example demonstrates how to set the MaskedTextBox.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/MaskedTextBox/RadMaskedInputScript.js" />
</scripts>
````

The following example demonstrates how to set the Menu. Note that as of the Q1 2014, the Menu scripts are modified. For more information, refer to the [Changes and Backward Compatibility of the Menu]({%slug menu/overview%}) article.

The `MobileMenuItem.js` is only needed when `RenderMode` is set to `"Auto"` or to `"Mobile"`.
The `RadMenuItem.js` is used when `RenderMode` is set to `"Auto"`, `"Classic"`, or `"Lightweight"`. It does work in cooperation with `ClassicView.js` if the current render mode is classic, and `LiteView.js` if the render mode is lightweight.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/AnimationFramework/AnimationFramework.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
    <!-- RadMenuItem script is used when RenderMode is set to Classic or Lightweight. It works in cooperation with ClassicView.js or LiteView.js/-->
    <asp:ScriptReference Path="~/Scripts/Menu/MenuItem/RadMenuItem.js" />
    <!-- MobileMenuItem script is required only when RenderMode is set to Mobile/-->
    <asp:ScriptReference Path="~/Scripts/Menu/MenuItem/MobileMenuItem.js" />
    <!-- ClassicView script is is used when RenderMode is set to Classic/-->
    <asp:ScriptReference Path="~/Scripts/Menu/Views/ClassicView.js" />
    <!-- LiteView script is is used when  RenderMode is set to Lightweight/-->
    <asp:ScriptReference Path="~/Scripts/Menu/Views/LiteView.js" />
</scripts>
````

The following example demonstrates how to set the MonthYearPicker.

````ASP.NET
<scripts>                  
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />              
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadMonthYearPickerScript.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadPickersPopupDirectionEnumeration.js" />
</scripts>
````

The following example demonstrates how to set the MultiPage.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/TabStrip/MultiPage/RadMultiPageScripts.js" />
</scripts>
````

The following example demonstrates how to set the Notification.

````ASP.NET
<Scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Notification/RadNotification.js" />
	<asp:ScriptReference Path="~/Scripts/XmlHttpPanel/RadXmlHttpPanel.js" />
	<!-- Only needed for the context menu -->
	<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OData/OData.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
	<!-- RadMenuItem script is used when RenderMode is set to Classic or Lightweight. It works in cooperation with ClassicView.js or LiteView.js/-->
	<asp:ScriptReference Path="~/Scripts/Menu/MenuItem/RadMenuItem.js" />
	<!-- MobileMenuItem script is required only when RenderMode is set to Mobile/-->
	<asp:ScriptReference Path="~/Scripts/Menu/MenuItem/MobileMenuItem.js" />
	<!-- ClassicView script is is used when RenderMode is set to Classic/-->
	<asp:ScriptReference Path="~/Scripts/Menu/Views/ClassicView.js" />
	<!-- LiteView script is is used when  RenderMode is set to Lightweight/-->
	<asp:ScriptReference Path="~/Scripts/Menu/Views/LiteView.js" />
</Scripts>
````

The following example demonstrates how to set the NumericTextBox.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/NumericTextBox/RadNumericInputScript.js" />
</scripts>
````

The following example demonstrates how to set the OrgChart.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/OrgChart/RadOrgChart.js" />
</scripts>
````

The following example demonstrates how to set the PanelBar.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/PanelBar/RadPanelBarScripts.js" />
</scripts>
````

The following example demonstrates how to set the PivotGrid. Note that if you use features like filtering, context menus, and so on, which utilize other Telerik controls like the ContextMenu, DatePicker, ComboBoxes, Input, and so on, you need to register their client scripts explicitly as well.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/PivotGrid/RadPivotGridScripts.js" />
    <asp:ScriptReference Path="~/Scripts/PivotGrid/PivotGridContextMenuScript.js" />
    <asp:ScriptReference Path="~/Scripts/PivotGrid/PivotGridDragDropScript.js" />
    <asp:ScriptReference Path="~/Scripts/PivotGrid/PivotGridDragDropBaseScript.js" />
    <asp:ScriptReference Path="~/Scripts/PivotGrid/ConfigurationPanel/PivotGridConfigurationPanelScript.js" />
    <asp:ScriptReference Path="~/Scripts/PivotGrid/ConfigurationPanel/PivotGridOlapExtensionScript.js" />
    <asp:ScriptReference Path="~/Scripts/PivotGrid/Fields/PivotGridFieldSettingsScript.js" />
</scripts>
````

The following example demonstrates how to set the Rating.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Rating/RadRating.js" />
</scripts>
````

The following example demonstrates how to set the RibbonBar.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/RibbonBar/RadRibbonBarScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
    <asp:ScriptReference Path="~/Scripts/TabStrip/RadTabStripScripts.js" />
</scripts>
````

The following example demonstrates how to set the Rotator.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Rotator/RadRotator.js" />
</scripts>
````

The following example demonstrates how to set the Scheduler. Note that to use the WebAPI which is introduced in the .NET 4.5, you have to include the `WebApiLoader.js`.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Menu/RadMenuScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Menu/ContextMenu/RadContextMenuScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />
    <asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />
    <asp:ScriptReference Path="~/Scripts/Input/NumericTextBox/RadNumericInputScript.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadTimeViewScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadPickersPopupDirectionEnumeration.js"/>
    <asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadDatePicker.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadDateTimePickerScript.js" />
    <asp:ScriptReference Path="~/Scripts/ComboBox/RadComboBoxScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Helpers/DateTime.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/RadSchedulerScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/RecurrenceEditor/RecurrenceEditor.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ContextMenu/Plugin.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Helpers/ResizeHelper.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Scheduling/AdvancedTemplate.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/BlockCollection.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/ClientRendering.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/HorizontalBlockCollection.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/RenderingManager.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/ResourceStyleMapping.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/ResourceStyleMappingCollection.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/RecurrenceRule/RecurrenceRule.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/RecurrenceEditor/RecurrenceEditor.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Week/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Week/GroupedByResource/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Week/GroupedByDate/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/MultiDay/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/MultiDay/GroupedByResource/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/MultiDay/GroupedByResource/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Day/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Day/GroupedByResource/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Month/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Month/GroupedByResource/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Month/GroupedByDate/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Timeline/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Timeline/GroupedByResource/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Scheduler/Views/Timeline/GroupedByDate/Model.js" />
    <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
    <%-- WebApiLoader script is required only for WebAPI scenario/--%>
    <%-- <asp:ScriptReference Path="~/Scripts/Scheduler/ClientRendering/WebApiLoader.js" />" /> --%>
</scripts>
````

The following example demonstrates how to set the SearchBox.

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
    <asp:ScriptReference Path="~/Scripts/SearchBox/RadSearchBoxScripts.js" />
</scripts>
````

The following example demonstrates how to set the SocialShare.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/SocialShare/RadSocialShare.js" />
	<!--Only needed for compact popup and send e-mail popup-->
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Captcha/RadCaptcha.js" />
</scripts>
````

The following example demonstrates how to set the SiteMap.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/SiteMap/RadSiteMap.js" />   
</scripts>
````

The following example demonstrates how to set the Slider.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Slider/RadSliderScripts.js" />
</scripts>
````

The following example demonstrates how to set the Spell. Note that to add the script of the Spell dialog to the dialog (which is a separate page), you need the extra step of setting the `DialogsScriptFile` file (`<telerik:RadSpell DialogsScriptFile = "~/CombinedSpellScripts.js" ../>`). To use this property, you need Telerik UI for ASP.NET AJAX version Q3 2008 SP2 or later, for example, 2008.3.1314.xx.

The script file in fact needs to be a combination of four of the following installation `js` files&mdash;`Core.js`, `SpellCheckService.js`, `SpellDialog.js`, `Dialogs/DialogControlInitializer.js`, `FormDecorator/RadFormDecorator.js`, `jQuery.js`, or `jQueryPlugins.js`.

````ASP.NET
<scripts>                  
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Spell/RadSpell.js" />
	<asp:ScriptReference Path="~/Scripts/Dialogs/RadDialogOpenerScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowScripts.js" />
</scripts>
````

The following example demonstrates how to set the Splitter.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Splitter/RadSplitterScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Splitter/RadSlidingZoneScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
</scripts>
````

The following example demonstrates how to set the TabStrip.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/TabStrip/RadTabStripScripts.js" />
</scripts>
````

The following example demonstrates how to set the TagCloud.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/TagCloud/RadTagCloud.js" />
</scripts>
````

The following example demonstrates how to set the TextBox.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />
</scripts>
````

The following example demonstrates how to set the Ticker.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Rotator/RadTicker.js" />
</scripts>
````

The following example demonstrates how to set the TileList.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/MouseScroll.js" />
	<asp:ScriptReference Path="~/Scripts/Tile/RadTileScripts.js" />
	<asp:ScriptReference Path="~/Scripts/TileList/RadTileListScripts.js" />
</scripts>
````

The following example demonstrates how to set the TimePicker.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />                    
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />              
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadDatePicker.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadDateTimePickerScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadTimeViewScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Calendar/RadPickersPopupDirectionEnumeration.js" />
</scripts>
````

The following example demonstrates how to set the ToolBar.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ToolBar/RadToolBarScripts.js" />
</scripts>
````

The following example demonstrates how to set the ToolTip. Note that `RadToolTipManager.js` is needed only when the ToolTipManager is used.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ToolTip/RadToolTipScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<!--Only needed for RadToolTipManager-->
	<asp:ScriptReference Path="~/Scripts/ToolTip/Scripts/RadToolTipManager.js" />
</scripts>
````

The following example demonstrates how to set the TreeList.

````ASP.NET
<scripts>
   <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
   <asp:ScriptReference Path="~/Scripts/TreeList/RadTreeListScripts.js" />
   <asp:ScriptReference Path="~/Scripts/TreeList/TreeListItemDragScript.js" />
</scripts>
````

The following example demonstrates how to set the TreeView.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/TreeView/RadTreeViewScripts.js" />
</scripts>
````

The following example demonstrates how to set the Upload.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Upload/RadProgressArea.js" />               
	<asp:ScriptReference Path="~/Scripts/Upload/RadProgressManager.js" />
	<asp:ScriptReference Path="~/Scripts/Upload/RadUpload.js" />
</scripts>
````

The following example demonstrates how to set the Window. Note that `RadWindowManager.js` is only needed when the WindowManager is used.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<!-- Only needed for RadWindowManager -->
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowManager.js" />
</scripts>
````

The following example demonstrates how to set the XmlHttpPanel.

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/XmlHttpPanel/RadXmlHttpPanel.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
</scripts>
````

## Disabling Embedded Skins

If the `Skin` property is not set explicitly either in the control definition or in the `Web.config` file of the application, the controls will use the Default skin by default.

If you need to disable the embedded skins or styles of a Telerik control, use the following properties:

* `EnableEmbeddedSkins`&mdash;Prevents the loading of the skin-specific styles of the control, which are required for the built-in skins. Set to `false` when using a custom skin.
* `EnableEmbeddedBaseStylesheet`&mdash;Prevents the registering of the base stylesheet of the control, which contains the main CSS styles. These styles include alignment, border widths, paddings, font icons, and so on, and are applied to the control instances regardless of their chosen skin name.

For more information, refer to the following articles:

* [How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%})

* [Creating custom skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/creating-a-custom-skin%})


## Disabling Embedded Scripts and Skins Globally

The enabling or disabling of scripts and skins is prioritized as follows:

* The settings applied at page level have top priority.
* The settings applied for a particular control in the `web.config` file are next in priority.
* The settings applied for all Telerik controls globally in the `web.config` file are last in priority.

Therefore, the individual disabling of scripts and skins for a specific control in the `web.config` will override the setting globally defined for all controls in the same file, while the page level disabling of scripts and skins will override all relevant definitions from the `web.config` file.

To disable the embedded scripts and skins for all Telerik controls in your project, add the following lines to the `web.config` file:

````ASP.NET
<appsettings>
	<!-- Disables the embedded scripts and skins for all Telerik controls -->
	<add key="Telerik.EnableEmbeddedSkins" value="false"/>
	<add key="Telerik.EnableEmbeddedBaseStylesheet" value="false"/>
	<add key="Telerik.EnableEmbeddedScripts" value="false"/>         
</appsettings>
````

To globally disable the embedded scripts and skins for a particular Telerik control, add the following lines to the `web.config` file. You need to replace the name of the Menu control with the control you need, for example, TreeView, Grid, Upload, and so on.

````ASP.NET
<appsettings>
	<!-- Disables the embedded scripts and skins for RadMenu instances -->
	<add key="Telerik.Menu.EnableEmbeddedSkins" value="false"/>
	<add key="Telerik.Menu.EnableEmbeddedBaseStylesheet" value="false"/>
	<add key="Telerik.Menu.EnableEmbeddedScripts" value="false"/>
</appsettings>
````

 
