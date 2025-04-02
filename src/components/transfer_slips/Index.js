import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default Index = () => {
      const [isShowOpen, setIsShowOpen] = useState(false);
    
  return (
    <div class="card m-3 p-3">
      <h3 class="text-primary">Listing Transfer Slip</h3>
      <form method="get" action="/transfer_slips" class="mb-4">
        <div class="row">
          <div class="col-md-2">
            <div class="form-group">
              <label>Company Code :</label>
              {/* <%= select_tag('choose_company_code', options_for_select(LOAD_COMPANY_CODE, @company_code_selected), prompt: "Please select...", class: "form-select") %> */}
              <select className="form-select">
                <option value="">Please select...</option>
                <option value="1">CDCI</option>
                <option value="5">CYDC</option>
                <option value="2">YSS</option>
            </select>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>TS Number:</label>
              <input
                id="ts_number"
                name="ts_number"
                type="text"
                value=""
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>TS Type:</label>
              {/* <%= select_tag('transfer_slip_type', options_for_select(@transfer_slips_receiving_type, @transfer_slip_type), prompt: "Please select...", class: "form-select") %> */}
              <select className="form-select">
                <option value="">Please select...</option>
                <option value="Commercial">Commercial</option>
                <option value="Sample">Sample</option>
                <option value="Other">Other</option>
            </select>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Lot Number:</label>
              <input
                id="transfer_slip_lot_number"
                name="transfer_slip_lot_number"
                type="text"
                value=""
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group mt-3 d-flex align-items-center">
              <button type="submit" class="btn btn-primary text-nowrap me-2">
                Show Transfer slips
              </button>
              <button
                id="clear_filter"
                type="button"
                class="btn btn-secondary text-nowrap ml-3"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
        {/* <!--<div class="form-group mt-3 d-flex align-items-center">-->
            <!--&lt;!&ndash;<button id="print_transfer_slips_blank" type="button" class="btn btn-primary"&ndash;&gt;-->
                    <!--&lt;!&ndash;data-print-url="<#%= transfer_slips_print_path(format: :pdf) %>">&ndash;&gt;-->
                <!--&lt;!&ndash;Print Blank Transfer Slip&ndash;&gt;-->
            <!--&lt;!&ndash;</button>&ndash;&gt;-->
            <!--</div>--> */}
        <div></div>
      </form>

      <div class="card">
        <div class="card-header bg-primary text-white d-flex align-items-center justify-content-between py-2 px-3">
          <h5 class="mb-0 text-white">Transfer Slip</h5>
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

            {/* <%= link_to 'New Transfer Slip', new_transfer_slip_path, class: "btn btn-success" %> */}

            <div class="d-flex align-items-center">
              <button
                class="btn btn-light"
                type="button"
                id="print_transfer_slips_blank"
                title="Print Blank Transfer Slip"
              >
                <i class="psi-printer" aria-hidden="true"></i>
                <span class="visually-hidden">Manage</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Comp</th>
                <th>TS Number</th>
                <th>TS Type</th>
                <th>To</th>
                <th>Transferred</th>
                <th>Transferred Date</th>
                <th>Received</th>
                <th>Received Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <% @transfer_slips.each do |transfer_slip| %>
                <% transfer_slip_transferred_by_date = transfer_slip.transferred_by_date.present? ? Date.parse(transfer_slip.transferred_by_date.to_s).strftime("%m/%d/%Y") : "" %>
                <% transfer_slip_received_by_date = transfer_slip.received_by_date.present? ? Date.parse(transfer_slip.received_by_date.to_s).strftime("%m/%d/%Y") : "" %> */}
              <tr>
                {/* <td><%= LOAD_COMPANY_CODE_SELECT[transfer_slip.company_code.to_s] %></td>
                    <td><%= transfer_slip.transfer_slip_number %></td>
                    <td><%= transfer_slip.transfer_slip_type %></td>
                    <td><%= LOAD_COMPANY_CODE_SELECT[transfer_slip.transfer_to.to_s] %></td>
                    <td><%= transfer_slip.transferred_by %></td>
                    <td><%= transfer_slip_transferred_by_date %></td>
                    <td><%= transfer_slip.received_by %></td>
                    <td><%= transfer_slip_received_by_date %></td> */}
                    <td>company_code</td>
                    <td>transfer_slip_number</td>
                    <td>transfer_slip_type</td>
                    <td>transfer_to</td>
                    <td>transfer_by</td>
                    <td>transfer_by_date</td>
                    <td>received_by</td>
                    <td>received_by_date</td>
                <td class="d-flex align-items-center">
                  {/* <%= link_to 'Show', transfer_slip, class: "btn btn-info me-1 btn-sm", :title => "Show" %>
                    <%= link_to 'Edit', edit_transfer_slip_path(transfer_slip), class: "btn btn-warning me-1 btn-sm", :title => "Edit" %>
                    <%= link_to "Print", transfer_slips_print_path(:format=>:pdf, :transfer_slip_id => "#{transfer_slip.id}"), :class => 'btn btn-light btn-sm me-1', :target => "_blank", :title =>  "Print" %>
                    <% if current_agent.admin %>
                        <%= button_to 'Delete', transfer_slip_path(transfer_slip), method: :delete, class: "btn btn-danger btn-sm", data: { confirm: 'Are you sure you want to delete this transfer slip?' }, :title => "Delete" %>
                    <% end %> */}

                    <Link to="/transfer_slips/show" className="btn btn-info me-1 btn-sm">Show</Link>
                    <Link to="/transfer_slips/edit" className="btn btn-warning me-1 btn-sm">Edit</Link>
                    <Link to="/transfer_slips/print" className="btn btn-light me-1 btn-sm">Print</Link>
                    <Link className="btn btn-danger btn-sm">Delete</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- Pagination --> */}
      <nav class="d-flex justify-content-center mt-4">
        {/* <%= paginate @transfer_slips, class: "pagination justify-content-center" %> */}
      </nav>
    </div>
  );
};
