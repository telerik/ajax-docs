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



By default, JavaScript files needed by the Telerik UI for ASP.NET AJAX controls are served as web resources (embedded in the __Telerik.Web.UI.dll__ assembly).

In some cases, you may want to avoid using WebResources, and you have two options to do that:

* Use the CDN providers Telerik offers out of the box:

* [Scripts CDN](3962E5BD-7414-41F5-82AA-8D144A9327AF)

* [Stylesheets CDN](D7505CD2-4BB7-42D9-86E4-522D48085ABD)

* Disable the embedded scripts for the controls and add the script files as static *.js files to your application, as described below.

>tip It is faster and easier to[create a custom CDN provider](6E103F0E-3FE5-4A43-A196-025E9F6AB0BB). Doing so will still loadthe scripts from static files to allow better caching, yet no custom script references must be added in the ScriptManager,nor the EnableEmbeddedScripts property needs to be disabled for each control.
>


This article contains the following sections:

* [Disabling Embedded Scripts](#disabling-embedded-scripts)

* [Disabling Embedded Skins](#disabling-embedded-skins)

* [Disable Embedded Scripts/Skins for the Entire Web Site/Web Application Project](#disable-embedded-scripts/skins-for-the-entire-web-site/web-application-project)

## Disabling Embedded Scripts

For custom deployment scenarios you can specify an alternative location for JavaScript files. To do so you should set the __EnableEmbeddedScripts__ property to *__false__*. Then, the JavaScript files will not be loaded from the assembly.

You will also need to add a script reference for each JavaScript file through the ScriptManager or [RadScriptManager](2EF524B5-D6BE-47BE-9960-01EF7B786F85).

A complete list of the JavaScript files used by Telerik UI for ASP.NET AJAX can be found below. You need to register only the JavaScript files required by the controls you are currently using. Common JavaScript files (e.g. Core.js) should be registered only once.



````ASPNET
	        <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	            <Scripts>
	                <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	                <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	                <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	                <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	                <asp:ScriptReference Path="~/Scripts/ListBox/RadListBoxScripts.js" />
	                <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	            </Scripts>
	        </telerik:RadScriptManager>
	        <telerik:RadListBox enableembeddedscripts="false" id="RadListBox1" runat="server"></telerik:RadListBox>
````



All JavaScript files are available in the distribution (EXE, ZIP and hotfix) of controls' "Scripts" folder.

>caution Note that the order of the js files registered for most of Telerik controls is important since there are some dependencies between the javascript files of a single control. Therefore it is recommended to follow the exact order of the script references from the table below.
>







>caption  

|  __Telerik control__  |  __Required Scripts__  |
| ------ | ------ |
| __RadAjaxLoadingPanel__ (jQuery added in Q3 2009)|

````ASPNET
	        <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
		</scripts>
````

|
| __RadAjaxManager__ |

````ASPNET
	        <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
		</scripts>
````

|
| __RadAjaxPanel__ |

````ASPNET
	        <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Ajax/Ajax.js" />
		</scripts>
````

|
| __RadAsyncUpload__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Upload/RadProgressManager.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/Upload/RadUpload.js" />
			<asp:ScriptReference Path="~/Scripts/AsyncUpload/RadAsyncUpload.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Upload/RadProgressArea.js" />
		</scripts>
````

|
| __RadAutoCompleteBox__ |

````ASPNET
	    <scripts>
	       <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	       <asp:ScriptReference Path="~/Scripts/AutoCompleteBox/RadAutoCompleteBoxScripts.js" />
	    </scripts>
````

|
| __RadBarcode__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Barcode/RadBarcode.js " />
		</scripts>
````

|
| __RadButton__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
			<asp:ScriptReference Path="~/Scripts/Button/RadButtonScripts.js" />
		</scripts>
````

|
| __RadCalendar__ (jQuery added in Q3 2009)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />
			<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />
		</scripts>
````

|
| __RadCaptcha__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Captcha/RadCaptcha.js" />
		</scripts>
````

|
| __RadColorPicker__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
			<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js"  />
			<asp:ScriptReference Path="~/Scripts/ColorPicker/RadColorPicker.js"  />
		</scripts>
````

|
| __RadComboBox__ (jQuery added in Q1 2009)|

````ASPNET
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

|
| __RadContextMenu__ (jQuery added in Q1 2009)|

````ASPNET
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



>caution In __Q1 2014__ we modifed the RadMenu scripts so please refer to our RadMenu[Changes and Backward Compatibility help article](C0880092-0E7C-4385-84A4-771D6FEE4ED5)for more information.
>Note __MobileMenuItem.js__ is only needed when __RenderMode__ is set to __"Auto"__ or to __"Mobile"__ .
> __RadMenuItem.js__ is used when __RenderMode__ is set to __"Auto"__ , __"Classic"__ or __"Lightweight"__ .It does work in cooperation with __ClassicView.js__ if the current render mode is classic and __LiteView.js__ if the render mode is lightweight.
>
|
| __RadCloudUpload__ |

````ASPNET
	    <scripts>
	        <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	        <asp:ScriptReference Path="~/Scripts/CloudUpload/RadCloudUploadScripts.js" />
	    </scripts>
````

|
| __RadDataPager__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/ListView/DataPager/RadDataPagerScripts.js" />
		</scripts>
````

|
| __RadDateInput__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />             
			<asp:ScriptReference Path="~/Scripts/Input/DateInput/RadDateInputScript.js" />
		</scripts>
````

|
| __RadDatePicker__ (jQuery added in Q3 2009)|

````ASPNET
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

|
| __RadDateTimePicker__ (jQuery added in Q3 2009)|

````ASPNET
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

|
| __RadDock__ (jQuery added in Q1 2009)|

````ASPNET
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

|
| __RadDropDownList__ |

````ASPNET
	    <scripts>
	       <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	       <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	       <asp:ScriptReference Path="~/Scripts/DropDownList/RadDropDownListScripts.js" />
	    </scripts>
````

|
| __RadDropDownTree__ |

````ASPNET
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

|
| __RadEditor__ |

````ASPNET
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

|
| __RadFileExplorer__ |

````ASPNET
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

|
| __RadFilter__ |

````ASPNET
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

*In case you use datetime or numeric filter fields, you will need to the RadDatePicker/RadDateTimePicker and RadNumericTextBox client scripts explicitly, too|
| __RadFormDecorator__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/FormDecorator/RadFormDecorator.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Popup/PopupScripts.js" />
		</scripts>
````

|
| __RadGauge__ |

````ASPNET
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

|
| __RadGrid__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js"  />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js"  />
			<asp:ScriptReference Path="~/Scripts/Grid/RadGridScripts.js" />
	        <asp:ScriptReference Path="~/Scripts/Grid/GridCellSelection.js" />
			<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	      
		</scripts>
````

*if you use features like filtering, context menus, etc. that utilize other Telerik controls likeRadContextMenu, RadDatePicker, RadComboBoxes, RadInput and so on, you need to register their client scripts explicitly as well|
| __RadHtmlChart__ |

````ASPNET
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
			<!--Only needed for a polar chart type-->
			<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/chart/polar.js" />
			<!--Only needed for a sparkline layout -->
			<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/sparkline.js" />
			<!--Only needed for a stock layout -->
			<asp:ScriptReference Path="~/Scripts/Common/HTML5UI/DataViz/html5/dataviz/stock.js" />
			<!--Only needed for a localized chart. Where kendo/js/cultures/ is the folder that stores the KendoUI JS culture files and the "fr-FR" string is the name of the desired culture -->
			<asp:ScriptReference Path="kendo/js/cultures/kendo.culture.fr-FR.min.js" />
		</Scripts>
````

|
| __RadInputManager__ (jQuery added in Q1 2009)|

````ASPNET
	    <scripts>
	        <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	        <asp:ScriptReference Path="~/Scripts/Input/InputManager/RadInputManagerScript.js" />
	    </scripts>
````

|
| __RadImageEditor__ |

````ASPNET
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

|
| __RadListBox__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
			<asp:ScriptReference Path="~/Scripts/ListBox/RadListBoxScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
		</scripts>
````

|
| __RadListView__ (jQuery added in Q1 2012)|

````ASPNET
	    <scripts>
	        <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	        <asp:ScriptReference Path="~/Scripts/ListView/RadListViewScripts.js" />
	        <asp:ScriptReference Path="~/Scripts/ListView/RadListViewDragScript.js" />
	    </scripts>
````

|
| __RadMaskedTextBox__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
			<asp:ScriptReference Path="~/Scripts/Input/MaskedTextBox/RadMaskedInputScript.js" />
		</scripts>
````

|
| __RadMenu__ (jQuery added in Q1 2009)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/Navigation/OverlayScript.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
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



>caution In __Q1 2014__ we modified the RadMenu scripts so please refer to our RadMenu[Changes and Backward Compatibility help article](C0880092-0E7C-4385-84A4-771D6FEE4ED5)for more information.
>Note __MobileMenuItem.js__ is only needed when __RenderMode__ is set to __"Auto"__ or to __"Mobile"__ .
> __RadMenuItem.js__ is used when __RenderMode__ is set to __"Auto"__ , __"Classic"__ or __"Lightweight"__ .It does work in cooperation with __ClassicView.js__ if the current render mode is classic and __LiteView.js__ if the render mode is lightweight.
>
|
| __RadMonthYearPicker__ (jQuery added in Q1 2011)|

````ASPNET
	    <scripts>                  
	    	<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarScript.js" />              
			<asp:ScriptReference Path="~/Scripts/Calendar/RadCalendarCommonScript.js" />
			<asp:ScriptReference Path="~/Scripts/Calendar/RadMonthYearPickerScript.js" />
	        <asp:ScriptReference Path="~/Scripts/Calendar/RadPickersPopupDirectionEnumeration.js" />
		</scripts>
````

|
| __RadMultiPage__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/TabStrip/MultiPage/RadMultiPageScripts.js" />
		</scripts>
````

|
| __RadNotification__ |

````ASPNET
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

|
| __RadNumericTextBox__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />               
			<asp:ScriptReference Path="~/Scripts/Input/NumericTextBox/RadNumericInputScript.js" />
		</scripts>
````

|
| __RadOrgChart__ |

````ASPNET
	    <scripts>
	        <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	        <asp:ScriptReference Path="~/Scripts/OrgChart/RadOrgChart.js" />
	    </scripts>
````

|
| __RadPanelBar__ (jQuery added in Q1 2009)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
			<asp:ScriptReference Path="~/Scripts/PanelBar/RadPanelBarScripts.js" />
		</scripts>
````

|
| __RadPivotGrid__ |

````ASPNET
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

*if you use features like filtering, context menus, etc. that utilize other Telerik controls likeRadContextMenu, RadDatePicker, RadComboBoxes, RadInput and so on, you need to register their client scripts explicitly as well|
| __RadRating__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/Rating/RadRating.js" />
		</scripts>
````

|
| __RadRibbonBar__ |

````ASPNET
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

|
| __RadRotator__ (jQuery added in Q1 2009)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Animation/AnimationScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Rotator/RadRotator.js" />
		</scripts>
````

|
| __RadScheduler__ (jQuery added in Q3 2008)|

````ASPNET
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



>note Please note that in order to use the WebAPI which is introduced in the .NET 4.5 you have to include the __WebApiLoader.js__ .
>
|
| __RadSearchBox__ |

````ASPNET
	    <scripts>
	        <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
	        <asp:ScriptReference Path="~/Scripts/SearchBox/RadSearchBoxScripts.js" />
	    </scripts>
````

|
| __RadSocialShare__ (jQuery added in Q3 2011)|

````ASPNET
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

|
| __RadSiteMap__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/SiteMap/RadSiteMap.js" />   
		</scripts>
````

|
| __RadSlider__ (jQuery added in Q1 2009)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Slider/RadSliderScripts.js" />
		</scripts>
````

|
| __RadSpell__ |

````ASPNET
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



>caution To add the spell dialog's script to the dialog (which is a separate page) you need one extra step - setting the __DialogsScriptFile__ file. __<telerik:RadSpell DialogsScriptFile = "~/CombinedSpellScripts.js" ../>__  *To use this property you need at least Telerik UI for ASP.NET AJAX version Q3 2008 SP2, e.g. v. 2008.3.1314.xx* 
>The script file in fact needs to be a combination of 4 installation js files
>
1.Core.js
1.SpellCheckService.js
1.SpellDialog.js
1.Dialogs/DialogControlInitializer.js
1.FormDecorator/RadFormDecorator.js
1.jQuery.js
1.jQueryPlugins.js>
|
| __RadSplitter__ (jQuery added in Q1 2009)|

````ASPNET
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

|
| __RadTabStrip__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	        <asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Scrolling/ScrollingScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
			<asp:ScriptReference Path="~/Scripts/TabStrip/RadTabStripScripts.js" />
		</scripts>
````

|
| __RadTagCloud__ (jQuery added in Q2 2010)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/TagCloud/RadTagCloud.js" />
		</scripts>
````

|
| __RadTextBox__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Input/TextBox/RadInputScript.js" />
		</scripts>
````

|
| __RadTicker__ (jQuery added in Q1 2009)|

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Rotator/RadTicker.js" />
		</scripts>
````

|
| __RadTileList__ |

````ASPNET
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

|
| __RadTimePicker__ (jQuery added in Q3 2009)|

````ASPNET
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

|
| __RadToolBar__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/Common/Navigation/NavigationScripts.js" />
			<asp:ScriptReference Path="~/Scripts/ToolBar/RadToolBarScripts.js" />
		</scripts>
````

|
| __RadToolTip__ (jQuery added in Q1 2009)|

````ASPNET
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
|
| __RadTreeList__ |

````ASPNET
	    <scripts>
	       <asp:ScriptReference Path="~/Scripts/Common/Core.js" />
	       <asp:ScriptReference Path="~/Scripts/TreeList/RadTreeListScripts.js" />
	       <asp:ScriptReference Path="~/Scripts/TreeList/TreeListItemDragScript.js" />
	    </scripts>
````

|
| __RadTreeView__ (jQuery added in Q3 2008)|

````ASPNET
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

|
| __RadUpload__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/PopUp/PopUpScripts.js" />
			<asp:ScriptReference Path="~/Scripts/Upload/RadProgressArea.js" />               
			<asp:ScriptReference Path="~/Scripts/Upload/RadProgressManager.js" />
			<asp:ScriptReference Path="~/Scripts/Upload/RadUpload.js" />
		</scripts>
````

|
| __RadWindow__ (jQuery added in Q1 2009)|

````ASPNET
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
|
| __RadXmlHttpPanel__ |

````ASPNET
	    <scripts>
			<asp:ScriptReference Path="~/Scripts/Common/Core.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQuery.js" />
			<asp:ScriptReference Path="~/Scripts/Common/jQueryPlugins.js" />
			<asp:ScriptReference Path="~/Scripts/XmlHttpPanel/RadXmlHttpPanel.js" />
			<asp:ScriptReference Path="~/Scripts/Common/TouchScrollExtender.js" />
		</scripts>
````

|

## Disabling Embedded Skins

If you, for some reason, need to disable the embedded skins of a Telerik control, you should set the __EnableEmbeddedSkins__ and __EnableEmbeddedBaseStylesheet__ properties to *__false__*. More information can be found at:

[How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%})

[Creating custom skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/creating-a-custom-skin%})



## Disable Embedded Scripts/Skins for the Entire Web Site/Web Application Project



* If you need to disable the embedded scripts and skins for __all Telerik controls__ in your web site/web application project add these lines in the __web.config__ file:

````ASPNET
	    <appsettings>
			<!-- Disables the embedded scripts and skins for all Telerik controls -->
			<add key="Telerik.EnableEmbeddedSkins" value="false"/>
			<add key="Telerik.EnableEmbeddedBaseStylesheet" value="false"/>
			<add key="Telerik.EnableEmbeddedScripts" value="false"/>         
		</appsettings>
````





* If you need to globally disable the embedded scripts/skins for a __particular Telerik control__ add these lines in the __web.config__ file:

````ASPNET
	    <appsettings>
			<!-- Disables the embedded scripts and skins for RadMenu instances -->
			<add key="Telerik.Menu.EnableEmbeddedSkins" value="false"/>
			<add key="Telerik.Menu.EnableEmbeddedBaseStylesheet" value="false"/>
			<add key="Telerik.Menu.EnableEmbeddedScripts" value="false"/>
		</appsettings>
````



Just change the __Menu__ with the name of the control you want - TreeView, Grid, Upload, etc.



>note The scripts/skins enable/disable is prioritized as follows:
>
* The settings applied at page level have top priority
* The settings applied for a particular control in the web.config file are next in priority
* The settings applied for all Telerik controls globally in the web.config file are last in priority>Hence the individual scripts/skins disabling for a particular control in the web.config will override the setting defined for all controls globally in the same file, while the page level scripts/skins disabling will override all relevant definitions from the web.config file.
>



