import stripe

stripe.api_key = "sk_test_AnpTiCtv8xDgbDd4V0dOwOqZ"

# plan = stripe.Plan.create(
#   name="Basic Plan",
#   id="basic-monthly",
#   interval="month",
#   currency="usd",
#   amount=2500,
# )
#
customer = stripe.Customer.create(
  email="nicholas.rance@gmail.com"
)
print(customer)