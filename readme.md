## Gym Store Software Backend Development

### Tasks:

1. **User Registration and Profile Management**
   - Implement user registration functionality, including fields for name, last_name, username (unique), email (unique), password, validated (default false), created_at, updated_at, validate_at(nullable).
   - Develop an API endpoint for user profile updates.
   - Create an API endpoint for user registration.

2. **Email Validation**
   - Set up email validation using SMTP to confirm the email's legitimacy.
   - Create an HTML email template with custom styles for validation purposes.
   - Develop an API endpoint for email validation.
   - Prevent user login until their email is validated.

3. **Role-Based Authentication**
   - Implement role-based authentication with two roles: "User" and "Administrator."
   - Normal users can only purchase products and view their purchase history.
   - Administrators can add and update products.

4. **Database Management**
   - Utilize a MySQL relational database for storing user data.
   - Create a table to manage gym store products, including fields for:
     - Product ID (Primary Key)
     - Product Name
     - Description
     - Price
     - Stock

   - Implement a shopping cart for each user, allowing users to add and remove items.
   - Develop a transaction process for users to complete their purchases, updating product stock accordingly.

5. **Product Management**
   - Create API endpoints to:
     - Add new products (for administrators only), including validation for admin role.
     - Update product details (for administrators only).
     - List all available products.

6. **Purchase History**
   - Create an API endpoint for users to review their past purchases, including details of purchased items and transaction history.
   - Send a confirmation email to users when a purchase is completed, showing the list of items bought.

7. **Deliverables**
   - Fully functional backend code that includes user registration, profile management, email validation, role-based authentication, database management, purchase history, and product management.
   - API documentation using Swagger for clear and accessible documentation of all endpoints.