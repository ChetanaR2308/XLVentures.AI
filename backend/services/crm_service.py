import json

def get_customer(customer_name):

    with open("database/crm.json", "r") as file:
        customers = json.load(file)

    for customer in customers:
        if customer["customer"] == customer_name:
            return customer

    return None