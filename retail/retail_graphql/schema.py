import graphene


class Query(ProductsQueries, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
