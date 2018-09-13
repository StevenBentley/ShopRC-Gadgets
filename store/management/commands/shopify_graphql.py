import requests
from django.core.management.base import BaseCommand, CommandError
from api.models import Product

class Command(BaseCommand):
    help = 'Shopify storefront api graphql request'

    def handle(self, *args, **options):
        url = 'https://shoprcgadgets.myshopify.com/api/graphql'

        headers = {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': '835c28663e14a243352dbd249266770e'
        }

        query = """
              query {
        shop {
          name
          description
          products(first:20) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                options {
                  name
                  values
                }
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      title
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                      }
                      price
                    }
                  }
                }
                images(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
      """
        response = requests.post(url=url, headers=headers, data=query)
        data = response.json()['data']['shop']['products']['edges']
        for i in range(len(data)):
            print(data[i]['node']['id'])
            print(data[i]['node']['title'])
            print(data[i]['node']['variants']['edges'][0]['node']['image'])
            print(data[i]['node']['variants']['edges'][0]['node']['price'])
            print('\n')
            Product.objects.create(\
                id=data[i]['node']['id'],
                name=data[i]['node']['title'],
                img_src=data[i]['node']['variants']['edges'][0]['node']['image'],
                oberlo_price=data[i]['node']['variants']['edges'][0]['node']['price']
            )
