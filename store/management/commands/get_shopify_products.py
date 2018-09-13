from django.core.management.base import BaseCommand, CommandError
from store.models import Product, ShopifyProduct, ShopifyProductManager
import shopify, requests
from googleapiclient.discovery import build
import Scripts
from .amazon_product_crawl import ReadAsin
from decimal import Decimal

def shopify_products():
    """
        Gets json format of all products I have in shopify products
    """
    resp = requests.get(
    'https://46c6b013e6bb08b00d49f901ff8537f1:c02b78aa5c25a0a95fec61e278c6e594@shoprcgadgets.myshopify.com/admin/products.json')

    return resp.json()


class Command(BaseCommand):
    help='Get shopify products from shopfify site to compare prices and decide to add to site'

    def handle(self, *args, **options):
        products_json = shopify_products()
        for product in products_json['products']:
            name = product['title']
            description = product['body_html']
            oberlo_price = float(product['variants'][0]['price'])
            oberlo_url = product['id']
            try:
                print("tryin")
                t = ShopifyProduct.objects.create(
                    name=name, description=description, oberlo_price=oberlo_price,
                )
                t.save()
                print(t)
            except Exception as e:
                print(e)
        print("success")
