from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _


class Product(models.Model):
    class ProductType(models.TextChoices):
        SHOE = "SHOES", _("shoes")

    name = models.CharField(max_length=150)
    barcode = models.BigIntegerField()
    description = models.TextField()
    sku = models.IntegerField(validators=[MinValueValidator(0)])
    type = models.CharField(
        max_length=20, choices=ProductType, default=ProductType.SHOE
    )
