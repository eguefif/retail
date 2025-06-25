import graphene
from cart.models import Cart, CartItem
from cart.graphql.cart_type import CartItemType
from product.models import Product


class AddItemMutation(graphene.Mutation):
    class Arguments:
        productId = graphene.ID(required=True)

    success = graphene.Boolean()
    item = graphene.Field(CartItemType)

    def mutate(root, info, productId):
        session_key = info.context.session.session_key
        if not session_key:
            info.context.session.create()
            session_key = info.context.session.session_key
        cart = Cart.objects.get_or_create(session_key=session_key)[0]
        try:
            product = Product.objects.get(id=productId)
        except Product.DoesNotExist:
            return AddItemMutation(success=False, item=None)
        item = CartItem.objects.create(cart=cart, product=product)
        return AddItemMutation(success=True, item=item)


class CartMutations (graphene.ObjectType):
    add_item = AddItemMutation.Field()
