---
title: Limitations
page_title: Limitations | UI for ASP.NET AJAX Documentation
description: Limitations
slug: persistenceframework/troubleshooting/limitations
tags: limitations
published: True
position: 0
---

# Limitations



In the following article you can find a list of limitations to the Persistence Framework and possible workarounds (if available).

## Persist controls nested inside NamingContainers

In the following example demonstrates how to persist controls nested inside RadDock's TemplateContainer. To be able to persist nested controlsyou need to manually add PersistenceSetting to the manager.

This approach can be used for RadDock, RadWindow (with ContentTemplate) or any custom NamingContainer.

````ASPNET
			<telerik:RadPersistenceManager ID="RadPersistenceManager1" runat="server">
			</telerik:RadPersistenceManager>
	
			<telerik:RadDock ID="RadDock1" runat="server">
				<ContentTemplate>
					<telerik:RadComboBox ID="RadComboBox1" runat="server">
						<Items>
							<telerik:RadComboBoxItem Text="Item1" />
							<telerik:RadComboBoxItem Text="Item2" />
							<telerik:RadComboBoxItem Text="Item3" />
							<telerik:RadComboBoxItem Text="Item4" />
							<telerik:RadComboBoxItem Text="Item5" />
						</Items>
					</telerik:RadComboBox>
				</ContentTemplate>
			</telerik:RadDock>
````



>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
	    {
			RadPersistenceManager1.PersistenceSettings.AddSetting(RadComboBox1);//add setting by control instance
	    }
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			'add setting by control instance
			RadPersistenceManager1.PersistenceSettings.AddSetting(RadComboBox1")
		End Sub
````


>end
