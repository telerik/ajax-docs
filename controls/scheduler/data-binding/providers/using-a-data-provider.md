---
title: Using a Data Provider
page_title: Using a Data Provider | RadScheduler for ASP.NET AJAX Documentation
description: Using a Data Provider
slug: scheduler/data-binding/providers/using-a-data-provider
tags: using,a,data,provider
published: True
position: 0
---

# Using a Data Provider



**RadScheduler** follows the Provider Design Pattern to allow for easy integration into existing applications. On the Microsoft Web site, the article [Introduction To the Provider Model](http://msdn2.microsoft.com/en-us/library/aa479030.aspx) provides a detailed introduction to understanding this pattern.

You can use one of the providers supplied in the Telerik.Web.UI assembly, or you can [implement your own]({%slug scheduler/data-binding/providers/implementing-a-provider%}).

To bind **RadScheduler** to a provider, set its **Provider** or **ProviderName** property. Use the **ProviderName** property when binding declaratively in the designer, and the **Provider** property when binding to a provider instance at runtime. Because providers supply information about appointments using the **Telerik.Web.UI.Appointment** type, you do not need to set the scheduler's **DataKeyField**, **DataSubjectField**, **DataStartField**, **DataEndField**, **DataReminderField** and **DataRecurrenceParentKeyField** properties. Similarly, you do not need to set the **ResourceTypes** property, as the provider supplies this information. Any values you set on the scheduler at design time are ignored.

## Example

This example shows how to declaratively bind **RadScheduler** to one of the supplied providers, using the **ProviderName** property.

1. Using the Solution Explorer, double click on the Web.config file. Locate the <configSections> tag at the very top. **RadScheduler** is designed to be used with providers configured in a custom section of the web.config file. The custom section requires a handler that is included in the Telerik.Web.UI assembly. Add a <section> for this handler to the <configSections> of your Web.config file:

	**XML**
	
		<configSections>
		 <sectionGroup name="telerik.web.ui">
			<section name="radScheduler"
					 type="Telerik.Web.UI.RadSchedulerConfigurationSection,
						   Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4"
					 allowDefinition="MachineToApplication" />
		 </sectionGroup>
		</configSections>
	


>note The PublicKeyToken varies in different versions on RadControls. You can use [JustDecompile](http://www.telerik.com/products/decompiler.aspx), to see the PublicKeyToken for your version.Additionally, if the assembly is added to your GAC, you can see its Public Key Token there as well.
>


1. Now that you have declared a handler, add the <telerik.web.ui> section to your Web.config file (if it is not already there), and in the <telerik.web.ui> section, declare the provider:

	**XML**
			
		<telerik.web.ui>
		  <radScheduler defaultAppointmentProvider="Integrated">
			  <appointmentProviders>
				  <add name="XmlSchedulerProvider1"
					   type="Telerik.Web.UI.XmlSchedulerProvider"
					   fileName="~/App_Data/Appointments.xml"
					   persistChanges="true"/>
			  </appointmentProviders>
		  </radScheduler>
		</telerik.web.ui>       
	


1. Now that the provider will be loaded into your application, select your **RadScheduler** in the designer and set its **ProviderName** property to "XmlSchedulerProvider1".

1. Locate the Appointments.xml file, which can be found in "Live Demos\App_Data" folder, and copy it to the App_Data folder of your project.


You have now bound your scheduler using the **ProviderName** property. Run the application and note the custom resources supplied by the provider. Note, too, that unlike when binding using the **DataSource** or **DataSourceID** properties, you did not need to set the **DataKeyField**, **DataSubjectField**, **DataStartField**, **DataEndField**, **DataRecurrenceField DataReminderField**, and **DataRecurrenceParentKeyField** properties.

# See Also

 * [Implementing a Provider]({%slug scheduler/data-binding/providers/implementing-a-provider%})

 * [Implementing a Provider That Supports Multi-Valued Resources]({%slug scheduler/data-binding/providers/implementing-a-provider-that-supports-multi-valued-resources%})
