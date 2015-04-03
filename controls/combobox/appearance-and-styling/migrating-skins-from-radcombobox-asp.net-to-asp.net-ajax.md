---
title: Migrating Skins from RadComboBox ASP.NET to ASP.NET AJAX
page_title: Migrating Skins from RadComboBox ASP.NET to ASP.NET AJAX | UI for ASP.NET AJAX Documentation
description: Migrating Skins from RadComboBox ASP.NET to ASP.NET AJAX
slug: combobox/appearance-and-styling/migrating-skins-from-radcombobox-asp.net-to-asp.net-ajax
tags: migrating,skins,from,radcombobox,asp.net,to,asp.net,ajax
published: True
position: 0
---

# Migrating Skins from RadComboBox ASP.NET to ASP.NET AJAX



## 

RadComboBox for ASP.NET AJAX offers improved HTML code that allows easier styling and much more flexible skinning than the RadComboBox "Classic". The differences between the rendering of the two versions of the control can be observed in the following table (only css-related attributes are listed):


>caption  

| Affected part of RadComboBox | RadComboBox "Classic" | RadComboBox for ASP.NET AJAX |
| ------ | ------ | ------ |
|Input box & arrow|

````ASPNET
	    <div class="ComboBox_{SkinName}">
	    <input
	    type="text"
	    class="ComboBoxInput_{SkinName}" />
	    <img class="ComboBoxImage_{SkinName}" />
````

|

````ASPNET
	    <div class="RadComboBox RadComboBox_{SkinName}">
	    <table><tbody><tr>
	        <td class="rcbInputCell rcbInputCellLeft">
	            <input
	            type="text"
	            class="rcbInput" />
	        </td>
	        <td class="rcbArrowCell rcbArrowCellRight">
	            <a>select</a>
	        </td>
	        </tr></tbody></table>
	    </div>
````

|
|Drop-down|

````ASPNET
	    <div class="ComboBoxDropDown_{SkinName}">
	    <div class="ComboBoxHeader_{SkinName}">Header</div>
	    <div>
	        <div class="ComboBoxItem_{SkinName}">A</div>
	        <div class="ComboBoxItem_{SkinName}">B</div>
	        <div class="ComboBoxItem_{SkinName}">C</div>
	        <div class="ComboBoxItemDisabled_{SkinName}">D</div>
	    </div>
	    <div class="ComboBoxMoreResultsBox_{SkinName}">
	        <img class="ComboBoxMoreResultsImage_{SkinName}" />
	        <div class="ComboBoxMoreResultsMessage_{SkinName}">
	        </div>
	    </div>
	    </div>
````

|

````ASPNET
	    <div class="RadComboBoxDropDown_{SkinName}">
	    <div class="rcbHeader">Header</div>
	    <div class="rcbScroll">
	        <ul class="rcbList">
	            <li class="rcbItem">A</li>
	            <li class="rcbItem">B</li>
	            <li class="rcbItem">C</li>
	            <li class="rcbDisabled">D</li>
	        </ul>
	    </div>
	    <div class="rcbMoreResults">
	        <a></a>
	    </div>
	</div>
````

|

Below is a table that shows the RadComboBox "Classic" class names and their equivalents in the RadComboBox for ASP.NET AJAX.


>caption  

| RadComboBox "Classic" | RadComboBox for ASP.NET AJAX |
| ------ | ------ |
|.ComboBox_{SkinName}|.RadComboBox_{SkinName}|
|.ComboBoxInput_{SkinName}|.rcbInputCell-or-.rcbInput|
|.ComboBoxInputHover_{SkinName}|.rcbHovered .rcbInputCell-or-.rcbHovered .rcbInput|
|.ComboBoxImage_{SkinName}|.rcbArrowCell-or-.rcbArrowCell a|
|.ComboBoxImageHover_{SkinName}|.rcbHovered .rcbArrowCell-or-.rcbHovered .rcbArrowCell a|
|.ComboBoxDropDown_{SkinName}|.RadComboBoxDropDown_{SkinName}|
|.ComboBoxHeader_{SkinName}|.rcbHeader|
|.ComboBoxItem_{SkinName}|.rcbItem|
|.ComboBoxItemHover_{SkinName}|.rcbHovered|
|.ComboBoxItemDisabled_{SkinName}|.rcbDisabled|
|.ComboBoxMoreResultsBox_{SkinName}|.rcbMoreResults|
|.ComboBoxMoreResultsImage_{SkinName}|.rcbMoreResults a|
|.ComboBoxMoreResultsMessage_{SkinName}|.rcbMoreResults span|

To make the declarations for RadComboBox for ASP.NET AJAX skin-specific, you should add a .RadComboBoxDropDown_{SkinName} or .RadComboBox_{SkinName} class declaration before you target the desired element.

While migrating your skin, you could take advantage of the [additional CSS class names]({%slug combobox/appearance-and-styling/css-skin-file-selectors%}), available only in RadComboBox for ASP.NET AJAX (e.g. the rcbFocused class for the container table of the input box)
