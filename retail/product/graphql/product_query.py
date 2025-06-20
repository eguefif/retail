import graphene

from product.graphql.product_type import ProductType
from product.models import Product


class ProductsQueries(graphene.ObjectType):
    products = graphene.List(ProductType)

    def resolve_products(root, info):
        return Product.objects.all()
