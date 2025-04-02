import React from "react";
import { Link } from "react-router-dom";

export default New = () => {
    return(
        <div class="container nifty-container mt-3">
            <div class="row justify-content-center">
                <div class="col-md-4">
                {/* <% if notice.present? %> */}
                    <div class="alert alert-primary d-flex align-items-center m-2" role="alert">
                        {/* <p class="mb-0 text-center text-success"><%= notice %></p> */}
                        <p class="mb-0 text-center text-success">Placeholder: Notice</p>
                    </div>
                {/* <% end %> */}
                <div class="card m-2">
                    <div class="card-header bg-primary text-white">
                    <h4 class="mb-0 text-white" id="card-title">New Agent User Menu</h4>
                    </div>
                    <div class="card-body">
                    {/* <%= form_for(@agent_user_menu) do |f| %>
                        <% if @agent_user_menu.errors.present? %>
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <h4 class="alert-heading">
                                <%= pluralize(@agent_user_menu.errors.count, "error") %> prevented this request from being saved:
                                </h4>
                                <ul class="mb-0">
                                <% @agent_user_menu.errors.full_messages.each do |message| %>
                                    <li><%= message %></li>
                                    <li>Message</li>
                                 <% end %> 
                                </ul>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        <% end %> */}

                        {/* <!-- Datalist for Menu ID suggestions --> */}
                        <datalist id="menu"></datalist>
                        <datalist id="agent"></datalist>

                        <h5 class="mb-3 border-bottom pb-2">Agent User Menu Details</h5>

                        {/* <!-- Menu ID Field --> */}
                        <div class="form-group mb-3">
                            {/* <%= f.label :agent_menu_id, "Menu ID" %> */}
                            <label>Menu ID</label>
                            <div class="input-group">
                            <span class="input-group-text">
                            <i class="pli-notepad"></i>
                            </span>
                            {/* <%= f.text_field :agent_menu_id, tabindex: 1, class: "form-control", list: "menu", :autocomplete => false, :required => true %> */}
                            <input className="form-control" tabIndex={1} list="menu" autoComplete={false} required/>
                            </div>
                        </div>

                        {/* <!-- Agent ID Field --> */}
                        <div class="form-group mb-3">
                            {/* <%= f.label :agent_id, "Agent ID" %> */}
                            <div class="input-group">
                            <span class="input-group-text">
                            <i class="pli-male-2"></i>
                            </span>
                            {/* <%= f.text_field :agent_id, tabindex: 1, class: "form-control", list: "agent", :autocomplete => false, :required => true %> */}
                            <input className="form-control" tabIndex={1} list="agent" autoComplete={false} required/>
                            </div>
                        </div>

                        {/* <!-- Grant Access Field (Hidden Fields with checkboxes for display) --> */}
                        <div class="form-group mb-3">
                            {/* <%= f.label :agent_menu_id, "Grant Access" %> */}
                            <label>Grant Access</label>
                            <div class="input-group">
                            {/* <!--<#%= f.hidden_field :user_create, tabindex: 1, class: "form-control" %>--> */}
                            {/* <!--<#%= f.hidden_field :user_read, tabindex: 1, class: "form-control" %>--> */}
                            {/* <!--<#%= f.hidden_field :user_update, tabindex: 1, class: "form-control" %>--> */}
                            {/* <!--<#%= f.hidden_field :user_delete, tabindex: 1, class: "form-control" %>--> */}
                            {/* <!--<#%= f.hidden_field :user_print, tabindex: 1, class: "form-control" %>--> */}

                            <div class="col-sm-9 py-2 ms-2">
                                <div class="form-check mb-2">
                                {/* <%= f.check_box :user_create, { class: 'form-check-input' }, 1, 0 %> */}
                                {/* <%= f.label :user_create, 'User Create', class: "form-check-label" %> */}
                                <label>User Create</label>
                                <input className="form-check-input" />
                                </div>
                                <div class="form-check mb-2">
                                {/* <%= f.check_box :user_read, { class: 'form-check-input' }, 1, 0 %> */}
                                {/* <%= f.label :user_read, 'User Read', class: "form-check-label"  %> */}
                                <label>User Read</label>
                                <input className="form-check-input" />
                                </div>
                                <div class="form-check mb-2">
                                {/* <%= f.check_box :user_update, { class: 'form-check-input' }, 1, 0 %> */}
                                {/* <%= f.label :user_update, 'User Update', class: "form-check-label"  %> */}
                                <label>User Update</label>
                                <input className="form-check-input" />
                                </div>
                                <div class="form-check mb-2">
                                {/* <%= f.check_box :user_delete, { class: 'form-check-input' }, 1, 0 %> */}
                                {/* <%= f.label :user_delete, 'User Delete', class: "form-check-label"  %> */}
                                <label>User Delete</label>
                                <input className="form-check-input" />
                                </div>
                                <div class="form-check mb-2">
                                {/* <%= f.check_box :user_print, { class: 'form-check-input' }, 1, 0 %> */}
                                {/* <%= f.label :user_print, 'User Print', class: "form-check-label"  %> */}
                                <label>User Print</label>
                                <input className="form-check-input" />
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* <!-- Form Buttons --> */}
                        <div class="d-flex justify-content-between">
                            {/* <%= link_to "Back", agent_user_menus_path, class: "btn btn-secondary" %> */}
                            {/* <%= f.submit "Save Agent User Menu", class: "btn btn-success" %> */}
                            <Link to="/agent_user_menus" className="btn btn-secondary">Back</Link>
                            <Link className="btn btn-success">Save</Link>
                        </div>
                    {/* <% end %> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}