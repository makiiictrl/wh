import React from "react";
import { Link } from "react-router-dom";

export default Show = () => {
    return(
        <div class="container">
        <div class="card mt-4">
          <div class="card-header bg-primary text-white">
            <h4 class="mb-0 text-white">Transfer Slip Information</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <tbody>
                <tr>
                  <th>Company</th>
                  {/* <td><%= LOAD_COMPANY_CODE_SELECT[@transfer_slip.company_code.to_s] %></td> */}
                  <td>company_code</td>
                </tr>
                <tr>
                  <th>TS Number</th>
                  {/* <td><%= @transfer_slip.transfer_slip_number %></td> */}
                  <td>transfer_slip_number</td>
                </tr>
                <tr>
                  <th>TS Type</th>
                  {/* <td><%= @transfer_slip.transfer_slip_type %></td> */}
                  <td>transfer_slip_type</td>
                </tr>
                <tr>
                  <th>TO</th>
                  {/* <td><%= LOAD_COMPANY_CODE_SELECT[@transfer_slip.transfer_to.to_s] %></td> */}
                    <td>transfer_to</td>
                </tr>
                <tr>
                  {/* <% transferred_date = @transfer_slip.transferred_by_date.present? ? Date.parse(@transfer_slip.transferred_by_date.to_s).strftime("%m/%d/%Y") : "" %> */}
                  <th>Transferred</th>
                  {/* <td><%= @transfer_slip.transferred_by %> : <%= transferred_date %></td> */}
                    <td>transferred_date</td>
                </tr>
                <tr>
                  {/* <% received_date  = @transfer_slip.received_by_date.present? ? Date.parse(@transfer_slip.received_by_date.to_s).strftime("%m/%d/%Y") : "" %> */}
                  <th>Received</th>
                  {/* <td><%= @transfer_slip.received_by %> : <%= received_date %></td> */}
                    <td>received_date</td>
                </tr>
                </tbody>
              </table>
            </div>
    
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead class="thead-light">
                  <tr>
                    <th>ITEMS</th>
                    <th>LOT NUMBER</th>
                    <th>MFG. DATE</th>
                    <th>EXP DATE</th>
                    <th class="text-right">QUANTITY</th>
                    <th nowrap>J.O. NO.</th>
                    <th>REMARKS</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <% if @transfer_slip_details.any? %>
                    <% @transfer_slip_details.each do |detail| %>
                      <% mfg_date  = detail["manufacturing_date"].present? ? Date.parse(detail["manufacturing_date"].to_s).strftime("%m/%d/%Y") : "" %>
                      <% exp_date  = detail["expiry_date"].present? ? Date.parse(detail["expiry_date"].to_s).strftime("%m/%d/%Y") : "" %> */}
                      <tr>
                        {/* <td><%= detail["product_description"] %></td>
                        <td><%= detail["lot_number"] %></td>
                        <td><%= mfg_date %></td>
                        <td><%= exp_date %></td>
                        <td class="text-right"><%= number_with_precision(detail["quantity"], precision: 2, separator: '.', delimiter: ',') %></td>
                        <td nowrap><%= detail["job_order_number"] %></td>
                        <td><%= detail["remarks"] %></td> */}

                        <td>product_description</td>
                        <td>lot_number</td>
                        <td>mfg_date</td>
                        <td>exp_date</td>
                        <td>quantity</td>
                        <td>job_order_number</td>
                        <td>remarks</td>
                      </tr>
                    {/* <% end %>
                  <% end %> */}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <Link to="/transfer_slips" className="btn btn-secondary">Back</Link>
                </div>
                <div>
                    <Link to="" className="btn btn-primary me-2">Print</Link>
                    <Link to="/transfer_slips/edit" className="btn btn-warning">Edit</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}