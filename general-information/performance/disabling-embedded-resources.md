---
title: Disabling Embedded Resources
page_title: Disabling Embedded Resources | UI for ASP.NET AJAX Documentation
description: Disabling Embedded Resources
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources
tags: disabling,embedded,resources
published: True
position: 1
---

# Disabling Embedded Resources



By default, JavaScript files needed by the Telerik UI for ASP.NET AJAX controls are served as web resources (embedded in the **Telerik.Web.UI.dll** assembly).

In some cases, you may want to avoid using WebResources, and you have two options to do that:

* Use the CDN providers Telerik offers out of the box:

	* [Scripts CDN]({%slug scriptmanager/cdn-support/overview%})

	* [Stylesheets CDN]({%slug stylesheetmanager/cdn-support/overview%})

* Disable the embedded scripts for the controls and add the script files as static __*.js__ files to your application, as described below.

>tip It is faster and easier to [create a custom CDN provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}). Doing so will still load the scripts from static files to allow better caching, yet no custom script references must be added in the ScriptManager, nor the EnableEmbeddedScripts property needs to be disabled for each control.

This article contains the following sections:

* [Disabling Embedded Scripts](#disabling-embedded-scripts)

* [Disabling Embedded Skins](#disabling-embedded-skins)

* [Disable Embedded Scripts/Skins for the Entire Web Site/Web Application Project](#disable-embedded-scripts/skins-for-the-entire-web-site/web-application-project)

## Disabling Embedded Scripts

For custom deployment scenarios you can specify an alternative location for JavaScript files. To do so you should set the **EnableEmbeddedScripts** property to ***false***. Then, the JavaScript files will not be loaded from the assembly.

You will also need to add a script reference for each JavaScript file through the ScriptManager or [RadScriptManager]({%slug scriptmanager/overview%}).

A complete list of the JavaScript files used by Telerik UI for ASP.NET AJAX can be found below. You need to register only the JavaScript files required by the controls you are currently using. Common JavaScript files (e.g. Core.js) should be registered only once.


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

All JavaScript files are available in the distribution (EXE, ZIP and hotfix) of controls' "Scripts" folder.

>caution Note that the order of the js files registered for most of Telerik controls is important since there are some dependencies between the javascript files of a single control. Therefore it is recommended to follow the exact order of the script references from the table below.
>


* **RadAjaxLoadingPanel**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
</scripts>
````

* **RadAjaxManager** 

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
</scripts>
````

* **RadAjaxPanel**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
</scripts>
````

* **RadAsyncUpload**

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

* **RadAutoCompleteBox**

````ASP.NET
<scripts>
   <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
   <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
   <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
   <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
   <asp:ScriptReference Path="~/Scripts/AutoCompleteBox/RadAutoCompleteBoxScripts.js" />
</scripts>
````

* **RadBarcode**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Barcode/RadBarcode.js " />
</scripts>
````

* **RadButton**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Button/RadButtonScripts.js" />
</scripts>
````

* **RadCalendar**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />
	<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
</scripts>
````

* **RadCaptcha**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Captcha/RadCaptcha.js" />
</scripts>
````

* **RadClientExportManager**

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

* **RadColorPicker**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js"  />
	<asp:ScriptReference Path="~/Scripts/ColorPicker/RadColorPicker.js"  />
</scripts>
````

* **RadComboBox**

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

* **RadContextMenu**

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

>caution In **Q1 2014** we modifed the RadMenu scripts so please refer to our RadMenu [Changes and Backward Compatibility]({%slug menu/overview%}) help article for more information.

>note **MobileMenuItem.js** is only needed when **RenderMode** is set to **"Auto"** or to **"Mobile"** .
> **RadMenuItem.js** is used when **RenderMode** is set to **"Auto"** , **"Classic"** or **"Lightweight"** .It does work in cooperation with **ClassicView.js** if the current render mode is classic and **LiteView.js** if the render mode is lightweight.
>

* **RadCloudUpload**

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/CloudUpload/RadCloudUploadScripts.js" />
</scripts>
````

* **RadDataPager**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/ListView/DataPager/RadDataPagerScripts.js" />
</scripts>
````

* **RadDateInput**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />             
	<asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />
</scripts>
````

* **RadDatePicker**

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

* **RadDateTimePicker**

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

* **RadDock** 

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

* **RadDropDownList**

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

* **RadDropDownTree**

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

* **RadEditor**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Draggable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Widgets/Resizable.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Editor/RadEditor.js" />
	<asp:ScriptReference Path="~/Scripts/Common/LayoutBuilder/LayoutBuilderEngine.js" />
	<asp:ScriptReference Path="~/Scripts/Spell/SpellCheckService.js" />
	<asp:ScriptReference Path="~/Scripts/Editor/Modules.js" />
	<asp:ScriptReference Path="~/Scripts/Dialogs/RadDialogOpenerScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Window/RadWindowScripts.js" />
</scripts>
````

* **RadFileExplorer**

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

* **RadFilter**

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

*In case you use datetime or numeric filter fields, you will need to the RadDatePicker/RadDateTimePicker and RadNumericTextBox client scripts explicitly*


* **RadFormDecorator** 

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/FormDecorator/RadFormDecorator.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
</scripts>
````

* **RadGantt** 

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

* **RadGauge** 

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

* **RadGrid**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
	<asp:ScriptReference Path="~/Scripts/Grid/RadGridScripts.js" />
    <asp:ScriptReference Path="~/Scripts/Grid/GridCellSelection.js" />
	<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
  
</scripts>
````

>note If you use features like filtering, context menus, etc. that utilize other Telerik controls like RadContextMenu, RadDatePicker, RadComboBoxes, RadInput and so on, you need to register their client scripts explicitly as well.


* **RadHtmlChart**

````ASP.NET
<Scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/dataviz/core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/Data/html5/data.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/html5/userevents.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/themes.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/chart.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/svg.js" />
	<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/vml.js" />
	<asp:ScriptReference Path="~/Scripts/HtmlChart/RadHtmlChart.js" />
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
</Scripts>
````

* **RadInputManager**

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/Input/InputManager/RadInputManagerScript.js" />
</scripts>
````

* **RadImageEditor**

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

* **RadListBox**

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

* **RadListView**

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/ListView/RadListViewScripts.js" />
    <asp:ScriptReference Path="~/Scripts/ListView/RadListViewDragScript.js" />
</scripts>
````

* **RadMaskedTextBox**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/MaskedTextBox/RadMaskedInputScript.js" />
</scripts>
````

* **RadMenu**

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


>caution In **Q1 2014** we modified the RadMenu scripts so please refer to our RadMenu [Changes and Backward Compatibility]({%slug menu/overview%}) help article for more information.

>note **MobileMenuItem.js** is only needed when **RenderMode** is set to **"Auto"** or to **"Mobile"** .
> **RadMenuItem.js** is used when **RenderMode** is set to **"Auto"** , **"Classic"** or **"Lightweight"** .It does work in cooperation with **ClassicView.js** if the current render mode is classic and **LiteView.js** if the render mode is lightweight.
>

* **RadMonthYearPicker** 

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

* **RadMultiPage**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/TabStrip/MultiPage/RadMultiPageScripts.js" />
</scripts>
````

* **RadNotification**

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

* **RadNumericTextBox**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
	<asp:ScriptReference Path="~/Scripts/Input/NumericTextBox/RadNumericInputScript.js" />
</scripts>
````

* **RadOrgChart**

````ASP.NET
<scripts>
    <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
    <asp:ScriptReference Path="~/Scripts/OrgChart/RadOrgChart.js" />
</scripts>
````

* **RadPanelBar**

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

* **RadPivotGrid**

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

>note If you use features like filtering, context menus, etc. that utilize other Telerik controls like RadContextMenu, RadDatePicker, RadComboBoxes, RadInput and so on, you need to register their client scripts explicitly as well.

* **RadRating**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Rating/RadRating.js" />
</scripts>
````

* **RadRibbonBar**

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

* **RadRotator**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Rotator/RadRotator.js" />
</scripts>
````

* **RadScheduler**

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

>note Please note that in order to use the WebAPI which is introduced in the .NET 4.5 you have to include the **WebApiLoader.js**.
>

* **RadSearchBox**

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

* **RadSocialShare**

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

* **RadSiteMap**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/SiteMap/RadSiteMap.js" />   
</scripts>
````

* **RadSlider**

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

* **RadSpell**

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


>caution To add the spell dialog's script to the dialog (which is a separate page) you need one extra step - setting the **DialogsScriptFile** file. `<telerik:RadSpell DialogsScriptFile = "~/CombinedSpellScripts.js" ../>`  *To use this property you need at least Telerik UI for ASP.NET AJAX version Q3 2008 SP2, e.g. v. 2008.3.1314.xx*. 
>The script file in fact needs to be a combination of 4 installation js files.
>

1. Core.js
1. SpellCheckService.js
1. SpellDialog.js
1. Dialogs/DialogControlInitializer.js
1. FormDecorator/RadFormDecorator.js
1. jQuery.js
1. jQueryPlugins.js

* **RadSplitter**

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

* **RadTabStrip**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
    <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/TabStrip/RadTabStripScripts.js" />
</scripts>
````

* **RadTagCloud**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/TagCloud/RadTagCloud.js" />
</scripts>
````

* **RadTextBox**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />
</scripts>
````

* **RadTicker**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Rotator/RadTicker.js" />
</scripts>
````

* **RadTileList**

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

* **RadTimePicker**

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

* **RadToolBar**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	<asp:ScriptReference Path="~/Scripts/ToolBar/RadToolBarScripts.js" />
</scripts>
````

* **RadToolTip**

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



>note Note that RadToolTipManager.js is needed only when RadToolTipManager is used.
>


* **RadTreeList**

````ASP.NET
<scripts>
   <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
   <asp:ScriptReference Path="~/Scripts/TreeList/RadTreeListScripts.js" />
   <asp:ScriptReference Path="~/Scripts/TreeList/TreeListItemDragScript.js" />
</scripts>
````

* **RadTreeView**

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

* **RadUpload**

````ASP.NET
<scripts>
	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
	<asp:ScriptReference Path="~/Scripts/Upload/RadProgressArea.js" />               
	<asp:ScriptReference Path="~/Scripts/Upload/RadProgressManager.js" />
	<asp:ScriptReference Path="~/Scripts/Upload/RadUpload.js" />
</scripts>
````

* **RadWindow**

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


>note Note that RadWindowManager.js is only needed when RadWindowManager is used.
>

* **RadXmlHttpPanel**

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

If you, for some reason, need to disable the embedded skins of a Telerik control, you should set the **EnableEmbeddedSkins** and **EnableEmbeddedBaseStylesheet** properties to **false**. More information can be found at:

* [How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%})

* [Creating custom skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/creating-a-custom-skin%})



## Disable Embedded Scripts/Skins for the Entire Web Site/Web Application Project

* If you need to disable the embedded scripts and skins for **all Telerik controls** in your web site/web application project add these lines in the **web.config** file:

````ASP.NET
<appsettings>
	<!-- Disables the embedded scripts and skins for all Telerik controls -->
	<add key="Telerik.EnableEmbeddedSkins" value="false"/>
	<add key="Telerik.EnableEmbeddedBaseStylesheet" value="false"/>
	<add key="Telerik.EnableEmbeddedScripts" value="false"/>         
</appsettings>
````


* If you need to globally disable the embedded scripts/skins for a **particular Telerik control** add these lines in the **web.config** file:

````ASP.NET
<appsettings>
	<!-- Disables the embedded scripts and skins for RadMenu instances -->
	<add key="Telerik.Menu.EnableEmbeddedSkins" value="false"/>
	<add key="Telerik.Menu.EnableEmbeddedBaseStylesheet" value="false"/>
	<add key="Telerik.Menu.EnableEmbeddedScripts" value="false"/>
</appsettings>
````

Just change the **Menu** with the name of the control you want - TreeView, Grid, Upload, etc.


>note The scripts/skins enable/disable is prioritized as follows:
>
* The settings applied at page level have top priority.
* The settings applied for a particular control in the web.config file are next in priority.
* The settings applied for all Telerik controls globally in the web.config file are last in priority.
>
>Hence the individual scripts/skins disabling for a particular control in the web.config will override the setting defined for all controls globally in the same file, while the page level scripts/skins disabling will override all relevant definitions from the web.config file.
>

