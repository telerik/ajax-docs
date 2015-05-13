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



## 

To fit into a responsive page design, the controls from the UI for ASP.NET AJAX suite offer a set of features that let you integrate them into the page's design by making use of their responsive, adaptive, elastic and fluid capabilities. A list is available in **Table 1**.

A control can hardly be considered responsive by itself, because this heavily depends on the layout and design of the page it is placed on. Nevertheless, here follow the guidelines we use to define a control as responsive, elastic, adaptive or fluid:

* **Fluid** — a fluid control can take up 100% of the width of its parent and resize with it in real-time (as opposed to stretching initially and not responding to a container size change).

* **Responsive** — the control will have the same HTML rendering in all resolutions, but CSS rules or JavaScript logic may reorder, resize or even hide certain elements from its UI to make it more suitable for the current dimensions.

* **Elastic** — this means that a font-size change will resize the control elements accordingly. This is usually achieved by using `em` units for font-size and padding settings. **Example 1** at the end of this article shows theselectors for all controls that support elastic design. You can read more about each specific control in the articles linked in **Table 1**.

* **Adaptive** — an adaptive control can change its HTML rendering and layout according to the device it is displayed on. Usually, at least one mode is optimized for mobile devices.


>caption Table 1: A list with the responsive capabilities the controls from the UI for ASP.NET AJAX suite offer.

| Control | Elastic | Fluid | Responsive | Adaptive |
| ------ | ------ | ------ | ------ | ------ |
|Ajax|N/A|N/A|N/A|N/A|
|AutoCompleteBox|Yes|Yes|N/A|N/A|
|Barcode|N/A|N/A|N/A|N/A|
|BinaryImage|N/A|N/A|N/A|N/A|
|Button|[Yes](e9fba78e-979a-4fa8-98b6-4bd132930fa5)|[Yes](57a23d1d-1979-433d-98b3-65ea88e2d779)|No|No|
|Calendar|[Yes](e13c89ac-23c8-464c-a341-ff3b2e8ff4b3)|[Yes](e13c89ac-23c8-464c-a341-ff3b2e8ff4b3)|No|No|
|Captcha|N/A|No|N/A|N/A|
|Chart (HTML5)|N/A|N/A|N/A|N/A|
|Chart|N/A|N/A|N/A|N/A|
|ColorPicker|No|No|No|No|
|ComboBox|Yes|Yes|N/A|N/A|
|DataForm|[Yes](779f3d49-fc19-4f61-a78e-ede79536d0e4)|[Yes](779f3d49-fc19-4f61-a78e-ede79536d0e4)|No|No|
|DataPager|Yes|Yes|No|No|
|Diagram|N/A|N/A|N/A|N/A|
|Dock|[Yes](1387326d-37ed-4caf-a95c-9292fa7209a3)|N/A|[Yes](1387326d-37ed-4caf-a95c-9292fa7209a3)|N/A|
|DropDownList|Yes|Yes|N/A|N/A|
|DropDownTree|Yes|Yes|N/A|N/A|
|Editor|[Yes](bf71f9b1-d496-40c4-ad41-864b416ef7e8)|[Yes](1c030b92-c2e7-47e4-a582-0d4fc51c0a14)|Yes|N/A|
|FileExplorer|No|Yes|No|No|
|Filter|Yes|No|No|No|
|FormDecorator|[Yes](e139b982-5e30-48fb-9b98-845d8b74d8ed)|[Yes](e139b982-5e30-48fb-9b98-845d8b74d8ed)|[Yes](e139b982-5e30-48fb-9b98-845d8b74d8ed)|N/A|
|Gantt|Yes|Yes|No|No|
|Gauge|N/A|N/A|N/A|N/A|
|Grid|No|Yes|No|[Yes](acbdbc51-e93d-43f2-aa4a-a83f0f352d87)|
|ImageEditor|No|Yes|No|No|
|ImageGallery|Yes|Yes|No|No|
|Input|Yes|No|N/A|No|
|LightBox|Yes|Yes|No|Yes|
|ListBox|Yes|Yes|N/A|N/A|
|ListView|No|Yes|No|No|
|Map|[Yes](368517a0-1ce6-49fb-9ed9-3afacc71c22a)|[Yes](ec1d2455-abfd-4f69-8f85-3af35b31bfe6)|N/A|N/A|
|MediaPlayer|Yes|Yes|No|Yes|
|Menu|Yes|Yes|Yes (custom CSS)|[Yes](591051a9-c177-47c5-b2c9-4e8a471f0db9)|
|Notification|[Yes](b45cea87-66a2-4fb1-b492-71df7f8b518b)|[Yes](b45cea87-66a2-4fb1-b492-71df7f8b518b)|[Yes](b45cea87-66a2-4fb1-b492-71df7f8b518b)|N/A|
|ODataDataSource|N/A|N/A|N/A|N/A|
|OrgChart|Yes|N/A|N/A|N/A|
|PanelBar|Yes|Yes|N/A|N/A|
|Persistence Framework|N/A|N/A|N/A|N/A|
|PivotGrid|No|Yes|No|No|
|Progress Area|No|No|No|No|
|Progress Bar|[Yes](946ea5b3-1dde-46cf-8ac0-b0bca89c610b)|[Yes](3abb1a0b-2d0a-4059-bf3f-d7e8adce0361)|[Yes](946ea5b3-1dde-46cf-8ac0-b0bca89c610b)|No|
|Rating|[Yes](a7117338-eda6-4cb0-ba1c-05c4d198fd2a)|No|No|N/A|
|RibbonBar|No|Yes|No|No|
|Rotator|[Yes](d907be3b-0919-4b86-b392-7b0655b0079c)|Yes|[Yes](713eab72-d339-4628-a739-4683e61fee43)|N/A|
|Scheduler|No|Yes|N/A|[Yes](fd67cde8-8012-4ebd-9721-4118c96fa630)|
|SearchBox|Yes|No|N/A|N/A|
|SiteMap|Yes|Yes|N/A|N/A|
|Slider|[Yes](98c84cea-d186-45f4-9032-3e5c2dad3b1a)|[Yes](98c84cea-d186-45f4-9032-3e5c2dad3b1a)|[Yes](98c84cea-d186-45f4-9032-3e5c2dad3b1a)|N/A|
|SocialShare|[Yes](d0068381-ea19-403d-b48f-4cc0be6988a9)|No|No|No|
|Spell|No|No|No|No|
|Splitter|No|[Yes](4FFE3F4C-6556-4AFF-BC61-FD751FEED2DD)|[Yes](4FFE3F4C-6556-4AFF-BC61-FD751FEED2DD)|N/A|
|TabStrip|No|No|N/A|N/A|
|TagCloud|[Yes](33c530f6-74f5-45cc-a4d9-aaa03a7595de)|N/A|[Yes](33c530f6-74f5-45cc-a4d9-aaa03a7595de)|N/A|
|Ticker|[Yes](184357e3-deab-4cb6-bf35-3bcb64d23cbf)|Yes|No|N/A|
|TileList|No|[Yes](0ad2507b-9867-4768-9163-183977aaa729)|[Yes](0ad2507b-9867-4768-9163-183977aaa729)|[Yes](0ad2507b-9867-4768-9163-183977aaa729)|
|ToolBar|No|Yes|No|N/A|
|ToolTip|[Yes](d0fcb1fb-a71a-4eb2-bcc8-311c1f005781)|N/A|[Yes](d0fcb1fb-a71a-4eb2-bcc8-311c1f005781)|N/A|
|TreeMap|Yes|Yes|No|No|
|TreeList|Yes|Yes|No|No|
|TreeView|Yes|No|N/A|N/A|
|Upload (Async)|Yes|Yes|No|No|
|Upload (Cloud)|No|Yes|No|No|
|Window|[Yes](341cc67a-0a6c-4a0a-b093-83b372b107e0)|No|No|N/A|
|Wizard|Yes|Yes|No|[Yes](537eff50-2662-4a49-95fc-aeca9a3e8e0a)|
|XmlHttpPanel|N/A|N/A|N/A|N/A|
|ZipLibrary|N/A|N/A|N/A|N/A|

## CSS Selectors for Elastic Design

**Example 1** provides the CSS selectors that let you resize the supported controls' UI elements via a font-size change. You can find detailed explanations on how this feature is supported in each control in **Table 1** above. **Example 2** shows the selectors used for *RadFormDecorator*. For more information, see the [Elastic capabilities in RadFormDecorator](e139b982-5e30-48fb-9b98-845d8b74d8ed) help article.

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

````JavaScript
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


   