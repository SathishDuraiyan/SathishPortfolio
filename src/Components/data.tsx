export type ProjectCardProps = {
  name: string;
  lang: string[];
  desc: string;
  id: string;
};

export type ProjectPageProps = {
  name: string;
  lang: string[];
  desc: string;
  data: string;
};

export const Project_List = [
  {
    id: "0",
    name: "JSW-OHC",
    lang: ["Python", "Streamlit"],
    desc: "The JSW-OHC Team Project is an initiative aimed at streamlining and optimizing the Occupational Health Center (OHC) management system for JSW (Jindal Steel Works). This project focuses on developing a digital solution to enhance medical record-keeping, employee health tracking, and operational efficiency within the OHC framework.",
    data: `

> This is a **private project** built for **JSW Occupational Health Center** 🚑.  

## 📌 Key Features  
### 🏥 **Dashboard Overview**  
- **📊 Health Analytics** – Displays footfalls, healthy/unhealthy entries, and appointments.  
- **📅 Date Range Filter** – Track health records between specific dates.  
- **📂 Categorization** – Employees marked as *Healthy* or *Unhealthy*.  

### 📖 **Ledger Management**  
- **📜 Medical Records** – Store, manage, and review past medical history.  
- **📑 Document Upload** – Allows medical reports to be stored securely.  

### 🎯 **Events & Camps**  
- **🏕 Health Camps** – Organize medical check-ups and vaccination drives.  
- **🩺 Periodic Health Checks** – Monitor employee wellness regularly.  

### 🔍 **Advanced Search & Filtering**  
- **🔎 Search by Patient ID** – Quick lookup of employee health details.  
- **📌 Record Filters** – Categorized filtering for better data management.  

### 📅 **Appointment Scheduling**  
- **🗓 Doctor & Nurse Appointments** – Easy appointment booking.  
- **🔔 Automated Notifications** – Alerts for upcoming medical check-ups.  

### 🚨 **Emergency & Mock Drills**  
- **🦺 Emergency Response** – Rapid logging of emergency health incidents.  
- **🎭 Mock Drill Records** – Track employee participation in drills.  

### 🛡 **Security & Access Control**  
- **🔐 Role-Based Access** – Different views for **Doctors, Nurses, and HR Teams**.  
- **🛠 Settings Management** – Configure system preferences and user permissions.  

### 🏢 **Visitor Management**  
- **📝 Visitor Logs** – Maintain records of external visitors for security.  

## ScreenShot

![img](/login.png)
![img](/dashboard.png)
![img](/investigations.png)



        `,
  },
  {
    id: "1",
    name: "Spring Boot E-Commerce Website",
    lang: ["Java", "Spring Boot", "MySQL"],
    desc: " This project is an experimental full-stack application designed to learn and implement Spring Boot concepts along with React and MySQL. The main goal was to build a feature-rich E-commerce platform where users can browse, search, add products to the cart, and complete purchases.",
    data: `
         
> This is an **experimental project** built to explore **Spring Boot and routing concepts using Java**.

## 📌 Key Features & Functionalities  

### 🏠 Home Page & Product Showcase  
- Displays products in a **card-style layout** with an **image, name, price, and category**.  
- Clicking on a product card opens a **detailed product page**, showing:  
  - **Product Description**  
  - **Category & Specifications**  
  - **Price & Stock Availability**  

### 🛒 Shopping Cart & Purchase Management  
- **Add to Cart Feature**:  
  - Users can add items to the cart, increasing the quantity dynamically.  
  - The cart updates **total price** based on item count.  
- **Remove & Update Cart Items**:  
  - Users can **increase/decrease item quantity** or remove products from the cart.  
- **Checkout & Purchase Flow**:  
  - Once an order is placed, **cart items are cleared**, and the purchase details are recorded.  

### 🔍 Search Functionality  
- **Keyword-based Search**: Users can search for products using **partial or full names**.  
- **SQL Query Optimization**: Implemented a query manager to efficiently fetch relevant results.  

### 🛠 Product Management (Admin Panel)  
- **CRUD Operations**:  
  - **Create**: Admins can **add new products** with details.  
  - **Read**: Fetch and display product lists.  
  - **Update**: Modify existing product details (price, description, stock).  
  - **Delete**: Remove unwanted products.  

---

## 💾 Technology Stack  

### **Backend (Spring Boot - Java)**  
- **Spring Boot** (REST APIs for handling business logic)  
- **Spring Data JPA** (ORM for MySQL integration)
- **Lombok** (for reducing boilerplate code)  

### **Frontend (React - JavaScript)**  
- **React.js** (Component-based UI rendering)  
- **React Router** (Navigation between pages)  
- **TailwindCSS / Bootstrap** (for styling)  

![img](/pg-2.png)
![img](/pg-1.png)
![img](/pg-3.png)

        `,
  },
];
