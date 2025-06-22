# Cart and Inventory

This document describe how we manage cart and inventory.

## The goal
We want to allow a user to add items to a cart. These item will be locked for a certain time. When the user checkout out and pay, the item is subtracted from the product SKU. If the user is inactive for 20 minutes, all items are replaced in the shop.

# Design reflection
The cart is a model in the backend. Every user has one cart. Every guest has a cart. We associate some kind of a session id.
here is the Cart model

Product:
* Id
* name
* Description
* Barcode
* Type
* SKU

Cart:
* Id
* user
* session_id
* last_activity_at

CartItem:
* ID
* cart
* product
* Paiement
* added_at
* state

When a user sign in to the platform, they get a permanent cart. If it is a guest, we create a temporary cart. This cart is removed after 20 minutes of inactivity along with all the CartItems it has.

When a user add a product in their cart, we create a CardItem. This CartItem is removed after 20 minutes of inactivity.

The CartItem is a state machine with the following states:
* InCart
* Pending paiement
* Paid

The SKU in the product table keep the current count of item for a product. Anytime a user add an item to their cart, we create a CardItem. When a user wants to pay. At the moment they start the paiement call, the CartItems are passed to pending paiement. If the paiement came throug, we update to state to paid and it is not showed anymore and we decrease the product SKU.

To check the product availability, we subtract to the sku the number of InCartItem that are Pending and Incart.
