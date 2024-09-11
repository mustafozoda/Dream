cart = [
    {"name": "Laptop", "price": 1000, "quantity": 1, "available": True},
    {"name": "Headphones", "price": 100, "quantity": 2, "available": False},
    {"name": "Mouse", "price": 50, "quantity": 1, "available": True},
    {"name": "Keyboard", "price": 75, "quantity": 1, "available": True},
]

total_cost = 0
discount_threshold = 200

print("Processing your shopping cart:\n")

for item in cart:
    if not item["available"]:
        print(f"Sorry, {item['name']} is out of stock. Skipping.")
        continue  # Skip out-of-stock items

    item_total = item["price"] * item["quantity"]

    # Apply discount if item total exceeds threshold
    if item_total > discount_threshold:
        item_total *= 0.9  # 10% discount
        print(f"Discount applied to {item['name']}!")

    total_cost += item_total

    print(f"Added {item['name']} (x{item['quantity']
                                    }) to the cart. Total so far: ${total_cost:.2f}")

else:
    # If no break occurs, loop finishes, and we calculate final total
    print("\nAll items processed.")
    print(f"Total cost of your cart is: ${total_cost:.2f}")
