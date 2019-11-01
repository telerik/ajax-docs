---
title: How do I change the text color of a row in the TreeList section of a Gantt chart
description: Customize style and content of treelist column in RadGantt 
type: how-to
page_title: Customize style and content of treelist column in RadGantt | Telerik UI for ASP.NET AJAX
slug: gantt-access-and-customize-treelist-cells
position: 
tags: 
ticketid: 1428187
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadGantt for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

The Treelist part of the Gantt contains rows with the same data-uid attribute as the _uid attribute of the corresponding task. This is the way to access the treelist row for a given task and then based on the Gantt columns, to determine the cell for a given field. 

Accessing the cells for a task allows applying custom styles and attributes as well as customizing the HTML rendered for the column.

## Solution

````ASPNET
<script>
    function getColumnIndexByColumnField(gantt, field) {
        var cols = gantt.columns();
        for (var i = 0; i < cols.length; i++) {
            var col = cols[i];
            // for title seach, use col.title
            if (col.field == field) {
                return i;
            }
        }
        return -1;
    }

    function OnClientDataBound(sender, args) {
        var tasks = sender.get_allTasks();

        tasks.forEach(function (task, index) {
            var taskuid = tasks[0]._uid;

            var $row = $telerik.$(sender.get_element()).find("tr[data-uid=" + taskuid + "]");
            var $cell = $row.find(">td").eq(getColumnIndexByColumnField(sender, "title"));

            // set styles for the "title" cell
            // https://api.jquery.com/css/#css-properties
            $cell.css({
                "color": "white",
                "background-color": "blue"
            });
        })
    }
</script>
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" AutoGenerateColumns="false" SelectedView="WeekView" EnableResources="true" OnClientDataBound="OnClientDataBound">
    <Columns>
        <telerik:GanttBoundColumn DataField="Title" DataType="String"></telerik:GanttBoundColumn>
        <telerik:GanttResourceColumn HeaderText="Assigned Resources"></telerik:GanttResourceColumn>
    </Columns>
</telerik:RadGantt>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadGantt1.Provider = new XmlGanttProvider(Server.MapPath("~/App_Data/Gantt.xml"), true);
    RadGantt1.DataBind();
}  
````

````XML
<?xml version="1.0" encoding="utf-8"?>
<Project>
  <Tasks>
    <Task>
      <ID>1</ID>
      <ParentID />
      <Start>2018-04-15T00:00:00Z</Start>
      <End>2018-04-16T00:00:00Z</End>
      <Title>New task</Title>
      <PercentComplete>0</PercentComplete>
      <Summary>false</Summary>
      <Expanded>true</Expanded>
      <OrderID>0</OrderID>
    </Task>
    <NextID>2</NextID>
  </Tasks>
  <Dependencies />
  <Assignments />
  <Resources>
    <Resource>
      <ID>1</ID>
      <Text>Thomas Hardy</Text>
      <Color>#f44336</Color>
    </Resource>
    <Resource>
      <ID>2</ID>
      <Text>Elizabeth Lincoln</Text>
      <Color>#880e4f</Color>
    </Resource>
  </Resources>
</Project>
````

## See Also

* [RadGantt client-side object]({%slug gantt/client-side-programming/objects/gantttask-object%})

* [Create Hyperlink column in RadGantt]({%slug gantt-custom-hyperlink-column%})


