from django.db import models

# Create your models here.
from products.models import Product

class Order(models.Model):
    products = models.ManyToManyField(Product)
    created_at = models.DateTimeField(auto_now_add=True)