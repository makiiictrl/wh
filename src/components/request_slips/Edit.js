import React from "react";
import { Link } from "react-router-dom";

export default Edit = () => {
  return (
    <div className="container nifty-container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0 text-white">Edit Request Slip</h4>
        </div>
        <div className="card-body">
          {/* <%= form_for(@sample_slip_request) do |f| %> */}
          <form>
            {/* <% if @sample_slip_request.errors.present? %>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">
                        <%= pluralize(@sample_slip_request.errors.count, "error") %> prevented this request from being saved:
                        </h4>
                        <ul className="mb-0">
                        <% @sample_slip_request.errors.full_messages.each do |message| %>
                            <li><%= message %></li>
                        <% end %>
                        </ul>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <% end %> */}

            {/* <!-- Request Details Group --> */}
            <div className="mb-4">
              <div className="col-md-12">
                <h5 className="mb-3 border-bottom pb-2">Request Details</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          {/* <%= f.label :company_code %> */}
                          <label>company_code</label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="pli-building"></i>
                            </span>
                            {/* <%= f.select :company_code, LOAD_COMPANY_CODE, {}, { :tabindex => 1, :class => "form-select" } %> */}
                            <select className="form-select">
                              <option value="">Please select...</option>
                              <option value="1">CDCI</option>
                              <option value="2">YSS</option>
                              <option value="5">CYDC</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          {/* <%= f.label :request_number %> */}
                          <label>Request Number</label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="pli-file"></i>
                            </span>
                            {/* <%= f.text_field :request_number, { :tabindex => 1, :class => "form-control", :readonly => true} %> */}
                            <input
                              className="form-control"
                              type="text"
                              tabIndex={1}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {/* <!--<div className="col-md-4">-->
                                <!--<div className="form-group mb-3">-->
                                <!--<#%= f.label :document_type, "Request Type" %>-->
                                <!--<div className="form-group mb-3">-->
                                <!--<div className="input-group">-->
                                <!--<span className="input-group-text">-->
                                <!--<i className="pli-file"></i>-->
                                <!--</span>-->
                                <!--<#%= f.select :document_type, @sample_slip_requests_document_type,-->
                                <!--{ :include_blank => "Please select..." },-->
                                <!--{ :tabindex => 1, :required => true, :class => "form-select" } %>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>--> */}

                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          {/* <%= f.label :type_of_request, "Purpose of Request"%> */}
                          <label>Purpose of Request</label>
                          <div className="form-group mb-3">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="pli-file"></i>
                              </span>
                              {/* <%= f.select :type_of_request, @slip_requests_type_request,
                                                { :include_blank => "Please select..." },
                                                { :tabindex => 1, :required => true, :class => "form-select" } %> */}
                              <select className="form-select">
                                <option value="Sample">Sample</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Commercial"></option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6" id="hidden">
                        <div className="form-group mb-3">
                          <label>Others</label>
                          {/* <%= f.label :sub_type_of_request, "Others"%> */}
                          <div className="form-group mb-3">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="pli-file"></i>
                              </span>
                              {/* <%= f.select :sub_type_of_request, @sub_type_request,
                                                { :include_blank => "Please select..." },
                                                { :tabindex => 1, :class => "form-select" } %> */}
                              <select className="form-select">
                                <option value="">Please select...</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!--<div className="form-group mb-3">--> */}
                    {/* <!--<#%= f.label :request_number %>--> */}
                    {/* <!--<#%= f.text_field :request_number, :class => "form-control", :readonly => true %>--> */}
                    {/* <label>Request Number</label>
                            <input className="form-control" type="text" readOnly/> */}
                    {/* <!--</div>--> */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          {/* <%= f.label :employee_name, "Employee Name" %>
                                <%= f.text_field :employee_name, :class => "form-control", :required => true, :list => "employee_name", :autocomplete => "off"%>
                                <%= f.hidden_field :employee_number %>
                                <%= f.hidden_field :territory_code %>
                                <%= f.hidden_field :team %> */}
                          <label>Employee Name</label>
                          <input
                            className="form-control"
                            type="text"
                            required
                            list="employee_name"
                            autoComplete="off"
                          />
                          <input type="hidden" name="employee_number" />
                          <input type="hidden" name="territory_code" />
                          <input type="hidden" name="team" />
                          <datalist id="employee_name"></datalist>
                          {/* <%= f.hidden_field :request_date, :class => "form-control ",
                                                    :value => @sample_slip_request.request_date, :readonly => true %> */}
                          <input type="hidden" name="request_date" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          {/* <%= f.label :contact_no, "Contact No." %>
                                <%= f.number_field :contact_no, :class => "form-control", :required => true, :autocomplete => "off" %> */}
                          <label>Contact Number</label>
                          <input
                            type="number"
                            className="form-control"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      {/* <%= f.label :customer_name, "Customer"%>
                            <%= f.text_field :customer_name, :class => "form-control", :required => true, :list => "customer_datalist", :autocomplete => "off" %>
                            <%= f.hidden_field :customer_code, :class => "form-control" %> */}
                      <label>Customer</label>
                      <input
                        type="text"
                        className="form-control"
                        name="customer_name"
                        required
                        autoComplete="off"
                        list="customer_datalist"
                      />
                      <input type="hidden" name="customer_code" />
                      <datalist id="customer_datalist"></datalist>
                    </div>
                    <div className="form-group mb-3">
                      {/* <%= f.label :address %>
                            <%= f.text_field :address, :class => "form-control", :required => true, :autocomplete => "off" %> */}
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group mb-3">
                      {/* <%= f.label :request_slip_description, "Request Description" %>
                            <%= f.text_area :request_slip_description, :class => "form-control",
                                            :required => true, :rows => 1, :cols => 200, :autocomplete => "off" %> */}
                      <label>Request Description</label>
                      <textarea
                        type="text"
                        className="form-control"
                        required
                        rows={1}
                        cols={200}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Approval Group --> */}
            <div className="mb-4">
              <h5 className="mb-3 border-bottom pb-2">Approval Details</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    {/* <%= f.label :recommended_by %> */}
                    <label>Recommended by</label>
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="pli-male"></i>
                        </span>
                        {/* <%= f.select :recommended_by, @sample_slip_request_recommended_by,
                                            { :include_blank => "Please select..." },
                                            { :tabindex => 1, :required => true, :class => "form-select" } %> */}
                        <select className="form-control">
                          <option value="">Please select...</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="prepared_by">Prepared by</label>
                    <div className="input-group">
                        <span className="input-group-text">
                        <i className="pli-male"></i>
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        id="prepared_by"
                        name="prepared_by"
                        required
                        readOnly
                        />
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    {/* <%= f.label :endorsed_by %> */}
                    <label>Endorsed by</label>
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="pli-administrator"></i>
                        </span>
                        {/* <%= f.select :endorsed_by, @sample_slip_request_endorsed_by,
                                            { :include_blank => "Please select..." },
                                            { :tabindex => 1, :required => true, :class => "form-select" } %> */}
                        <select className="form-select">
                          <option value="">Please select...</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    {/* <%= f.label :approved_by %> */}
                    <label>Approved by</label>
                    <div className="form-group mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="pli-administrator"></i>
                        </span>
                        {/* <%= f.select :approved_by, @sample_slip_request_approved_by,
                                            { :include_blank => "Please select..." },
                                            { :tabindex => 1, :required => true, :class => "form-select" } %> */}
                        <select className="form-select">
                          <option value="">Please select...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Contact Details Group --> */}
            <div className="mb-4">
              <h5 className="mb-3 border-bottom pb-2">Contact Details</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    {/* <%= f.label :contact_person %>
                            <%= f.text_field :contact_person, :class => "form-control", :required => true, :autocomplete => "off" %> */}
                    <label>Contact Person</label>
                    <input
                      type="text"
                      name="contact_person"
                      className="form-control"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    {/* <%= f.label :designation %>
                            <%= f.text_field :designation, :class => "form-control", :autocomplete => "off" %> */}
                    <label>Designation</label>
                    <input
                      type="text"
                      className="form-select"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Product Details Group --> */}
            <div className="mb-4">
              <h5 className="mb-3 border-bottom pb-2">Product Details</h5>

              {/* <!-- Tabs Navigation --> */}
              <ul className="nav nav-tabs" id="productTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="sample-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sample"
                    type="button"
                    role="tab"
                    aria-controls="sample"
                    aria-selected="true"
                  >
                    Sample
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="promats-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#promats"
                    type="button"
                    role="tab"
                    aria-controls="promats"
                    aria-selected="false"
                  >
                    Promats
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="packmats-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#packmats"
                    type="button"
                    role="tab"
                    aria-controls="packmats"
                    aria-selected="false"
                  >
                    Packmats
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="commercial-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#commercial"
                    type="button"
                    role="tab"
                    aria-controls="commercial"
                    aria-selected="false"
                  >
                    Commercial
                  </button>
                </li>
              </ul>

              <datalist id="sample_products"></datalist>
              <datalist id="promats_products"></datalist>
              <datalist id="packmats_products"></datalist>
              <datalist id="commercial_products"></datalist>

              {/* <!-- Tabs Content --> */}
              <div className="tab-content mt-3" id="productTabsContent">
                <div
                  className="tab-pane fade show active"
                  id="sample"
                  role="tabpanel"
                  aria-labelledby="sample-tab"
                >
                  <table
                    id="TableDetails_Sample"
                    className="table table-bordered table-hover mt-3"
                  >
                    <thead>
                      <tr>
                        <th>Product Description</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <% if @sample_slip_request_details_sample.present? %>
                            <%= hidden_field_tag("DetailCounter",@sample_slip_request_details_sample.count)%>
                            <% @sample_slip_request_details_sample.each do |detail| %> */}
                      <tr>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][product_description]",
                                                    detail["product_description"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="product_description"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][request_quantity]",
                                                    detail["request_quantity"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="request_quantity"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="button"
                            className="btn delete-btn btn-danger bg-danger"
                            id="<%= detail.id %>"
                            value="Delete"
                          />
                        </td>
                      </tr>
                      {/* <% end %> */}
                      {/* <% end %> */}
                    </tbody>
                  </table>

                  <input type="hidden" id="DetailCounterSample" />
                  <input
                    className="addNew btn btn-info"
                    id="addNewSample"
                    name=""
                    type="button"
                    value="Add Row"
                    tabIndex="0"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="promats"
                  role="tabpanel"
                  aria-labelledby="promats-tab"
                >
                  <table
                    id="TableDetails_Promats"
                    className="table table-bordered table-hover mt-3"
                  >
                    <thead>
                      <tr>
                        <th>Product Description</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <% if @sample_slip_request_details_promats.present? %>
                            <%= hidden_field_tag("DetailCounter",@sample_slip_request_details_promats.count)%>
                            <% @sample_slip_request_details_promats.each do |detail| %> */}
                      <tr>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][product_description]",
                                                    detail["product_description"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="product_description"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][request_quantity]",
                                                    detail["request_quantity"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="request_quantity"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="button"
                            className="btn delete-btn btn-danger bg-danger"
                            id="<%= detail.id %>"
                            value="Delete"
                          />
                        </td>
                      </tr>
                      {/* <% end %>
                            <% end %> */}
                    </tbody>
                  </table>
                  <input type="hidden" id="DetailCounterPromats" />
                  <input
                    className="addNew btn btn-info"
                    id="addNew"
                    name=""
                    type="button"
                    value="Add Row"
                    tabIndex="0"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="packmats"
                  role="tabpanel"
                  aria-labelledby="packmats-tab"
                >
                  <table
                    id="TableDetails_Packmats"
                    className="table table-bordered table-hover mt-3"
                  >
                    <thead>
                      <tr>
                        <th>Product Description</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <% if @sample_slip_request_details_packmats.present? %>
                            <%= hidden_field_tag("DetailCounter",@sample_slip_request_details_packmats.count)%>
                            <% @sample_slip_request_details_packmats.each do |detail| %> */}
                      <tr>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][product_description]",
                                                    detail["product_description"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="product_description"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][request_quantity]",
                                                    detail["request_quantity"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="request_quantity"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="button"
                            className="btn delete-btn btn-danger bg-danger"
                            id="<%= detail.id %>"
                            value="Delete"
                          />
                        </td>
                      </tr>
                      {/* <% end %>
                            <% end %> */}
                    </tbody>
                  </table>
                  <input type="hidden" id="DetailCounterPackmats" />
                  <input
                    className="addNew btn btn-info"
                    id="addNew"
                    name=""
                    type="button"
                    value="Add Row"
                    tabIndex="0"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="commercial"
                  role="tabpanel"
                  aria-labelledby="commercial-tab"
                >
                  <table
                    id="TableDetails_Commercial"
                    className="table table-bordered table-hover mt-3"
                  >
                    <thead>
                      <tr>
                        <th>Product Description</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <% if @sample_slip_request_details_commercial.present? %>
                            <%= hidden_field_tag("DetailCounter",@sample_slip_request_details_commercial.count)%>
                            <% @sample_slip_request_details_commercial.each do |detail| %> */}
                      <tr>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][product_description]",
                                                    detail["product_description"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="product_description"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          {/* <%= text_field_tag "sample_slip_request_details[][request_quantity]",
                                                    detail["request_quantity"], :class => "form-control", :disabled => true %> */}
                          <input
                            type="text"
                            name="request_quantity"
                            className="form-control"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="button"
                            className="btn delete-btn btn-danger bg-danger"
                            id="<%= detail.id %>"
                            value="Delete"
                          />
                        </td>
                      </tr>
                      {/* <% end %>
                            <% end %> */}
                    </tbody>
                  </table>
                  <input type="hidden" id="DetailCounterCommercial" />
                  <input
                    className="addNew btn btn-info"
                    id="addNew"
                    name=""
                    type="button"
                    value="Add Row"
                    tabIndex="0"
                  />
                </div>
              </div>
            </div>

            {/* <!--<div className="mb-3 text-start">-->
                    <!--<input className="addNew btn btn-info" id="addNew" name="" type="button" value="Add Row" tabindex = "0">-->
                    <!--</div>-->
                    <!--</div>-->

                    <!-- Submit Button --> */}
            <div className="d-flex justify-content-between">
              {/* <%= link_to "Back", sample_slip_requests_path, :class => "btn btn-secondary" %>
                    <%= f.submit "Save Request Slip", :class => "btn btn-success" %> */}
              <Link to="/request_slips" className="btn btn-secondary">Back</Link>
              <Link to="" className="btn btn-success">Save Request Slip</Link>
            </div>
          </form>
          {/* // <% end %> */}
        </div>
      </div>
    </div>
  );
};
