import styled from "@emotion/styled";

export const TableContainer = styled.table`
	border-collapse: collapse;
	width: 70%;
	margin: 25px 0;
	padding: 1px;
	font-size: 0.9em;
	font-family: sans-serif;
	min-width: 400px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	border-radius: 30px;
	overflow: hidden;

	thead th {
		background-color: #f3f3f3;
		color: #6B7280;
		text-align: left;
		font-style: normal;
		font-weight: 500;
		padding: 20px 50px 20px 10px;
	}

	th, td {
		padding: 12px 24px 0 10px;
	}

	tbody tr:nth-of-type(even) {
		background-color: #f3f3f3;
	}

	tr:last-of-type {
		border-bottom: 5px solid #f3f3f3;
	}

	tr.active-row {
		font-weight: bold;
		color: #6B7A8D;
	}
}
`;