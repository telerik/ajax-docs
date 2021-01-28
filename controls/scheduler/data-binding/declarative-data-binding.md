---
title: Declarative Data Binding
page_title: Declarative Data Binding - RadScheduler
description: Check our Web Forms article about Declarative Data Binding.
slug: scheduler/data-binding/declarative-data-binding
tags: declarative,data,binding
published: True
position: 2
---

# Declarative Data Binding



Declarative data source controls, which were introduced in ASP.NET 2.0, let you access and modify the scheduler's data with minimal amount of code. Binding **RadScheduler** to such a data source can be completed without writing any code: you need only configure the data source and set a few properties to link the scheduler to the data source and indicate which fields the scheduler is to use.

## Example

The example below shows how to bind RadScheduler to a SqlDataSource component at design time, and demonstrates how to set up user-defined resources:

### Setting up the data source

1. Drag a SqlDataSource component from the toolbox onto your page.![SqlDataSource](images/scheduler_sqldatasource.png)

1. The Smart Tag for the **SQLDataSource** component should automatically come up.If it does not, right click on the **SqlDataSource** component and choose **Show Smart Tag**. On the Smart Tag, choose **Configure Data Source...**

1. The **Configure Data Source** Wizard appears.

1. Choose a database and a connection that your application will use to connect to that database.![Choose data connection](images/scheduler_choosedataconnection.png)

1. Click **Next** to continue. Save the connection string, and choose **Next** again.![connection string](images/scheduler_connectionstring.png)

1. Configure the **SELECT** statement. Check the columns for the appointment information and click the "**Advanced..."** button.  Select the first option to auto-generate statements for INSERT, UPDATE, DELETE and SELECT![configure select](images/scheduler_configureselect.png)

1. Click **Next**, test the Query, and finish the data source configuration byclicking the **Finish** button:![test query](images/scheduler_testquery.png)

## Setting up the Scheduler

1. Drag a **RadScheduler** control onto your page. The Smart Tag should automatically come up. If it does not, right click on the **RadScheduler** control and choose **Show Smart Tag**.  On the Smart Tag, choose **Configure Data Source...**<br/>
![Smart Tag](images/scheduler_smarttag.png)

1. Select your SQLDataSource as the data source, and specify the fields for the key, start time, end time, subject, recurrence storage, and recurrence parent key as shown below. Then click OK.![SQL Config Wizard](images/scheduler_sqlconfigwizard.png)

1. Add another **SQLDataSource** to your page and configure it to select **ID** and **UserName** from the Users table. The names of these fields should be different form the fields of the RadScheduler.  You only need a SELECT statement for this data source.

1. Select the **RadScheduler** in the designer, and click the ellipsis button on the **ResourceTypes** property in the property pane.![Resource Types](images/scheduler-resourcetypes.png)

1. In the Resource Type Collection Editor, add a new resource type and configure it to bind to the second SQLDataSource:![Users Resource](images/scheduler_usersresource.png)

>caution The **ForeignKeyField**, **KeyField** and **TextField** properties must be set.
>


You have now bound the RadScheduler to a data source. Run the application and note that the Users custom resourceis available in the edit form.

For another example of declarative data binding, using an Object data source instead of a SQL data source, see [Getting Started]({%slug scheduler/getting-started%}).

# See Also

 * [Using the Data Source Property]({%slug scheduler/data-binding/using-the-data-source-property%})

 * [Using a Data Provider]({%slug scheduler/data-binding/providers/using-a-data-provider%})
