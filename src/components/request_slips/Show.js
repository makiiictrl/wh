import React from "react";
import { Link } from "react-router-dom";

export default Show = () => {
    return(
        <div class="container nifty-container mt-4">
            <div class="card">
            <div class="card-header bg-primary text-white">
                <h4 class="mb-0 text-white">Slip Request Details</h4>
            </div>
            <div class="card-body">
                {/* <!-- Request Information Table --> */}
                <div class="table-responsive mb-4">
                <table class="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <th>Company:</th>
                        {/* <td><%= LOAD_COMPANY_CODE_SELECT[@sample_slip_request.company_code.to_s] %></td> */}
                        <td>company_code</td>

                    </tr>
                    {/* <!--<tr>--> */}
                        {/* <!--<th>Document type:</th>--> */}
                        {/* <!--<td><#%= @sample_slip_request.document_type %></td>--> */}
                    {/* <!--</tr>--> */}
                    <tr>
                        <th>Request number:</th>
                        <td>request_number
                        {/* <%= @sample_slip_request.request_number %> */}
                        <input type="hidden" id="request-slip-id" value="<%= @sample_slip_request.request_number %>"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Request date:</th>
                        <td>request_date</td>
                        {/* <td><%= @sample_slip_request.request_date %></td> */}
                    </tr>
                    <tr>
                        <th>Customer:</th>
                        <td>customer</td>
                        {/* <td><%= @sample_slip_request.customer_code %> <%= @sample_slip_request.customer_name %></td> */}
                    </tr>
                    <tr>
                        <th>Address:</th>
                        <td>address</td>
                        {/* <td><%= @sample_slip_request.address %></td> */}
                    </tr>
                    <tr>
                        <th>Employee name:</th>
                        <td>employee_name</td>
                        {/* <td><%= @sample_slip_request.employee_number %> <%= @sample_slip_request.employee_name %></td> */}
                    </tr>
                    <tr>
                        <th>Contact person:</th>
                        <td>contact_person</td>
                        {/* <td><%= @sample_slip_request.contact_person %></td> */}
                    </tr>
                    <tr>
                        <th>Designation:</th>
                        <td>destination</td>
                        {/* <td><%= @sample_slip_request.designation %></td> */}
                    </tr>
                    <tr>
                        <th>Contact no:</th>
                        <td>contact_number</td>
                        {/* <td><%= @sample_slip_request.contact_no %></td> */}
                    </tr>
                    <tr>
                        <th>Purpose of request:</th>
                        <td>type_of_request
                        {/* <%= @sample_slip_request.type_of_request %> */}
                        {/* <%= " (#{@sample_slip_request.sub_type_of_request})" if @sample_slip_request.sub_type_of_request.present? %> */}
                        </td>
                    </tr>
                    <tr>
                        <th>Request description:</th>
                        <td>request_slip_description</td>
                        {/* <td><%= @sample_slip_request.request_slip_description %></td> */}
                    </tr>
                    <tr>
                        <th>Prepared by:</th>
                        <td>prepared_by</td>
                        {/* <td><%= @sample_slip_request.prepared_by %></td> */}
                    </tr>
                    <tr>
                        <th>Recommended by:</th>
                        <td>recommended_by</td>
                        {/* <td><%= @sample_slip_request.recommended_by %></td> */}
                    </tr>
                    <tr>
                        <th>Endorsed by:</th>
                        <td>endorsed_by</td>
                        {/* <td><%= @sample_slip_request.endorsed_by %></td> */}
                    </tr>
                    <tr>
                        <th>Approved by:</th>
                        <td>approved_by</td>
                        {/* <td><%= @sample_slip_request.approved_by %></td> */}
                    </tr>
                    </tbody>
                </table>
                </div>

                {/* <!-- Product Details Table --> */}
                <div class="table-responsive mb-4">
                <h5 class="mb-3 border-bottom pb-2">Product Details</h5>
                <table id="TableDetails" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Item Description</th>
                        <th>Request Type</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <% if @sample_slip_request_details.any? %> */}
                        {/* <% @sample_slip_request_details.each do |detail| %> */}
                        <tr>
                            {/* <td><%= detail["product_description"] %></td>
                            <td><%= detail["issue_slip_type"] %></td> */}
                            <td>product_description</td>
                            <td>issue_slip_type</td>
                            <td nowrap>
                            {/* <%= number_with_precision(detail["request_quantity"], precision: 0, separator: '.', delimiter: ',') %> */}
                            request_number
                            </td>
                        </tr>
                        {/* <% end %> */}
                    {/* <% else %> */}
                        <tr>
                        <td colspan="3" class="text-center pt-4">
                            <p>No Records of Sample Slip Request Details</p>
                        </td>
                        </tr>
                    {/* <% end %> */}
                    </tbody>
                </table>
                </div>

                {/* <!-- Action Buttons --> */}
                <div class="d-flex justify-content-between">
                {/* <%= link_to 'Back', sample_slip_requests_path, class: 'btn btn-secondary' %> */}
                <Link to="/request_slips" className="btn btn-secondary">Back</Link>
                <div>
                    {/* <%= link_to 'Edit', edit_sample_slip_request_path(@sample_slip_request), class: 'btn btn-warning' %> */}
                    <Link to="/request_slips/edit" className="btn btn-warning me-2">Edit</Link>
                    <input type="button" class="btn btn-info" id="print-request-slip" value="Print"/>
                </div>

                </div>
            </div>
            </div>
        </div>
    )
}