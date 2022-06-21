function spiralPrint(rows, columns, arr) {
	let i, start_row_index = 0, start_column_index = 0;

	while (start_row_index < rows && start_column_index < columns) {
		// print the first row from the remaining rows
		for (i = start_column_index; i < columns; ++i) {
			document.write(arr[start_row_index][i] + ' ');
		}
		start_row_index++;

		// print the last column from the remaining columns
		for (i = start_row_index; i < rows; ++i) {
			document.write(arr[i][columns - 1] + ' ');
		}
		columns--;

		// print the last row from the remaining rows
		if (start_row_index < rows) {
			for (i = columns - 1; i >= start_column_index; --i) {
				document.write(arr[rows - 1][i] + ' ');
			}
			rows--;
		}

		// print the first column from the remaining columns
		if (start_column_index < columns) {
			for (i = rows - 1; i >= start_row_index; --i) {
				document.write(arr[i][start_column_index] + ' ');
			}
			start_column_index++;
		}
	}
}

// function call
let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
let rows = arr.length;
let columns = arr[0].length;

spiralPrint(rows, columns, arr);

