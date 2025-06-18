from graphene_django import DjangoObjectType
from product.models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "name", "barcode", "type")
