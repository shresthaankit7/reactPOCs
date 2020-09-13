import React from 'react';

function Columns() {
    const dataArray = ['Bill', 'Jeff','TestingTesting']

    var tags = [ {"Value":"SPOT","Key":"coreMarketType"}, {"Value":"yzc","Key":"aaaa"},{"Value":"QC","Key":"Processing Environment"}]
    console.log("Tags :: " + JSON.stringify(tags,null,2))

    tags.forEach(function(tag){
        if( tag.Key === "Processing Environment"){
            console.log("Key: " + tag.Key)
            console.log("Value: " + tag.Value)
        }
    });

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