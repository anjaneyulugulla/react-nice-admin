import React from "react";

const SideBar = () => {
    return(
        <div>
            <aside id="sidebar" class="sidebar">
                <ul class="sidebar-nav" id="sidebar-nav">
                    <li class="nav-item">
                        <a class="nav-link " href="/dashboard">
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-heading">Admin</li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/admin">
                            <i class="bi bi-people-fill"></i>
                            <span>Admin</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/change-password">
                            <i class="bi bi-unlock"></i>
                            <span>Change Password</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/contact">
                            <i class="bi bi-envelope"></i>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/social_media">
                            <i class="bi bi-card-list"></i>
                            <span>Social Media</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/settings">
                            <i class="bi bi-gear"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="/logout">
                            <i class="bi bi-box-arrow-in-right"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
};

export default SideBar;