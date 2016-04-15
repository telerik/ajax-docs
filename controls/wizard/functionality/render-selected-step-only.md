---
title: Render Selected Step Only
page_title: Render Selected Step Only | RadWizard for ASP.NET AJAX Documentation
description: Render Selected Step Only
slug: wizard/functionality/render-selected-step-only
tags: render,selected,step,only
published: True
position: 3
---

# Render Selected Step Only



Setting the **RenderedSteps** property to **Active** loads only the content of the active step. When another step is selected, RadWizard will make a request to the server in order to load the content of the newly selected step.

## 

When a large amount of data and HTML is loaded in each RadWizardStep, setting the **RenderedSteps** to **Active** can significantly improve the performance of your application. By default this property is set to **All** and the content of all steps is loaded on the page.

**Example 1** demonstrates how to enable this option by setting the **RenderedSteps** to **Active**.

````ASPNET
<telerik:RadWizard RenderMode="Lightweight" ID="RadWizard7" runat="server" RenderedSteps="Active">
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


