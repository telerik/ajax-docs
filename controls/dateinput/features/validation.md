---
title: Validation
page_title: Validation | RadDateInput for ASP.NET AJAX Documentation
description: Validation
slug: dateinput/features/validation
tags: dateinput,features,validation
published: True
position: 5
---

# Validation



The **RadDateInput** control can work seamlessly with standard ASP.NET validation controls. Nevertheless, the validation controls such as **RangeValidator** is using a culture-neutral format when comparing the date. For this purpose, we parse the entered date in such culture which format is represented as follow **"yyyy-MM-dd-hh-mm-ss"** and saving it in **RadInputValidationValue** client property. When using **RangeValidator** you need to set its **MaximumValue** and **MinimumValue** in such format in order to work correctly. You have to use this format also when using a custom validator. The code snippet below demonstrates how to configure **RangeValidator**.

````ASPNET
<telerik:RadDateInput RenderMode="Lightweight" ID="RadDateInput1" runat="server" DateFormat="d" MinDate="01/01/1990"
	MaxDate="01/01/3000">
</telerik:RadDateInput>
<asp:RangeValidator ID="DateInputRangeValidator" runat="server" ControlToValidate="RadDateInput1"
	ErrorMessage="Choose a date between 5th of January 20015 and 1st of September 20015"
	Display="Dynamic" MaximumValue="20015-09-01-00-00-00" MinimumValue="20015-01-05-00-00-00">
</asp:RangeValidator>
````

