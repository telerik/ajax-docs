---
title: Responsive, Adaptive and Elastic Capabilities
page_title: Responsive, Adaptive and Elastic Capabilities | UI for ASP.NET AJAX Documentation
description: Responsive, Adaptive and Elastic Capabilities
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities
tags: responsive,,adaptive,and,elastic,capabilities
published: True
position: 1
---

# Responsive, Adaptive and Elastic Capabilities

To fit into a responsive page design, the controls from the UI for ASP.NET AJAX suite offer a set of features that let you integrate them into the page's design by making use of their responsive, adaptive, elastic and fluid capabilities. A list is available in **Table 1**.

A control can hardly be considered responsive by itself, because this heavily depends on the layout and design of the page it is placed on. Nevertheless, here follow the guidelines we use to define a control as responsive, elastic, adaptive or fluid:

* **Fluid** — a fluid control can take up 100% of the width of its parent and resize with it in real-time (as opposed to stretching initially and not responding to a container size change).

* **Responsive** — the control will have the same HTML rendering in all resolutions, but CSS rules or JavaScript logic may reorder, resize or even hide certain elements from its UI to make it more suitable for the current dimensions.

* **Elastic** — this means that a font-size change will resize the control elements accordingly. This is usually achieved by using `em` units for font-size and padding settings. **Example 1** at the end of this article shows the selectors for all controls that support elastic design. You can read more about each specific control in the articles linked in **Table 1**.

* **Adaptive** — an adaptive control can change its HTML rendering and layout according to the device it is displayed on. Usually, at least one mode is optimized for mobile devices.


>caption Table 1: A list with the responsive capabilities the controls from the UI for ASP.NET AJAX suite offer.

| Control | Elastic | Fluid | Responsive | Adaptive |
| ------ | ------ | ------ | ------ | ------ |
|Ajax|N/A|N/A|N/A|N/A|
|AutoCompleteBox|Yes|Yes|N/A|N/A|
|Barcode|N/A|N/A|N/A|N/A|
|BinaryImage|N/A|N/A|N/A|N/A|
|Button|[Yes]({%slug button/mobile-support/elastic-design%})|[Yes]({%slug button/mobile-support/fluid-design%})|No|No|
|Calendar|[Yes]({%slug calendar/mobile-support/fluid-and-elastic-capabilities%})|[Yes]({%slug calendar/mobile-support/fluid-and-elastic-capabilities%})|No|No|
|Captcha|N/A|No|N/A|N/A|
|Chart (HTML5)|N/A|N/A (but [possible](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/responsive-chart/defaultcs.aspx))|N/A (but [possible](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/responsive-chart/defaultcs.aspx))|N/A|
|Chart|N/A|N/A|N/A|N/A|
|ColorPicker|[Yes]({%slug colorpicker/mobile-support/elastic-design%})|No|No|No|
|ComboBox|Yes|Yes|N/A|N/A|
|DataForm|[Yes]({%slug dataform/mobile-support/fluid-and-elastic-capabilities%})|[Yes]({%slug dataform/mobile-support/fluid-and-elastic-capabilities%})|No|No|
|DataPager|Yes|Yes|Yes|Yes|
|Diagram|N/A|N/A|N/A|N/A|
|Dock|[Yes]({%slug dock/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|N/A|[Yes]({%slug dock/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|N/A|
|DropDownList|Yes|Yes|N/A|N/A|
|DropDownTree|Yes|Yes|N/A|N/A|
|Editor|[Yes]({%slug editor/mobile-support/elastic-design%})|[Yes]({%slug editor/mobile-support/fluid-design%})|Yes|[Yes]({%slug editor/mobile-support/phone-layout/overview%})|
|FileExplorer|[Limited]({%slug fileexplorer/mobile-support/elastic-design%})|Yes|No|No|
|Filter|Yes|No|No|No|
|FormDecorator|[Yes]({%slug formdecorator/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|[Yes]({%slug formdecorator/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|[Yes]({%slug formdecorator/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|N/A|
|Gantt|Yes|Yes|No|No|
|Gauge|N/A|N/A|N/A|N/A|
|Grid|No|Yes|No|[Yes]({%slug grid/mobile-support/mobile-rendering/overview%})|
|ImageEditor|[Limited]({%slug  imageeditor/mobile-support/elastic-design%})|Yes|No|No|
|ImageGallery|Yes|Yes|Yes|Yes|
|Input|Yes|No|N/A|No|
|LightBox|Yes|Yes|No|Yes|
|ListBox|Yes|Yes|N/A|N/A|
|ListView|No|Yes|No|No|
|Map|[Yes]({%slug map/mobile-support/elastic-design%})|[Yes]({%slug map/mobile-support/fluid-design%})|N/A|N/A|
|MediaPlayer|Yes|Yes|No|Yes|
|Menu|Yes|Yes|Yes (custom CSS)|[Yes]({%slug menu/mobile-support/responsive-adaptive-and-elastic-capabilities%})|
|Notification|[Yes]({%slug notification/mobile-support/responsive-adaptive-and-elastic-capabilities%})|[Yes]({%slug notification/mobile-support/responsive-adaptive-and-elastic-capabilities%})|[Yes]({%slug notification/mobile-support/responsive-adaptive-and-elastic-capabilities%})|N/A|
|ODataDataSource|N/A|N/A|N/A|N/A|
|OrgChart|Yes|N/A|N/A|N/A|
|PanelBar|Yes|Yes|N/A|N/A|
|Persistence Framework|N/A|N/A|N/A|N/A|
|PivotGrid|[Yes]({%slug pivotgrid/mobile-support/fluid-and-elastic-capabilities%})|[Yes]({%slug pivotgrid/mobile-support/fluid-and-elastic-capabilities%})|No|No|
|Progress Area|No|No|No|No|
|Progress Bar|[Yes]({%slug progressbar/mobile-support/elastic-design%})|[Yes]({%slug progressbar/mobile-support/fluid-design%})|[Yes]({%slug progressbar/mobile-support/elastic-design%})|No|
|Rating|[Yes]({%slug rating/mobile-support/elastic-design%})|No|No|N/A|
|RibbonBar|No|Yes|No|No|
|Rotator|[Yes]({%slug rating/mobile-support/elastic-design%})|Yes|[Yes]({%slug rotator/mobile-support/overview%})|N/A|
|Scheduler|No|Yes|N/A|[Yes]({%slug scheduler/mobile-support/responsive-adaptive-and-elastic-capabilities%})|
|SearchBox|Yes|No|N/A|N/A|
|SiteMap|Yes|Yes|N/A|N/A|
|Slider|[Yes]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|[Yes]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|[Yes]({%slug slider/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|N/A|
|SocialShare|[Yes]({%slug socialshare/mobile-support/elastic-design%})|[Yes]({%slug socialshare/mobile-support/fluid-design%})|No|No|
|Spell|No|No|No|No|
|Splitter|[Limited]({%slug splitter/mobile-support/elastic-design%})|[Yes]({%slug splitter/layout/filling-the-entire-page%})|[Yes]({%slug splitter/layout/filling-the-entire-page%})|N/A|
|StandardButton|[Yes]({%slug standardbutton/mobile-support/elastic-design%})|[Yes]({%slug standardbutton/mobile-support/fluid-design%})|No|No|
|TabStrip|No|No|N/A|N/A|
|TagCloud|[Yes]({%slug tagcloud/mobile-support/resposnive,-adaptive-and-elastic-capabilities%})|N/A|[Yes]({%slug tagcloud/mobile-support/resposnive,-adaptive-and-elastic-capabilities%})|N/A|
|Ticker|[Yes]({%slug rotator/mobile-support/radticker-elastic-capabilities%})|Yes|No|N/A|
|Tile|[Yes]({%slug tilelist/tiles/mobile-support/elastic-design%})|[Yes]({%slug tilelist/tiles/mobile-support/fluid-design%})|N/A|N/A|
|TileList|[Yes]({%slug tilelist/mobile-support/elastic-capabilities%})|[Yes]({%slug tilelist/mobile-support/responsive-capabilities%})|[Yes]({%slug tilelist/mobile-support/responsive-capabilities%})|[Yes]({%slug tilelist/mobile-support/responsive-capabilities%})|
|ToolBar|No|Yes|No|N/A|
|ToolTip|[Yes]({%slug tooltip/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|N/A|[Yes]({%slug tooltip/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|N/A|
|TreeMap|Yes|Yes|No|No|
|TreeList|Yes|Yes|No|No|
|TreeView|Yes|No|N/A|N/A|
|Upload (Async)|Yes|Yes|No|No|
|Upload (Cloud)|No|Yes|No|No|
|Window|[Yes]({%slug window/mobile-support/responsive,-adaptive-and-elastic-capabilities%})|No|No|N/A|
|Wizard|Yes|Yes|No|[Yes]({%slug wizard/mobile-support/mobile-rendering%})|
|XmlHttpPanel|N/A|N/A|N/A|N/A|
|ZipLibrary|N/A|N/A|N/A|N/A|

## CSS Selectors for Elastic Design

**Example 1** provides the CSS selectors that let you resize the supported controls' UI elements via a font-size change. You can find detailed explanations on how this feature is supported in each control in **Table 1** above. **Example 2** shows the selectors used for *RadFormDecorator*. For more information, see the [Elastic capabilities in RadFormDecorator]({%slug formdecorator/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) help article.

**Example 1:** CSS selectors to make avail of the elastic design capabilities of the controls in the UI for ASP.NET AJAX suite

````CSS
/* AutoCompleteBox */ html .RadAutoCompleteBox, html .RadAutoCompleteBoxPopup,
/* Button */ html .RadButton,
/* Calendar */ html .RadCalendar,
/* ComboBox */ html .RadComboBox, html .RadComboBoxDropDown,
/* DataForm */ html .RadDataForm,
/* DataPager */ html .RadDataPager,
/* Dock */ html .RadDock,
/* DropDownList */ html .RadDropDownList, html .rddlPopup,
/* DropDownTree */ html .RadDropDownTree, html .rddtPopup,
/* Editor */ 	div.RadEditor,
				div.RadEditor .reToolbarWrapper,
				div.RadEditor .reToolBar
				 div.reDropDownBody
/* Filter */ html .RadFilter, html .RadMenu,
/* Gantt */ html .RadGantt,
/* ImageGallery */ html .RadImageGallery,
/* Input */ html .RadInput,
/* LightBox */ html .RadLightBox,
/* ListBox */ html .RadListBox,
/* Map */ html .RadMap,
/* MediaPlayer */ html .RadMediaPlayer,
/* Menu */ html .RadMenu,
/* Notification */ html .RadNotification,
/* PanelBar */ html .RadPanelBar,
/* PivotGrid */ html .RadPivotGrid,
				html .PivotGridWindow,
/* ProgressBar */ html .RadProgressBar,
/* Rating */ html .RadRating,
/* Rotator */ html .RadRotator,
/* SearchBox */ html .RadSearchBox, html .rsbPopup,
/* SiteMap */ html .RadSiteMap,
/* Slider */ html .RadSlider,
/* SocialShare */ html .RadSocialShare,
/* TagCloud */ .RadTagCloud,
/* Ticker */ body, /* or any other selector that will affect the ticker */
/* ToolTip */ html .RadToolTip,  
/* TreeMap */ html .RadTreeMap,
/* TreeList */ html .RadTreeList,
/* TreeView */ html .RadTreeView,
/* Window */ html .RadWindow {
	font-size: 24px;
}
````



**Example 2:** CSS selectors to make avail of elastic design capabilities for elements decorated by RadFormDecorator

````CSS
/* FormDecorator */
html.RadForm .rfdSkinnedButton,
html.RadForm .rfdTextInput,
html.RadForm.rfdLabel label,
html.RadForm.rfdLabel .rfdAspLabel,
html.RadForm.rfdTextbox input,
html.RadForm.rfdTextarea textarea,
html.RadForm.rfdFieldset fieldset,
html.RadForm.rfdFieldset legend,
html.RadForm .rfdSelect,
html.RadForm.rfdHeading h4,
html.RadForm.rfdHeading h5,
html.RadForm.rfdHeading h6,
html.RadForm .riTextBox,
html.RadForm .rfdValidationSummaryControl,
html.RadForm .rfdLoginControl {
	font-size: 24px;
}

/* Headings */
html.RadForm.rfdHeading h4 {
	font-size: 40px;
}
html.RadForm.rfdHeading h5 {
	font-size: 35px;
}
html.RadForm.rfdHeading h6 {
	font-size: 30px;
}

/* ListBox Styles */
html.rfdSelectBox {
	font-size: 24px;
}

/* drop down arrow positions should be tweaked */
html.RadForm .rfdDropDownArrow
{
	right: 10px;
	top: 10px;
}

/* checkboxes and radio buttons' positions should be tweaked */
html.RadForm .rfdCheckboxChecked .rfdToggleImage,
html.RadForm .rfdCheckboxUnchecked .rfdToggleImage,
html.RadForm .rfdRadioChecked .rfdToggleImage,
html.RadForm .rfdRadioUnchecked .rfdToggleImage
{
	top: 10px;
}
````


   
