import React from 'react';

function Columns() {
    const dataArray = ['Bill', 'Jeff']
    return (
        <React.Fragment>
            <tr>
            {
                dataArray.map((item,index) => (

                <React.Fragment>
                    <tr>
                        <td>{index}</td>
                        <td>{item}</td>
                    </tr>
                </React.Fragment>
                    
                ))
            }
            </tr>
        </React.Fragment>
    )
}

export default Columns