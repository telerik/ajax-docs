---
title: Client Templates
page_title: Client Templates in RadGantt
description: Client templates in RadGantt for Task, Column, ColumnHeader, View, Task Tooltip, ToolBar Buttons.
slug: gantt/functionality/client-templates
tags: gantt, templates
published: True
position: 8
---

# Client Templates

**RadGantt** uses [Kendo UI Templates](https://docs.telerik.com/kendo-ui/framework/templates/overview) to provide full control over the rendering of Tasks, Columns, Column headers, View headers, and Toolbar. The control supports the following templates:

 - [Task Template](#task-template)

 - [Column Template and Column Header Template](#column-template-and-column-header-template)

 - [View Header Template](#view-header-template)

 - [Toolbar Template](#toolbar-template)

 - [Task Tooltip Template](#task-tooltip-template)

You can use the following expressions to evaluate code in the ClientTemplates:

 - **\#= ... #** - Data - Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.
 - **\# ... #** - Code - Evaluates the JavaScript code expression inside. Does not output value.
 - **\#: ... #** - HTML-encode - Same as the data expression, but HTML-encodes the result.


For runnable examples on how to use templates in **RadGantt** check out the [Client Templates](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/client-templates/defaultcs.aspx) demo.

## Task Template

To customize the way the tasks of the Gantt are rendered, use the **ClientTemplate** inner tag of the RadGantt.

This is the template that is rendered for each individual task in the timeline veiw. It receives the `data` parameter that points to the dataItem for the corresponding task, so you can use all its data source fields


````ASP.NET
<ClientTemplate>
    <div class="template" style="background-color: #: color#;">  
        <div class="wrapper">
            <img class="resource-img" src="images/#: data.manager#.png" />
            <div class="info-container">
                <strong class="title">#= data.title # </strong>
                <span class="manager">Manager: #= data.manager # </span>
            </div>
        </div>
    </div>
</ClientTemplate>
````


## Column Template and Column Header Template 

The TreeList portion of the **RadGantt** can also be customized using templates. Since R2 2021 Gantt control exposes client-side templates for the columns and their headers.

````
<telerik:GanttBoundColumn DataField="Title" AllowEdit="true" DataType="String">
    <ClientHeaderTemplate>
        <strong><a href="https://www.google.com/search?q=task">Task</a></strong>
    </ClientHeaderTemplate>
    <ClientTemplate>
        <a href= #= "https://www.google.com/search?q=" + data.title #> #= data.title #</a>
    </ClientTemplate>
</telerik:GanttBoundColumn>
````


## View Header Template

In the same manner the headers of the [Views]({%slug gantt/views/overview%}) of RadGantt can also be customized using client templates. Each of the four default views - [Day]({%slug gantt/views/day-view%}), [Week]({%slug gantt/views/week-view%}), [Month]({%slug gantt/views/month-view%}), and [Year]({%slug gantt/views/year-view%}), contain a header field and time span header cells that can be modified with templates. The Header templates fo each view can be defined in the respective inner tag. 

For instance: 

````
<DayView>
    <TimeHeaderTemplate>#=$telerik._kendo.toString(start, 't')#</TimeHeaderTemplate>
    <DayHeaderTemplate>#=$telerik._kendo.toString(start, 'ddd M/dd')#</DayHeaderTemplate>
</DayView>
<WeekView>
    <DayHeaderTemplate>#=$telerik._kendo.toString(start, 'ddd M/dd')#</DayHeaderTemplate>
    <WeekHeaderTemplate>#=$telerik._kendo.toString(start, 'ddd M/dd')# - #=$telerik._kendo.toString($telerik._kendo.date.addDays(end, -1), 'ddd M/dd')#</WeekHeaderTemplate>
</WeekView>
<MonthView>
    <WeekHeaderTemplate>#=$telerik._kendo.toString(start, 'ddd M/dd')# - #=$telerik._kendo.toString($telerik._kendo.date.addDays(end, -1), 'ddd M/dd')#</WeekHeaderTemplate>
    <MonthHeaderTemplate>#=$telerik._kendo.toString(start, 'MMMM, yyyy')#</MonthHeaderTemplate>
</MonthView>
<YearView UserSelectable="true">
    <MonthHeaderTemplate>#=$telerik._kendo.toString(start, 'MMM')#</MonthHeaderTemplate>
    <YearHeaderTemplate>#=$telerik._kendo.toString(start, 'yyyy')#</YearHeaderTemplate>
</YearView>
````

## Toolbar Template

As of R2 2021 the Toolbar of RadGantt gets customizable. New client templates are exposed - one for or the Toolbar itself and one for its items.

 * The Toolbar template is declared in the **ClientTemplate** inner tag. When this template is used, the default action buttons are not rendered.

  ````
  <Toolbar>
      <ClientTemplate>
          <%--Custom Toolbar definition--%>
      </ClientTemplate>
  </Toolbar>
  ````

 * In the **Items** inner tag, the default action buttons can be defined declaratively. Additional custom Toolbar Items can also be added, including such with client-side templates:

 ````
 <Toolbar>
     <Items>
         <telerik:GanttToolbarItem Name="pdf" Text="Pdf export" />
         <telerik:GanttToolbarItem Name="append" Text="add new task" />
         <telerik:GanttToolbarItem Name="custom" Text="Custom" />
         <telerik:GanttToolbarItem Name="test">
             <ClientTemplate>
                 <a class="k-button" href="" onclick="return toolbar_click()">Command</a>
             </ClientTemplate>
         </telerik:GanttToolbarItem>
     </Items>
 </Toolbar>
 ````

 >note The "Add New Task" button will only work when the RadGantt is editable (`ReadOnly` property is **not** set to true). For the "Export to PDF" action button to work you need to set `EnablePdfExport` property to **true**.

## Task Tooltip Template

With R2 2021 a Task Tooltip Template is also available in the RadGantt component. It can be used for customizing the tooltip rendered when hovering over a task in the Gantt Timeline. The client-side Tooltip template is defined inside the **TaskTooltipSettings**, like shown below:

````
<TasksTooltipSettings>
    <ClientTemplate>
        <div class="#=kendo.htmlEncode(styles.taskDetails)#" >
            <strong>#=kendo.htmlEncode(task.title)#</strong>
                        
            <div class="#=styles.taskDetailsPercent#">
                Progress: #=$telerik._kendo.toString(task.percentComplete, "p0")#
            </div>
            <ul class="#=styles.reset#">
                <li>#=messages.start#: #=$telerik._kendo.toString(task.start, "h:mm tt ddd, MMM d")#</li>
                <li>#=messages.end#: #=$telerik._kendo.toString(task.end, "h:mm tt ddd, MMM d")#</li>
            </ul>
            <span class="manager"> #= task.manager # </span>
        </div>
    </ClientTemplate>
</TasksTooltipSettings>
````

# See Also

 * [Kendo UI Templates](https://docs.telerik.com/kendo-ui/framework/templates/overview)

 * [Client Templates - demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/client-templates/defaultcs.aspx) 


