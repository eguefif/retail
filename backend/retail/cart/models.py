from django.db import models
from product.models import Product

#class Cart(models.Model):
class Cart(models.Model):
    session_key = models.CharField(default='')
    last_activity_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class CartItem(models.Model):
    class ItemState(models.TextChoices):
        IN_CART = 'IN_CART', 'In Cart'
        PENDING = 'PENDING', ' Paiement pending'
        CHECKED_OUT = 'CHECKED_OUT', 'Checked Out'

    cart = models.ForeignKey(Cart, related_name="cart_items", on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name="product",on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    state = models.CharField(max_length=20, choices=ItemState.choices, default=ItemState.IN_CART)
