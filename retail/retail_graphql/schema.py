import graphene

from product.graphql.product_query import ProductsQueries


class Query(ProductsQueries, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
