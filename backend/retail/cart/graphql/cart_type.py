import graphene
from cart.models import Cart
from cart.graphql.cart_item_type import CartItemType
from graphene_django import DjangoObjectType

class CartType(DjangoObjectType):
    class Meta:
        model = Cart
        fields = ("id", "last_activity_at", "cart_items",)
