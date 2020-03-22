import React from 'react';
import Column from './Columns';

function Table() {
    return(
        <div>
            <table>
                <td>
                    <th>S.n</th>
                    <th>Person</th>
                </td>
                <tr>
                    <Column/>
                </tr>
            </table>
        </div>
    )
}

export default Table;