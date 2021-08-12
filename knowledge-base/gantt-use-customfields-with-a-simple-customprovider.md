---
title: Use CustomFields in Gantt with a simple CustomProvider
description: Use CustomFields in Gantt with a simple CustomProvider. Check it now!
type: how-to
page_title: Use CustomFields in Gantt with a simple CustomProvider
slug: gantt-use-customfields-with-a-simple-customprovider
res_type: kb
---


### HOW TO 

This article shows a simplified version of the [Custom Tasks Field]({%slug gantt/functionality/custom-tasks-fields %}) with [a simple CustomProvider using Session]({%slug gantt-with-simple-customprovider-using-collections-in-session %}) instead of EntityFramework.

### DESCRIPTION

The Custom Tasks field require you to have a custom Task class and in order to use a custom Task class, you should create a [CustomProvider]({%slug gantt/data-binding/providers/custom-entityframework-provider %}). This example is using the Custom Provider from the [RadGantt with Simple CustomProvider using collections in Session]({%slug gantt-with-simple-customprovider-using-collections-in-session %}) KB article.

### SOLUTION

*CustomTask.cs*

````C#
using System.Collections.Generic;
using Telerik.Web.UI.Gantt;
 
public class CustomTask : Task
{
    public CustomTask()
        : base()
    {
    }
 
    public string Description
    {
        get { return (string) (ViewState["Description"] ?? ""); }
        set { ViewState["Description"] = value; }
    }
 
    public string MyCustomField
    {
        get { return (string) (ViewState["MyCustomField"] ?? ""); }
        set { ViewState["MyCustomField"] = value; }
    }
 
    protected override IDictionary<string, object> GetSerializationData()
    {
        var dict = base.GetSerializationData();
        dict["Description"] = Description;
        dict["MyCustomField"] = MyCustomField;
        return dict;
    }
 
    public override void LoadFromDictionary(System.Collections.IDictionary values)
    {
        base.LoadFromDictionary(values);
 
        Description = (string) values["Description"];
        MyCustomField = (string) values["MyCustomField"];
    }
}
````

````ASP.NET
<telerik:RadGantt runat="server" ID="RadGantt1" SelectedView="WeekView" AutoGenerateColumns="false">
    <Columns>
        <telerik:GanttBoundColumn DataField="ID" Width="90px"></telerik:GanttBoundColumn>
        <telerik:GanttBoundColumn DataField="Title"></telerik:GanttBoundColumn>
        <telerik:GanttBoundColumn DataField="Description" HeaderText="Description"
            DataType="String" UniqueName="Description"></telerik:GanttBoundColumn>
         <telerik:GanttBoundColumn DataField="MyCustomField" HeaderText="MyCustomField"
            DataType="String" UniqueName="MyCustomField"></telerik:GanttBoundColumn>
    </Columns>
    <CustomTaskFields>
        <telerik:GanttCustomField PropertyName="Description" ClientPropertyName="description" />
        <telerik:GanttCustomField PropertyName="MyCustomField" ClientPropertyName="myCustomField" />
    </CustomTaskFields>
</telerik:RadGantt>
````



### See also

- [RadGantt with Simple CustomProvider using collections in Session](https://www.telerik.com/support/kb/aspnet-ajax/gantt/details/radgantt-with-simple-customprovider-using-collections-in-session)

### Downloads

You can find atached the projects demonstrating the described approached here:

* [GanttCustomFields.zip](files/gantt-customfields.zip)




