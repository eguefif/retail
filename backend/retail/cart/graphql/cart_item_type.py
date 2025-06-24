import graphene
from graphene_django import DjangoObjectType
from cart.models import CartItem
from product.graphql.product_type import ProductType

class CartItemType(DjangoObjectType):
    class Meta:
        model = CartItem
        fields = ('id', 'product', 'quantity')
