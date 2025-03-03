"use client"

interface TablePropes {
    columns: string[];
    data: { [key: string]: any }[];
}

const Table: React.FC<TablePropes> = ({ columns, data }) => {
    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column, index) => (
                            <th scope="col" key={index} className="px-6 py-3">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {row[col] ?? "-"}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )
}

export default Table;