---
title: Drag and Drop Row over Grid Header
description: Check out how to handle dragging a Grid row and dropping it over a Grid header.
type: how-to
page_title: RadGrid Drag and Drop Row over Grid Header
slug: grid-drag-and-drop-over-header-item
ticketid: 1551790
res_type: kb
---

## Description

RadGrid exposes flexible event-driven mechanism to drag and drop grid records to reorder them within the same grid, move them to different grid instance or drop them over other html element on the page. This functionality is demonstrated in the [Items Drag-and-drop live demo](https://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/rows/drag-and-drop/defaultcs.aspx).

However dropping a Grid item over the Grid Header is not working by default.

## Solution

The sample below shows how to handle dropping over the Grid header. It is based on the demo linked above and uses the Northwind database:

````ASPX
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="grdPendingOrders" OnNeedDataSource="grdPendingOrders_NeedDataSource"
    AllowPaging="True" Width="350px" OnRowDrop="grdPendingOrders_RowDrop"
    PageSize="30">
    <MasterTableView DataKeyNames="OrderId" Width="100%" TableLayout="Fixed">
        <Columns>
            <telerik:GridDragDropColumn HeaderStyle-Width="18px" Visible="false">
            </telerik:GridDragDropColumn>
        </Columns>
    </MasterTableView>
    <ClientSettings AllowRowsDragDrop="True" AllowColumnsReorder="true" ReorderColumnsOnClient="true">
        <Selecting AllowRowSelect="True" EnableDragToSelectRows="false"></Selecting>
        <ClientEvents OnRowDropping="rowDropping" OnRowDragStarted="rowDragStarted"></ClientEvents>
        <Scrolling AllowScroll="true" UseStaticHeaders="true"></Scrolling>
    </ClientSettings>
    <PagerStyle Mode="NumericPages" PageButtonCount="4"></PagerStyle>
</telerik:RadGrid>

<br />
<br />

<telerik:RadGrid RenderMode="Lightweight" runat="server" AllowPaging="True" ID="grdShippedOrders" OnNeedDataSource="grdShippedOrders_NeedDataSource"
    Width="350px">
    <MasterTableView DataKeyNames="OrderId" Width="100%">
        <Columns>
            <telerik:GridDragDropColumn HeaderStyle-Width="18px" Visible="false">
            </telerik:GridDragDropColumn>
        </Columns>
        <NoRecordsTemplate>
            <div style="height: 30px; cursor: pointer;">
                No items to view
            </div>
        </NoRecordsTemplate>
        <PagerStyle Mode="NumericPages" PageButtonCount="4"></PagerStyle>
    </MasterTableView>
    <ClientSettings AllowRowsDragDrop="True">
        <Selecting AllowRowSelect="True" EnableDragToSelectRows="false"></Selecting>
        <ClientEvents OnRowDropping="rowDropping" OnGridCreated="gridCreated"></ClientEvents>
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
var grdPendingOrders;
var grdShippedOrders;
var currentlyDraggedItem;

function gridCreated(sender, args) {
    grdPendingOrders = $telerik.findControl(document, "grdPendingOrders");
    grdShippedOrders = sender;
}

function rowDragStarted(sender, args) {
    //get a reference to the currently dragged gridItem
    currentlyDraggedItem = args.get_gridDataItem();
}

function rowDropping(sender, args) {
    if (sender.get_id() == grdPendingOrders.get_id()) {
        var node = args.get_destinationHtmlElement();
        if (!isChildOf(grdShippedOrders.get_id(), node) && !isChildOf(grdPendingOrders.get_id(), node)) {
            args.set_cancel(true);
        }

        //check if row is dropped over the GridHeaderItem
        if (node.closest('.rgHeader')) {
            args.set_cancel(true);
            var destinationMasterTableElement = args.get_destinationHtmlElement().closest('.rgMasterTable');
            if (destinationMasterTableElement) {
                //manually add the dragged item into the DraggedItems collection of the RadGrid
                Array.add(grdPendingOrders._draggedItems, currentlyDraggedItem);
                Array.add(grdPendingOrders._draggedItemsIndexes, currentlyDraggedItem.get_itemIndex().toString());
                //process the draggedItems in the state
                grdPendingOrders.updateClientState();

                var destinationTableViewId = destinationMasterTableElement.control.get_id();
                var commandArgs = String.format("{0},{1},{2},{3}", undefined, grdShippedOrders.UniqueID, "above", destinationTableViewId);
                sender.get_masterTableView().fireCommand("RowDropped", commandArgs);
            }
        }
    }
}

function isChildOf(parentId, element) {
    while (element) {
        if (element.id && element.id.indexOf(parentId) > -1) {
            return true;
        }
        element = element.parentNode;
    }
    return false;
}
````

````C#
protected IList<Order> PendingOrders
{
	get
	{
		try
		{
			object obj = Session["PendingOrders"];
			if (obj == null)
			{
				obj = GetOrders();
				if (obj != null)
				{
					Session["PendingOrders"] = obj;
				}
				else
				{
					obj = new List<Order>();
				}
			}
			return (IList<Order>)obj;
		}
		catch
		{
			Session["PendingOrders"] = null;
		}
		return new List<Order>();
	}
	set { Session["PendingOrders"] = value; }
}

protected IList<Order> ShippedOrders
{
	get
	{
		try
		{
			object obj = Session["ShippedOrders"];
			if (obj == null)
			{
				Session["ShippedOrders"] = obj = new List<Order>();
			}
			return (IList<Order>)obj;
		}
		catch
		{
			Session["ShippedOrders"] = null;
		}
		return new List<Order>();
	}
	set { Session["ShippedOrders"] = value; }
}

protected void grdPendingOrders_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
{
	grdPendingOrders.DataSource = PendingOrders;
}

protected IList<Order> GetOrders()
{
	IList<Order> results = new List<Order>();
	using (IDbConnection connection = DbProviderFactories.GetFactory("System.Data.SqlClient").CreateConnection())
	{
		connection.ConnectionString =
			ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;

		using (IDbCommand command = connection.CreateCommand())
		{
			command.CommandText =
				"SELECT o.OrderID, o.CustomerID, o.RequiredDate, c.CompanyName FROM orders o INNER JOIN customers c on o.customerID = c.customerID";

			connection.Open();
			try
			{
				IDataReader reader = command.ExecuteReader();
				while (reader.Read())
				{
					int id = (int)reader.GetValue(reader.GetOrdinal("OrderID"));
					string customerID = (!reader.IsDBNull(reader.GetOrdinal("CustomerID")))
											? (string)reader.GetValue(reader.GetOrdinal("CustomerID"))
											: string.Empty;
					DateTime requiredDate = (!reader.IsDBNull(reader.GetOrdinal("RequiredDate")))
												? (DateTime)reader.GetValue(reader.GetOrdinal("RequiredDate"))
												: DateTime.MinValue;
					string companyName = (!reader.IsDBNull(reader.GetOrdinal("CompanyName")))
												? Server.HtmlEncode((string)reader.GetValue(reader.GetOrdinal("CompanyName")))
												: string.Empty;
					results.Add(new Order(id, customerID, companyName, requiredDate.ToShortDateString()));
				}
			}
			catch
			{
				results.Clear();
			}
		}
	}
	return results;
}

protected void grdShippedOrders_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
{
	grdShippedOrders.DataSource = ShippedOrders;
}

protected void grdPendingOrders_RowDrop(object sender, GridDragDropEventArgs e)
{
	
	if (string.IsNullOrEmpty(e.HtmlElement))
	{
		if (e.DraggedItems[0].OwnerGridID == grdPendingOrders.ClientID)
		{
			// items are dragged from pending to shipped grid 
			if ((e.DestDataItem == null ) ||
				e.DestDataItem != null && e.DestDataItem.OwnerGridID == grdShippedOrders.ClientID)
			{
				IList<Order> shippedOrders = ShippedOrders;
				IList<Order> pendingOrders = PendingOrders;
				int destinationIndex = -1;

				if (e.DestDataItem != null)
				{
					Order order = GetOrder(shippedOrders, (int)e.DestDataItem.GetDataKeyValue("OrderId"));
					destinationIndex = (order != null) ? shippedOrders.IndexOf(order) : -1;
				}

				foreach (GridDataItem draggedItem in e.DraggedItems)
				{
					Order tmpOrder = GetOrder(pendingOrders, (int)draggedItem.GetDataKeyValue("OrderId"));

					if (tmpOrder != null)
					{
						if (destinationIndex > -1)
						{
							if (e.DropPosition == GridItemDropPosition.Below)
							{
								destinationIndex += 1;
							}
							shippedOrders.Insert(destinationIndex, tmpOrder);
						}
						else
						{
							shippedOrders.Add(tmpOrder);
						}

						pendingOrders.Remove(tmpOrder);
					}
				}

				ShippedOrders = shippedOrders;
				PendingOrders = pendingOrders;
				grdPendingOrders.Rebind();
				grdShippedOrders.Rebind();
			}
			else if (e.DestDataItem != null && e.DestDataItem.OwnerGridID == grdPendingOrders.ClientID)
			{
				//reorder items in pending grid
				IList<Order> pendingOrders = PendingOrders;
				Order order = GetOrder(pendingOrders, (int)e.DestDataItem.GetDataKeyValue("OrderId"));
				int destinationIndex = pendingOrders.IndexOf(order);

				if (e.DropPosition == GridItemDropPosition.Above && e.DestDataItem.ItemIndex > e.DraggedItems[0].ItemIndex)
				{
					destinationIndex -= 1;
				}
				if (e.DropPosition == GridItemDropPosition.Below && e.DestDataItem.ItemIndex < e.DraggedItems[0].ItemIndex)
				{
					destinationIndex += 1;
				}

				List<Order> ordersToMove = new List<Order>();
				foreach (GridDataItem draggedItem in e.DraggedItems)
				{
					Order tmpOrder = GetOrder(pendingOrders, (int)draggedItem.GetDataKeyValue("OrderId"));
					if (tmpOrder != null)
						ordersToMove.Add(tmpOrder);
				}

				foreach (Order orderToMove in ordersToMove)
				{
					pendingOrders.Remove(orderToMove);
					pendingOrders.Insert(destinationIndex, orderToMove);
				}
				PendingOrders = pendingOrders;
				grdPendingOrders.Rebind();

				int destinationItemIndex = destinationIndex - (grdPendingOrders.PageSize * grdPendingOrders.CurrentPageIndex);
				e.DestinationTableView.Items[destinationItemIndex].Selected = true;
			}
		}
	}
}

private static Order GetOrder(IEnumerable<Order> ordersToSearchIn, int orderId)
{
	foreach (Order order in ordersToSearchIn)
	{
		if (order.OrderID == orderId)
		{
			return order;
		}
	}
	return null;
}


#region Nested type: Order

protected class Order
{
	private string _companyName;
	private string _customerId;
	private int _orderId;
	private string _date;

	public Order(int orderId, string customerId, string companyName, string requiredDate)
	{
		_orderId = orderId;
		_customerId = customerId;
		_companyName = companyName;
		_date = requiredDate;
	}

	public int OrderID
	{
		get { return _orderId; }
	}

	public string CustomerID
	{
		get { return _customerId; }
	}

	public string Company
	{
		get { return _companyName; }
	}

	public string Date
	{
		get { return _date; }
	}
}

#endregion
````

## See Also

 * [Items Drag-and-drop demo](https://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/rows/drag-and-drop/defaultcs.aspx)

 * [Drag and Drop of Grid Items]({%slug grid/rows/drag-and-drop-of-grid-items%})
