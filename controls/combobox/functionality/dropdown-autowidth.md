---
title: Dropdown AutoWidth
page_title: Dropdown AutoWidth | UI for ASP.NET AJAX Documentation
description: Dropdown AutoWidth
slug: combobox/functionality/dropdown-autowidth
tags: dropdown,autowidth
published: True
position: 7
---

# Dropdown AutoWidth



## 

The DropDown auto-width functionality of the RadComboBox is enabled through the __DropDownAutoWidth__ property. The property could be used, when its value is set to "Enabled". By default the __DropDownAutoWidth__ property is disabled. It provides the ability to achieve a dynamic repaintof the DropDown width, regarding the largest width of the RadComboBoxItem. Additionally, the property is integrated with the __Filter__ and__Load On Demand__ functionality.


|  __DropDownAutoWidth__ is set to __Disabled__ : |  __DropDownAutoWidth__ is set to __Enabled__ : |
| ------ | ------ |
|![Drop Down Auto Width Disabled](images/combobox_dropdownautowidth_disabled.png)|![Drop Down Auto Width Enabled](images/combobox_dropdownautowidth_enabled.png)|

Rendering of the DropDown, when the Filter and the Load On Demand features are used:


|  __Filter__ property is used: |  __Load On Demand__ mechanism is enabled: |
| ------ | ------ |
|![Drop Down Auto Width Filter](images/combobox_dropdownautowidth_filter.png)|![Drop Down Auto Width LOD](images/combobox_dropdownautowidth_lod.png)|

>note If the text of a certain RadComboBoxItem is altered dynamically(e.g. with the help of the __set_text()__ method), the __DropDownAutoWidth__ property would also achieve the automatic generation of the DropDown's width.
>


## How is the auto-width of the DropDown implemented?

The __.rcbAutoWidth__ and the the __.rcbAutoWidthResizer__ classes are generally applied to the DropDown element of the RadComboBox. In order to achieve the dynamic rendering of the DropDown with a css approach, the aforementioned css selectors are used for the following browsers : Firefox, Chrome, Safari, InternetExplorer10. For the other browsers a javascript implementation is used to obtain the same goal. When the property is enabled, the minimum width (min-width:158px) of the DropDown is 158px. In Internet Explorer 8, the following approach is used, in order to achieve the auto-width functionality of the DropDown:

````ASPNET
	    <style type="text/css">
	        @media \0screen {
	            .rcbAutoWidth .rcbList {
	                min-width: 142px;
	            }
	        }
	    </style>
````


