<%@ Page Language="C#" AutoEventWireup="true" CodeFile="DefaultCS.aspx.cs" Inherits="DefaultCS" %>

<!DOCTYPE html>

<html xmlns="https://www.w3.org/1999/xhtml">
<head runat="server">
	<title></title>
<%--	<style type="text/css">
		/*Format tables*/
		tr:first-child {
			font-weight: bold;
		}

		tr:nth-child(odd) {
			background: #efefef;
		}

		td {
			border: 1px solid #ddd;
		}

		table {
			display: inline;
			float: left;
		}
	</style>--%>
</head>
<body>
	<form id="form1" runat="server">
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>
		<table id="table1" runat="server">
			<tr>
				<td>Class Name</td>
				<td>Silk
				</td>
				<td>Glow</td>
			</tr>
		</table>
	</form>
</body>
</html>
