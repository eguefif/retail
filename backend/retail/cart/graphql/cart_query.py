import graphene
from cart.models import Cart
from cart.graphql.cart_type import CartType

class CartQueries(graphene.ObjectType):
    cart_by_id = graphene.Field(CartType, id=graphene.ID(required=True))

    def resolve_cart_by_id(root, info, id):
        try:
            return Cart.objects.get(id=id)
        except Cart.DoesNotExist:
            return None
