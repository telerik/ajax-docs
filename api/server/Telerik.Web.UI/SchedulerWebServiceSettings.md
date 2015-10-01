---
title: Telerik.Web.UI.SchedulerWebServiceSettings
page_title: Telerik.Web.UI.SchedulerWebServiceSettings
description: Telerik.Web.UI.SchedulerWebServiceSettings
---

# Telerik.Web.UI.SchedulerWebServiceSettings

This Class gets and sets the SchedulerWebService Settings.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.WebServiceSettings
* Telerik.Web.UI.SchedulerWebServiceSettings

## Properties

###  Method `String`

Gets or sets the method name to be called to populate items with
            ExpandMode set to WebService.

#### Remarks
The method must be part of the web service specified through the
            Path property.

###  UpdateMode `AppointmentUpdateMode`

Gets or sets the update mode for Appointments in WebService scenarios.

#### Remarks
Using Batch results in updating all appointments per
            single operation. On the other hand, Single
            mode updates only the appointment that was edited, hence reducing the bandwidth usage.

###  GetAppointmentsMethod `String`

Gets or sets the method name to be called to populate the appointments.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  DeleteAppointmentMethod `String`

Gets or sets the method name to be called to delete appointments.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  InsertAppointmentMethod `String`

Gets or sets the method name to be called to insert appointments.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  UpdateAppointmentMethod `String`

Gets or sets the method name to be called to update appointments.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  GetResourcesMethod `String`

Gets or sets the method name to be called to get the resources list.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  CreateRecurrenceExceptionMethod `String`

Gets or sets the method name to be called to create recurrence exceptions.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  RemoveRecurrenceExceptionsMethod `String`

Gets or sets the method name to be called to remove the recurrence exceptions of a given appointment.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  ResourcePopulationMode `SchedulerResourcePopulationMode`

Gets or sets the resource population mode
            	to be used from RadScheduler.

#### Remarks
Resources need to be populated from the server when using resource grouping.
            	Doing so also reduces the client-side initialization time.
            
            	This operation requires the WebPermission to be granted
            	for the Web Service URL. This permission is not granted by default in Medium Trust.
            
            	You can disable the population of the resources from the server and still use
            	client-side rendering for grouped views. To do so you need to set the
            	value to Manual and
            	populate the resources from the OnInit method of the page.

###  ODataSettings `SchedulerODataSettings`

Used to customize the OData binding settings.

###  Path `String`

Gets or sets the name of the web service to be used to populate items with
            	ExpandMode set to WebService.

###  Method `String`

Gets or sets the method name to be called to populate items with
            	ExpandMode set to WebService.

#### Remarks
The method must be part of the web service specified through the
            	Path property.

###  UseHttpGet `Boolean`

Gets or sets a boolean value

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

