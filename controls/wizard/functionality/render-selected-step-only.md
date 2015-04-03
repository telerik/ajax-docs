---
title: Render Selected Step Only
page_title: Render Selected Step Only | UI for ASP.NET AJAX Documentation
description: Render Selected Step Only
slug: wizard/functionality/render-selected-step-only
tags: render,selected,step,only
published: True
position: 3
---

# Render Selected Step Only



Setting the__RenderedSteps__ property to __Active__ loads only the content of the active step. When another step is selected, RadWizard will make a request to the server in order to load the content of the newly selected step.

## 

When a large amount of data and HTML is loaded in each RadWizardStep, setting the __RenderedSteps__ to __Active__ can significantly improve the performance of your application. By default this property is set to __All__ and the content of all steps is loaded on the page.

__Example 1__ demonstrates how to enable this option by setting the __RenderedSteps__ to __Active__.

````ASPNET
	            <telerik:RadWizard ID="RadWizard7" runat="server" RenderedSteps="Active">
	                <WizardSteps>
	                    <telerik:RadWizardStep ID="RadGridStep" runat="server" StepType="Step">
	                        <uc:radgridsusercontrolcs runat="server" id="RadGridsUserControlCS" />
	                    </telerik:RadWizardStep>
	                    <telerik:RadWizardStep ID="RadSchedulerStep" runat="server" StepType="Step">
	                        <uc:radschedulerusercontrolcs runat="server" id="RadSchedulerUserControlCS" />
	                    </telerik:RadWizardStep>
	                    <telerik:RadWizardStep ID="RadHtmlChart" runat="server" StepType="Step">
	                        <uc:radhtmlchartusercontrolcs runat="server" id="RadSchedulerUserControlCS1" />
	                    </telerik:RadWizardStep>
	                </WizardSteps>
	            </telerik:radwizard>
````


