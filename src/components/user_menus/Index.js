import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default Index = () => {
  const [isShowOpen, setIsShowOpen] = useState(false);

  return (
    <div className="card m-3 p-3">
      <h3 className="text-primary">Listing of Agent User Menu</h3>
      <form method="get" action="/agent_user_menus" className="mb-4">
        <div className="row">
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="agent_id">Agent ID:</label>
              {/* <input id="agent_id" name="agent_id" type="text" className="form-control" value="<%= @agent_id %>"/> */}
              <input
                id="agent_id"
                name="agent_id"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="menu_description">Menu Description:</label>
              {/* <input id="menu_description" name="menu_description" type="text" className="form-control" value="<%= @menu_description %>"/> */}
              <input
                id="menu_description"
                name="menu_description"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group mt-3 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-primary text-nowrap me-2"
              >
                Show Agent User Menu
              </button>
              <button
                id="clear_filter"
                type="button"
                className="btn btn-secondary ml-3 text-nowrap"
              >
                Clear Filter
              </button>
            </div>
          </div>

          {/* <!--<div className="col-md-2 mt-3">--> */}
          {/* <!--<#%= link_to 'New Request Slip', new_sample_slip_request_path, class: 'btn btn-success ml-3' %>--> */}
          {/* <!--</div>--> */}
        </div>
      </form>

      <div className="card">
        <div className="card-header bg-primary d-flex align-items-center justify-content-between py-2 px-3">
          <h5 className="mb-0 text-white">Agent User</h5>

          <div className="d-flex align-items-center ms-auto gap-2">
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
            {/* <% if current_agent.email == "norberto.ortiz@cathaydrug.com" || current_agent.email.to_s == "michael.medina@cathaydrug.com" %>
                    <%= link_to 'New Agent User Menu', new_agent_user_menu_path, class: 'btn btn-success btn-md' %>
                <% end %> */}
            <Link to="/agent_user_menus/new" className="btn btn-success btn-md">
              New Agent User Menu
            </Link>
          </div>
        </div>

        <div className="card-body">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Agent ID</th>
                {/* <!--<th>User Name</th>--> */}
                <th>Menu ID</th>
                <th>Menu Description</th>
                <th>Create</th>
                <th>Read</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Print</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <% @agent_user_menus.each_with_index do |agent_user_menu, index| %> */}
              <tr>
                {/* <td><%= agent_user_menu.agent_id %></td> */}
                <td>agent_id</td>
                {/* <!--<td nowrap><#%= agent_user_menu.email %></td>--> */}

                {/* <td><%= agent_user_menu.agent_menu_id %></td> */}
                <td>agent_menu_id</td>
                {/* <td nowrap><%= agent_user_menu.menu %></td> */}
                <td>menu</td>

                {/* <td><%= agent_user_menu.user_create == 1 ? "YES" : "NO" %></td> */}
                <td>YES/NO</td>
                <td>YES/NO</td>
                <td>YES/NO</td>
                <td>YES/NO</td>
                <td>YES/NO</td>

                {/* <td><%= agent_user_menu.user_read == 1 ? "YES" : "NO" %></td>
                    <td><%= agent_user_menu.user_update == 1 ? "YES" : "NO" %></td>
                    <td><%= agent_user_menu.user_delete == 1 ? "YES" : "NO" %></td>
                    <td><%= agent_user_menu.user_print == 1 ? "YES" : "NO" %></td> */}
                <td className="d-flex align-items-center">
                  {/* <% if current_agent.email == "norberto.ortiz@cathaydrug.com" || current_agent.email.to_s == "michael.medina@cathaydrug.com" %>
                            <%= link_to 'Edit', edit_agent_user_menu_path(agent_user_menu.agent_user_menus_id), { :class => "btn btn-warning me-2 btn-sm" } %>
                            <%= button_to "Destroy", agent_user_menu_path(agent_user_menu.agent_user_menus_id), method: :delete, :class => "btn btn-danger me-2 btn-sm" %>
                        <% end %> */}
                  {/* <button className="btn btn-warning me-2 btn-sm">Edit</button> */}
                  <Link
                    to="/agent_user_menus/edit"
                    className="btn btn-warning me-2 btn-sm"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger me-2 btn-sm">
                    Destroy
                  </button>
                </td>
              </tr>
              {/* <% end %> */}
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- Pagination --> */}
      <nav className="d-flex justify-content-center mt-4">
        {/* <%= paginate @agent_user_menus, class: "pagination justify-content-center" %> */}
        {/* <pagination className="pagination justify-content-center"></pagination> */}
      </nav>
    </div>
  );
};
