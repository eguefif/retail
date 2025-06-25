import graphene

from cart.models import Cart
from product.graphql.product_query import ProductsQueries
from cart.graphql.cart_query import CartQueries
from cart.graphql.cart_mutations import CartMutations

from cart.graphql.cart_type import CartType

class ViewerQueries(graphene.ObjectType):
    viewer = graphene.Field(CartType)

    def resolve_viewer(root, info):
        session_key = info.context.session.session_key
        if not session_key:
            info.context.session.create()
            session_key = info.context.session.session_key
        (cart, _) = Cart.objects.get_or_create(session_key=session_key)
        return cart


class Query(ProductsQueries,
            CartQueries,
            ViewerQueries,
            graphene.ObjectType):
    pass

class Mutation(CartMutations, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
