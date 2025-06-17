import graphene

from product.graphql.product_type import ProductType


class ProductQueries(graphene.ObjectType):
    products = graphene.List(ProductType)

    def resolve_products(root, info, user_id):
        return ProductType.objects.filter(user=user_id)
