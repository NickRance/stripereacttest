import stripe

stripe.api_key = "sk_test_AnpTiCtv8xDgbDd4V0dOwOqZ"

def createSubscription(self, token):
    return stripe.Subscription.create(
        customer="cus_4fdAW5ftNQow1a",
        items=[
            {
                "plan": "basic-monthly",
            },
        ],
    )

def subscribe(custID):
    return stripe.Subscription.create(
        customer=custID,
        items=[
        {
          "plan": "basic-monthly",
        },
        ],
)

def chargeCard(tokenID):
    charge = stripe.Charge.create(
        amount=2500,
        currency="usd",
        description="Example charge",
        source=tokenID,
    )
    return charge