import graphene

from product.graphql.product_query import ProductsQueries
from cart.graphql.cart_query import CartQueries

from cart.graphql.cart_type import CartType

class ViewerQueries(graphene.ObjectType):
    cart = graphene.Field(CartType)

    def resolve_viewer(root, info):
        session_key = info.context.session.session_key
        if not session_key:
            info.context.session.create()
        (cart, result) = CartType.objects.get_or_create(session_key=session_key)
        return cart


class Query(ProductsQueries,
            CartQueries,
            ViewerQueries,
            graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
