import graphene
from cart.models import Cart, CartItem
from cart.graphql.cart_type import CartItemType
from product.models import Product


class AddItemMutation(graphene.Mutation):
    class Arguments:
        product_id = graphene.ID(required=True)

    success = graphene.Boolean()
    item = graphene.Field(CartItemType)

    def mutate(root, info, product_id):
        session_key = info.context.session.session_key
        if not session_key:
            raise ValueError("Session key is required")
        cart = Cart.objects.get_or_create(session_key=session_key)[0]
        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return AddItemMutation(success=False, item=None)
        item = CartItem.objects.create(cart=cart, product=product)
        return AddItemMutation(success=True, item=item)

class RemoveItemMutation(graphene.Mutation):
    class Arguments:
        product_id = graphene.ID(required=True)

    success = graphene.Boolean()

    def mutate(root, info, product_id):
        session_key = info.context.session.session_key
        if not session_key:
            raise ValueError("Session key is required")

        cart = Cart.objects.get(session_key=session_key)
        item = CartItem.objects.filter(cart=cart, product_id=product_id).order_by('created_at').last()
        if not item:
            return RemoveItemMutation(success=False)
        item.delete()
        return RemoveItemMutation(success=True)


class CartMutations (graphene.ObjectType):
    add_item = AddItemMutation.Field()
    remove_item = RemoveItemMutation.Field()
