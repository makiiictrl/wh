import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default Index = () => {
    const [isShowOpen, setIsShowOpen] = useState(false);
    return(
        <div class="card m-3 p-3">
    <h3 class="text-primary">Listing Request Slip</h3>
    <form method="get" action="/sample_slip_requests" class="mb-4">
      <div class="row">
        <div class="col-md-2">
          <div class="form-group">
            <label for="request_number">Request Number:</label>
            <input id="request_number" name="request_number" type="text" class="form-control" value=""/>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="request_date">Request Date:</label>
            <input id="request_date" name="request_date" type="date" class="form-control" value=""/>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group mt-3 d-flex align-items-center">
            <button type="submit" class="btn btn-primary text-nowrap me-2">Show Request Slip</button>
            <button id="clear_filter" type="button" class="btn btn-secondary ml-3 text-nowrap">Clear Filter</button>
          </div>
        </div>


        {/* <!--<div class="col-md-2 mt-3">--> */}
          {/* <!--<#%= link_to 'New Request Slip', new_sample_slip_request_path, class: 'btn btn-success ml-3' %>--> */}
        {/* <!--</div>--> */}
    
      </div>
    </form>

    <div class="card">
      <div class="card-header bg-primary d-flex align-items-center justify-content-between py-2 px-3">
        <h5 class="mb-0 text-white">Slip Requests</h5>

        <div class="d-flex align-items-center ms-auto gap-2">
        <div className="btn-group">
              <button
                type="button"
                className={`btn btn-light dropdown-toggle btn-md ${
                  isShowOpen ? "show" : ""
                }`}
                onClick={() => setIsShowOpen((prev) => !prev)}
                onBlur={() => setIsShowOpen((prev) => !prev)}
                aria-expanded={isShowOpen}
              >
                Show only
              </button>
              <ul
                className={`dropdown-menu ${isShowOpen ? "show" : ""}`}
                style={{
                  position: "absolute",
                  inset: "40px auto auto 0px",
                  margin: "0px",
                  // width: 'fit-content',
                  minWidth: "105px",
                  transform: isShowOpen
                    ? "translateY(0px)"
                    : "translateY(20px)",
                  opacity: isShowOpen ? 1 : 0,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
                data-popper-placement="bottom-start"
              >
                {/* <li><%= link_to "1", new_agent_user_menu_path(per_page: 1, agent_id: @agent_id, menu_description: @menu_description), class: "dropdown-item", data: { turbo: "false" } %></li>
                    <li><%= link_to "2", new_agent_user_menu_path(per_page: 1, agent_id: @agent_id, menu_description: @menu_description), class: "dropdown-item", data: { turbo: "false" } %></li>
                    <li><%= link_to "5", new_agent_user_menu_path(per_page: 1, agent_id: @agent_id, menu_description: @menu_description), class: "dropdown-item", data: { turbo: "false" } %></li> */}
                <li className="dropdown-item">10</li>
                <li className="dropdown-item">30</li>
                <li className="dropdown-item">50</li>
              </ul>
            </div>
          {/* <%= link_to 'New Request Slip', new_sample_slip_request_path, class: 'btn btn-success btn-md' %> */}
          <Link to="/request_slip/new" className="btn btn-success" >New Request Slip</Link>

        </div>
      </div>


      <div class="card-body">
        <table class="table table-striped table-bordered table-hover">
          <thead>
          <tr>
              {/* <!--<th>#</th>--> */}
              <th>Comp</th>
              {/* <!--<th>Document Type</th>--> */}
              <th>Request Number</th>
              <th>Request Date</th>
              <th>Employee Name</th>
              <th>Address</th>
              <th>Purpose of Request</th>
              {/* <!--<th>Request Description</th>--> */}
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <% @sample_slip_requests.each_with_index do |sample_slip_request, index| %> */}
              <tr>
                {/* <!--<td><#%= ((@sample_slip_requests.current_page - 1) * @sample_slip_requests.limit_value) + index + 1 %></td>--> */}
                {/* <% if sample_slip_request.company_code == 1 %> */}
                    <td>company_code</td>
                {/* <% else %> */}
                    {/* <td>CYDC</td> */}
                {/* <% end %> */}
                {/* <!--<td><#%= sample_slip_request.document_type %></td>--> */}
                {/* {/* <td><%= sample_slip_request.request_number %></td> */} 
                {/* <td><%= sample_slip_request.request_date %></td> */}
                {/* <td><%= sample_slip_request.employee_name %></td> */}
                {/* <td><%= sample_slip_request.address %></td> */}
                <td>request_number</td>
                <td>request_date</td>
                <td>employee_name</td>
                <td>employee_address</td>
                <td>
                    type_of_request+sub_type_of_request
                  {/* <%= sample_slip_request.type_of_request %> */}
                  {/* <%= sample_slip_request.sub_type_of_request %> */}
                </td>
                {/* <!--<td><#%= sample_slip_request.request_slip_description %></td>--> */}
                <td class="d-flex align-items-center">
                  {/* <%= link_to 'Show', sample_slip_request, class: 'btn btn-info btn-sm' %> */}
                  {/* <%= link_to 'Edit', edit_sample_slip_request_path(sample_slip_request), class: 'btn btn-warning btn-sm ms-2' %> */}
                  <Link to="/request_slips/show" className="btn btn-info btn-sm">Show</Link>
                  <Link to="/request_slips/edit" className="btn btn-warning btn-sm ms-2">Edit</Link>
                </td>
              </tr>
            {/* <% end %> */}
          </tbody>
        </table>
      </div>
    </div>
    {/* <!-- Pagination --> */}
    <nav class="d-flex justify-content-center mt-4">
      {/* <%= paginate @sample_slip_requests, class: "pagination justify-content-center" %> */}
    </nav>
  </div>
    )
}