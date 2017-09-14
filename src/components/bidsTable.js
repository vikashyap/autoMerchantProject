import React  from 'react';
const BidsTable = (props) => {
  console.log(props)
   const row = props.data.map((items,key) =>
          <tr key = {key}>
          <td>{items.id}</td>
          <td>{items.carTitle}</td>
          <td>{items.amount}</td>
          {props.action && <td><i onClick={props.self.openModal.bind(this,key)} className=" merchantIcon fa fa-trash fa-2x"></i></td>}
         {!props.action &&<td>{items.created}</td>}
         </tr>
        );
    return (
<fieldset className="basicInfo">
           <section>
                      <div className="tbl-header">
                        <table cellPadding="0" cellSpacing="0">
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Car Title</th>  
                              <th>Amount</th>
                              {!props.action && <th>Created</th>}
                              {props.action && <th>Actions</th>}
                             </tr>
                          </thead>
                        </table>
                      </div>
                      <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                           {row}
                          </tbody>
                        </table>
                      </div>
              </section>
        </fieldset>
        )
      }
export default BidsTable;