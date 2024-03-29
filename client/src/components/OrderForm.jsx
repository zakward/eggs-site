import React from 'react';

function OrderForm() {
    return ( 
        <div class="order-form">
         <h3>ORDER FORM</h3>   
        <form>
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="quantity">Quantity (dozen):</label>
                <input type="number" id="quantity" name="quantity" required />
            </div>
            <button type="submit">Submit Order</button>
        </form>
    </div>
    
     );
}

export default OrderForm;