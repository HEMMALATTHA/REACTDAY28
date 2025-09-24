from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from products.models import Product

class OrderCreateAPIView(APIView):
    def post(self, request):
        cart_data = request.data.get('cart', [])
        order = Order.objects.create()
        for item in cart_data:
            product = Product.objects.get(id=item['id'])
            order.products.add(product)
        return Response({"message": "Order placed successfully"}, status=status.HTTP_201_CREATED)
