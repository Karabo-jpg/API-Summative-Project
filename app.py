import requests
from flask import Flask, render_template, request

app = Flask(__name__)

# Exchange API Key
API_KEY = 'a50b17f0188e75134635a484'
URL = f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/USD"

# Define a list of currencies (include UGX, KES, and RWF)
CURRENCIES = ['USD', 'EUR', 'KES', 'UGX', 'RWF', 'GBP', 'CAD', 'JPY', 'AUD']

@app.route('/')
def index():
    return render_template('index.html', currencies=CURRENCIES)

@app.route('/convert', methods=['POST'])
def convert():
    amount = float(request.form['amount'])
    from_currency = request.form['from_currency']
    to_currency = request.form['to_currency']
    
    # Get the exchange rates
    response = requests.get(URL)
    data = response.json()

    if data['result'] == 'success':
        # Get the rate for the "from_currency" and "to_currency"
        from_rate = data['conversion_rates'].get(from_currency, 1)
        to_rate = data['conversion_rates'].get(to_currency, 1)
        
        # Perform conversion
        amount_in_usd = amount / from_rate
        converted_amount = amount_in_usd * to_rate

        return render_template('index.html', converted_amount=converted_amount, currencies=CURRENCIES, amount=amount, from_currency=from_currency, to_currency=to_currency)
    else:
        return render_template('index.html', error="Failed to retrieve exchange rates.", currencies=CURRENCIES)

if __name__ == '__main__':
    app.run(debug=True)
