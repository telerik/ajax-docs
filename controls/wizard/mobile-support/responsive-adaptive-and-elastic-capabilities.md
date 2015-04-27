---
title: Responsive Adaptive and Elastic Capabilities
page_title: Responsive Adaptive and Elastic Capabilities | RadWizard for ASP.NET AJAX Documentation
description: Responsive Adaptive and Elastic Capabilities
slug: wizard/mobile-support/responsive-adaptive-and-elastic-capabilities
tags: responsive,adaptive,and,elastic,capabilities
published: True
position: 0
---

# Responsive Adaptive and Elastic Capabilities



This article explains the **responsive design capabilities RadWizard offers**.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes changing the font size and having dimensions set in percent.

## Elastic Design with RadWizard
>caption Figure 1: Comparison between a RadWizard with the default 12px font size and with increased font-size

![wizard-elastic-capabilities](images/wizard-elastic-capabilities.png)

**RadWizard** supports **changing the font size** without breaking the control's appearance - if the new size is larger than the original, the elements in the control will simply increase their size as well to accommodate the text. This layout is achieved by using `em` units for setting dimensions and paddings in the control, instead of `px` because `em` units are tied to the font size. This allows dimensions and sizes to scale with the font size.

**Example 1:** How to increase the font size of a RadWizard as shown in Figure 1.

````ASPNET
	    <style type="text/css">
	        div.RadWizard {
	            font-size: 24px;
	        }
	    </style>
	    <telerik:RadWizard ID="RadWizard3" runat="server">
	        <WizardSteps>
	            <telerik:RadWizardStep Title="Name">
	                <telerik:RadTextBox ID="RadTextBox1" Label="First Name:" runat="server"></telerik:RadTextBox>
	                <br />
	                <telerik:RadTextBox ID="RadTextBox2" Label="Last Name:" runat="server"></telerik:RadTextBox>
	            </telerik:RadWizardStep>
	            <telerik:RadWizardStep Title="Address">
	            </telerik:RadWizardStep>
	        </WizardSteps>
	    </telerik:RadWizard>
````



## Fluid Design with RadWizard
>caption Figure 1: RadWizard with dimensions set to 100% that occupies its entire parent element

![wizard-fluid](images/wizard-fluid.png)

You can set the **Width** and **Height** properties of the **RadWizard** in **percent**. This lets it resize together with its parent element size.

**Example 2**: Markup and CSS that provide a fluid RadWizard that changes size with the browser viewport

````ASPNET
	     <telerik:RadWizard ID="RadWizard4" runat="server" Width="100%">
	        <WizardSteps>
	            <telerik:RadWizardStep Title="Name">
	                <telerik:RadTextBox ID="RadTextBox3" Label="First Name:" runat="server"></telerik:RadTextBox>
	                <br />
	                <telerik:RadTextBox ID="RadTextBox4" Label="Last Name:" runat="server"></telerik:RadTextBox>
	            </telerik:RadWizardStep>
	            <telerik:RadWizardStep Title="Address">
	            </telerik:RadWizardStep>
	        </WizardSteps>
	    </telerik:RadWizard>
````



## Adaptive Design with RadWizard

When the RenderMode is set to "Mobile" the **RadWizard** supports **changing the rendering** if user switch from portrait to landscape orientation or vice versa. More information about RadWizard adaptive design please find in the [ Mobile Rendering help article ]({%slug wizard/mobile-support/mobile-rendering%})
