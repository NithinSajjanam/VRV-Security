// Sample Data
const users = [
    { name: "John Doe", role: "Admin", status: "Active" },
    { name: "Jane Smith", role: "Viewer", status: "Inactive" }
  ];
  
  const roles = [
    { role: "Admin", permissions: ["Read", "Write", "Delete"] },
    { role: "Viewer", permissions: ["Read"] }
  ];
  
  // Display Section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Populate User Table
  function loadUsers() {
    const userTable = document.getElementById("userTable");
    userTable.innerHTML = "";
    users.forEach((user, index) => {
      const row = `<tr>
        <td>${user.name}</td>
        <td>${user.role}</td>
        <td>${user.status}</td>
        <td>
          <button onclick="editUser(${index})">Edit</button>
          <button onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>`;
      userTable.innerHTML += row;
    });
  }
  
  // Populate Role Table
  function loadRoles() {
    const roleTable = document.getElementById("roleTable");
    roleTable.innerHTML = "";
    roles.forEach((role, index) => {
      const row = `<tr>
        <td>${role.role}</td>
        <td>${role.permissions.join(", ")}</td>
        <td>
          <button onclick="editRole(${index})">Edit</button>
          <button onclick="deleteRole(${index})">Delete</button>
        </td>
      </tr>`;
      roleTable.innerHTML += row;
    });
  }
  
  // Add User
  function addUser() {
    const name = prompt("Enter user name:");
    const role = prompt("Enter role:");
    const status = prompt("Enter status (Active/Inactive):");
    if (name && role && status) {
      users.push({ name, role, status });
      loadUsers();
    }
  }
  
  // Add Role
  function addRole() {
    const role = prompt("Enter role name:");
    const permissions = prompt("Enter permissions (comma-separated):").split(",");
    if (role && permissions.length) {
      roles.push({ role, permissions });
      loadRoles();
    }
  }
  
  // Edit/Delete User
  function editUser(index) {
    const user = users[index];
    const name = prompt("Edit name:", user.name);
    const role = prompt("Edit role:", user.role);
    const status = prompt("Edit status:", user.status);
    if (name && role && status) {
      users[index] = { name, role, status };
      loadUsers();
    }
  }
  
  function deleteUser(index) {
    users.splice(index, 1);
    loadUsers();
  }
  
  // Edit/Delete Role
  function editRole(index) {
    const role = roles[index];
    const roleName = prompt("Edit role name:", role.role);
    const permissions = prompt("Edit permissions (comma-separated):", role.permissions.join(",")).split(",");
    if (roleName && permissions.length) {
      roles[index] = { role: roleName, permissions };
      loadRoles();
    }
  }
  
  function deleteRole(index) {
    roles.splice(index, 1);
    loadRoles();
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    loadUsers();
    loadRoles();
    showSection("users");
  });
  