import React from "react";
import { Link } from "react-router-dom";

export default Edit = () => {
    return(
        <div class="container mt-4">
            <div class="card">
                <div class="card-header bg-primary text-white">
                <h4 class="mb-0 text-white">Transfer Slip</h4>
                </div>
                <div class="card-body">
                {/* <%= form_for(@transfer_slip, :html => { :class => "form-horizontal" }) do |f| %> */}
                <form>

                    {/* <% if @transfer_slip.errors.any? %>
                    <div class="alert alert-danger">
                        <h4><%= pluralize(@transfer_slip.errors.count, "error") %> prohibited this transfer slip from being saved:</h4>
                        <ul>
                        <% @transfer_slip.errors.full_messages.each do |msg| %>
                            <li><%= msg %></li>
                        <% end %>
                        </ul>
                    </div>
                    <% end %> */}

                    {/* <!-- Transfer Slip Details Section --> */}
                    <div class="mb-4">
                    <h5 class="mb-3 border-bottom pb-2">Transfer Slip Details</h5>
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group mb-3">
                            {/* <%= f.label :company_code, "Company" %> */}
                            <label>Company</label>
                            <div class="input-group">
                                <span class="input-group-text">
                                <i class="pli-building"></i>
                                </span>
                            {/* <%= f.select :company_code, LOAD_COMPANY_CODE, { :prompt => "Please select..." }, { :class => "form-select", :tabindex => 1 } %> */}
                                <select className="form-select">
                                    <option value=""></option>
                                    <option value="1">CDCI</option>
                                    <option value="5">CYDC</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            {/* <%= f.label :transfer_slip_number %> */}
                            {/* <%= f.text_field :transfer_slip_number, :class => "form-control", :tabindex => 1 %> */}
                            <label>Transfer Slip Number</label>
                            <input type="number" className="form-control" />
                        </div>

                        <div class="form-group mb-3">
                            {/* <%= f.label :transfer_to, "To" %> */}
                            {/* <%= f.select :transfer_to, LOAD_COMPANY_CODE, { :prompt => "Please select..." }, { :class => "form-select", :tabindex => 1 } %> */}
                            <label>Company Code</label>
                            <select className="form-select">
                                <option value=""></option>
                                <option value="1">CDCI</option>
                                <option value="5">CYDC</option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            {/* <%= f.label :received_by %>
                            <%= f.text_field :received_by, :class => "form-control", :tabindex => 1 %> */}
                            <label>Received by:</label>
                            <input className="form-control" type="date"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="col-md-12">
                            <div class="form-group mb-3">
                            {/* <%= f.label :transfer_slip_type %> */}
                            <label>Transfer Slip Type</label>
                            <div class="form-group mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="pli-file"></i>
                                    </span>
                                {/* <%= f.select :transfer_slip_type, @transfer_slips_receiving_type, { :include_blank => "Please select..." }, { :class => "form-select", :tabindex => 1 } %> */}
                                {/* <%= f.text_field :transfer_slip_type_other, :class => "form-control mt-2", :tabindex => 1 %> */}
                                    <select className="form-select">
                                        <option value="">Please select...</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            {/* <%= f.label :transferred_by %>
                            <%= f.select :transferred_by, @warehouse_personnels, { :include_blank => "Please select..." }, { :class => "form-select", :tabindex => 1 } %> */}
                            <label>Transferred by:</label>
                            <select className="form-select">
                                <option value="">Please select...</option>
                                <option value=""></option>
                            </select>
                        </div>

                        <div class="form-group mb-3">
                            {/* <%= f.label :transferred_by_date %> */}
                            <label>Transferred by date:</label>
                            <input id="transfer_slip_transferred_by_date" name="transfer_slip[transferred_by_date]" type="date" value="<%= @transfer_slip.transferred_by_date %>" class="form-control"/>
                        </div>

                        <div class="form-group mb-3">
                            {/* <%= f.label :received_date %> */}
                            <label>Transferred by date:</label>
                            <input id="transfer_slip_received_by_date" name="transfer_slip[received_by_date]" type="date" value="<%= @transfer_slip.received_by_date %>" class="form-control"/>
                        </div>

                        </div>

                    </div>
                    </div>

                    {/* <!-- Items Details Section --> */}
                    <div class="mb-4">
                    <h5 class="mb-3 border-bottom pb-2">Items Details</h5>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover" id="TableDetails">
                        <thead>
                            <tr>
                            <th>LOT NUMBER</th>
                            <th>ITEMS</th>
                            <th>MFG. DATE</th>
                            <th>EXP DATE</th>
                            <th>QUANTITY</th>
                            <th>J.O. NO.</th>
                            <th>REMARKS</th>
                            <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <%= hidden_field_tag("DetailCounter", @transfer_slip_details.any? ? @transfer_slip_details.count : 1) %>
                            <% if @transfer_slip_details.any? %>
                            <% i = 0 %>
                            <% @transfer_slip_details.each do |details| %>
                                <% i += 1 %> */}
                                <tr>
                                <td>
                                    {/* <%= text_field_tag("transfer_slip_detail[][lot_number]", details["lot_number"], :class => "form-control transfer_slips_lot_number", :placeholder => "LOT NUMBER", :tabindex => 0) %> */}
                                    <input type="text" className="form-control transfer_slips_lot_number" placeholder="Lot Number" tabIndex={0}/>
                                </td>
                                <td>
                                    {/* <%= text_field_tag("transfer_slip_detail[][product_description]", details["product_description"], :class => "form-control select_product_description", :placeholder => "ITEMS", :tabindex => 0) %> */}
                                    <input type="text" className="form-control transfer_slips_product_description" placeholder="Product Description" tabIndex={0}/>
                                </td>
                                <td>
                                    <input name="transfer_slip_detail[][manufacturing_date]" id="transfer_slip_detail_manufacturing_date" type="date" tabindex="0" value="" class="form-control"/>
                                </td>
                                <td>
                                    <input name="transfer_slip_detail[][expiry_date]" id="transfer_slip_detail_expiry_date" type="date" tabindex="0" value="" class="form-control"/>
                                </td>
                                <td>
                                    {/* <%= text_field_tag("transfer_slip_detail[][quantity]", details["quantity"], :class => "form-control transfer_slip_detail_quantity", :placeholder => "QUANTITY", :tabindex => 0) %> */}
                                    <input type="text" className="form-control transfer_slips_quantity" placeholder="Quantity" tabIndex={0}/>
                                </td>
                                <td>
                                    {/* <%= text_field_tag("transfer_slip_detail[][job_order_number]", details["job_order_number"], :class => "form-control transfer_slip_detail_job_order_number", :placeholder => "J.O. NO.", :tabindex => 0) %> */}
                                    <input type="text" className="form-control transfer_slips_job_order_number" placeholder="Job Order Number" tabIndex={0}/>
                                </td>
                                <td>
                                    {/* <%= text_field_tag("transfer_slip_detail[][remarks]", details["remarks"], :class => "form-control transfer_slip_detail_remarks", :placeholder => "REMARKS", :tabindex => 0) %> */}
                                    <input type="text" className="form-control transfer_slips_remarks" placeholder="Remarks" tabIndex={0}/>
                                </td>
                                <td class="text-center">
                                    <input class="btn btn-danger" id="deleteDetails<%= i %>" type="button" value="Delete"/>
                                </td>
                                </tr>
                            {/* <% end %>
                            <% else %> */}
                            <tr>
                                <td>
                                {/* <%= text_field_tag("transfer_slip_detail[][lot_number]", "", :class => "form-control transfer_slips_lot_number", :placeholder => "LOT NUMBER", :tabindex => 0) %> */}
                                <input type="text" className="form-control transfer_slips_lot_number" placeholder="Lot Number" tabIndex={0}/>
                                </td>
                                <td>
                                {/* <%= text_field_tag("transfer_slip_detail[][product_description]", "", :class => "form-control select_product_description", :placeholder => "ITEMS", :tabindex => 0) %> */}
                                <input type="text" className="form-control transfer_slips_select_product_description" placeholder="Select Product Description" tabIndex={0}/>
                                </td>
                                <td>
                                {/* <input name="transfer_slip_detail[][manufacturing_date]" id="transfer_slip_detail_manufacturing_date" type="date" tabindex="0" class="form-control"> */}
                                <input type="text" className="form-control transfer_slips_manufacturing_date" placeholder="Manufacturing Date" tabIndex={0}/>
                                </td>
                                <td>
                                <input name="transfer_slip_detail[][expiry_date]" id="transfer_slip_detail_expiry_date" type="date" tabindex="0" class="form-control"/>
                                </td>
                                <td>
                                {/* <%= text_field_tag("transfer_slip_detail[][quantity]", "", :class => "form-control transfer_slip_detail_quantity", :placeholder => "QUANTITY", :tabindex => 0) %> */}
                                <input type="text" className="form-control transfer_slips_quantity" placeholder="Quantity" tabIndex={0}/>
                                </td>
                                <td>
                                {/* <%= text_field_tag("transfer_slip_detail[][job_order_number]", "", :class => "form-control transfer_slip_detail_job_order_number", :placeholder => "J.O. NO.", :tabindex => 0) %> */}
                                <input type="text" className="form-control transfer_slips_job_order_number" placeholder="Job Order Number" tabIndex={0}/>
                                </td>
                                <td>
                                {/* <%= text_field_tag("transfer_slip_detail[][remarks]", "", :class => "form-control transfer_slip_detail_remarks", :placeholder => "REMARKS", :tabindex => 0) %> */}
                                <input type="text" className="form-control transfer_slips_remarks" placeholder="Remarks" tabIndex={0}/>
                                </td>
                                <td class="text-center">
                                <input class="btn btn-danger" id="deleteDetails<%= i %>" type="button" value="Delete"/>
                                </td>
                            </tr>
                            {/* <% end %> */}
                        </tbody>
                        </table>
                        <input class="btn btn-info" id="addNew" type="button" value="Add Row" tabindex="0"/>
                    </div>
                    </div>

                    {/* // <!-- Submit and Back Buttons --> */}
                    <div class="d-flex justify-content-between">
                    {/* <%= link_to "Back", transfer_slips_path, :class => "btn btn-secondary" %> */}
                    {/* <%= f.submit "Save Transfer Slip", :class => "btn btn-success", :tabindex => 0 %> */}
                    <Link to="/transfer_slips/" className="btn btn-secondary">Back</Link>
                    <Link className="btn btn-success">Save Transfer Slip</Link>
                    </div>

                {/* //   <% end %> */}
                </form>
                </div>
            </div>
            </div>
    );
}