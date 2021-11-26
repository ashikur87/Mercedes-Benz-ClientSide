import React from 'react';

import Edit from '../../../images/edit 1.png'

const OrderListDetails = ({ list }) => {
    console.log(list);
    let { _id } = list._id



    return (



        <tbody >
            <tr id="delete">
                <td>{list.displayName}</td>
                <td>{list.email}</td>
                <td>{list.title}</td>
                <td>{list.payWith}</td>
                <td>{list.status}</td>
                <td>

                    
                    <img src={Edit} width="25px" data-toggle="modal" data-target="#staticBackdrop" />
                </td>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Current Position</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Status</label>
                                    <select class="form-control" id="exampleFormControlSelect1" >
                                        <option  >Pending</option>
                                        <option >OnGoing</option>
                                        <option  >Done</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        </tbody>
    );
};

export default OrderListDetails;